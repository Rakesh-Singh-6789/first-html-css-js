console.log("inside index.js");

import highway from "@dogstudio/src/";
import Fade from "./tansition";

const Highway = new highway.Core({
  transitions: {
    default: Fade,
  },
});
