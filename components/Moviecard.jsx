import Link from "next/link";
import React from "react";

const Moviecard = ({ title, thumbnail, id, quality, tags }) => {
  return (
    <div className="w-[300px] h-[200] bg-slate-100 shadow shadow-slate-400 rounded">
      <img
        className="w-full"
        src={thumbnail == null ? "/no-img.png" : thumbnail}
        alt=""
      />
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="font-bold inline">{title}</h1>{" "}
          <span className="bg-red-600 text-white rounded px-2 py-1 text-xs">
            {quality}
          </span>
        </div>
        <p className="text-xs">
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
        <button className="bg-blue-800 text-white px-4 py-1 rounded mt-3 shadow shadow-blue-400">
          <Link href={`/watch/${id}`}>watch</Link>
        </button>
      </div>
    </div>
  );
};

export default Moviecard;
