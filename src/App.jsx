import React from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import SideNav from "./SideNav";
import { Resume } from "./Resume";
import { SecNav } from "./SecNav";
function App() {
  return (
    // <div>
    //   <SideNav />
    //   <div className="container p-4">
    //  <Content />
    <div>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col col-lg-2">
            <SideNav />
          </div>
          <div className="col">
            <Resume />
            <Content />
          </div>
          <div className="col">
            <SecNav />
          </div>
          {/* <div class="col">
            <Resume />
          </div> */}
          {/* <div class="container text-center">
            <div class="row row-cols-2 row-cols"></div>
            <div className="col"> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
