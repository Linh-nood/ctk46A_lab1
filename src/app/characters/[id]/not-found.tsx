import Link from "next/link";

export default function CharacterNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4 px-4">
      <h2 className="text-3xl font-bold text-gray-800">
        Nhân vật không tồn tại
      </h2>
      <p className="text-gray-600 max-w-md">
        Nhân vật bạn tìm kiếm không tồn tại hoặc đã bị xóa khỏi cơ sở dữ liệu.
      </p>
      <Link
        href="/characters"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Quay lại danh sách
      </Link>
    </div>
  );
}
