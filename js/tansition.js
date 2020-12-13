import highway from "@dogstudio/src/";
import { TimelineLite } from "gsap";

console.log("inside transition.js");

class Fade extends highway.Transition {
  in({ from, to, done }) {
    const tl = new TimelineLite();
    tl.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: "0%" }).fromTo(
      to,
      0.5,
      { height: "2vh" },
      {
        height: "90vh",
        top: "10%",
        onComplete: function () {
          done();
        },
      }
    );
  }

  out({ from, done }) {
    done();
  }
}

export default Fade;
