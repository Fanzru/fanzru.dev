import PageContainer from '../components/PageContainer';
import HeaderBlog from '../components/Blog/HeaderBlog';
import CardBlog from '../components/Blog/CardBlog';
import { getAllFilesFrontMatter } from "../lib/mdx";
import { PostType } from "../types/blog";
interface BlogProps {
  posts: PostType[] | [];
}
const IndexPage = ({ posts }: BlogProps) => {
  return (
    <>
      <PageContainer>
        <HeaderBlog/>
        <CardBlog posts={posts} />
      </PageContainer>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
};


export default IndexPage;