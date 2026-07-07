# 公众号文献精读发布 — 半自动化工作流

基于 `material-paper-deep-reading` + `baoyu-*` 技能组，将 PDF 论文从精读、格式化到推送微信公众号草稿箱的端到端流程。

---

## 全流程总览

```
PDF 论文
  │
  ▼ [MinerU: 🤖 自动]
Markdown 全文（文本 + CDN 图片链接）
  │
  ├─ ▼ 自动提取第一张图片 → 下载 → 作为封面图
  │
  ▼ [material-paper-deep-reading: 🤖 AI]
精读稿 Markdown
  │
  ├─ ▼ [sample-preparation-image: 🤖 可选]  样品制备流程图
  ├─ ▼ [baoyu-format-markdown: 🤖 可选]     CJK 友好格式化
  └─ ▼ [baoyu-article-illustrator: 🤖 可选]  生成插图
  │
  ▼ [baoyu-post-to-wechat: 🤖 API]
公众号草稿箱
  │
  ▼ [mp.weixin.qq.com: 🖐️ 人工]
预览 → 修改 → 群发
```

---

## 快速操作指南

每次发布一篇新论文，只需五步：

### 第一步：准备论文

将论文 PDF 通过 **MinerU** 转为 Markdown 全文（自动提取文本 + 图片上传 CDN）。

### 第二步：生成精读稿

在 Claude Code 中说：

> 使用 material-paper-deep-reading 处理 `{论文 Markdown 路径}`

AI 自动输出 `output/YYYY-MM-DD_{期刊缩写}_{关键词}/文献精读.md`（详见下方文件夹命名规范），并从 Markdown 中提取第一张论文图片作为封面保存到同一文件夹下的 `cover.jpg`。

### 第三步：审阅精读稿

打开生成的 Markdown 文件，快速核对：

- 共同一作是否遗漏
- 通讯单位是否正确（应为中文）
- 术语翻译是否准确
- 语句是否通顺

直接在文件中修改即可，无需额外工具。

### 第四步：推送到公众号草稿箱

在终端执行：

```bash
cd paper-reading

bun .claude/skills/baoyu-post-to-wechat/scripts/wechat-api.ts \
  "output/YYYY-MM-DD_{期刊}_{关键词}/文献精读.md" \
  --theme default \
  --color blue \
  --title "期刊缩写 | 中文题目 | 年份" \
  --author "Krauss" \
  --summary "一句话总结" \
  --cover "output/YYYY-MM-DD_{期刊}_{关键词}/cover.jpg" \
  --account KK
```

成功后返回 `media_id`，文章即出现在草稿箱中。

### 第五步：群发

登录 [mp.weixin.qq.com](https://mp.weixin.qq.com) → 草稿箱 → 手机预览 → 微调 → 群发。

> **简化记忆**：MinerU 转格式 → 一句话触发精读 → 审阅 → 一条命令推送 → 手机预览群发。

---

## 阶段一：论文预处理

| 步骤 | 执行者 | 说明 |
|------|--------|------|
| 1. 获取论文 PDF | 🖐️ 人工 | 从期刊网站或本地获取 |
| 2. PDF → Markdown | 🤖 MinerU | 自动提取文本、图片并上传 CDN |
| 3. 提取封面图 | 🤖 自动 | 从 Markdown 全文解析第一张 `![]()` 图片链接，下载到论文文件夹内 `cover.jpg` |
| 4. 输入 Claude Code | 🖐️ 人工 | 指定 Markdown 文件路径，触发 `material-paper-deep-reading` skill |

---

## 阶段二：AI 结构化精读（🤖 全自动）

调用 `.claude/skills/material-paper-deep-reading/SKILL.md`，模型自动输出 `output/YYYY-MM-DD_{期刊缩写}_{关键词}/文献精读.md`。

### 文件夹命名规范

每篇文献独立文件夹：`output/YYYY-MM-DD_{期刊缩写}_{关键词}/`

| 组成部分 | 示例 | 说明 |
|----------|------|------|
| `YYYY-MM-DD` | `2026-07-02` | 处理（精读）日期 |
| `{期刊缩写}` | `NatCommun` | 驼峰命名，无空格 |
| `{关键词}` | `NbOX2` | 材料/方法/核心发现 |

文件夹内包含：`文献精读.md`、`MinerU_原文.md`（如有）、`cover.jpg`、流程图等全部相关文件。

### 输出结构

| 章节 | 内容 |
|------|------|
| **总标题** | `# 期刊缩写 \| 中文题目 \| 年份` |
| **论文信息** | `<small>` 区块：英文原题、第一作者（含共同一作）、通讯作者、通讯单位（中文）、DOI |
| **研究背景** | 背景 → 问题 → 方法 → 意义，≤400 字 |
| **图表解读** | 逐 Figure 解读：表征方法、回答的科学问题、支撑的结论，≤300 字/图 |
| **实验样品制备方法** | 原料、反应条件、后处理、电镜制样步骤，按流程编号 |
| **知识拓展：创新点分析** | 材料+电镜视角的创新性总结，≤300 字 |
| **一句话总结** | 对象 + 方法 + 核心结论 |

---

## 阶段三：格式化 & 插图（🤖 可选）

| Skill | 功能 | 路径 |
|-------|------|------|
| `sample-preparation-image` | 生成实验样品制备流程图（需 Gemini API Key） | `.claude/skills/sample-preparation-image/` |
| `baoyu-format-markdown` | CJK 友好格式化（remark-cjk-friendly 等） | `.claude/skills/baoyu-format-markdown/` |
| `baoyu-article-illustrator` | 生成机制图、摘要图等（需图片生成后端） | `.claude/skills/baoyu-article-illustrator/` |

---

## 阶段四：发布到公众号草稿箱（🤖 自动）

### 发布命令

```bash
cd paper-reading

bun .claude/skills/baoyu-post-to-wechat/scripts/wechat-api.ts \
  "output/YYYY-MM-DD_{期刊}_{关键词}/文献精读.md" \
  --theme default \
  --color blue \
  --title "期刊缩写 | 中文题目 | 年份" \
  --author "Krauss" \
  --summary "一句话总结..." \
  --cover "output/YYYY-MM-DD_{期刊}_{关键词}/cover.jpg" \
  --account KK
```

### 脚本自动完成

1. Markdown → 微信公众号兼容 HTML
2. 文章中图片上传至微信服务器
3. 封面图转换为 webp 格式并上传（获取 `thumb_media_id`）
4. 调用 `draft/add` API 推送到草稿箱

### 前提条件

| 条件 | 说明 |
|------|------|
| 🔑 AppID / AppSecret | 配置于 `.baoyu-skills/baoyu-post-to-wechat/EXTEND.md` 或环境变量 `WECHAT_APP_ID` / `WECHAT_APP_SECRET` |
| 🌐 IP 白名单 | 服务器出网 IP 须加入公众号后台「开发 → 基本配置 → IP 白名单」 |
| 📦 bun 运行时 | `~/.local/bin/bun`（或 `npm install -g bun`） |
| 🖼️ 封面图 | 自动取自论文 Markdown 全文第一张图片，保存到论文文件夹内 `cover.jpg` |

### 账号配置

当前已配置账号：

- **名称**：KK读电镜文献
- **别名**：KK
- **发布方式**：API
- **默认作者**：Krauss
- **评论**：开启（所有人可评论）

---

## 阶段五：审稿 & 群发（🖐️ 人工）

1. 登录 [mp.weixin.qq.com](https://mp.weixin.qq.com)
2. **内容管理 → 草稿箱** → 找到刚推入的文章
3. **预览** → 发送到手机检查排版、图片清晰度、公式渲染
4. **修改**（如需要） → 直接在公众号后台编辑器调整
5. **群发** → 确认无误后正式发布

---

## 人工节点汇总

| 节点 | 耗时 | 频次 | 说明 |
|------|------|------|------|
| 论文 PDF 获取 | ~1 min | 每次 | 期刊网站下载 |
| 精读稿审阅 | 5-10 min | 每次 | 核对一作、通讯单位、术语准确性 |
| IP 白名单配置 | ~1 min | 一次性 | 公众号后台「基本配置」中添加 |
| 草稿预览与微调 | 5-15 min | 每次 | 排版、公式、图片、手机适配 |
| 群发确认 | ~1 min | 每次 | 最终推送 |

---

## 相关文件

| 文件 | 说明 |
|------|------|
| `.claude/skills/material-paper-deep-reading/SKILL.md` | 精读 skill 定义 |
| `.claude/skills/sample-preparation-image/SKILL.md` | 样品制备流程图生成 skill 定义 |
| `.claude/skills/baoyu-format-markdown/SKILL.md` | 格式化 skill 定义 |
| `.claude/skills/baoyu-article-illustrator/SKILL.md` | 插图生成 skill 定义 |
| `.claude/skills/baoyu-cover-image/SKILL.md` | 封面图生成 skill 定义 |
| `.claude/skills/baoyu-post-to-wechat/SKILL.md` | 微信发布 skill 定义 |
| `.baoyu-skills/baoyu-post-to-wechat/EXTEND.md` | 微信公众号账号配置（不纳入版本管理） |
| `.gitignore` | 排除规则（skills 代码纳入版本管理，EXTEND.md 和缓存排除） |
