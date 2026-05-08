import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Character } from "@/types/character";

interface CharacterDetailPageProps {
  params: Promise<{ id: string }>;
}

async function getCharacter(id: string): Promise<Character> {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      if (res.status === 404) {
        notFound();
      }
      throw new Error("Không thể tải thông tin nhân vật");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
}

function getStatusColor(status: string): string {
  switch (status) {
    case "Alive":
      return "bg-green-100 text-green-700";
    case "Dead":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default async function CharacterDetailPage({
  params,
}: CharacterDetailPageProps) {
  const { id } = await params;
  const character = await getCharacter(id);

  return (
    <div className="space-y-8">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/characters"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Quay lại danh sách
        </Link>
      </div>

      {/* Character Detail */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Character Image */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden">
              <div className="relative w-full h-80 bg-gray-200">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Card>
          </div>

          {/* Character Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">{character.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className={getStatusColor(character.status)}>
                    {character.status}
                  </Badge>
                  <Badge variant="outline">{character.species}</Badge>
                  <Badge variant="outline">{character.gender}</Badge>
                </div>

                {character.type && (
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Loại:</strong> {character.type}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Location Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Nơi xuất xứ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-medium">{character.origin.name}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Vị trí hiện tại</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-medium">
                    {character.location.name}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Episodes */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  Số tập xuất hiện: {character.episode.length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {character.episode.slice(0, 10).map((episode, index) => {
                    // Extract episode number from URL
                    const episodeNumber = episode.split("/").pop();
                    return (
                      <Badge key={index} variant="secondary">
                        Tập {episodeNumber}
                      </Badge>
                    );
                  })}
                  {character.episode.length > 10 && (
                    <Badge variant="outline">+{character.episode.length - 10}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Thông tin bổ sung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Tạo ngày:</strong>{" "}
                  {new Date(character.created).toLocaleDateString("vi-VN")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
