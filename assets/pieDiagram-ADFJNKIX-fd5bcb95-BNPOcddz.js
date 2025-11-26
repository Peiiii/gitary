import{s as e}from"./rolldown-runtime-B6ubh40S.js";import{N as t,P as n,w as r}from"./chakra-ui-DL3iEWi3.js";import{k as i}from"./react-utils-C9u-5Qte.js";import{t as a}from"./vendor-Ddcx14uX.js";import"./common-utils-6spi2Ajg.js";import"./monaco-BOU7eshl.js";import"./react-markdown-CyVVEHR3.js";import"./remark-gfm-DTA0tSXW.js";import{Ft as o,G as s,Gt as c,Jn as l,Ot as u,Qn as d,Vt as f,Wn as p,Zn as m,_n as h,_t as g,ar as _,dn as v,hi as y,hn as b,j as x,ln as S,on as C,or as w,sr as T,st as E,vn as D}from"./app-HD19YyAJ.js";import"./_baseUniq-214847ec-gYkodkzP.js";import"./_basePickBy-f749536a-DMdLDBu1.js";import"./clone-8a8d8292-C4Vc3bpo.js";import{u as O}from"./mermaid-parser.core-ecfcb38d-DKXuiQp8.js";import{t as k}from"./chunk-4BX2VUAB-df729ba8-BCz9hHyH.js";import"./init-f9637058-sOw5pjF-.js";import{t as A}from"./ordinal-980380c7-gfD_-bEF.js";import{t as j}from"./arc-55eabd0f-C1rD0JE1.js";t(),n(),a(),r(),i(),T(),w(),y(),_();function M(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function N(e){return e}function P(){var e=N,t=M,n=null,r=c(0),i=c(v),a=c(0);function o(o){var s,c=(o=g(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(v,Math.max(-v,i.apply(this,arguments)-m)),_,y=Math.min(Math.abs(h)/c,a.apply(this,arguments)),b=y*(h<0?-1:1),x;for(s=0;s<c;++s)(x=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=x);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*b)/d:0;s<c;++s,m=_)l=f[s],x=p[l],_=m+(x>0?x*u:0)+b,p[l]={data:o[l],index:s,value:x,startAngle:m,endAngle:_,padAngle:y};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:c(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:c(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:c(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:c(+e),o):a},o}var F=s.pie,I={sections:new Map,showData:!1,config:F},L=I.sections,R=I.showData,z=structuredClone(F),B={getConfig:h(()=>structuredClone(z),`getConfig`),clear:h(()=>{L=new Map,R=I.showData,D()},`clear`),setDiagramTitle:p,getDiagramTitle:u,setAccTitle:o,getAccTitle:l,setAccDescription:m,getAccDescription:S,addSection:h(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);L.has(e)||(L.set(e,t),E.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:h(()=>L,`getSections`),setShowData:h(e=>{R=e},`setShowData`),getShowData:h(()=>R,`getShowData`)},V=h((e,t)=>{k(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),H={parse:h(async e=>{let t=await O(`pie`,e);E.debug(t),V(t,B)},`parse`)},U=h(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),W=h(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return P().value(e=>e.value)(n)},`createPieArcs`),G={parser:H,db:B,renderer:{draw:h((e,t,n,r)=>{E.debug(`rendering pie chart
`+e);let i=r.db,a=d(),o=b(i.getConfig(),a.pie),s=C(t),c=s.append(`g`);c.attr(`transform`,`translate(225,225)`);let{themeVariables:l}=a,[u]=f(l.pieOuterStrokeWidth);u??=2;let p=o.textPosition,m=j().innerRadius(0).outerRadius(185),h=j().innerRadius(185*p).outerRadius(185*p);c.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+u/2).attr(`class`,`pieOuterCircle`);let g=i.getSections(),_=W(g),v=[l.pie1,l.pie2,l.pie3,l.pie4,l.pie5,l.pie6,l.pie7,l.pie8,l.pie9,l.pie10,l.pie11,l.pie12],y=0;g.forEach(e=>{y+=e});let S=_.filter(e=>(e.data.value/y*100).toFixed(0)!==`0`),w=A(v);c.selectAll(`mySlices`).data(S).enter().append(`path`).attr(`d`,m).attr(`fill`,e=>w(e.data.label)).attr(`class`,`pieCircle`),c.selectAll(`mySlices`).data(S).enter().append(`text`).text(e=>(e.data.value/y*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+h.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),c.append(`text`).text(i.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let T=[...g.entries()].map(([e,t])=>({label:e,value:t})),D=c.selectAll(`.legend`).data(T).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*T.length/2;return`translate(216,`+(t*22-n)+`)`});D.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>w(e.label)).style(`stroke`,e=>w(e.label)),D.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>i.getShowData()?`${e.label} [${e.value}]`:e.label);let O=512+Math.max(...D.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));s.attr(`viewBox`,`0 0 ${O} 450`),x(s,450,O,o.useMaxWidth)},`draw`)},styles:U};export{G as diagram};