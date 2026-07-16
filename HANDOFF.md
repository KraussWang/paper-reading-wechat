# HANDOFF: 材料论文精读并用浏览器发布到微信公众号

## 目标

让下一个对话框可以复现本对话框中的工作流：

> 用 `/material-paper-deep-reading` 精读论文 Markdown，然后用 `/baoyu-post-to-wechat` 通过浏览器发布到微信公众号草稿箱/公众号。

用户原话中可能写成 `/material-paper-deap-reading`，实际可用 skill 名称是：

- `material-paper-deep-reading`
- `baoyu-post-to-wechat`

## 本次代表性输入

论文 Markdown：

```text
C:\Users\Krauss\Documents\Obsidian Vault\raw\articles\Self-feeding formation of atomically thin molybdenum nanoflakes on MoS2 monolayer.md
```

期望输出目录遵循 `material-paper-deep-reading` 规则：

```text
C:\Users\Krauss\Documents\文献精读\output\YYYY-MM-DD_{期刊缩写}_{关键词}\文献精读.md
```

本对话框中该论文已有相近输出目录：

```text
C:\Users\Krauss\Documents\文献精读\output\2026-07-14_2DMaterials_MoNanoflakes\文献精读.md
```

若重新精读，按当天日期和论文实际期刊/关键词生成新目录，不必强行复用旧目录。

## 必读 skill

开始执行前，先完整读取以下两个文件：

```text
C:\Users\Krauss\Documents\文献精读\.codex\skills\material-paper-deep-reading\SKILL.md
C:\Users\Krauss\Documents\文献精读\.codex\skills\baoyu-post-to-wechat\SKILL.md
```

发布前还要读取当前项目配置：

```text
C:\Users\Krauss\Documents\文献精读\.baoyu-skills\baoyu-post-to-wechat\EXTEND.md
```

注意：不要把 `EXTEND.md` 中的 `app_secret` 或其他凭证复制到回复、日志说明或交接文档里。

## 工作流

### 1. 论文精读

读取用户给出的论文 Markdown 原文，严格按 `material-paper-deep-reading` 的结构生成中文精读稿。输出必须保存为：

```text
output\YYYY-MM-DD_{期刊缩写}_{关键词}\文献精读.md
```

精读稿结构顺序：

```markdown
# 期刊缩写 | 论文中文题目 | 发表年份

<small>
论文题目：英文原题<br>
第一作者：<br>
通讯作者：<br>
通讯单位：<br>
DOI：https://doi.org/...
</small>

## 研究背景
...

## 图表解读
...

## 实验样品制备方法
...

## 知识拓展：创新点分析
...

## 一句话总结
...
```

### 2. 特别格式要求

用户明确要求：

> 将最开头的论文题目，第一作者，通讯作者，通讯单位，DOI 每个用行隔开。

因此，`<small>...</small>` 内部必须保持每个字段独占一行，不要压成一行，也不要写成同一段。由于公众号 HTML 会折叠 `<small>` 内的普通换行，除最后一个 `DOI：` 字段外，每行末尾必须添加 `<br>` 强制换行。

正确格式：

```markdown
<small>
论文题目：Self-feeding formation of atomically thin molybdenum nanoflakes on MoS₂ monolayer<br>
第一作者：...<br>
通讯作者：...<br>
通讯单位：...<br>
DOI：https://doi.org/...
</small>
```

不要输出 `论文信息` 作为小标题。

### 3. 化学式下标/上标保留要求

原始论文 Markdown 正文中常含有 HTML 下标/上标，例如 `MoSi <sub>2</sub> N <sub>4</sub>`、`H <sub>2</sub>`、`NH <sub>3</sub>`、`cm <sup>2</sup> V <sup>−1</sup> s <sup>−1</sup>`。生成 `文献精读.md` 时，正文展示优先转换为 Unicode 下标/上标，例如 `MoSi₂N₄`、`H₂`、`NH₃`、`cm² V⁻¹ s⁻¹`，不要压平成普通数字。

执行要求：

- 从原文提取材料名、气体、试剂、器件结构和性能单位时，将常见 `<sub>...</sub>` / `<sup>...</sup>` 表达转换为 Unicode 下标/上标。
- 常见表达应写作：`MoSi₂N₄`、`WSi₂N₄`、`MSi₂N₄`、`MoS₂`、`WS₂`、`WSe₂`、`PtSe₂`、`H₂`、`NH₃`、`FeCl₃`、`HfO₂`、`C₃`、`cm² V⁻¹ s⁻¹`、`10⁶`、`μm⁻¹`。
- 标题、摘要、论文英文题目、Figure 标题/图注、Figure 图片 alt、Figure 解读、实验步骤、创新点和一句话总结中都要保留下标/上标。
- 公众号发布脚本会把 frontmatter `title` 写入公众号标题栏；frontmatter `title` 应与正文一级标题文本一致，不要为了公众号标题另造一份短标题。
- 发布前检查关键化学式不应残留为 HTML 或纯文本形式，例如 `MoSi <sub>2</sub> N <sub>4</sub>`、`MoSi2N4`、`WSi2N4`、`MSi2N4`、`PtSe2`、`NH3`、`H2`、`FeCl3`、`HfO2`。
- 只有 Unicode 无法清晰表达的复杂公式，才退回 HTML 或原文格式，并尽量保持公式整体可读。
- 只在展示文本中替换化学式；不要修改图片文件名、相对路径或 DOI/URL。

### 4. Figure 插入要求

公众号草稿必须包含论文主文 Figure 图片，且图片要插入到对应 Figure 解读位置。默认只处理主文 Figure，不处理 Supplementary Figure / Extended Data Figure，除非用户另行要求。

执行步骤：

1. 从原文 Markdown 中提取 Obsidian 图片引用，例如：

```markdown
![[41563_2026_2669_Fig1_HTML.png|Fig. 1: CVD growth of wafer-scale monolayer MoSi2N4 single crystals.]]
```

2. 在 Obsidian Vault 中定位对应图片文件。常见位置是：

```text
C:\Users\Krauss\Documents\Obsidian Vault
```

如果图片不在该目录，使用文件名在 Vault 内递归查找。

3. 在精读输出目录下创建 `figures\` 子目录，并将主文 Figure 图片复制进去，例如：

```text
output\YYYY-MM-DD_{期刊缩写}_{关键词}\figures\41563_2026_2669_Fig1_HTML.png
```

4. 在 `文献精读.md` 中，将每张图以标准 Markdown 图片语法插入到对应 `### Figure N...` 标题下方，Figure 解读正文之前：

```markdown
### Figure 1. 晶圆级单层 MoSi2N4 单晶的 CVD 生长

![Fig. 1: CVD growth of wafer-scale monolayer MoSi2N4 single crystals.](figures/41563_2026_2669_Fig1_HTML.png)

Figure 1 围绕……
```

5. 发布前检查：

- `文献精读.md` 中标准 Markdown 图片引用数量应等于主文 Figure 数量。
- 每个图片路径必须相对 `文献精读.md` 所在目录可解析到真实文件。
- 图片顺序必须与 Figure 1、Figure 2、Figure 3……一致。
- 保持“Figure 标题 → Figure 图片 → Figure 解读”的顺序。

### 5. 发布方式

用户要求使用 `/baoyu-post-to-wechat` 的浏览器发布方式。即使项目配置里账号默认方法是 `api`，本工作流也应显式使用 browser 方法。

发布 Markdown 时不要提前转换成 HTML。`baoyu-post-to-wechat` 的浏览器发布脚本会自行完成 Markdown 转公众号 HTML、图片占位符处理、复制粘贴和浏览器交互。

当前项目默认主题已改回：

```text
default_theme: default
default_color: blue
```

发布时建议显式传入主题，避免被未来配置变化影响：

```powershell
npx -y bun "C:\Users\Krauss\Documents\文献精读\.codex\skills\baoyu-post-to-wechat\scripts\wechat-article.ts" --markdown "C:\Users\Krauss\Documents\文献精读\output\2026-07-14_2DMaterials_MoNanoflakes\文献精读.md" --theme default --color blue
```

如使用新生成的精读稿，把 `--markdown` 后面的路径替换为新文件的绝对路径。

### 6. 浏览器发布检查点

发布过程可能打开 Chrome 或复用已登录的公众号后台。需要确认：

- 若出现二维码登录页，让用户扫码登录。
- 确认文章标题、摘要和正文已进入公众号编辑器。
- 确认标题、摘要和正文中的化学式下标/上标使用 Unicode 呈现，而不是显示为普通数字或 HTML 标记。
- 确认发布日志显示识别到正确数量的图片，例如 `Found 5 images to insert`。
- 确认正文图片占位符已被逐一替换为真实 Figure；如果原文没有图片或精读稿未引用图片，则无需替换。
- 确认 Figure 图片位于对应 Figure 解读小节中，而不是集中堆在文首或文末。
- 确认开头 `<small>` 信息区中 `论文题目 / 第一作者 / 通讯作者 / 通讯单位 / DOI` 是逐行显示；除最后一个字段外，每行末尾应有 `<br>`。
- 确认最终保存到草稿箱，而不是直接群发。

完成后向用户报告：

```text
已用浏览器发布到微信公众号草稿箱。
输入文件：...
发布方式：Browser
主题：default / blue
```

## 常见问题

### API 白名单/IP 问题

本工作流指定浏览器发布，不依赖微信公众号 API 白名单，因此校园网出口 IP 变化通常不会影响发布。

如果用户后来要求 API 或 remote-api 发布，再按 `baoyu-post-to-wechat` 的 `SKILL.md` 处理，不要在浏览器发布流程中混用 API 参数。

### Raphael 主题

此前曾新增过 `raphael` 主题，但用户后来要求：

> `/baoyu-post-to-wechat` 的默认输出主题还是改回默认

因此本工作流默认用 `default` 主题。只有用户明确要求 Raphael 风格时，才传 `--theme raphael`。

### 论文信息缺失

如果论文原文没有明确给出共同第一作者、通讯单位或 DOI：

- 不要编造。
- 按 `material-paper-deep-reading` 规则写 `文中未明确说明`。
- DOI 若存在，统一写成 `https://doi.org/...` 格式。

## 推荐给下一个对话框的执行顺序

1. 读取两个 skill 的 `SKILL.md` 和项目 `EXTEND.md`。
2. 读取论文 Markdown 全文。
3. 生成并保存 `文献精读.md`。
4. 检查并修正标题、摘要、正文和 Figure 解读中的化学式下标/上标，确保常见表达转换为 Unicode。
5. 提取主文 Figure 图片，复制到输出目录 `figures\`，并在对应 Figure 小节插入标准 Markdown 图片引用。
6. 检查开头论文信息是否逐行分隔，且 `<small>` 内除最后一个字段外是否用 `<br>` 强制换行；检查关键化学式下标、Figure 图片数量、顺序和路径是否正确。
7. 使用 `wechat-article.ts --markdown ... --theme default --color blue` 走浏览器发布。
8. 确认发布日志识别到正确图片数量，并确认保存到公众号草稿箱后，简短汇报结果。
