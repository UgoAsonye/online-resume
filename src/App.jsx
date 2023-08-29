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
          <div class="col">
            <SideNav />
          </div>
          <div class="col">
            <Content />
          </div>
        </div>
      </div>
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
