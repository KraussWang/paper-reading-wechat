# Obsidian Web Clipper 文献精读到公众号草稿工作流

本文档记录当前真实可用流程：用 Obsidian Web Clipper 抓取论文网页 Markdown，用 `/material-paper-deep-reading` 生成结构化中文精读稿，再用 `/baoyu-post-to-wechat` 的 `remote-api` 发布到微信公众号草稿箱。

## 全流程概览

```text
期刊网页
  ↓ Obsidian Web Clipper
原文 Markdown
  C:\Users\Krauss\Documents\Obsidian Vault\raw\articles\*.md
  ↓ /material-paper-deep-reading
精读稿 Markdown
  C:\Users\Krauss\Documents\文献精读\output\YYYY-MM-DD_{期刊缩写}_{关键词}\文献精读.md
  ↓ /baoyu-post-to-wechat remote-api
微信公众号草稿箱
  ↓ 人工预览、微调、群发
```

核心原则：

- 不修改 Obsidian Web Clipper 抓取的原始 Markdown。
- 不预先把精读稿转换成 HTML；发布脚本会处理 Markdown 渲染、图片上传和草稿创建。
- 只发布到微信公众号草稿箱，不直接群发。
- 不在文档、回复或日志摘要中泄露 `app_secret` 等凭证。

## 一、输入：Obsidian Web Clipper 原文

默认输入是 Obsidian Web Clipper 抓取的论文网页 Markdown：

```text
C:\Users\Krauss\Documents\Obsidian Vault\raw\articles\论文标题.md
```

原文通常包含：

- frontmatter：标题、来源 URL、作者、摘要、抓取日期等。
- 论文正文：Abstract、Main、Methods、References 等。
- HTML 下标/上标：例如 `<sub>2</sub>`、`<sup>−1</sup>`。
- Obsidian 图片引用：例如 `![[41563_2026_2669_Fig1_HTML.png|Fig. 1: ...]]`。
- 参考文献和外部链接。

执行时只读取原始文件，不要改写该文件。所有精读、图片复制、封面生成和发布材料都写入 `C:\Users\Krauss\Documents\文献精读\output\...`。

## 二、精读：/material-paper-deep-reading

开始前读取 skill：

```text
C:\Users\Krauss\Documents\文献精读\.codex\skills\material-paper-deep-reading\SKILL.md
```

输出目录：

```text
C:\Users\Krauss\Documents\文献精读\output\YYYY-MM-DD_{期刊缩写}_{关键词}\
```

输出文件：

```text
文献精读.md
```

### 精读稿结构

`文献精读.md` 必须包含 frontmatter，且 `title` 与正文 H1 完全一致：

```markdown
---
title: "期刊缩写 | 论文中文题目 | 发表年份"
summary: "120 字以内摘要"
author: "Krauss"
sourceUrl: "https://doi.org/... 或论文网页 URL"
---

# 期刊缩写 | 论文中文题目 | 发表年份

<small>
论文题目：英文原题<br>
第一作者：共同第一作者<br>
通讯作者：通讯作者<br>
通讯单位：中文单位名称<br>
DOI：https://doi.org/...
</small>

## 研究背景

## 图表解读

## 实验样品制备方法

## 知识拓展：创新点分析

## 一句话总结
```

注意：

- 公众号标题读取 frontmatter `title`，所以 `title` 不要另写短标题。
- `<small>` 内普通换行在公众号 HTML 中会被折叠，除最后一行 DOI 外，每行末尾必须使用 `<br>`。
- 不输出 `论文信息` 作为小标题。

### 正文格式要求

- 化学式和单位默认使用 Unicode 下标/上标，例如 `MoSi₂N₄`、`NH₃`、`H₂`、`PtSe₂`、`cm² V⁻¹ s⁻¹`、`10⁶`、`μm⁻¹`。
- 从原文 `<sub>` / `<sup>` 提取常见表达时，转换为 Unicode；只有复杂公式无法清晰表达时才保留 HTML 或原文格式。
- `研究背景` 固定加粗两个短语：研究对象、创新点或核心方法。
- 每个 Figure 解读段固定加粗两处：第一句中的核心问题、最后一句中的核心结论。
- 每个 Figure 解读控制在 300 字以内，按子图顺序绑定证据和判断。

## 三、Figure 图片处理

默认只处理主文 Figure，不处理 Supplementary Figure 或 Extended Data Figure，除非用户明确要求。

### 提取与复制

从原文 Markdown 提取 Obsidian 图片引用，例如：

```markdown
![[41563_2026_2669_Fig1_HTML.png|Fig. 1: CVD growth of wafer-scale monolayer MoSi2N4 single crystals.]]
```

在 Obsidian Vault 内定位图片：

```text
C:\Users\Krauss\Documents\Obsidian Vault
```

如果图片不在 Vault 根目录，用文件名在 Vault 内递归查找。找到后复制到精读输出目录：

```text
output\YYYY-MM-DD_{期刊缩写}_{关键词}\figures\
```

### 插入到精读稿

在对应 Figure 小节中使用标准 Markdown 图片语法，顺序固定为：

```markdown
### Figure 1. 图题或主题概括

![Fig. 1: 图题](figures/xxx_Fig1_HTML.png)

Figure 1 说明了 **...**。... 该图支持的核心结论是：**...**。
```

发布前检查：

- 图片引用数量等于主文 Figure 数量。
- 每个图片路径都能从 `文献精读.md` 所在目录解析到真实文件。
- Figure 顺序与原文主图顺序一致。
- 图片不集中堆在文首或文末。

## 四、封面图

`remote-api` 发布 `news` 类型文章必须提供封面图。推荐使用 Figure 1 生成：

```text
output\YYYY-MM-DD_{期刊缩写}_{关键词}\cover.jpg
```

注意：Obsidian Web Clipper 抓取的图片可能扩展名是 `.png`，但实际格式是 WebP。正文图片上传脚本通常会自动处理这种情况；封面上传更严格，必须是真实 JPEG/PNG。若遇到 `unsupported file type hint`，先把 Figure 1 转成真正的 `cover.jpg`。

可用 Python + Pillow 转换：

```powershell
@'
from PIL import Image
from pathlib import Path

src = Path(r"C:\Users\Krauss\Documents\文献精读\output\YYYY-MM-DD_{期刊缩写}_{关键词}\figures\xxx_Fig1_HTML.png")
out = Path(r"C:\Users\Krauss\Documents\文献精读\output\YYYY-MM-DD_{期刊缩写}_{关键词}\cover.jpg")

img = Image.open(src)
if img.mode not in ("RGB", "L"):
    img = img.convert("RGB")
img.save(out, "JPEG", quality=92, optimize=True)
'@ | & "C:\Users\Krauss\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -
```

## 五、发布：/baoyu-post-to-wechat remote-api

开始前读取 skill 和项目配置：

```text
C:\Users\Krauss\Documents\文献精读\.codex\skills\baoyu-post-to-wechat\SKILL.md
C:\Users\Krauss\Documents\文献精读\.baoyu-skills\baoyu-post-to-wechat\EXTEND.md
```

配置中只需要确认字段含义和账号，不要复制或暴露真实凭证。当前账号：

- 账号名：`KK读电镜文献`
- 账号别名：`KK`
- 默认作者：`Krauss`
- 默认主题：`default`
- 默认颜色：`blue`
- 发布方式：`remote-api`

`remote-api` 会在本地渲染 Markdown、处理图片和组装草稿，再通过 SSH SOCKS5 隧道访问微信 API。它不需要本地公众号后台扫码登录，也不把 `app_secret` 写入远程服务器。

### 发布命令

Windows 当前推荐用 `npx -y bun`：

```powershell
npx -y bun "C:\Users\Krauss\Documents\文献精读\.codex\skills\baoyu-post-to-wechat\scripts\wechat-api.ts" `
  "C:\Users\Krauss\Documents\文献精读\output\YYYY-MM-DD_{期刊缩写}_{关键词}\文献精读.md" `
  --theme default `
  --color blue `
  --account KK `
  --remote `
  --cover "C:\Users\Krauss\Documents\文献精读\output\YYYY-MM-DD_{期刊缩写}_{关键词}\cover.jpg"
```

不要提前生成 HTML，也不要把 HTML 文件传给 remote-api，除非用户明确要求发布 HTML。

### 成功日志

发布成功时应看到类似信息：

```text
[wechat-api] Placeholder images: 5
[wechat-api] Uploading body images...
[wechat-api] Cover uploaded successfully
[wechat-api] Publishing to draft...
[wechat-api] Published successfully! media_id: ...
```

最终返回 JSON 中应包含：

```json
{
  "success": true,
  "media_id": "...",
  "title": "期刊缩写 | 论文中文题目 | 发表年份",
  "articleType": "news",
  "method": "remote-api"
}
```

## 六、发布前检查清单

精读稿检查：

- frontmatter `title` 与正文 H1 完全一致。
- `summary` 不超过公众号摘要常用长度，适合作为 digest。
- `<small>` 中 `论文题目 / 第一作者 / 通讯作者 / 通讯单位 / DOI` 分行显示，除 DOI 外每行有 `<br>`。
- 常见化学式和单位为 Unicode 下标/上标，不残留普通数字形式，如 `MoSi2N4`、`NH3`、`H2`。
- 不残留 `<sub>` / `<sup>`，除非确实是复杂公式。
- Figure 图片数量、顺序和相对路径正确。
- 每个 Figure 小节顺序为“标题 → 图片 → 解读”。

发布检查：

- `wechat-api.ts` 使用 `--remote`。
- `--theme default --color blue --account KK` 明确传入。
- `--cover` 指向真实存在的 JPEG/PNG 封面。
- 日志显示 Placeholder images 数量与正文 Figure 数量一致。
- 正文图片和封面均上传成功。
- 返回 `media_id`。

草稿箱检查：

- 公众号标题与正文 H1 一致。
- 论文信息区逐行显示，不挤成一段。
- Figure 图片出现在对应 Figure 解读位置。
- Unicode 下标/上标显示正常。
- 草稿保存成功后再人工预览、微调，不直接群发。

## 七、常见问题

### bun 命令不可用

如果 `bun` 不在 PATH 中，使用：

```powershell
npx -y bun ...
```

### 封面上传失败

如果日志出现 `unsupported file type hint`，通常是图片扩展名和实际格式不一致。用 Pillow 重新保存为真实 `cover.jpg` 后再发布。

### API IP 白名单错误

如果 remote-api 返回 `errcode 40164`，说明远程服务器出口 IP 不在微信公众号后台 IP 白名单中。需要在公众号后台添加远程服务器出口 IP。

### 图片没有进入正文

检查 `文献精读.md` 是否使用标准 Markdown 图片语法：

```markdown
![Fig. N: 图题](figures/xxx.png)
```

不要使用 Obsidian 图片语法 `![[...]]` 作为最终精读稿正文图片引用。

## 八、最短执行顺序

1. 读取 `material-paper-deep-reading` 和 `baoyu-post-to-wechat` 两个 skill。
2. 读取 Obsidian Web Clipper 生成的论文 Markdown。
3. 生成 `output\YYYY-MM-DD_{期刊缩写}_{关键词}\文献精读.md`。
4. 提取主文 Figure，复制到 `figures\`，插入对应 Figure 小节。
5. 生成或确认 `cover.jpg`。
6. 检查 H1/title、`<small><br>`、Unicode 下标、Figure 路径。
7. 使用 `wechat-api.ts --remote --account KK --theme default --color blue --cover ...` 发布。
8. 返回草稿 `media_id`，提醒用户到公众号草稿箱预览。
