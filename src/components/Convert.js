import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("new lang or text");
  }, [language, text]);

  return (
    <div>
      <h1>
        {language.label}
        <br />
        {text}
      </h1>
    </div>
  );
};

export default Convert;
