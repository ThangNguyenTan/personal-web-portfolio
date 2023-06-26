import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { experiences } from "@/data/exp";
import ExpItem from "@/components/ExpItem";
import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="py-6 px-6 md:py-12 md:px-12 lg:px-36 lg:py-24">
      <div className="container mx-auto px-4 grid grid-cols-6">
        <div className="col-span-6 md:col-span-6 xl:col-span-4">
          <h1 className="text-4xl xl:text-5xl font-black">
            Thang <span className="text_pink">{`"Victor"`}</span> Nguyen <br />{" "}
            <span className="text-2xl font-medium">
              <span className="text_pink">Full-stack Web Developer</span>
            </span>
          </h1>
          <h2 className="mt-4 font-normal text-gray-300">
            I build accessible, inclusive products and digital experiences for
            the web.
          </h2>
          <div className="flex gap-6 mt-6">
            <Link href="https://github.com/ThangNguyenTan" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/thang-nguyen-tan-a55239187/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </Link>
            <Link href="mailto:nguyentanthang1118@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faMailBulk} className="text-2xl" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1rMzeDif-mXmgBR-5uFRmndZ83CgMzvDx/view?usp=sharing"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFilePdf} className="text-2xl" />
            </Link>
          </div>
          <h3 className="text-3xl font-bold my-10">ABOUT</h3>
          <p className="font-normal text-gray-300 leading-[1.7rem]">
            Back in 2018, when I was a youngster who just graduated from high
            school, I was pretty curious about how the web and all of its
            content work.
            <br />
            <span className="block my-2"></span>I decided to enroll in a{" "}
            <Link href="https://greenwich.edu.vn/en/english/" target="_blank">
              university
            </Link>{" "}
            where I dived head first into an infinite and endless rabbit hole of
            coding and web development. Fast-forward to today, I am currently
            working on building software for{" "}
            <Link href="https://www.unified.com/" target="_blank">
              an advertising agency
            </Link>
            . My main focus these days is building features and maintaining
            products for our clients at{" "}
            <Link href="https://www.nashtechglobal.com/" target="_blank">
              Nashtech
            </Link>
            .
            <br />
            <span className="block my-2"></span>
            In my free time, I usually love to study, read news articles, and
            watch more tutorial videos on Youtube (especially content that
            related to{" "}
            <Link
              href="https://en.wikipedia.org/wiki/JavaScript"
              target="_blank"
            >
              JavaScript
            </Link>
            ) to catch up with the flow of the technologies and try to learn new
            things that are right for the jobs.
          </p>
          <h3 className="text-3xl font-bold my-10">EXPERIENCE</h3>
          {experiences.map((experience) => (
            <ExpItem key={experience.jobTitle} expItem={experience} />
          ))}
          <h3 className="text-3xl font-bold my-10">PROJECTS</h3>
          {projects.map((project) => (
            <ProjectItem key={project.projectName} projectItem={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
