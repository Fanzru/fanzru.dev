import Image from "next/image";
import {dataAbout} from "../../data/about"
const HeaderAbout = () => {
  return (
    <>
      <div className="flex flex-col  items-center">
        <div className="max-width-component w-full mt-[90px] px-2 ">
          <div className="flex flex-col items-center ">
            <div className="w-[250px] h-[250px]  relative rounded-full object-cover bg-yellow-400">
              <Image
                alt="fanzru"
                src={dataAbout.picture}
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold">{dataAbout.name}</p>
              <p className="">{dataAbout.role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HeaderAbout;