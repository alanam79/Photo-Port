// You need to import React in every component file.
// You can also import any images or CSS you want to use at the top.
import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
