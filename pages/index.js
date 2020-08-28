import Head from 'next/head'
import Layout from '../components/layout'
import About from './about'
import Chances from '../components/chances'
import Slider from '../components/slider'
import Intro from '../components/intro'
import Axios from 'axios'

export default function Home(props) {
  // console.log(props.data);
  return (
    <div>
      <Head>
        <title>Rete-agency</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
          <Layout>
            <Slider SlideData={props.data} />
            <Intro  introData={props.intro} />
            <Chances ChanceData={props.chance1} ChanceData2={props.chance2} />
              {/* <About />
              <Fruit /> */}
          </Layout>
    </div>
  )
}

export async function getServerSideProps(){
  const request = await Axios('http://rete-admin.herokuapp.com/sliders');
  const requestIntro = await Axios('http://rete-admin.herokuapp.com/intro');
  const requestChance1 = await Axios('http://rete-admin.herokuapp.com/homechange-1');
  const requestChance2 = await Axios('http://rete-admin.herokuapp.com/homechange-2');
  return {props:{data: request.data, intro: requestIntro.data, chance1: requestChance1.data, chance2: requestChance2.data}};
}

