import Link from "next/link";
import React from "react";

const ExpItem = ({ expItem }) => {
  const { linkHref, timePeriod, jobTitle, jobDescriptionFunction } = expItem;

  return (
    <Link
      href={linkHref}
      target="_blank"
      className="grid grid-cols-4 gap-4 mb-8 px-4 py-4 bg-transparent box-item"
    >
      <div className="col-span-4 md:col-span-1">
        <p className="font-medium text-gray-400 text-sm pt-1">{timePeriod}</p>
      </div>
      <div className="col-span-4 md:col-span-3">
        <h2 className="font-bold text-lg">{jobTitle}</h2>
        <div className="mt-3 font-medium text-gray-400 text-base leading-[1.65rem]">
          {jobDescriptionFunction()}
        </div>
      </div>
    </Link>
  );
};

export default ExpItem;
