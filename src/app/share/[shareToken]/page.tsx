"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Album {
  album_id: string;
  album_name: string;
  album_description: string;
  is_public: boolean;
}

interface Photo {
  photo_id: string;
  photo_url: string;
  photo_caption: string;
}

interface SharedItem {
  type: "album" | "photo";
  album?: Album;
  photos?: Photo[];
  photo?: Photo;
}

const SharePage = ({ params }: { params: { shareToken: string } }) => {
  const { shareToken } = params;
  const [sharedItem, setSharedItem] = useState<SharedItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSharedItem = async () => {
      try {
        const response = await axios.get(`/share/${shareToken}`);
        setSharedItem(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shared item:", err);
        setError("Invalid or expired share token.");
        setLoading(false);
      }
    };

    fetchSharedItem();
  }, [shareToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (sharedItem?.type === "album" && sharedItem.album) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{sharedItem.album.album_name}</h1>
        <p className="text-gray-600">{sharedItem.album.album_description}</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {sharedItem.photos?.map((photo) => (
            <div key={photo.photo_id}>
              <img src={photo.photo_url} alt={photo.photo_caption} className="w-full h-auto" />
              <p className="text-center">{photo.photo_caption}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sharedItem?.type === "photo" && sharedItem.photo) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Shared Photo</h1>
        <img src={sharedItem.photo.photo_url} alt={sharedItem.photo.photo_caption} className="w-full h-auto mt-4" />
        <p className="text-center mt-2">{sharedItem.photo.photo_caption}</p>
      </div>
    );
  }

  return null;
};

export default SharePage;
