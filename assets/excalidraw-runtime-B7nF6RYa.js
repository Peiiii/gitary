import{ft as e}from"./app-DUuVgDM6.js";function t(e,t){if(!e||typeof e!=`object`)return`Element ${t} must be an object`;let n=e;if(!n.type||typeof n.type!=`string`)return`Element ${t} is missing required field: type`;if(n.type===`arrow`&&n.points!==void 0){if(!Array.isArray(n.points))return`Arrow element ${t} points must be an array`;let e=n.points;if(e.length>0&&e.length<2)return`Arrow element ${t} must have at least 2 points if points array is provided`}return null}function n(e){if(!Array.isArray(e))throw Error(`Elements must be an array`);if(e.length===0)throw Error(`Elements array cannot be empty`);let n=[];for(let r=0;r<e.length;r++){let i=t(e[r],r);i&&n.push(i)}if(n.length>0)throw Error(`Validation failed: ${n.join(`; `)}`);return e.map((e,t)=>{let n=Date.now()+t,r=e,i={...r,id:r.id||`element-${n}`,version:r.version||141,versionNonce:r.versionNonce||n,updated:r.updated||n,seed:r.seed||n,isDeleted:!1,groupIds:r.groupIds||[],frameId:r.frameId||null,boundElements:r.boundElements||[],link:r.link||null,locked:r.locked||!1,opacity:r.opacity??100,angle:r.angle||0,roughness:r.roughness??1,strokeWidth:r.strokeWidth??2,strokeStyle:r.strokeStyle||`solid`,fillStyle:r.fillStyle||`solid`,strokeColor:r.strokeColor||`#1e1e1e`,backgroundColor:r.backgroundColor||`transparent`};if(r.type===`text`&&`text`in r){let e=r.fontSize??20,t=r.height??e*1.5;return{...i,text:r.text||``,fontSize:e,fontFamily:r.fontFamily??1,textAlign:r.textAlign||`center`,verticalAlign:r.verticalAlign||`middle`,originalText:r.originalText||r.text||``,lineHeight:r.lineHeight??1.25,baseline:r.baseline??Math.round(t*.8),containerId:r.containerId||null}}if(r.type===`arrow`&&`points`in r){let e=r.points||[];return{...i,points:e,lastCommittedPoint:r.lastCommittedPoint||(e.length>0?e[e.length-1]:null),startArrowhead:r.startArrowhead??null,endArrowhead:r.endArrowhead??`arrow`,startBinding:r.startBinding||null,endBinding:r.endBinding||null}}return i})}const r=new class{async generateDiagram(t){let r=`根据以下描述生成 Excalidraw 图表元素：${t}

只返回 JSON 数组，不要包含任何其他文字。`;try{let t=(await e.chat({model:`dashscope/qwen3-max`,messages:[{role:`system`,content:`你是一个专业的图表生成助手。根据用户描述生成 Excalidraw 图表元素。

要求：
1. 理解用户描述，生成相应的图表（流程图、架构图、系统图等）
2. 只返回 JSON 数组，不要包含其他文字
3. 每个元素只需包含核心字段，其他字段系统会自动补充

基础元素（rectangle, ellipse, diamond 等）必需字段：
- type: 元素类型
- x, y: 位置坐标
- width, height: 尺寸
- strokeColor: 边框颜色（可选，默认 "#1e1e1e"）
- backgroundColor: 背景颜色（可选，默认 "transparent"）

文本元素额外字段：
   - text: 文本内容
- fontSize: 字体大小（默认 20）
- fontFamily: 字体族（1=normal, 2=code, 3=hand, 4=hand-drawn，默认 1）
- textAlign: 对齐方式（"left", "center", "right"，默认 "center"）
- verticalAlign: 垂直对齐（"top", "middle", "bottom"，默认 "middle"）

箭头元素额外字段：
   - points: 点数组，如 [[0, 0], [100, 100]]
- startArrowhead: null 或 "arrow"（默认 null）
- endArrowhead: "arrow" 或 null（默认 "arrow"）

布局要求：
- 元素间距合理，避免重叠
- 使用合适的颜色搭配
- 坐标从 (100, 100) 开始，元素间距至少 50px

示例（只包含必需字段）：
[
  {
    "type": "rectangle",
    "x": 100,
    "y": 100,
    "width": 200,
    "height": 80,
    "strokeColor": "#1e1e1e",
    "backgroundColor": "#4f46e5"
  },
  {
    "type": "text",
    "x": 150,
    "y": 125,
    "width": 100,
    "height": 30,
    "text": "前端",
    "fontSize": 20,
    "fontFamily": 1,
    "textAlign": "center",
    "verticalAlign": "middle",
    "strokeColor": "#ffffff"
  }
]`},{role:`user`,content:r}]})).messages[0]?.content||``;if(!t.trim())throw Error(`AI 返回的内容为空`);let i=t.trim();if(i.startsWith("```json")?i=i.replace(/^```json\s*/m,``).replace(/\s*```$/m,``):i.startsWith("```")&&(i=i.replace(/^```\s*/m,``).replace(/\s*```$/m,``)),i=i.trim(),!i)throw Error(`AI 返回的内容格式不正确`);let a;try{a=JSON.parse(i)}catch(e){throw console.error(`JSON 解析错误:`,e),console.error(`原始内容:`,i),Error(`AI 返回的内容不是有效的 JSON 格式: ${e instanceof Error?e.message:`未知错误`}`)}if(!Array.isArray(a))throw Error(`AI 返回的不是数组格式`);return n(a)}catch(e){throw console.error(`Error generating diagram:`,e),Error(e instanceof Error?e.message:`生成图表时出错，请重试`)}}};var i=new class{currentHandle=null;register(e){this.currentHandle=e}unregister(e){this.currentHandle===e&&(this.currentHandle=null)}getCurrentHandle(){return this.currentHandle}};function a(e){i.register(e)}function o(e){i.unregister(e)}function s(){return i.getCurrentHandle()}export{n as a,r as i,a as n,o as r,s as t};