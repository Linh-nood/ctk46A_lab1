export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.js",
    excerpt: "Tổng quan về App Router, Server Components và cách tổ chức dự án.",
    content:
      "Next.js là framework React dùng để xây dựng ứng dụng web hiện đại.\n\nĐiểm mạnh của Next.js trong bài này là App Router, cho phép tạo route bằng cấu trúc thư mục, hỗ trợ layout dùng chung và dynamic route.\n\nKhi làm bài thực hành, bạn nên chú ý các file đặc biệt như page.tsx, layout.tsx, loading.tsx và error.tsx.",
    date: "2026-04-13",
    category: "Công nghệ",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Học Tailwind CSS",
    excerpt: "Cách dùng utility classes để xây dựng giao diện nhanh và responsive.",
    content:
      "Tailwind CSS dùng cách tiếp cận utility-first: thay vì viết nhiều CSS riêng, bạn ghép giao diện bằng class nhỏ.\n\nTrong bài thực hành, Tailwind giúp dựng layout nhanh, tạo card, grid, spacing và responsive design bằng các breakpoint như sm, md, lg.\n\nCách này đặc biệt phù hợp cho các trang báo cáo và portfolio cá nhân.",
    date: "2026-04-13",
    category: "CSS",
  },
  {
    slug: "server-va-client-components",
    title: "Server Components và Client Components",
    excerpt: "Phân biệt khi nào dùng component render ở server hoặc client.",
    content:
      "Trong App Router, component mặc định là Server Component. Điều này phù hợp cho nội dung tĩnh, render nhanh và ít JavaScript phía client.\n\nKhi cần tương tác như onClick, useState hoặc truy cập localStorage, bạn phải dùng Client Component với 'use client'.\n\nBài thực hành 2 yêu cầu bạn nắm vững sự khác nhau này để tổ chức code đúng cách.",
    date: "2026-04-13",
    category: "React",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
