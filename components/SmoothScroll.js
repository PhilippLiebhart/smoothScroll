import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Scroll = () => {
  useEffect(() => {


// Setup
// const scroller = document.querySelector('.scroller');

const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.07, delegateTo: document, alwaysShowTracks: true });
// speed: 1
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: document.body });

// Only necessary to correct marker position - not needed in production
if (document.querySelector('.gsap-marker-scroller-start')) {	
  console.log("AAAAAA")	
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	

  bodyScrollBar.addListener(({ offset }) => {  
    gsap.set(markers, { marginTop: -offset.y })
  });
}


    // const bodyScrollBar = Scrollbar.init(document.body, {
    //   speed: 0.2,
    //   delegateTo: document,
    //   damping: 0.1,
    // });

    // bodyScrollBar.setPosition(0, 0);
    // bodyScrollBar.track.xAxis.element.remove();
    // ScrollTrigger.scrollerProxy("body", {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       bodyScrollBar.scrollTop = value;
    //     }
    //     return bodyScrollBar.scrollTop;
    //   },
    // });
    // bodyScrollBar.addListener(ScrollTrigger.update);

    // ScrollTrigger.defaults({ scroller: document.body });




  }, []);

  return null;
};
export default Scroll;
