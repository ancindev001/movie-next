"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Moviecard from "@/components/Moviecard";
import movieData from "@/services/data";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(movieData);
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-2xl gap-5 mx-auto flex flex-wrap justify-center sm:justify-start">
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
  );
}
