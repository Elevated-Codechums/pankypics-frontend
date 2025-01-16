"use client";

import { useState } from "react";
import Link from "next/link";

interface Album {
  id: string;
  title: string;
  category: string;
  coverImage: string;
}

export default function AlbumsPage() {
  // This is sample data - replace with your actual data fetching logic
  const [albums, setAlbums] = useState<Album[]>([
    {
      id: "1",
      title: "Wedding Collection",
      category: "Wedding",
      coverImage: "/sample-wedding.jpg",
    },
    {
      id: "2",
      title: "Nature Collection",
      category: "Nature",
      coverImage: "/sample-nature.jpg",
    },
    // Add more albums as needed
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={album.coverImage}
                alt={album.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{album.title}</h2>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {album.category}
                </span>
                <Link
                  href={`/admin/albums/edit/${album.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
