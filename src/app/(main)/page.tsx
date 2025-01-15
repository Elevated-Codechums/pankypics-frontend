"use client";

import axiosClient from "@/libs/axiosClient";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const LandingPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["landing-page"],
    queryFn: async () => {
      const response = await axiosClient.get(`/pages/landing-page`);
      return response.data;
    },
  });

  if (isLoading) return <div>Loading landing page...</div>;
  if (error)
    return <div>Error fetching landing page: {(error as Error).message}</div>;

  const { title, slices } = data;

  return (
    <div>
      <h1>{title}</h1>
      {slices.map(
        (
          slice: {
            heading: string;
            description: string;
            img: string;
          },
          index: number
        ) => (
          <section key={index}>
            <h2>{slice.heading}</h2>
            <p>{slice.description}</p>
            <Image
              key={index}
              src={slice.img}
              alt={`Slice image ${index}`}
              width={500}
              height={500}
            />
          </section>
        )
      )}
    </div>
  );
};

export default LandingPage;
