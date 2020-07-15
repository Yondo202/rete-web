import React, { Component } from 'react';
import Layout from '../components/layout';
import Head from 'next/head'
import Influencer from '../components/influencer'
import Axios from 'axios';


class influencer extends Component {

  render() {
    console.log(this.props, 'hahah')
    return (

      <div>
        <Head>
          <title>Rete-web</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link rel="icon" href="/logo.png" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
        </Head>
        <Layout>
          <Influencer InfData={this.props} />
        </Layout>
      </div>

    );
  }
}

export default influencer;

export async function getServerSideProps(){
    const requestHead = await Axios('http://localhost:1337/infhead ')
    const requestBody = await Axios('http://localhost:1337/influencerbodies')
    return {props: {head: requestHead.data, body1: requestBody.data}}
}

