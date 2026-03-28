// import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
};

const StickyScroll = () => {
  //   const refs = useRef<(HTMLDivElement | null)[]>([]);
  //   const [active, setActive] = useState(0);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const screenMiddle = window.innerHeight / 2;

  //       refs.current.forEach((el, i) => {
  //         if (!el) return;
  //         const rect = el.getBoundingClientRect();

  //         if (rect.top < screenMiddle) {
  //           setActive(i);
  //         }
  //       });
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);
  return (
    <div className="grid sm:grid-cols-2 py-4">
      <div className="sticky top-40 h-100 xl:h-80 hidden md:block rounded-xl  overflow-hidden max-w-sm ">
        <h2 className=" text-4xl lg:text-5xl font-medium text-gray-200 mb-6 ">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-400 max-w-lg">
          A selection of projects that reflect the quality, attention to detail,
          and user-focused design I bring to every build.
        </p>{" "}
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div
            // ref={(el) => {
            //   refs.current[i] = el;
            // }}
            key={project.id}
            className={clsx(
              "p-4 border rounded-xl w-full max-w-lg",
              //   i == active ? "flex flex-col" : "opacity-0",
            )}
          >
            <Link href={project.live} target="_blank">
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full"
                height={400}
                width={400}
              />
            </Link>
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>

            <div className="flex gap-2 my-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-purple-600 shadow-purple-950 px-4  py-1 rounded-full w-fit "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-5">
              <a
                href={project.live}
                target="_blank"
                className="flex px-4 py-1 h-9 items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="flex px-4 py-1 h-9 items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 text-sm font-medium "
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Hotel Booking Website",
    description:
      "A modern hotel booking platform with room listings, availability checking, and responsive UI for guests.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    live: "https://your-hotel-app.vercel.app",
    github: "https://github.com/yourusername/hotel-app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing projects, skills, and contact form with smooth animations.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description:
      "Full-stack e-commerce app with cart, checkout, product filtering, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=2070&auto=format&fit=crop",
    live: "https://your-store.vercel.app",
    github: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "A productivity app that allows users to create, update, and track tasks with deadlines.",
    tech: ["React", "TypeScript", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    live: "https://your-task-app.vercel.app",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "Dashboard UI displaying analytics, user engagement, and charts for social media platforms.",
    tech: ["React", "Chart.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    live: "https://your-dashboard.vercel.app",
    github: "https://github.com/yourusername/dashboard",
  },
];

export default StickyScroll;
