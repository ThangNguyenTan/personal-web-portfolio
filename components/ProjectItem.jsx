import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ projectItem }) => {
  const { projectName, linkHref, demoImageURL, projectDescriptionFunction } =
    projectItem;

  return (
    <Link
      href={linkHref}
      target="_blank"
      className="grid grid-cols-4 gap-4 mb-8 px-4 py-4 bg-transparent box-item"
    >
      <div className="col-span-4 md:col-span-1">
        <Image
          src={demoImageURL}
          width={300}
          height={200}
          alt={projectName}
          className="rounded-xl"
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        <h2 className="font-bold text-lg">{projectName}</h2>
        <div className="mt-3 font-medium text-gray-400 text-base leading-[1.65rem]">
          {projectDescriptionFunction()}
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
