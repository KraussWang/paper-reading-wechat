---
name: sample-preparation-flowchart
description: 从文献精读稿的「实验样品制备方法」章节提取信息，调用 Gemini 2.5 Flash 原生图像生成接口绘制白色背景的科研样品制备流程图（PNG）。Use when user asks to "生成样品制备流程图", "画制备流程图", "generate sample prep flowchart", or after a deep reading has been completed.
---

# 样品制备流程图生成

你是一个科研图片生成流水线的编排器。你的任务是从已完成的文献精读稿中提取实验样品制备方法，结合项目预设的绘图提示词模板，调用 Gemini 2.5 Flash 原生图像生成 API 生成 PNG 流程图，并保存到论文输出目录。

## 前置条件检查 ⛔ BLOCKING

在开始任何工作之前，必须先检查 `GEMINI_API_KEY` 是否可用。按以下优先级查找：

| 优先级 | 来源 |
|--------|------|
| 1 | 当前 skill 目录下的 `EXTEND.md`（`.claude/skills/sample-preparation-image/EXTEND.md`） |
| 2 | 环境变量 `$GEMINI_API_KEY` |

EXTEND.md 格式：

```yaml
GEMINI_API_KEY: your-api-key-here
```

获取 API Key：https://aistudio.google.com/apikey

**如果未找到 API Key**：停止并提示用户创建 EXTEND.md 或设置环境变量。

## 输入检测

支持两种调用方式：

| 模式 | 触发条件 | 行为 |
|------|----------|------|
| **显式路径** | 用户提供 `output/.../文献精读.md` 路径 | 直接读取该文件 |
| **自动检测** | 用户只说"生成流程图"但未指定路径 | `ls -t output/*/文献精读.md | head -1`，确认后使用 |

## 工作流程

### Step 1: 读取 文献精读.md

读取指定或自动检测到的 `文献精读.md`。

### Step 2: 提取「实验样品制备方法」章节

从 Markdown 中定位 `## 实验样品制备方法`，提取该标题到下一个 `## ` 标题（或文件末尾）之间的全部内容。

**如果未找到该章节**：报告错误并停止——"文献精读.md 中未找到「实验样品制备方法」章节，请确认 material-paper-deep-reading 已完成处理。"

### Step 3: 填充提示词模板

1. 读取 `/home/krauss/projects/paper-reading/sample_preparation_flowchart_prompt.md`
2. 找到 `## 输入实验步骤` 下的代码块，将占位文本替换为 Step 2 提取的内容（保留 ` ```text ` 代码围栏）
3. **不修改模板其他部分**

### Step 4: 调用 Gemini 2.5 Flash API 生成图片

#### 4a. 准备请求

将组合后的完整提示词写入临时文件（避免 shell 转义问题）：

```bash
printf '%s' "$PROMPT_TEXT" > /tmp/sample_prep_prompt.txt
jq -Rsl '{
  contents: [{ parts: [{ text: . }] }],
  generationConfig: { responseModalities: ["IMAGE", "TEXT"] }
}' /tmp/sample_prep_prompt.txt > /tmp/sample_prep_request.json
```

#### 4b. 发送请求

```bash
curl -s -w "\n%{http_code}" -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}" \
  -H "Content-Type: application/json" \
  -d @/tmp/sample_prep_request.json \
  -o /tmp/sample_prep_response.json
```

#### 4c. 错误检查

- 网络错误（curl 非零退出）→ 重试一次
- HTTP 4xx → 解析响应中 `error.message`，报告用户
- HTTP 5xx → 重试一次，仍失败则报告

#### 4d. 提取 PNG

```bash
jq -r '.candidates[0].content.parts[] | select(.inlineData != null) | select(.inlineData.mimeType == "image/png") | .inlineData.data' \
  /tmp/sample_prep_response.json | base64 -d > <OUTPUT_PATH>
```

`<OUTPUT_PATH>` = `{文献精读.md 所在目录}/sample_preparation_flowchart.png`

若无 `image/png` 的 inlineData：检查 `parts` 中的 `text` 是否有错误信息，报告用户。

#### 4e. 清理临时文件

```bash
rm -f /tmp/sample_prep_prompt.txt /tmp/sample_prep_request.json /tmp/sample_prep_response.json
```

### Step 5: 验证输出

```bash
file <OUTPUT_PATH>  # 应输出 "PNG image data, ..."
```

### Step 6: 可选——更新 文献精读.md

询问用户："流程图已生成，是否在文献精读.md 的「实验样品制备方法」章节后插入图片引用？"

如确认，在该章节最后一步之后、下一个 `## ` 标题之前，插入：

```markdown
![样品制备流程图](sample_preparation_flowchart.png)
```

### 完成报告

```
样品制备流程图生成完成！

论文目录: output/YYYY-MM-DD_Journal_Keyword/
输出文件: output/YYYY-MM-DD_Journal_Keyword/sample_preparation_flowchart.png
文件大小: X KB
```

## 约束

- **只生成 PNG 格式**
- **不修改** `sample_preparation_flowchart_prompt.md` 模板文件
- **不修改** `文献精读.md` 中除插入图片引用以外的任何内容
- API Key 缺失必须先解决才能继续
- 所有临时文件完成后必须清理
