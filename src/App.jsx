import { Header } from "./Header";
import React from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Resume } from "./Resume";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
