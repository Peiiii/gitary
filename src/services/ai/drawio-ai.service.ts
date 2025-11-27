import { aiGateway } from "@/services/ai/gateway";

export class DrawioAIService {
  async generateDiagram(prompt: string): Promise<string> {
    const systemPrompt = `你是一个专业的 Draw.io 图表生成助手。根据用户描述生成 Draw.io XML 格式的图表。

要求：
1. 理解用户描述，生成相应的图表（流程图、架构图、UML 图、系统图等）
2. 只返回有效的 Draw.io XML，不要包含其他文字
3. XML 必须符合 Draw.io 的格式规范
4. 使用合适的图形、连接线和布局

Draw.io XML 基本结构：
- 根元素：<mxfile>
- 包含 <diagram> 元素
- 使用 <mxGraphModel> 作为图表模型
- 使用 <mxCell> 元素表示图形和连接

常用图形类型：
- rectangle: 矩形
- ellipse: 椭圆
- rhombus: 菱形（用于判断）
- hexagon: 六边形
- cylinder: 圆柱体
- actor: 人形图标
- cloud: 云形

连接线：
- edge: 连接线，使用 source 和 target 属性连接两个图形

布局要求：
- 图形间距合理，避免重叠
- 使用合适的颜色和样式
- 坐标从 (100, 100) 开始

示例 XML 结构：
<mxfile>
  <diagram>
    <mxGraphModel dx="1422" dy="794" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="2" value="开始" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="100" y="100" width="120" height="60" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`;

    const userPrompt = `根据以下描述生成 Draw.io XML 格式的图表：${prompt}

只返回有效的 Draw.io XML，不要包含任何其他文字或说明。`;

    try {
      const response = await aiGateway.chat({
        model: "dashscope/qwen3-max",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      });

      const content = response.messages[0]?.content || "";
      
      if (!content.trim()) {
        throw new Error("AI 返回的内容为空");
      }
      
      let xmlStr = content.trim();
      
      if (xmlStr.startsWith("```xml")) {
        xmlStr = xmlStr.replace(/^```xml\s*/m, "").replace(/\s*```$/m, "");
      } else if (xmlStr.startsWith("```")) {
        xmlStr = xmlStr.replace(/^```\s*/m, "").replace(/\s*```$/m, "");
      }

      xmlStr = xmlStr.trim();
      
      if (!xmlStr) {
        throw new Error("AI 返回的内容格式不正确");
      }

      if (!xmlStr.includes("<mxfile>") || !xmlStr.includes("</mxfile>")) {
        throw new Error("AI 返回的内容不是有效的 Draw.io XML 格式");
      }

      return xmlStr;
    } catch (error) {
      console.error("Error generating Draw.io diagram:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "生成图表时出错，请重试"
      );
    }
  }
}

export const drawioAIService = new DrawioAIService();

