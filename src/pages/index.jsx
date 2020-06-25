import React from "react"

import "../common/reset.scss"
import "normalize.css"

import Layout from "../components/base/layouts/layout"
import SEO from "../components/base/layouts/seo"
import NavBar from "../components/complex/nav-bar"

import { Hero } from "../components/sections/hero.section"
import { Press } from "../components/sections/press.section"
import { Footer } from "../components/complex/footer"
import { Process } from "../components/sections/process.section"
import { PopularServices } from "../components/sections/popular-services.section"
import { TrustPilot } from "../components/sections/trust-pilot.section"

import "./index.scss"
import { CoreValues } from "../components/sections/core-values.section"
import { Divider } from "../components/base/divider"
import { PopularAgenciesNearby } from "../components/sections/popular-agencies-nearby.section"
import { DiscoverAgencies } from "../components/sections/discover-agencies.section"
import { BetterPartners } from "../components/sections/better-partners.section"

const IndexPage = () => (
  <>
    <NavBar siteTitle={"Find your future agency now! - Sortlist"}/>
    <SEO title="Find your future agency now! - Sortlist"/>
    <Layout>
      <Hero/>
      <PopularServices/>
      <Process/>
    </Layout>

    <TrustPilot/>

    <Divider/>

    <Layout>
      <CoreValues/>
    </Layout>

    <Press/>

    <Layout>
      <PopularAgenciesNearby/>
    </Layout>

    <Divider halfWidth/>

    <Layout>
      <DiscoverAgencies/>
      <BetterPartners/>
      <Footer/>
    </Layout>
  </>
)

export default IndexPage
