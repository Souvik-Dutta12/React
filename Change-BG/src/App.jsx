import { useState } from "react";

function App() {
  const [bgColor, setBGColor] = useState("bg-gray-900");
  const [chaiColor, setChaiColor] = useState("text-white");
  const [pColor, setPColor] = useState("text-emerald-500");
  const [themeColor, setThemeColor] = useState("text-gray-400");

  const applyTheme = (bg, chai, para, theme) => {
    setBGColor(bg);
    setChaiColor(chai);
    setPColor(para);
    setThemeColor(theme);
  };

  return (
    <div className={`h-screen flex flex-col ${bgColor} px-10 py-10`}>
      <div className={`text-7xl ${chaiColor} ml-50 mt-50`}>
        Chai aur React -- 04 Change Theme --
      </div>

      <p className={`text-xl mt-5 px-50 ${pColor}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo
        commodi laudantium consectetur corrupti odio soluta distinctio minus
        quos voluptatum, recusandae voluptas? Delectus eum perspiciatis maxime
        debitis qui numquam placeat suscipit ratione. Laudantium obcaecati
        fugiat amet eos, libero blanditiis velit.
      </p>

      <div className={`text-xl ${themeColor} rounded-full mt-3 ml-50`}>
        Change Theme ⬇️
      </div>

      <div className="flex gap-5 mt-5 ml-50 ">
        {/* Dark Theme */}
        <button
          onClick={() =>
            applyTheme("bg-zinc-900", "text-white", "text-emerald-400", "text-gray-400")
          }
          className="cursor-pointer outline h-10 w-10 rounded-full bg-zinc-900 hover:bg-zinc-950 shadow-lg"
        ></button>

        {/* Light Theme */}
        <button
          onClick={() =>
            applyTheme("bg-white", "text-black", "text-gray-600", "text-gray-800")
          }
          className="cursor-pointer outline h-10 w-10 rounded-full bg-white hover:bg-slate-200 shadow-lg border"
        ></button>

        {/* Green Theme */}
        <button
          onClick={() =>
            applyTheme("bg-emerald-500", "text-gray-900", "text-emerald-950", "text-gray-900")
          }
          className="cursor-pointer outline h-10 w-10 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg"
        ></button>

        {/* Blue Theme */}
        <button
          onClick={() =>
            applyTheme("bg-blue-500", "text-gray-900", "text-white", "text-gray-900")
          }
          className="cursor-pointer outline h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 shadow-xl"
        ></button>
      </div>
    </div>
  );
}

export default App;
