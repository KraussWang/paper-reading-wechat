# Paper Reading → WeChat Publishing

基于 [Claude Code](https://claude.com/claude-code) Skills 的**材料科学论文精读 → 微信公众号发布**半自动化工作流。

将 PDF 论文从精读、格式化、插图生成到推送微信公众号草稿箱的端到端流程。

## 工作流概览

```
PDF 论文
  │
  ▼ MinerU（自动）
Markdown 全文（文本 + CDN 图片）
  │
  ▼ material-paper-deep-reading（AI）
精读稿 Markdown
  │
  ├─ sample-preparation-image（可选）  样品制备流程图
  ├─ baoyu-format-markdown（可选）    CJK 友好格式化
  ├─ baoyu-article-illustrator（可选） 生成插图
  └─ baoyu-cover-image（可选）         生成封面图
  │
  ▼ baoyu-post-to-wechat（API）
公众号草稿箱
  │
  ▼ 人工审阅 → 群发
```

## Skills

| Skill | 功能 |
|-------|------|
| `material-paper-deep-reading` | 材料科学与电子显微学论文结构化精读 |
| `sample-preparation-image` | 实验样品制备流程图生成（Gemini 2.5 Flash） |
| `baoyu-format-markdown` | CJK 友好 Markdown 格式化 |
| `baoyu-article-illustrator` | 文章配图生成 |
| `baoyu-cover-image` | 封面图生成 |
| `baoyu-post-to-wechat` | 微信公众号 API 发布 |

## 前提条件

| 条件 | 说明 |
|------|------|
| 🔑 微信 AppID / AppSecret | 配置于 `.baoyu-skills/baoyu-post-to-wechat/EXTEND.md` 或环境变量 |
| 🌐 IP 白名单 | 服务器出网 IP 须加入公众号后台白名单 |
| 📦 Bun 运行时 | 用于执行 TypeScript 脚本 |
| 🐍 MinerU | PDF → Markdown 转换（Python） |

## 快速开始

### 1. 准备论文

将论文 PDF 通过 MinerU 转为 Markdown 全文。

### 2. 生成精读稿

在 Claude Code 中：

> 使用 material-paper-deep-reading 处理 `{论文 Markdown 路径}`

AI 自动输出结构化精读稿到 `output/YYYY-MM-DD_{期刊缩写}_{关键词}/文献精读.md`。

### 3. 推送到公众号草稿箱

```bash
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

### 4. 群发

登录 [mp.weixin.qq.com](https://mp.weixin.qq.com) → 草稿箱 → 预览 → 微调 → 群发。

## 目录结构

```
paper-reading/
├── .claude/skills/              # Claude Code Skills 定义
│   ├── material-paper-deep-reading/
│   ├── sample-preparation-image/
│   ├── baoyu-format-markdown/
│   ├── baoyu-article-illustrator/
│   ├── baoyu-cover-image/
│   └── baoyu-post-to-wechat/
├── WORKFLOW.md                  # 详细工作流文档
├── output/                      # 论文精读输出
│   └── YYYY-MM-DD_{期刊}_{关键词}/
│       └── 文献精读.md
└── content/                     # 输入暂存区
```

## 致谢

- [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) — `baoyu-article-illustrator`、`baoyu-cover-image`、`baoyu-format-markdown`、`baoyu-post-to-wechat` 四个 skill 来源于此项目（MIT License）

## 详细文档

参见 [WORKFLOW.md](WORKFLOW.md)。
