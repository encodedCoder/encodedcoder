import React, { useState, useEffect } from "react";

const phrases = [
  " a web developer",
  " experienced in game development",
  " a Python script writer",
  " a LeetCode problem solver",
  " passionate about technology",
  " a lifelong learner",
];

const AnimatedCoder = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === phrases.length) {
      setIndex(0);
    }
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 1000 : 150, Math.floor(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <h1 className="animated-coder" style={{ textAlign: "center" }}>
      {"I'm"}
      {phrases[index].substring(0, subIndex)}
      {blink ? "|" : " "}
    </h1>
  );
};

export default AnimatedCoder;
