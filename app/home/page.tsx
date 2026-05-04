"use client";
import Image from "next/image";
import FloatingParticles from "../_components/cells/FloatingParticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faBugSlash,
  faGraduationCap,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Field from "../_components/cells/Field";
//  import ErrorMessage from "../_components/cells/ErrorMessage";
// import CircularGallery from "./_components/CircularGallery";
import StatNumber from "../_components/cells/StatNumber";
import SkillSlider from "../_components/cells/SkillSlider";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";
import StickyScroll from "./_components/StickyScroll";

 
 

interface InputValuesType {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Page = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<InputValuesType>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is Required";
        if (value.length < 3) return "Name must be more than three letters";
        return "";

      case "email":
        if (!value) return "Email is Required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email";
        return "";

      case "phone":
        if (!value) return "Phone is requred";
        if (!/^\d{10,15}$/.test(value)) return "Invalid phone number";
        return "";

      case "message":
        if (!value) return "Message is requred";

      default:
        return "";
    }
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name == "phone") {
      newValue = value.replace(/[^\d+]/g, "");
      if (newValue.includes("+")) {
        newValue = "+" + newValue.replace(/\+/g, "").replace(/^\+/, "");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    const error = validateField(name, value);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prev) => ({ ...prev, [name]: error }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((err) => err);

    const validateAllField = () =>
      Object.entries(formData).map(([name, value]) => {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      });
    validateAllField();

    if (hasErrors) return;

    try {
      setLoading(true);
      const response = await fetch(
        "https://formsubmit.co/stpholise@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            ...formData,
          }),
        },
      );
      const data = await response.json();
      toast.success(data || "Message sent Successfully");
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        toast.error("Message was not sent");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen -mt-20  ">
      <div className=" py-14 max-w-6xl mx-auto flex flex-col gap-12">
        <div className="hero-section  min-h-screen flex item-center relative overflow-hidden py-4">
          <div className="hero-background absolute inset-0    -z-10">
            <div className="code-grid-bg absolute inset-0   opacity-5 "></div>

            <FloatingParticles />
            <div
              className="floating-particles absolute text-xl inset-0 overflow-hidden"
              id={"particles"}
            ></div>
          </div>
          <div className="mx-auto md:py-16 lg:py-8 px-4">
            <div className="flex  sm:flex-row flex-col-reverse justify-center items-center mt-26 sm:mt-0 gap-8 py-8">
              <div className="flex mt-26 sm:mt-0 flex-col gap-5">
                <h2 className="text-2xl">
                  Hello I am Stephen Olise Osa-afiana
                </h2>
                <p className="">
                  Frontend Developer @{" "}
                  <a href="https://muzzlabtech.com/" target="_blank">
                    Muzzlab Technologies
                  </a>
                </p>
                <div className="mt-8">
                  <div className="">
                    <button type="button">Get in touch</button>
                    <button type="button">View projects</button>
                  </div>
                </div>
                <div className="  ">
                  <div className="hero-social flex gap-4">
                    <Link
                      href="#"
                      className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
                      title="GitHub"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-2xl text-purple-1"
                      />
                    </Link>
                    <Link
                      href="#"
                      className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
                      title="GitHub"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-2xl text-purple-1"
                      />
                    </Link>
                    <Link
                      href="#"
                      className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
                      title="GitHub"
                    >
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className="text-2xl text-purple-1"
                      />
                    </Link>

                    <Link
                      href="#"
                      className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
                      title="GitHub"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-2xl text-purple-400"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hero-image-wrapper relative flex items-center justify-center">
                <div className="hero-image-container relative size-50 sm:size-100">
                  <div className="profile-image-glow absolute top-1/2 left-1/2 transform -translate-1/2 size-[120%] rounded-full bg-radial-[at_50%] from-purple-900 from-0% to-70% to-transparent animate-pulse -z-1"></div>
                  <div className="bg-radial-[at_50%] absolute top-1/2 left-1/2 transform -translate-1/2 from-secondary-light to-primary  flex items-center justify-center  border-purple-900 border-4 shadow-purple-800   size-90  rounded-full  bg-center ">
                    <Image
                      src={"/me.png"}
                      alt="stephen olise"
                      width={400}
                      height={1000}
                      className="size-full rounded-full overflow-hidden "
                    />
                  </div>
                  <div className="floating-badge badge-1 absolute -top-2/8 sm:top-1/5 left-8  transform -translate-1/2 bg-gray-700 border-gray-400 border-2 rounded-2xl py-2 px-3 flex items-center font-semibold gap-2 text-gray-200 shadow-md shadow-gray-600 animate-[bounce_4s_infinite] min-w-50 w-fit  transition-all">
                    <FontAwesomeIcon
                      icon={faReact}
                      className="text-3xl text-gray-200 hover:text-purple-500"
                    />

                    <div className="badge-content">
                      <span className="badge-title block font-medium text-gray-200 text-base">
                        React
                      </span>
                      <span className="badge-libs text-xs whitespace-nowrap">
                        Redux, Router, Hooks
                      </span>
                    </div>
                  </div>
                  <div className=" h-fit floating-badge badge-1 absolute  -bottom-3/6 -right-3/6 sm:right-1 lg:top-3/7 lg:-right-2/5 bg-gray-700  border-gray-400 border-2 rounded-2xl py-2 px-4 flex items-center font-semibold gap-2 text-gray-200 shadow-md shadow-gray-600 animate-floating-badge min-w-50  transition-all">
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      className="text-3xl text-gray-200 hover:text-purple-500"
                    />
                    <div className="badge-content">
                      <span className="badge-title block text-base font-medium">
                        Next.js
                      </span>
                      <span className="badge-libs whitespace-nowrap text-xs">
                        App Router, SSR, TypeScript
                      </span>
                    </div>
                  </div>
                  <div className=" h-fit floating-badge badge-1 absolute top-6/7 left-0 transform -translate-1/2 bg-gray-700 border-gray-400 border-2 rounded-2xl py-2 px-4 flex items-center font-semibold gap-2 text-gray-200 shadow-md shadow-gray-600 animate-floating-badge min-w-50 w-fit  transition-all">
                    <FontAwesomeIcon
                      icon={faJs}
                      className="text-3xl text-gray-200 hover:text-purple-500"
                    />
                    <div className="badge-content">
                      <span className="badge-title block text-base font-medium">
                        JavaScript
                      </span>
                      <span className="badge-libs text-xs">
                        ES6+, TypeScript,
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-2xl mx-auto lg:mt-8 md:mt-12 ">
              <p className="">
                I build modern, scalable web applications using React, Next.js,
                TypeScript, and other modern technologies.
              </p>
              <p className="">
                My focus is creating clean user interfaces, high-performance
                applications, and solutions that provide real value to users.
              </p>
            </div>
          </div>
        </div>
        <div id="about" className="h-fit relative max-w-6xl mx-auto py-8 ">
          <h3 className="text-center text-2xl my-8">About me</h3>
          <div className="flex  items-center sm:gap-8 px-4 lg:gap-12 justify-center">
            <div className="bg-radial-[at_50%] relative hidden sm:flex  from-secondary-light to-primary   items-center justify-center     shadow-purple-800   size-90     bg-center ">
              <Image
                src={"/me.png"}
                alt="stephen olise"
                width={400}
                height={1000}
                className="size-full   overflow-hidden "
              />
            </div>
            <div className="max-w-lg flex flex-col gap-4 h-full">
              <div className=" relative w-full h-full -z-1">
                <div className="wrapper_1 absolute m-auto size-20 left-1/2 top-1/2 transform -translate-1/2">
                  <div className="circle absolute top-1/2 left-1/2 transform -translate-1/2 size-10 border-gray-200 border rounded-full animate-[ping_1.5s_1.2s_infinite_linear]"></div>
                  <div className="circle absolute top-1/2 left-1/2 transform -translate-1/2 size-15 border-gray-200 border rounded-full animate-[ping_1.5s_1.4s_infinite_linear]"></div>
                  <div className="circle inset-0 size-20 absolute w-full h-full border border-gray-300 rounded-full animate-[ping_1.5s_1.6s_infinite_linear]"></div>
                </div>
                <div className="wrapper_1 absolute m-auto size-30 left-1/2 top-2/3  ">
                  <div className="circle size-20 absolute top-1/2 left-1/2 transform -translate-1/2  border-gray-200 border rounded-full animate-[ping_1.5s_1.2s_infinite_linear]"></div>
                  <div className="circle size-24 absolute top-1/2 left-1/2 transform -translate-1/2  border-gray-200 border rounded-full animate-[ping_1.5s_1.4s_infinite_linear]"></div>
                  <div className="circle inset-0 size-30 absolute w-full h-full border border-gray-300 rounded-full animate-[ping_1.5s_1.6s_infinite_linear]"></div>
                </div>
              </div>
              <h3 className=" text-xl font-medium ">
                Hi, I&apos;m Osa-afiana Stephen Olise, based in Nigeria
              </h3>
              <p className="">
                I&apos;m a passionate Frontend/Web developer, with extensive
                knowledge and years of experience, in building mordern web
                applications and working with web technologies and creating
                beautiful user interfaces.
              </p>
              <div className="  mt-8 flex gap-4 justify-center">
                <div className="h-28 w-30 p-3 flex flex-col gap-2 py-8 items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 ">
                  <StatNumber target={12} />
                  <p>Projects</p>
                </div>
                <div className="h-28 w-30 p-3 flex flex-col gap-2 py-8 items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 ">
                  <StatNumber target={3} />
                  <p>Years Experience</p>
                </div>
                <div className="h-28 w-30 p-3 flex flex-col gap-2 py-8 items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 ">
                  <StatNumber target={18} />
                  <p>Projects</p>
                </div>
              </div>
              <div className=" mt-4 ">
                {" "}
                <a
                  href="/int_cv_9_02_2026.pdf"
                  download={"Osa-afiana_stephen_olise_cv.pdf"}
                  className="flex px-4 py-1 h-9 items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 text-sm font-medium "
                >
                  Download cv
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="skills" className="max-w-6xl px-4 py-8">
          <h3 className="mb-8 text-2xl font-bold text-center">Skills </h3>
          <div className="flex gap-8 flex-wrap max-w-6xl ">
            <div className="min-w-80 flex-1 p-5 rounded-xl border-gray-200 border bg-gray-800 shadow-2xl flex flex-col gap-8">
              <h4 className="text-lg font-semibold">Frontend Developemnt</h4>
              <div className=" flex flex-col gap-4 md:gap-8">
                <SkillSlider label="HTML5" level={90} />

                <SkillSlider label="CSS" level={90} />

                <SkillSlider label="JavaScript" level={90} />

                <SkillSlider label="React" level={90} />

                <SkillSlider label="Typescript" level={90} />

                <SkillSlider label="Next.js" level={80} />
              </div>
            </div>
            <div className="min-w-80 flex-1 p-5 rounded-xl border-gray-200 border bg-gray-800 shadow-2xl flex flex-col gap-8">
              <h4 className="text-lg font-semibold">UI/Styling</h4>
              <div className=" flex flex-col gap-4 md:gap-8">
                <SkillSlider label="TailwindCSS" level={90} />

                <SkillSlider label="Animation" level={95} />

                <SkillSlider
                  label="Responsive & Mobile-First Design"
                  level={90}
                />

                <SkillSlider label="Daisy UI" level={90} />
              </div>
            </div>
            <div className="min-w-80 flex-1 p-5 rounded-xl border-gray-200 border bg-gray-800 shadow-2xl flex flex-col gap-8">
              <h4 className="text-lg font-semibold">Data & API Handling</h4>
              <div className=" flex flex-col gap-4 md:gap-8">
                <SkillSlider label="REST APIs" level={90} />

                <SkillSlider label="Fetch API / Axios" level={95} />

                <SkillSlider label="Redux" level={90} />

                <SkillSlider label="Basic Auth (JWT)" level={90} />

                <SkillSlider label="Zustand" level={90} />
              </div>
            </div>
            <div className="min-w-80 flex-1 p-5 rounded-xl  border-gray-200 border bg-gray-800 shadow-2xl flex flex-col gap-8">
              <h4 className="text-lg font-semibold">Testing</h4>
              <div className=" flex flex-col gap-4 md:gap-8">
                <SkillSlider label="Vitest" level={90} />

                <SkillSlider label="Unit Testing" level={95} />
              </div>
            </div>
            <div className="min-w-80 flex-1 p-5 rounded-xl border-gray-200 border bg-gray-800 shadow-2xl flex flex-col gap-8">
              <h4 className="text-lg font-semibold">Tools & Technologies</h4>
              <div className=" flex flex-col gap-4 md:gap-8">
                <SkillSlider label="Git & GitHub" level={90} />

                <SkillSlider label="NPM" level={95} />

                <SkillSlider label="Vite" level={95} />
              </div>
            </div>
          </div>
        </div> */}

        <div className="py-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold my-8 text-center ">
            {" "}
            What I Bring
          </h2>
          <div className=" py-2 flex flex-wrap px-4  gap-4 ">
            <div className="min-w-40 w-full flex text-center p-4  items-center gap-4 flex-col flex-1   justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 ">
              <FontAwesomeIcon
                icon={faCode}
                className="text-4xl mt-8 mb-2 text-purple-200"
              />
              <p className="">Clean, maintainable UI code</p>
            </div>
            <div className="min-w-40 w-full flex text-center p-4 items-center gap-4 flex-col flex-1  justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 ">
              <FontAwesomeIcon
                icon={faBugSlash}
                className="text-4xl mt-8 mb-2 text-purple-200"
              />
              <p className="">Strong debugging skills</p>
            </div>
            <div className="min-w-40 w-full  flex p-4 text-center items-center gap-4 flex-col flex-1  justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 ">
              <FontAwesomeIcon
                icon={faClock}
                className="text-4xl mt-8 mb-2 text-purple-200"
              />
              <p className="">Real-world project experience (MERN stack)</p>
            </div>
            <div className="min-w-40 w-full flex p-4 text-center items-center gap-4 flex-col flex-1  justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 ">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-4xl mt-8 mb-2 text-purple-200"
              />
              <p className="">Continuous learning mindset</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl px-4 py-8 " id="projects">
          <h3 className="text-2xl font-bold my-8 text-center ">Projects </h3>
          <div className="">
            <StickyScroll />
          </div>
        </div>

        <div id="contact" className="bg-secondary rounded-2xl  p-8">
          <h3 className="text-center font-bold text-4xl m-12">Contact</h3>
          <div className="flex md:flex-row flex-col w-full justify-center max-w-5xl mx-auto  gap-12 md:gap-8">
            <div className="flex flex-col gap-8">
              <div className=" flex items-center gap-4 rounded-lg border-purple-300 border-2 max-w-sm w-full p-4 lg:p-8 ">
                <div className="bg-linear-90 from-purple-300 top purple-500 p-2 rounded-md">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-2xl lg:text-3xl"
                  />
                </div>
                <div className="">
                  <h5 className=" text-gray-200 text-sm">Email</h5>
                  <p className=" font-medium text-lg">stpholise@gmail.com</p>
                </div>
              </div>
              <div className=" flex items-center gap-4 rounded-lg border-purple-300 border-2 max-w-sm w-full p-4 lg:p-8 ">
                <div className="bg-linear-90 from-purple-300 top purple-500 p-2 rounded-md">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                </div>
                <div className="">
                  <h5 className="text-gray-200 text-sm">Phone</h5>
                  <p className="font-medium text-lg">+2347069309340</p>
                </div>
              </div>
              <div className=" flex items-center gap-4 rounded-lg border-purple-300 border-2 max-w-sm w-full p-4 lg:p-8 ">
                <div className="bg-linear-90 from-purple-300 top purple-500 p-2 rounded-md">
                  <FontAwesomeIcon icon={faLocation} className="text-2xl" />
                </div>
                <div className="">
                  <h5 className="text-gray-200 text-sm">Location</h5>
                  <p className="font-medium text-lg">Nigeria</p>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto max-w-lg relative"
            >
              {loading && (
                <div className=" absolute  inset-0 bg-gray-900">
                  <div className="w-4 h-4 top-1/2 left-1/2 transform -translate-1/2  rounded-full animate-loader bg-amber-600 animate-spin"></div>
                </div>
              )}{" "}
              <div className=" w-full flex flex-col gap-4 md:gap-6">
                <div className="">
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Field
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    className="border border-gray-600 bg-gray-300  p-2 w-full h-11 rounded-md outline-none  text-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs my-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    className="border border-gray-600 bg-gray-300 p-2 w-full h-11 rounded-md outline-none text-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs my-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFieldChange}
                    className="border border-gray-600 bg-gray-300  p-2 w-full h-11 rounded-md outline-none text-white"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs my-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleMessageChange}
                    className="border border-gray-600 bg-gray-300   p-2 w-full rounded outline-none text-white"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs my-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-auto cursor-pointer block py-2 h-11 w-full bg-linear-30 from-purple-300 to-purple-500     rounded-lg text-sm font-semibold text-white"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer min-h-60 bg-secondary w-full rounded-2xl">
        <div className="max-w-6xl mx-auto py-8 lg:py-12 px-4 flex  md:flex-row flex-col justify-between items-center gap-12">
          <div className="">
            <h3 className="text-2xl font-semibold mb-1">
              Osa-afiana Stephen Olise
            </h3>
            <h4 className="text-lg font-medium">Frontend Developer</h4>
          </div>
          <div className="hero-social flex gap-4">
            <Link
              href="#"
              className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl text-purple-1"
              />
            </Link>
            <Link
              href="#"
              className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-purple-1"
              />
            </Link>
            <Link
              href="#"
              className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-2xl text-purple-1"
              />
            </Link>

            <Link
              href="#"
              className="size-12 flex items-center justify-center bg-gray-700 border-purple-1 hover:border-purple-2 shadow-md shadow-purple-3 border-2 rounded-xl text-white decoration-0 "
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-purple-400"
              />
            </Link>
          </div>
        </div>
        <div className="px-4 text-center text-xs font-light text-gray-400 py-8">
          &copy; stepehen olise 2026
        </div>
      </div>
    </div>
  );
};

export default Page;
