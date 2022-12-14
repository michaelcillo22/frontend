import React, { useState } from 'react'
import Cart from '../components/cart'

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { Alert, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import Landing from '../components/Landing'

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:1337'
  console.log(`URL: ${API_URL}`)
  const [query, setQuery] = useState('')
  const link = new HttpLink({ uri: `${API_URL}/graphql` })
  const cache = new InMemoryCache()
  const client = new ApolloClient({ link, cache })

  return (
      <div>
        <Landing />
        <br></br>
      </div>

  )
}
export default Home
