import { useEffect } from "react";
import MDXComponents from "../../components/MDXComponents";
import Link from "../../components/Link";
import { getFileBySlug, getFiles } from "../../lib/mdx";
// import config from "@/site.config";
// import { MDXPost } from "@/types/post";
import { ArticleJsonLd } from "next-seo";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";

import PageContainer from '../../components/PageContainer'
const Post = ({ source, meta }: any) => {
  const date = new Date(meta.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <PageContainer>
      <section
        id="main-content"
        className=" flex flex-col flex-1 h-full w-full max-w-3xl mx-auto pt-6 px-2 mb-6 md:pt-11 md:px-0 line-break "
      >
      <ArticleJsonLd
        url={ "https://fanzru.dev/blog"+ "/" + meta.slug}
        title={meta.title}
        authorName={"Wisesa"}
        datePublished={new Date(meta.publishedAt).toISOString()}
        dateModified={new Date(meta.publishedAt).toISOString()}
        description={meta.description}
        images={[meta.image]}
      />
        <div className="flex flex-col mt-[60px]">
          <h1 className="text-4xl md:text-6xl mt-4 md:mt-6 hover:underline">
            <Link href={`/blog/${meta.slug}`}>{meta.title}</Link>
          </h1>
          <p className="mt-2">{meta.description}</p>
          <div className="flex mt-4 text-sm items-center">
            <p>
              <Link href="/about" className="font-semibold">
                Fanzru
              </Link>{" "}
              / {date}
            </p>
            
          </div>
          <hr className="mt-2 mb-2 dark:border-light border-dashed" />
        </div>
        <div className="prose dark:prose-dark max-w-full">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </section>
      </PageContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");
  return {
    paths: posts.map((p) => {
      const slug = p.replace(/\.mdx/, "");
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params?.slug);
  return {
    props: { ...post },
  };
};
export default Post;
