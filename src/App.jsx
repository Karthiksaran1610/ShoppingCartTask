import React, { useState } from "react";
import Card from "./Components/Card";
import TopBar from "./Components/Topbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  let [cart, setCart] = useState(0);
  return (
    <>
      <TopBar cart={cart} setCart={setCart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;