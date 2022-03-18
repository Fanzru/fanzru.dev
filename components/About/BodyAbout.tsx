import {dataBody} from "../../data/about"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
const BodyAbout = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="max-w-[800px] w-full mt-4 px-2 mb-10 ">
          <ReactMarkdown className="line-break" children={dataBody} remarkPlugins={[remarkGfm]}/>
        </div>
      </div>
    </>
  )
}

export default BodyAbout