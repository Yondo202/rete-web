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
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
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
