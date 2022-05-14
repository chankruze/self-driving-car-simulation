/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 14 2022 01:18:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

class Controls {
  // constructor
  constructor() {
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;

    // add keyboard listeners
    this.#addKeyboardListeners();
  }

  // add keyboard listeners to onkeydown (private)
  #addKeyboardListeners() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.backward = true;
          break;
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
      }

      console.table(this);
    };

    // add keyboard listeners to onkeyup (private)
    document.onkeyup = (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.backward = false;
          break;
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
      }

      console.table(this);
    };
  }
}
