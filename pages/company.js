import React, { Component } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import Company from '../components/company'
import Axios from 'axios';

class company extends Component {
  render() {
    // console.log(this.props)
    return (

      <div>
        <Head>
          <title>Rete-web</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link rel="icon" href="/logo.png" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
        </Head>
        <Layout>
            <Company CompHead={this.props} />
        </Layout>
      </div>


    );
  }
}

export default company;


export async function getServerSideProps() {
    const reqCompHead = await Axios('http://rete-admin.herokuapp.com/companyhead');
    const reqCompBody = await Axios('http://rete-admin.herokuapp.com/companybodies');
    return {props: {head: reqCompHead.data, body1: reqCompBody.data}}
}