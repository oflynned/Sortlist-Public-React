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
import { Process } from "../components/sections/process.section"

const IndexPage = () => (
  <>
    <Header siteTitle={"Find your future agency now! - Sortlist"}/>
    <SEO title="Find your future agency now! - Sortlist"/>
    <Layout>
      <Hero/>

      <section className={"half popular-services"}>
        <h1>Most <emph>popular services</emph> in your area</h1>
      </section>

      <Process/>

      {/*<section className={"half trust-pilot"} style={{ backgroundColor: "blue" }}></section>*/}

    </Layout>

    <Press/>

    <Layout>
      <Footer/>
    </Layout>
  </>
)

export default IndexPage
