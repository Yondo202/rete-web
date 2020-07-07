import React, { Component } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import Company from '../components/company'

class company extends Component {
  render() {
    return (

      <div>
        <Head>
          <title>Rete-web</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link rel="icon" href="/logo.png" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
        </Head>
        <Layout>
            <Company />
        </Layout>
      </div>


    );
  }
}

export default company;
