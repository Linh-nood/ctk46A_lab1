import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    status: "Đang phát triển",
  },
  {
    title: "Ứng dụng Quản lý Công việc",
    description: "Ứng dụng Todo App với React và Local Storage",
    tech: ["React", "CSS Modules", "JavaScript"],
    status: "Hoàn thành",
  },
  {
    title: "API RESTful",
    description: "API quản lý sản phẩm với Node.js và Express",
    tech: ["Node.js", "Express", "MongoDB"],
    status: "Hoàn thành",
  },
  {
    title: "Chat Realtime",
    description: "Ứng dụng chat realtime với Socket.IO",
    tech: ["React", "Socket.IO", "Node.js"],
    status: "Đang phát triển",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Xin chào, tôi là Nguyễn Văn A
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Mình là một developer đam mê học tập và phát triển các ứng dụng web.
          Hãy khám phá các dự án và bài viết của mình!
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <Link
            href="/blog"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Đọc Blog
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Xem Dự Án
          </Link>
        </div>
      </div>

      {/* Projects Preview */}
      <div className="max-w-5xl mx-auto px-4 pb-12 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Các Dự Án Nổi Bật</h2>
          <p className="text-gray-500">Một số dự án mà mình đã hoặc đang làm</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Hoàn thành" ? "default" : "secondary"
                    }
                    className="flex-shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/projects"
            className="inline-block px-6 py-2 text-blue-600 hover:underline font-medium"
          >
            Xem tất cả dự án →
          </Link>
        </div>
      </div>
    </div>
  );
}
