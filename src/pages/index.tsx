import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import { Hero } from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import { Projects } from "../components/projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Section } from "../styles/GlobalComponents";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        {/* <BgAnimation /> */}
      </Section>
      <Projects />
      <Technologies />
      {/* <Timeline />
      <Acomplishments /> */}
    </Layout>
  );
}

export default Home
