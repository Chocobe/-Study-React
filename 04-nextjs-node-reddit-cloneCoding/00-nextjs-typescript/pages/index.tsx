import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

import postDirectory from "../lib/posts";

const Home: NextPage = () => {
  postDirectory;
  
  return (
    <div>
      <Head>
        <title>Chocobe</title>
      </Head>

      <section className={homeStyles.headingMd}>
        <p>
          [Chocobe Introduction]
        </p>
        <p>
          (This is a Website)
        </p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {/* Hello World */}
        </ul>
      </section>
    </div>
  )
}

export default Home
