"use client";

import { useEffect } from "react";

const PreventScroll = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return null;
};

export default PreventScroll;
