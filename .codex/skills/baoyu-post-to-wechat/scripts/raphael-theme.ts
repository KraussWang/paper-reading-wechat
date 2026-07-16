const DEFAULT_ACCENT = "#0066cc";
const FONT_STACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

function escAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function colorOrDefault(color?: string): string {
  return color && color.trim() ? color.trim() : DEFAULT_ACCENT;
}

function styleAttr(style: string): string {
  return ` style="${escAttr(style)}"`;
}

function replaceTagStyle(html: string, tag: string, style: string): string {
  const pattern = new RegExp(`<${tag}\\b([^>]*)>`, "gi");
  return html.replace(pattern, (_match, attrs: string) => {
    const cleaned = attrs.replace(/\sstyle=(?:"[^"]*"|'[^']*')/gi, "");
    return `<${tag}${cleaned}${styleAttr(style)}>`;
  });
}

function replaceClassStyle(html: string, tag: string, className: string, style: string): string {
  const pattern = new RegExp(`<${tag}\\b([^>]*\\bclass=(?:"[^"]*\\b${className}\\b[^"]*"|'[^']*\\b${className}\\b[^']*')[^>]*)>`, "gi");
  return html.replace(pattern, (_match, attrs: string) => {
    const cleaned = attrs.replace(/\sstyle=(?:"[^"]*"|'[^']*')/gi, "");
    return `<${tag}${cleaned}${styleAttr(style)}>`;
  });
}

function addMacCodeDots(html: string): string {
  const withoutExistingDots = html.replace(/<span\b[^>]*\bclass=(?:"[^"]*\bmac-sign\b[^"]*"|'[^']*\bmac-sign\b[^']*')[\s\S]*?<\/span>/gi, "");
  const dots = '<div style="margin-bottom: 12px; white-space: nowrap;"><span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #ff5f56; margin-right: 6px;"></span><span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; margin-right: 6px;"></span><span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #27c93f;"></span></div>';
  return withoutExistingDots.replace(/<pre\b([^>]*)>(?!\s*<div style="margin-bottom: 12px; white-space: nowrap;">)/gi, `<pre$1>${dots}`);
}

export function applyRaphaelTheme(html: string, accent?: string): string {
  const primary = colorOrDefault(accent);
  let output = html;

  output = replaceTagStyle(
    output,
    "body",
    `padding: 24px 20px 48px 20px; background-color: #ffffff !important; max-width: 100%; margin: 0 auto; font-family: ${FONT_STACK}; font-size: 16px; line-height: 1.7 !important; color: #1d1d1f !important; word-wrap: break-word;`,
  );
  output = replaceTagStyle(
    output,
    "section",
    `font-family: ${FONT_STACK}; font-size: 16px; line-height: 1.7 !important; text-align: left; color: #1d1d1f !important; background-color: #ffffff !important;`,
  );
  output = replaceTagStyle(output, "h1", "font-size: 32px; font-weight: 700; color: #111 !important; line-height: 1.3 !important; margin: 38px 0 16px; letter-spacing: 0; text-align: left;");
  output = replaceTagStyle(output, "h2", "font-size: 26px; font-weight: 600; color: #111 !important; line-height: 1.35 !important; margin: 32px 0 16px; padding: 0; background: transparent; text-align: left; display: block;");
  output = replaceTagStyle(output, "h3", "font-size: 21px; font-weight: 600; color: #1d1d1f !important; line-height: 1.4 !important; margin: 28px 0 14px; padding: 0; border: none;");
  output = replaceTagStyle(output, "h4", `font-size: 18px; font-weight: 600; color: ${primary} !important; line-height: 1.45 !important; margin: 24px 0 12px;`);
  output = replaceTagStyle(output, "h5", `font-size: 16px; font-weight: 600; color: ${primary} !important; line-height: 1.45 !important; margin: 22px 0 10px;`);
  output = replaceTagStyle(output, "h6", `font-size: 16px; font-weight: 600; color: ${primary} !important; line-height: 1.45 !important; margin: 20px 0 10px;`);
  output = replaceTagStyle(output, "p", "margin: 18px 0 !important; line-height: 1.7 !important; color: #1d1d1f !important; letter-spacing: 0;");
  output = replaceTagStyle(output, "strong", "font-weight: 700; color: #000 !important;");
  output = replaceTagStyle(output, "ul", "margin: 16px 0; padding-left: 28px; list-style-type: disc !important; list-style-position: outside; color: #1d1d1f !important;");
  output = replaceTagStyle(output, "ol", "margin: 16px 0; padding-left: 28px; list-style-type: decimal !important; list-style-position: outside; color: #1d1d1f !important;");
  output = replaceTagStyle(output, "li", "display: list-item; margin: 8px 0; line-height: 1.7 !important; color: #1d1d1f !important;");
  output = replaceTagStyle(output, "blockquote", `margin: 24px 0; padding: 16px 20px; background-color: #f5f5f7 !important; border-left: 4px solid ${primary}; color: #555 !important; border-radius: 4px; font-style: normal;`);
  output = replaceTagStyle(output, "img", "display: block; max-width: 100%; height: auto; margin: 0 auto !important; padding: 8px !important; border-radius: 14px !important; box-sizing: border-box; box-shadow: 0 12px 28px rgba(15,23,42,0.18), 0 2px 8px rgba(15,23,42,0.12); border: 1px solid rgba(255,255,255,0.75);");
  output = replaceTagStyle(output, "pre", "margin: 24px 0; padding: 20px; background-color: #f5f5f7 !important; border-radius: 8px; overflow-x: auto; font-size: 12px !important; line-height: 1.5 !important; font-variant-ligatures: none; tab-size: 2;");
  output = replaceClassStyle(output, "code", "codespan", `font-family: "SF Mono", Consolas, monospace; padding: 3px 6px; background-color: #f5f5f7 !important; color: ${primary} !important; border-radius: 4px; font-size: 12px !important; line-height: 1.5 !important;`);
  output = replaceClassStyle(output, "code", "hljs", "display: block; font-size: inherit !important; line-height: inherit !important; font-style: normal !important; white-space: pre; word-break: normal; overflow-wrap: normal;");
  output = replaceTagStyle(output, "table", "width: 100%; margin: 24px 0; border-collapse: collapse; font-size: 15px; color: #1d1d1f !important;");
  output = replaceTagStyle(output, "thead", "font-weight: 600; color: #1d1d1f !important;");
  output = replaceTagStyle(output, "tr", "border: none;");
  output = replaceTagStyle(output, "th", "background-color: #f5f5f7 !important; padding: 12px 16px; text-align: left; font-weight: 600; color: #1d1d1f !important; border: 1px solid #e0e0e0;");
  output = replaceTagStyle(output, "td", "padding: 12px 16px; border: 1px solid #e0e0e0; color: #1d1d1f !important;");
  output = replaceTagStyle(output, "hr", "margin: 36px auto; border: none; height: 1px; background-color: #eaeaea !important; width: 100%;");
  output = addMacCodeDots(output);

  return output;
}
