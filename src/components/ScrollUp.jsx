import {React, useContext} from "react";
import "./ScrollUp.css";
import { MyContext } from "../App";
function ScrollUp() {
    const {scrollToSelection, homeRef} = useContext(MyContext)
  return (
    <div className="scroll_container" onClick={()=> scrollToSelection(homeRef)}>
      <div class="scroll-icon ex-3">
        <span class="wheel"></span>
        <span class="arrow up"></span>
        <span class="arrow down"></span>
      </div>
    </div>
  );
}

export default ScrollUp;
