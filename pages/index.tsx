import type { NextPage } from 'next'
import PageContainer from '../components/PageContainer'
import Heros from '../components/Heros'
const Home: NextPage = () => {
  return (
    <>
      <div>
        <PageContainer>
          <Heros/>
        </PageContainer>
      </div>
    </>
  )
}

export default Home
