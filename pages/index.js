import Head from 'next/head'
import Layout from '../components/layout'
import About from './about'
import Chances from '../components/chances'
import Slider from '../components/slider'
import Intro from '../components/intro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rete-web</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
      </Head>
          <Layout>
            <Slider />
            <Intro />
            <Chances />
              {/* <About />
              <Fruit /> */}
          </Layout>
    </div>
  )
}
