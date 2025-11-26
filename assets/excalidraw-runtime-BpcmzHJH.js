import{Jr as e}from"./app-HD19YyAJ.js";const t=new class{async generateDiagram(t){let n=`请根据以下描述生成 Excalidraw 图表元素：${t}

请直接返回 JSON 数组，不要包含任何其他文字。`;try{let t=(await e.chat({model:`openrouter/openai/gpt-4o-mini`,messages:[{role:`system`,content:`你是一个专业的图表生成助手。根据用户的描述，生成 Excalidraw 格式的图表元素。

要求：
1. 理解用户的描述，生成相应的图表（流程图、架构图、系统图等）
2. 返回的 JSON 必须是一个数组，包含 Excalidraw 元素对象
3. 每个元素必须包含以下必需字段：
   - type: 元素类型（"rectangle", "ellipse", "diamond", "arrow", "text", "line" 等）
   - id: 唯一标识符（使用简短描述，如 "box1", "text1"）
   - x, y: 位置坐标（数字）
   - width, height: 尺寸（数字）
   - strokeColor: 边框颜色（如 "#1e1e1e"）
   - backgroundColor: 背景颜色（如 "#ffffff" 或 "transparent"）
   - fillStyle: 填充样式（"solid" 或 "hachure"）
   - strokeWidth: 边框宽度（数字，如 2）
   - strokeStyle: 边框样式（"solid"）
   - roughness: 粗糙度（数字，如 1）
   - opacity: 透明度（100）
   - angle: 角度（0）
   - seed: 随机种子（数字）
   - version: 版本号（141）
   - versionNonce: 版本随机数（数字）
   - isDeleted: false
   - groupIds: []
   - frameId: null
   - roundness: null 或 { type: 3 }
   - boundElements: []
   - updated: 时间戳（数字）
   - link: null
   - locked: false

4. 对于文本元素，还需要：
   - text: 文本内容
   - fontSize: 字体大小（数字）
   - fontFamily: 字体族（1-4，1=normal, 2=code, 3=hand, 4=hand-drawn）
   - textAlign: 对齐方式（"left", "center", "right"）
   - verticalAlign: 垂直对齐（"top", "middle", "bottom"）
   - originalText: 原始文本（与 text 相同）
   - lineHeight: 行高（数字，如 1.25）
   - baseline: 基线（数字）

5. 对于箭头元素，还需要：
   - points: 点数组，如 [[0, 0], [100, 100]]
   - lastCommittedPoint: 最后一个点，如 [100, 100]
   - startArrowhead: null 或 "arrow"
   - endArrowhead: "arrow"
   - startBinding: null
   - endBinding: null

6. 元素布局要合理，避免重叠
7. 使用合适的颜色和样式，让图表清晰美观
8. 只返回 JSON 数组，不要包含其他文字说明

示例格式：
[
  {
    "type": "rectangle",
    "version": 141,
    "versionNonce": 1001,
    "isDeleted": false,
    "id": "box1",
    "fillStyle": "solid",
    "strokeWidth": 2,
    "strokeStyle": "solid",
    "roughness": 1,
    "opacity": 100,
    "angle": 0,
    "x": 100,
    "y": 100,
    "strokeColor": "#1e1e1e",
    "backgroundColor": "#4f46e5",
    "width": 200,
    "height": 80,
    "seed": 1001,
    "groupIds": [],
    "frameId": null,
    "roundness": { "type": 3 },
    "boundElements": [],
    "updated": 1001,
    "link": null,
    "locked": false
  },
  {
    "type": "text",
    "version": 141,
    "versionNonce": 1002,
    "isDeleted": false,
    "id": "text1",
    "fillStyle": "solid",
    "strokeWidth": 2,
    "strokeStyle": "solid",
    "roughness": 1,
    "opacity": 100,
    "angle": 0,
    "x": 150,
    "y": 125,
    "strokeColor": "#ffffff",
    "backgroundColor": "transparent",
    "width": 100,
    "height": 30,
    "seed": 1002,
    "groupIds": [],
    "frameId": null,
    "roundness": null,
    "boundElements": null,
    "updated": 1002,
    "link": null,
    "locked": false,
    "fontSize": 20,
    "fontFamily": 1,
    "text": "前端",
    "textAlign": "center",
    "verticalAlign": "middle",
    "containerId": null,
    "originalText": "前端",
    "lineHeight": 1.25,
    "baseline": 20
  }
]`},{role:`user`,content:n}]})).messages[0]?.content||``;if(!t.trim())throw Error(`AI 返回的内容为空`);let r=t.trim();if(r.startsWith("```json")?r=r.replace(/^```json\s*/m,``).replace(/\s*```$/m,``):r.startsWith("```")&&(r=r.replace(/^```\s*/m,``).replace(/\s*```$/m,``)),r=r.trim(),!r)throw Error(`AI 返回的内容格式不正确`);let i;try{i=JSON.parse(r)}catch(e){throw console.error(`JSON 解析错误:`,e),console.error(`原始内容:`,r),Error(`AI 返回的内容不是有效的 JSON 格式: ${e instanceof Error?e.message:`未知错误`}`)}if(!Array.isArray(i))throw Error(`AI 返回的不是数组格式`);return i.map((e,t)=>{let n=Date.now()+t;return{...e,id:e.id||`element-${n}`,version:e.version||141,versionNonce:e.versionNonce||n,updated:e.updated||n,seed:e.seed||n,isDeleted:!1,groupIds:e.groupIds||[],frameId:e.frameId||null,boundElements:e.boundElements||[],link:e.link||null,locked:e.locked||!1,opacity:e.opacity??100,angle:e.angle||0,roughness:e.roughness??1,strokeWidth:e.strokeWidth??2,strokeStyle:e.strokeStyle||`solid`,fillStyle:e.fillStyle||`solid`,strokeColor:e.strokeColor||`#1e1e1e`,backgroundColor:e.backgroundColor||`transparent`}})}catch(e){throw console.error(`Error generating diagram:`,e),Error(e instanceof Error?e.message:`生成图表时出错，请重试`)}}};var n=new class{currentHandle=null;register(e){this.currentHandle=e}unregister(e){this.currentHandle===e&&(this.currentHandle=null)}getCurrentHandle(){return this.currentHandle}};function r(e){n.register(e)}function i(e){n.unregister(e)}function a(){return n.getCurrentHandle()}export{t as i,r as n,i as r,a as t};