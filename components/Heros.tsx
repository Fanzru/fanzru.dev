import {AiFillGithub,AiFillLinkedin,AiFillFileText} from 'react-icons/ai'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
const Heros = () => {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col items-center z-0 md:mx-2 ">
        <div className="flex flex-col justify-center min-h-screen mx-10 max-width-component w-full  px-10">
          <div className="text-5xl font-bold ">
            <p className="">Hello I’m Ananda Affan Fattahila 👋</p>
          </div>
          <div className="mt-5">
            <p>
              You can call me Affan, I'm a Software Engineer and Product Engineer Entusiast.
              I'm Currently working as a <span className=" underline decoration-yellow-400 decoration-2 font-semibold">CEO</span> at
              <NextLink  href="https://kerjago.com" passHref>
                <a className="font-semibold underline decoration-yellow-400 decoration-2"> kerjago.com </a>
              </NextLink>
              and as <a className="font-semibold underline decoration-yellow-400 decoration-2">Software Engineer I - Backend</a> at <NextLink  href="https://www.tiket.com/careers/" passHref>
                <a className="font-semibold underline decoration-yellow-400 decoration-2">Tiket.com</a>
              </NextLink> 
              .
              
            </p>
          </div>
          
          <div className=" flex mt-6 gap-4 mb-5">
            <button onClick={()=>{router.push("https://github.com/fanzru")}} className="border-2 border-dashed btn btn-outline"><AiFillGithub/></button>
            <button onClick={()=>{router.push("https://linkedin.com/in/fanzru")}} className="border-2 border-dashed  btn btn-outline"><AiFillLinkedin/></button>
            <button onClick={()=>{router.push("https://drive.google.com/file/d/1avKUur8mlcXh067rFI2ycoUhyMV51kjM/view?usp=sharing")}} className="border-2 border-dashed  btn btn-outline"><AiFillFileText/></button>
          </div>
          
          <NextLink href={'https://www.linkedin.com/in/fanzru/'} passHref>
              <a className="font-semibold underline decoration-yellow-400 decoration-2">More About me!!!</a>
          </NextLink>
        </div>
      </div>
    </>
  )
}

export default Heros;