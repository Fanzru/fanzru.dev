import {AiFillGithub,AiFillLinkedin,AiFillFileText} from 'react-icons/ai'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
const Heros = () => {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col items-center z-0 md:mx-2 ">
        <div className="flex flex-col justify-center min-h-screen mx-10 max-width-component w-full  px-10">
          <div className="text-5xl font-medium">
            <p>Hello I’m Ananda Affan Fattahila</p>
          </div>
          <div className="mt-5">
            <p>
            You can call me Affan, I'm currently studying to become a Software Engineer and Product Engineer.
            </p>
          </div>
          
          <div className=" flex mt-6 gap-4">
            <button onClick={()=>{router.push("https://github.com/fanzru")}} className="btn btn-outline"><AiFillGithub/></button>
            <button onClick={()=>{router.push("https://linkedin.com/in/fanzru")}} className="btn btn-outline"><AiFillLinkedin/></button>
            <button onClick={()=>{router.push("https://drive.google.com/file/d/1ZJOVIRIPiFP6LbCHHPdFLjMocq4ZwFM8/view?usp=sharing")}} className="btn btn-outline"><AiFillFileText/></button>
          </div>
          
          <NextLink href={'https://www.linkedin.com/in/fanzru/'} passHref>
              <a className="underline mt-5">More About me</a>
          </NextLink>
        </div>
      </div>
    </>
  )
}

export default Heros;