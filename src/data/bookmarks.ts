// 定义类型以便后续维护（可选，但推荐）
export interface Bookmark {
  title: string;
  url: string;
  desc: string;
  category: string; // 新增分类字段
}

export const bookmarks: Bookmark[] = [
  // --- 分类：常用工具 ---
  {
    title: "ChatGPT",
    url: "https://chat.openai.com",
    desc: "AI 助手",
    category: "常用工具"
  },
  {
    title: "DeepL",
    url: "https://www.deepl.com",
    desc: "最准的翻译",
    category: "常用工具"
  },
  // --- 分类：开发资源 ---
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    desc: "样式框架文档",
    category: "开发资源"
  },
  // ... 更多
];