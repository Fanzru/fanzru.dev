import { dataProjects } from "../../data/projects";
import Image from 'next/image'
import NextLink from 'next/link'
const CardProject = () => {
  return (
    <>
      <div className="flex flex-col items-center z-10">
        <div className="max-width-component w-full px-2 mt-4">
          {
            dataProjects.map((data,idx)=> {
              return (
                <div key={idx} className="border-2 border-base-300  rounded-md border-dashed p-2 mb-4 md:flex">
                  <div className="h-[250px] w-full object-cover relative shadow-lg mb-4 md:mb-0 md:w-1/2 ">
                    <Image
                      src={data.picture}
                      alt="Project"
                      layout="fill"
                      className="object-cover rounded-md "
                    />
                  </div>
                  <div className="md:w-1/2 md:p-4 ">
                    <NextLink  href={data.link_project} passHref >
                      <a className="text-lg font-semibold hover:underline">{data.name}</a>
                    </NextLink>
                    
                    <p className="opacity-70 text-sm">{`Created at ${data.date}`}</p>
                    <p className="mt-2 opacity-70 text-sm">{data.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {
                        data.stacks.map((stack,i)=> {
                          return (
                            <div key={i} className="px-[8px] py-[2px] rounded-md text-xs font-semibold bg-yellow-400">
                              {stack}
                            </div>
                          )
                        })
                      }
                    </div>
                    <NextLink  href={data.link_project} passHref >
                      <a className="text-xl font-semibold underline">Visit The Project</a>
                    </NextLink>
                  </div>
                  <div>

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default CardProject;