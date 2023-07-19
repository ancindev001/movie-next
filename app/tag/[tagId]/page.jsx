"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Moviecard from "@/components/Moviecard";
import movieData from "@/services/data";
import Link from "next/link";

export default function Tag({ params }) {
  const [data, setData] = useState([]);
  const { tagId } = params;

  useEffect(() => {
    const byTag = movieData.filter((movie) => movie.tags.includes(tagId));
    setData(byTag);
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="bg-blue-600 text-white rounded px-2 py-2 mb-2 inline-block"
        >
          Back to home
        </Link>
        <div className="gap-5 flex flex-wrap justify-center sm:justify-start">
          {data.map((e, id) => (
            <Moviecard
              key={id}
              quality={e.quality}
              tags={e.tags}
              id={e.id}
              title={e.title}
              embedUrl={e.embedUrl}
              thumbnail={e.thumbnail}
              pageUrl={e.pageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
