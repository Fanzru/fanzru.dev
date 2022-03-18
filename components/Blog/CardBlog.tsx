import {dataBlogs} from '../../data/blogs'
import Image from 'next/image'
import NextLink from 'next/link'
import { PostType } from "../../types/blog";
interface BlogProps {
  posts: PostType[] | [];
}
const CardBlog = ({ posts }: BlogProps) => {
  return (
    <>
      <div className="flex flex-col items-center z-10">
        <div className="max-width-component w-full px-2 mt-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              posts?.map((data,idx)=> {
                return (
                  <NextLink  href={`blog/${data.slug}`} passHref key={idx}>
                    <a key={idx} className="border-2  rounded-md border-dashed ">
                      <div className="h-[250px] w-full object-cover relative shadow-lg mb-2 ">
                        <Image
                          src={data.image}
                          alt="Project"
                          layout="fill"
                          className="object-cover rounded-t-md "
                        />
                      </div>
                      <div className="p-2">
                        <div className="text-lg font-semibold">{data.title}</div>
                        <div className="text-sm opacity-70">{`${data.publishedAt} - ${data.readTime?.text }`}</div>
                        <div className="text-sm opacity-70">{data.description}</div>
                      </div>
                    </a>
                  </NextLink>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CardBlog;