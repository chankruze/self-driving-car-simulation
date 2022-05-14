/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 14 2022 01:10:39 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

class Car {
  // constructor
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.3;

    // controls
    this.controls = new Controls();
  }

  // update
  update() {
    // forward
    if (this.controls.forward) {
      this.y += this.acceleration;
    }

    // backward/reverse
    if (this.controls.backward) {
      this.y -= this.acceleration;
    }

    // left
    if (this.controls.left) {
      console.log("left");
    }

    // right
    if (this.controls.right) {
      console.log("right");
    }
  }

  // draw
  draw(ctx) {
    // ctx.beginPath();
    ctx.fillStyle = "red";
    // x will be the center
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    // ctx.fill();
  }
}
