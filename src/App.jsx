import React from "react";
import Navbar from "./Components/Navbar";

import Mainrouter from "./Components/Mainrouter";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainrouter />
      <Footer />
    </div>
  );
};

export default App;
