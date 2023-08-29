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
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col col-lg-2">
            <SideNav />
          </div>
          <div className="col">
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
