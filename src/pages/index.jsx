import React from "react"

import "../common/reset.scss"
import "normalize.css"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"

import "./index.scss"
import { Hero } from "../components/sections/hero.section"
import { Press } from "../components/sections/press.section"
import Header from "../components/header"
import { Footer } from "../components/footer"

const IndexPage = () => (
  <>
    <Header siteTitle={"Find your future agency now! - Sortlist"}/>
    <SEO title="Find your future agency now! - Sortlist"/>
    <Layout>
      <Hero/>

      {/*<section className={"half popular-services"} style={{ backgroundColor: "red" }}></section>*/}
      {/*<section className={"half process"} style={{ backgroundColor: "green" }}></section>*/}
      {/*<section className={"half trust-pilot"} style={{ backgroundColor: "blue" }}></section>*/}

    </Layout>

    <Press/>

    <Layout>
      <Footer/>
    </Layout>
  </>
)

export default IndexPage
