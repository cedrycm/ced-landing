import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import { Hero } from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import { Projects } from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import { Section } from "../styles/GlobalComponents";
import styles from '../styles/Home.module.css'

const Pixi = dynamic(import('./components/Pixi/PixiApp'), {ssr: false})

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="orb-canvas">
        <Pixi numOrbs={10}/>
      </div>
      <Section className="overlay" id="landing" grid>
        <div className="overlay__inner">
          <Hero />
        </div>
      </Section>
      <Projects />
      <Technologies />
      {/* <Timeline />
      <Acomplishments /> */}
    </Layout>
  );
}

export default Home
