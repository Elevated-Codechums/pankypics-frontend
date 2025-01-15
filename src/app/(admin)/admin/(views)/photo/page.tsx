"use client";

import { cn } from "@/libs/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Album {
  photo_id: string;
  caption: string;
}

export default function PhotoView() {
  const { data, error, isLoading, isError, isFetched } = useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:4000/api/photos");
      console.log(data);
      return data;
    },
  });

  return (
    <div className="min-h-screen flex flex-col gap-5">
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <div className="bg-black text-white w-full py-20 px-20 flex flex-col items-center justify-center gap-5">
          <h3 className="text-5xl font-afacad font-bold">Photos</h3>
          <p className="text-lg font-raleway">
            Here are all the albums you&apos;ve created. Click on an album to
            view its photos.
          </p>
        </div>
        <div className="flex p-10 items-center justify-between w-full">
          <div className="text-xl">View By:</div>
          <div>
            <select className="bg-white border border-black rounded p-2">
              <option value="table">Table</option>
              <option value="grid">Grid</option>
            </select>
          </div>
        </div>
        <div className={cn("flex items-center justify-center w-full")}>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Something went wrong...</p>}
          {isFetched && (
            // <div
            //   className={cn("grid grid-cols-3 items-center justify-center p-5")}
            // >
            //   {data?.albums?.map((album: Album) => (
            //     <div
            //       className={cn("p-10 border rounded-md")}
            //       key={album.album_id}
            //     >
            //       <h5 className="text-3xl font-afacad">
            //         {album.album_name.replace(/-/g, " ")}
            //       </h5>
            //       <p className="font-raleway text-sm">
            //         {album.album_description}
            //       </p>
            //     </div>
            //   ))}
            // </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}
