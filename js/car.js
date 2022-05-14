/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 14 2022 01:10:39 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

class Car {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @memberof Car
   * @description constructor
   */
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    // widtht
    this.width = width;
    // height
    this.height = height;
    // speed
    this.speed = 0;
    // acceralation
    this.acceleration = 0.3;
    // controls
    this.controls = new Controls();
  }

  /**
   * @returns {void}
   * @memberof Car
   * @description update the car position
   */
  update() {
    // forward
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }

    // backward/reverse
    if (this.controls.backward) {
      this.speed -= this.acceleration;
    }

    this.y -= this.speed;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @returns {void}
   * @memberof Car
   * @description draw the car on canvas
   */
  draw(ctx) {
    ctx.fillStyle = "#D5A4FF";
    // put x and y in the middle of the car
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
  }
}
