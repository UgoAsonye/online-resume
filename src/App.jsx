import React from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import SideNav from "./SideNav";
import { Resume } from "./Resume";

function App() {
  return (
    // <div>
    //   <SideNav />
    //   <div className="container p-4">
    //     <Content />
    <div>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col col-lg-2">
            <SideNav />
          </div>
          <div class="col">
            <Resume />
          </div>
          {/* <div class="col">
            <Resume />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
