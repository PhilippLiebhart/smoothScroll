import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Scroll = () => {
  useEffect(() => {
    // Setup
    // const scroller = document.querySelector('.scroller');

    const fixedElem = document.getElementsByClassName("fixed-nav")[0];

    const bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.07,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    bodyScrollBar.addListener((status) => {
      const offset = status.offset;
      fixedElem.style.top = offset.y + "px";

      const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
      if (markers) {
        gsap.set(markers, { marginTop: -offset.y + "px" });
      }
    });

    // speed: 1
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: document.body });
  }, []);

  return null;
};
export default Scroll;
