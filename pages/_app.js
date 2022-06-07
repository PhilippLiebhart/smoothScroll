import "../styles/globals.css";
import Scroll from "../components/SmoothScroll";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  // const [state, setstate] = useState(false)
  //   useEffect(() => {
  //     var elemDiv = document.createElement('div');
  // elemDiv.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:90px;background-color:red;border:1px solid red;';
  // document.body.appendChild(elemDiv);
  // console.log("elem",elemDiv)
  // setstate(true)
  // }, [])

  return (
    <>
      <Scroll />
      <div
        style={{
          position: "fixed !important",
          top: 0,
          left: 0,
          width: "100%",
          height: "200px",
          backgroundColor: "blue",
        }}
        className="navig fixed-nav"
        id="navig"
      >
        xxxx
      </div>

      <h1>AAAAA</h1>
      <h1>AAAAA</h1>
      <h1>AAAAA</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
