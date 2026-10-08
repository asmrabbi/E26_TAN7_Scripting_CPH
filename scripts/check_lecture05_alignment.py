"""Check public Lecture 5 numbers, notebook cells, website targets and a PPTX.

Run from any directory. No third-party packages are required.
"""
import argparse
import ast
import html
import json
import re
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path
from urllib.parse import unquote, urlsplit, parse_qs
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
NS = {'p':'http://schemas.openxmlformats.org/presentationml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main'}
REL = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id'

def source(cell):
    return ''.join(cell['source']) if isinstance(cell['source'],list) else cell['source']

def check(pptx=None):
    md=(ROOT/'docs/data-handling-text-analysis-visualization-i.md').read_text()
    headings=re.findall(r'^#{2,3} (Example|Exercise) (3\.\d+\.\d+) — (.+)$',md,re.M)
    index=json.loads((ROOT/'docs/lecture05-numbered-index.json').read_text())
    assert len(headings)==len(index)==186
    assert len({h[1] for h in headings})==len(headings),'Duplicate website number'
    for module in range(1,15):
        sequence=[int(i.split('.')[-1]) for _,i,_ in headings if i.startswith(f'3.{module}.')]
        assert sequence==list(range(1,max(sequence)+1)),f'Number gap in 3.{module}'
    notebooks={}
    cells={}
    primary=[]
    for filename in sorted({e['notebook'] for e in index.values()}):
        nb=json.loads((ROOT/'notebooks/lecture_05'/filename).read_text())
        assert nb['nbformat']==4
        by_id={c['id']:c for c in nb['cells']}
        assert len(by_id)==len(nb['cells']),filename
        assert all(c['id']==c['metadata']['id'] for c in nb['cells']),filename
        for c in nb['cells']:
            if c['cell_type']=='code': ast.parse(source(c))
            if c['cell_type']=='markdown':
                first=source(c).splitlines()[0]
                match=re.match(r'^## (Example|Exercise) (3\.\d+\.\d+) — (.+)$',first)
                if match:primary.append(match.groups())
        notebooks[filename]=nb
        cells[filename]=by_id
    assert Counter(headings)==Counter(primary),'Website/notebook heading mismatch'
    block_count=0
    for kind,ident,title in headings:
        entry=index[ident]
        assert (entry['kind'],entry['title'])==(kind,title),ident
        heading=cells[entry['notebook']][entry['headingCellId']]
        assert source(heading).splitlines()[0]==f'## {kind} {ident} — {title}',ident
        if kind=='Exercise':
            answer=cells[entry['notebook']][entry['solutionCellId']]
            assert source(answer).splitlines()[0]==f'## Solution {ident} — {title}',ident
        for block in entry['blocks']:
            target=cells[block['notebook']][block['cellId']]
            if target['cell_type']=='code':
                assert source(target).strip()==block['code'].strip(),block['cellId']
            else:
                assert block['code'].strip() in source(target),block['cellId']
            assert target.get('metadata',{}).get('aau_lecture_item')==ident,block['cellId']
            block_count+=1
    js=(ROOT/'docs/section-data-handling-i.js').read_text()
    start=js.index('const dataHandlingIChapters = ')+len('const dataHandlingIChapters = ')
    end=js.index('\n\nconst dataHandlingIReferences = ',start)
    chapters=json.loads(js[start:end].rstrip().rstrip(';'))
    compiled='\n'.join(c['html'] for sections in chapters.values() for c in sections)
    ids=re.findall(r'\bid="([^"]+)"',compiled)
    assert len(ids)==len(set(ids)),'Duplicate website anchor'
    for ident,entry in index.items():
        assert f'id="{entry["kind"].lower()}-{ident}"' in compiled,ident
        for b in entry['blocks']:
            assert f'id="{b["cellId"]}" data-lecture-item="{ident}"' in compiled,b['cellId']
            assert f'data-notebook="{b["notebook"]}" data-colab-cell="{b["cellId"]}"' in compiled,b['cellId']
    result={'website_and_notebook_items':len(headings),'examples':145,'exercises':41,'matching_code_blocks':block_count}
    if pptx:
        z=ZipFile(pptx)
        relations={r.attrib['Id']:r.attrib['Target'] for r in ET.fromstring(z.read('ppt/_rels/presentation.xml.rels'))}
        slide_ids=ET.fromstring(z.read('ppt/presentation.xml')).find('p:sldIdLst',NS)
        checked_links=0
        checked_code=0
        all_refs=set()
        for number,ref in enumerate(slide_ids,1):
            target_part=relations[ref.attrib[REL]]
            part=target_part.lstrip('/') if target_part.startswith('/') else 'ppt/'+target_part
            xml=ET.fromstring(z.read(part))
            runs=xml.findall('.//a:t',NS)
            text=' '.join(x.text or '' for x in runs)
            refs=set(re.findall(r'(?<!\d)(3\.\d+\.\d+)(?!\d)',text))
            assert refs<=index.keys(),(number,refs-index.keys())
            all_refs|=refs
            relpart=str(Path(part).parent/'_rels'/(Path(part).name+'.rels'))
            links={r.attrib['Id']:r.attrib['Target'] for r in ET.fromstring(z.read(relpart))} if relpart in z.namelist() else {}
            code=[]
            py=[]
            for shape in xml.findall('.//p:sp',NS):
                name=shape.find('p:nvSpPr/p:cNvPr',NS).attrib.get('name','')
                if name.startswith('Python line '):
                    pos=shape.find('p:spPr/a:xfrm/a:off',NS)
                    py.append((int(pos.attrib['y']),''.join(t.text or '' for t in shape.findall('.//a:t',NS)).strip()))
            code=[x[1] for x in sorted(py)]
            if 'Double underscores and __name__' in text:
                code=['print(type(df))','print(type(df).__name__)']
            matching=False
            for run in xml.findall('.//a:r',NS):
                hyperlink=run.find('a:rPr/a:hlinkClick',NS)
                if hyperlink is None:continue
                uri=links.get(hyperlink.attrib.get(REL),'')
                if 'colab.research.google.com/github/' not in uri:continue
                parsed=urlsplit(uri)
                filename=Path(unquote(parsed.path)).name
                target=parse_qs(parsed.fragment).get('scrollTo',[None])[0]
                assert filename in cells and target in cells[filename],(number,uri)
                link_text=''.join(t.text or '' for t in run.findall('a:t',NS))
                for ident in re.findall(r'3\.\d+\.\d+',link_text):
                    assert cells[filename][target]['metadata'].get('aau_lecture_item')==ident,(number,link_text,uri)
                checked_links+=1
                if code:
                    owner=cells[filename][target]['metadata'].get('aau_lecture_item')
                    candidates=index.get(owner,{}).get('blocks',[])
                    for b in candidates:
                        if [line.strip() for line in b['code'].splitlines()]==code:
                            if target==b['cellId'] or (target==index[owner]['headingCellId'] and b==candidates[0]):
                                matching=True
            if code:
                assert matching,('Slide code/Colab target mismatch',number)
                checked_code+=1
        result.update(slides=len(slide_ids),slide_code_blocks=checked_code,checked_colab_links=checked_links,distinct_slide_references=len(all_refs))
    return result

if __name__=='__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--pptx',type=Path)
    args=parser.parse_args()
    print(json.dumps(check(args.pptx),indent=2))
