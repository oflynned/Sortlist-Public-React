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
import { PopularServices } from "../components/sections/popular-services.section"

const IndexPage = () => (
  <>
    <Header siteTitle={"Find your future agency now! - Sortlist"}/>
    <SEO title="Find your future agency now! - Sortlist"/>
    <Layout>
      <Hero/>
      <PopularServices/>
      <Process/>

    </Layout>
    <Press/>
    <Layout>
      <Footer/>
    </Layout>
  </>
)

export default IndexPage
