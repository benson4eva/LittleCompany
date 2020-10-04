import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Backdrop from "../components/backdrop"
import Content from "../components/content"
import "./index.css"

const IndexPage = () => {
  const [email, setEmail] = useState("") //submitted emails are saved here

  return (
    <Layout>
      <SEO title="Home" />
      <div className="App">
        <Content email={email} setEmail={setEmail} />
        <Backdrop />
      </div>
    </Layout>
  )
}

export default IndexPage
