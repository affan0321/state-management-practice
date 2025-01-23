"use client";
import React, { useState } from 'react';

export default function Home() {
  const [like, setLike] = useState(0);
  const HandleLike = () => {
    setLike(like + 1);
  }

  const [isVisible, setIsvisible] = useState(false);
  const handleVisible = () => {
    setIsvisible(!isVisible)
  }
  return (
    <div>
      <p>Likes : {like}</p>
      <button onClick={HandleLike}>Like</button>
      <br />
      <input type={isVisible ? "text" : "password"} />
      <button onClick={handleVisible}>{isVisible ? "Hide" : "Show"}</button>

    </div>
  );
}
