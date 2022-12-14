import { useContext, useState } from 'react'
import '../styles/globals.css'

import Home from './index'
import Layout from '../components/layout'
import Cookie from 'js-cookie'

function MyApp(props) {

  const { Component, pageProps } = props



  return (
    
      <Layout className='container m-0 p-0' style={{ height: '100vh' }}>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
