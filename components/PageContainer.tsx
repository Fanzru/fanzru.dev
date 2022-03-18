import Head from 'next/head'
import Navbar from "./Navbar/Navbar"
import {FC} from 'react'

const PageContainer: FC = ({ children,...props}) => {

  return (
    <div>
      <Head >
        <meta
          name="keywords"
          content="fanzru, Ananda Affan Fattahila, Affan, Ananda, Fattahila, panzru"
          title="Hi Im Fanzru"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div className="">
        <Navbar />
        {children}
      </div>
    </div>
    
  )
}

export default PageContainer;