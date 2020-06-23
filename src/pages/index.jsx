import React from "react"

import "../common/reset.scss"
import "normalize.css"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import Header from "../components/header"

import { Hero } from "../components/sections/hero.section"
import { Press } from "../components/sections/press.section"
import { Footer } from "../components/footer"
import { Process } from "../components/sections/process.section"
import { PopularServices } from "../components/sections/popular-services.section"
import { TrustPilot } from "../components/sections/trust-pilot.section"

import "./index.scss"
import { CoreValues } from "../components/sections/core-values.section"
import { Divider } from "../components/divider"
import { PopularAgenciesNearby } from "../components/sections/popular-agencies-nearby.section"

const IndexPage = () => (
  <>
    <Header siteTitle={"Find your future agency now! - Sortlist"}/>
    <SEO title="Find your future agency now! - Sortlist"/>
    <Layout>
      <Hero/>
      <PopularServices/>
      <Process/>
    </Layout>

    <TrustPilot/>

    <Layout>
      <CoreValues/>
    </Layout>

    <Divider/>
    <Press/>
    <Layout>
      <PopularAgenciesNearby/>
    </Layout>

    <Layout>
      <Footer/>
    </Layout>
  </>
)

export default IndexPage
