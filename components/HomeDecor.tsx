"use client";

import React, { useState } from "react";

const HomeDecor = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((_, ref) => {
  return (
    <section
      ref={ref}
      id="homedecor"
      className="container md:w-10/12 mx-auto font-inter overflow-x-hidden"
    >
      
    </section>
  );
});

HomeDecor.displayName = "homedecor";

export default HomeDecor;
