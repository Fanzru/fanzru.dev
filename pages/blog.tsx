import PageContainer from '../components/PageContainer';
import HeaderBlog from '../components/Blog/HeaderBlog';
import CardBlog from '../components/Blog/CardBlog';
const IndexPage = () => {
  return (
    <>
      <PageContainer>
        <HeaderBlog/>
        <CardBlog/>
      </PageContainer>
    </>
  )
}

export default IndexPage;