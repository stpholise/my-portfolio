"use client";
const Header = () => {
  const scrollToSection = (val: string) => {
    
    document.getElementById(`${val.toLocaleLowerCase()}`)?.scrollIntoView({
      behavior: "smooth",
    });
    console.log(val);
  };
  return (
    <div className="h-20 w-full  z-40   sticky  top-4   ">
      <div className=" max-w-6xl  mx-auto flex justify-between items-center h-full bg-secondary w-full  sticky top-8 px-8 rounded-full">
        <div className=""></div>
        <div className="flex items-center justify-evenly gap-4 lg:gap-9 text-gray-100 text-sm font-medium">
          {nav.map((item, i) => (
            <button
              onClick={() => scrollToSection(item.label)}
              key={i}
              className=""
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const nav = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#projects",
    label: "Projects",
  },
];

export default Header;
