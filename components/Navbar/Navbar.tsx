import NextLink from 'next/link'
import {dataNavbar} from '../../data/navbar'
import {FiMenu} from 'react-icons/fi'
import { useState } from 'react'
const Navbar = () => {
  const [menu,setMenu] = useState(false)
  return (
    <div>
      <div className=" w-screen border-b-2 border-dashed h-[60px] fixed z-90 bg-white flex justify-center z-top" >
        <div className="max-width-component w-full ">
          <div className="w-full flex justify-between h-full items-center  ">
            <NextLink  href={'/'} passHref>
                <a className="h-full flex items-center font-xl font-semibold px-4">
                  fanzru.dev
                </a>
            </NextLink>
            {/* Mobile navbar */}
            <div className=" md:hidden">
              <button onClick={() => {setMenu(true)}} className="p-[10px] mx-2 ">
                <FiMenu/>
              </button>
            </div>
            <div className="h-[100%] flex gap-6 hidden md:flex">
              {
                dataNavbar.map((data,idx)=> {
                  return (
                    <NextLink  href={data.link} passHref key={idx}>
                      <a className=" w-[70px] h-[100%]  flex items-center justify-center hover:bg-yellow-400 font-medium">{data.name}</a>
                    </NextLink>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {
        menu? 
        <a onClick={() => {setMenu(false)}}  className="w-screen min-h-screen  z-top-top border-2 backdrop-blur-md fixed flex items-center justify-center ">
          <div className="max-w-[430px] border-[3px] border-base-300 py-4 w-full rounded-md border-dashed bg-white flex flex-col items-center drop-shadow-xl shadow-black-700/50">
            {
              dataNavbar.map((data,idx)=> {
                return (
                  <NextLink  href={data.link} passHref key={idx}>
                    <a className=" w-full  h-[50px] flex items-center justify-center hover:bg-yellow-400 font-semibold">{data.name}</a>
                  </NextLink>
                )
              })
            }
            <button onClick={() => {setMenu(false)}}  className="w-full  h-[50px] flex items-center justify-center hover:bg-yellow-400 font-semibold">Close</button>
          </div>
        </a>
        : <></>
      }
    </div>
  )
}

export default Navbar;