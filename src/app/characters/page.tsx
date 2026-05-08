import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Character, CharactersResponse } from "@/types/character";

async function getCharacters(): Promise<Character[]> {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character?page=1", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Không thể tải danh sách nhân vật");
    }

    const data: CharactersResponse = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error("Lỗi khi tải dữ liệu từ Rick and Morty API");
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

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">Rick and Morty</h1>
          <p className="text-lg text-gray-600">
            Khám phá danh sách các nhân vật từ series Rick and Morty
          </p>
        </div>
      </div>

      {/* Characters Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <p className="text-gray-500 mb-6">
          Tổng cộng: <strong>{characters.length}</strong> nhân vật
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <Link key={character.id} href={`/characters/${character.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                {/* Character Image */}
                <div className="relative w-full h-48 bg-gray-200">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardHeader className="space-y-3">
                  <div className="space-y-1">
                    <CardTitle className="text-xl line-clamp-2">
                      {character.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {character.species}
                    </CardDescription>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className={getStatusColor(character.status)}>
                      {character.status}
                    </Badge>
                    <Badge variant="outline">{character.gender}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Origin:</strong>{" "}
                      <span className="line-clamp-1">{character.origin.name}</span>
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Location:</strong>{" "}
                      <span className="line-clamp-1">{character.location.name}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
