import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
export default function Home() {
  let mainRef = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  console.log(mainRef);
  // useEffect(() => {
  //   // ScrollTrigger.create({})
  //   gsap.from(mainRef, {
  //     x: -500,
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: ".xTrigger",
  //       // toggleActions: "none none none none",
  //       // start: "top - 500px",
  //       end: "top center",
  //        markers: {startColor: "green", endColor: "red", fontSize: "20px"},
  //       scrub: true,
  //     },
  //   });

  // },[]);
  return (
    <div className={styles.container} >
      <Head>
        <title>xxxCreate Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main  className="scroller">
   
    
        <div style={{backgroundColor:'orange',margin:'0px 0', height:'100px',border:'2px solid black', width:'100%',marginTop:'100px'}}>1111</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>2222</div>
        <Link href="/">home</Link>
     <Link href="/About">about</Link>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>3333</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>4444</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>5555</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>6666</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>7777</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>8888</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>9999</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>10</div>
        <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>11</div>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className="xTrigger" ref={(el) => (mainRef = el)} >
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>5555</div>
      <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>5555</div>
      <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>5555</div>
      <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>5555</div>
      <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>5555</div>
      <div style={{backgroundColor:'orange',margin:'50px 0', height:'100px',border:'2px solid black', width:'100%'}}>5555</div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
