import React, { useState } from "react";
import "../styles/Input.css"

const Input = () => {
  return (
    <div className="top-container">
      <input
        id="first-name"
        class="form-input"
        type="text"
        placeholder="Tree(3, [Tree(2, [Tree(5)]), Tree(4)])"
        name="tree"
      />
      <button class="form-enter" type="submit">
          Enter
      </button>
    </div>
  );
};

export default Input;
