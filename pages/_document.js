import { Html, Head, Main, NextScript } from 'next/document'
import {useEffect, useState} from "react";


export default function Document() {

    const [state, setstate] = useState(false)

useEffect(() => {
setstate(true)
    console.log("UUUUUUUUUU");
}, [])

    const Elem = ()=> {

        return <a href="/About" style={{border:'50px solid blue', marginTop:'300px',border:'20px solid red', position:'fixed', top:0,left:0,backgroundColor:'orange', height:'200px', width:'100%'}}>LINK</a>
      }

  return (
    <Html>
      <Head />
      {/* <div style={{position:'fixed !important', top:0,left:0,width:'100%',height:'200px', backgroundColor:'blue'}} className="navig" id="navig">xxxx</div> */}
      <body className="OOOOOOOOOO">
      {state && <Elem />}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}