import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {

  const navigate = useNavigate()

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-3">
          <img onClick={()=>navigate (-1)}
            className="w-6  rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img onClick={()=>navigate(1)}
            className="w-6 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="relative group bg-slate-200 hover:bg-slate-300 text-black text-[15px] px-4 py-1 h-8 items-center rounded-2xl hidden md:block cursor-pointer">
            Explorer Premium
            <span className="absolute top-[50%] mt-2 left-1/3 px-5 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all delay-300 whitespace-nowrap">
            Fitur Premium
            </span>
          </p>

          <p className="bg-slate-950 hover:bg-slate-900 py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install Apps
          </p>
          <p className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center">
            T
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer font-semibold hover:bg-white hover:text-black">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer hover:bg-white hover:text-black">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer hover:bg-white hover:text-black">Podcasts</p>
      </div>
    </>
  );
}

export default Navbar;
