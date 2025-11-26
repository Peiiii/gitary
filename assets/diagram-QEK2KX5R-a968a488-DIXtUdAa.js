import{s as e}from"./rolldown-runtime-B6ubh40S.js";import{N as t,P as n,w as r}from"./chakra-ui-DL3iEWi3.js";import{k as i}from"./react-utils-C9u-5Qte.js";import{t as a}from"./vendor-Ddcx14uX.js";import"./common-utils-6spi2Ajg.js";import"./monaco-BOU7eshl.js";import"./react-markdown-CyVVEHR3.js";import"./remark-gfm-DTA0tSXW.js";import{Ct as o,Ft as s,G as c,Jn as l,Ot as u,Wn as d,Z as f,Zn as p,_n as m,ar as h,hi as g,hn as _,ln as v,on as y,or as b,sr as x,st as S,vn as C}from"./app-HD19YyAJ.js";import"./_baseUniq-214847ec-gYkodkzP.js";import"./_basePickBy-f749536a-DMdLDBu1.js";import"./clone-8a8d8292-C4Vc3bpo.js";import{u as w}from"./mermaid-parser.core-ecfcb38d-DKXuiQp8.js";import{t as T}from"./chunk-4BX2VUAB-df729ba8-BCz9hHyH.js";t(),n(),a(),r(),i(),x(),b(),g(),h();var E={showLegend:!0,ticks:5,max:null,min:0,graticule:`circle`},D={axes:[],curves:[],options:E},O=structuredClone(D),k=c.radar,A=m(()=>_({...k,...o().radar}),`getConfig`),j=m(()=>O.axes,`getAxes`),M=m(()=>O.curves,`getCurves`),N=m(()=>O.options,`getOptions`),P=m(e=>{O.axes=e.map(e=>({name:e.name,label:e.label??e.name}))},`setAxes`),F=m(e=>{O.curves=e.map(e=>({name:e.name,label:e.label??e.name,entries:I(e.entries)}))},`setCurves`),I=m(e=>{if(e[0].axis==null)return e.map(e=>e.value);let t=j();if(t.length===0)throw Error(`Axes must be populated before curves for reference entries`);return t.map(t=>{let n=e.find(e=>e.axis?.$refText===t.name);if(n===void 0)throw Error(`Missing entry for axis `+t.label);return n.value})},`computeCurveEntries`),L={getAxes:j,getCurves:M,getOptions:N,setAxes:P,setCurves:F,setOptions:m(e=>{let t=e.reduce((e,t)=>(e[t.name]=t,e),{});O.options={showLegend:t.showLegend?.value??E.showLegend,ticks:t.ticks?.value??E.ticks,max:t.max?.value??E.max,min:t.min?.value??E.min,graticule:t.graticule?.value??E.graticule}},`setOptions`),getConfig:A,clear:m(()=>{C(),O=structuredClone(D)},`clear`),setAccTitle:s,getAccTitle:l,setDiagramTitle:d,getDiagramTitle:u,getAccDescription:v,setAccDescription:p},R=m(e=>{T(e,L);let{axes:t,curves:n,options:r}=e;L.setAxes(t),L.setCurves(n),L.setOptions(r)},`populate`),z={parse:m(async e=>{let t=await w(`radar`,e);S.debug(t),R(t)},`parse`)},B=m((e,t,n,r)=>{let i=r.db,a=i.getAxes(),o=i.getCurves(),s=i.getOptions(),c=i.getConfig(),l=i.getDiagramTitle(),u=V(y(t),c),d=s.max??Math.max(...o.map(e=>Math.max(...e.entries))),f=s.min,p=Math.min(c.width,c.height)/2;H(u,a,p,s.ticks,s.graticule),U(u,a,p,c),W(u,a,o,f,d,s.graticule,c),q(u,o,s.showLegend,c),u.append(`text`).attr(`class`,`radarTitle`).text(l).attr(`x`,0).attr(`y`,-c.height/2-c.marginTop)},`draw`),V=m((e,t)=>{let n=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return e.attr(`viewbox`,`0 0 ${n} ${r}`).attr(`width`,n).attr(`height`,r),e.append(`g`).attr(`transform`,`translate(${i.x}, ${i.y})`)},`drawFrame`),H=m((e,t,n,r,i)=>{if(i===`circle`)for(let t=0;t<r;t++){let i=n*(t+1)/r;e.append(`circle`).attr(`r`,i).attr(`class`,`radarGraticule`)}else if(i===`polygon`){let i=t.length;for(let a=0;a<r;a++){let o=n*(a+1)/r,s=t.map((e,t)=>{let n=2*t*Math.PI/i-Math.PI/2;return`${o*Math.cos(n)},${o*Math.sin(n)}`}).join(` `);e.append(`polygon`).attr(`points`,s).attr(`class`,`radarGraticule`)}}},`drawGraticule`),U=m((e,t,n,r)=>{let i=t.length;for(let a=0;a<i;a++){let o=t[a].label,s=2*a*Math.PI/i-Math.PI/2;e.append(`line`).attr(`x1`,0).attr(`y1`,0).attr(`x2`,n*r.axisScaleFactor*Math.cos(s)).attr(`y2`,n*r.axisScaleFactor*Math.sin(s)).attr(`class`,`radarAxisLine`),e.append(`text`).text(o).attr(`x`,n*r.axisLabelFactor*Math.cos(s)).attr(`y`,n*r.axisLabelFactor*Math.sin(s)).attr(`class`,`radarAxisLabel`)}},`drawAxes`);function W(e,t,n,r,i,a,o){let s=t.length,c=Math.min(o.width,o.height)/2;n.forEach((t,n)=>{if(t.entries.length!==s)return;let l=t.entries.map((e,t)=>{let n=2*Math.PI*t/s-Math.PI/2,a=G(e,r,i,c);return{x:a*Math.cos(n),y:a*Math.sin(n)}});a===`circle`?e.append(`path`).attr(`d`,K(l,o.curveTension)).attr(`class`,`radarCurve-${n}`):a===`polygon`&&e.append(`polygon`).attr(`points`,l.map(e=>`${e.x},${e.y}`).join(` `)).attr(`class`,`radarCurve-${n}`)})}m(W,`drawCurves`);function G(e,t,n,r){return r*(Math.min(Math.max(e,t),n)-t)/(n-t)}m(G,`relativeRadius`);function K(e,t){let n=e.length,r=`M${e[0].x},${e[0].y}`;for(let i=0;i<n;i++){let a=e[(i-1+n)%n],o=e[i],s=e[(i+1)%n],c=e[(i+2)%n],l={x:o.x+(s.x-a.x)*t,y:o.y+(s.y-a.y)*t},u={x:s.x-(c.x-o.x)*t,y:s.y-(c.y-o.y)*t};r+=` C${l.x},${l.y} ${u.x},${u.y} ${s.x},${s.y}`}return`${r} Z`}m(K,`closedRoundCurve`);function q(e,t,n,r){if(!n)return;let i=(r.width/2+r.marginRight)*3/4,a=-(r.height/2+r.marginTop)*3/4;t.forEach((t,n)=>{let r=e.append(`g`).attr(`transform`,`translate(${i}, ${a+n*20})`);r.append(`rect`).attr(`width`,12).attr(`height`,12).attr(`class`,`radarLegendBox-${n}`),r.append(`text`).attr(`x`,16).attr(`y`,0).attr(`class`,`radarLegendText`).text(t.label)})}m(q,`drawLegend`);var J={draw:B},Y=m((e,t)=>{let n=``;for(let r=0;r<e.THEME_COLOR_LIMIT;r++){let i=e[`cScale${r}`];n+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return n},`genIndexStyles`),X=m(e=>{let t=_(f(),o().themeVariables);return{themeVariables:t,radarOptions:_(t.radar,e)}},`buildRadarStyleOptions`),Z={parser:z,db:L,renderer:J,styles:m(({radar:e}={})=>{let{themeVariables:t,radarOptions:n}=X(e);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${n.axisColor};
		stroke-width: ${n.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${n.axisLabelFontSize}px;
		color: ${n.axisColor};
	}
	.radarGraticule {
		fill: ${n.graticuleColor};
		fill-opacity: ${n.graticuleOpacity};
		stroke: ${n.graticuleColor};
		stroke-width: ${n.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${n.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${Y(t,n)}
	`},`styles`)};export{Z as diagram};