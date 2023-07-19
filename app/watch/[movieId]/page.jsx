import Header from "@/components/Header";
import React from "react";
import movieData from "@/services/data";
import Link from "next/link";

const page = ({ params }) => {
  const { movieId } = params;
  const { title, embedUrl, pageUrl, tags } = movieData.find(
    (e) => e.id == movieId
  );
  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="bg-blue-600 text-white rounded px-2 py-2 mb-2 inline-block"
        >
          Back to home
        </Link>
        <div className="bg-slate-200 p-5">
          <iframe
            className="w-full"
            height="315"
            src={embedUrl}
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
          <h1 className="my-2 font-extrabold">{title}</h1>
          <p>
            Page:{" "}
            <a className="text-blue-500" href={pageUrl}>
              {pageUrl}
            </a>
          </p>
          <p>
            Tags:{" "}
            {tags.length != 0
              ? tags.map((e) => (
                  <>
                    <Link className="text-blue-600" href={`/tag/${e}`}>
                      {e}
                    </Link>{" "}
                  </>
                ))
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
