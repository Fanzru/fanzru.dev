import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

import { MDXPost, MDXSnippet, PostType, SnippetType } from "../types/blog";

const root = process.cwd();

import remarkSlug from "remark-slug";
import rehypeCodeTitles from "rehype-code-titles"
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from "reading-time";
// import("remark-slug"),
// import("remark-code-titles"),
// import("remark-breaks"),
export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(
  type: string,
  slug: string | string[] | undefined
): Promise<MDXPost | MDXSnippet> {
  const fileSource = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(fileSource);
  
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkBreaks,
        remarkGfm,
        remarkSlug
      ],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism,
        rehypeAutolinkHeadings
      ]
    },
  });
  return {
    source,
    meta: {
      slug,
      readTime: readingTime(content),
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      image: data.image,
      lang: data.lang || null,
    },
  };
}

//todo:types
export const getAllFilesFrontMatter = async (
  type: string
): Promise<PostType[] | SnippetType[]> => {
  const files: string[] = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts: any[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);
    return [
      {
        ...data,
        readTime: type === "blog" ? readingTime(content) : null,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
export const getLang = (type: string, slug: string): string => {
  const source = fs.readFileSync(path.join(root, "data", type, slug), "utf8");
  const { data } = matter(source);
  return data.lang as string;
};
