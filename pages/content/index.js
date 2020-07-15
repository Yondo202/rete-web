import React, { Component } from 'react'
import InfPostShare from '../../components/infPostShare'
import Head from 'next/head'



export class index extends Component {
    render() {
        return (
            <>
                <Head>
                <title>Rete-agency</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="icon" href="/logo.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
                </Head>

                <InfPostShare />
            </>
        )
    }
}

export default index
