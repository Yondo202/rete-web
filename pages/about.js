import Layout from '../components/layout';
import About from '../components/about'
import Head from 'next/head'
import axios from 'axios'

const about = (props) => {
    console.log(props.data,'hehe')
    return (
        <div>
            <Head>
                <title>Rete-web</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="icon" href="/logo.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
            </Head>
            <Layout>
                <About medeelel={props.data} />
            </Layout>
        </div>

    )
}

export default about;

// export async function getServerSideProps(){
//     const request = await axios('http://localhost:1337/about');
//     return {props:{data: request.data}}
// }