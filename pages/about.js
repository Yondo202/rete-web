import Layout from '../components/layout';
import About from '../components/about'
import Head from 'next/head'

const about = () => {

    return (
        <div>
            <Head>
                <title>Rete-web</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="icon" href="/logo.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
            </Head>
            <Layout>
                <About />
            </Layout>
        </div>

    )
}

export default about;