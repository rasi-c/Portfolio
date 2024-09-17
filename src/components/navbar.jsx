import { React, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  console.log(activeSection);

  const handleClick = (item, event) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    setActiveSection(item);
  };
  return (
    <div className="py-[20px] fixed left-0 right-0 top-0 z-50 transition-all duration-[350ms] ease-in-out bg-[#052038] flex items-center justify-center ">
      <div className="items-center flex justify-between max-w-[1320px] w-full">
        <div>
          <a href="/" className="text-[10px] font-bold text-white">Rasi</a>
        </div>
        <div className="flex gap-6">
          <ul className="flex gap-5 font-bold text-white items-center">
            {["Home", "About Me", "Projects", "Service", "Contact"].map(
              (item) => (
                <li>
                  <a
                    href="/"
                    className={`${activeSection === item ? `relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full`:'block'}`}
                    onClick={(event) => handleClick(item, event)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="w-36 h-12 bg-[#0788ff] p-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-transparent hover:border-[2px] border-white">
            <a href="/" className="text-white font-bold">Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
