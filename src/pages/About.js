import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Logo />
      <Navigation />
      <h1>A PROPOS</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore
        delectus itaque facere nostrum maxime quasi animi odit illum dolores
        iusto cum praesentium consequuntur perferendis, molestias officia in
        sequi. Impedit laborum, ad ipsum placeat iure molestiae non. Ex, nemo
        sapiente?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus et
        iure eum reiciendis reprehenderit illum iste quaerat adipisci. Vitae,
        laborum? Non, illo ad, magnam numquam accusamus nostrum libero minus
        deserunt culpa velit quidem facilis itaque aliquid fugit quos explicabo?
      </p>
    </div>
  );
};

export default About;
