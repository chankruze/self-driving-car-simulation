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
    // max forward speed
    this.maxSpeed = 3;
    // max reverse speed
    this.maxReverseSpeed = -2; // - is reverse
    // acceralation
    this.acceleration = 0.3;
    // friction
    this.friction = 0.05;
    // angle
    this.angle = 0;
    // controls
    this.controls = new Controls();
  }

  /**
   * @returns {void}
   * @memberof Car
   * @description update the car position
   */
  update() {
    /****************************************************
     * update the car position (y) (forward or reverse)
     ****************************************************/
    // forward
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }

    // backward/reverse
    if (this.controls.backward) {
      this.speed -= this.acceleration;
    }

    // limit the speed (forward)
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    // limit the speed (reverse)
    if (this.speed < this.maxReverseSpeed) {
      this.speed = this.maxReverseSpeed;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }

    // again speed < 0 indicates reverse direction
    if (this.speed < 0) {
      this.speed += this.friction;
    }

    // fix the speed to 0 if it is less than friction
    // this will prevent the y position from going negative due to friction
    // fixes #1
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    // update the car position (y)
    this.y -= this.speed;

    /**********************************************
     * update the car position (x) (left or right)
     **********************************************/
    // left
    if (this.controls.left) {
      this.angle += 0.03;
    }

    // right
    if (this.controls.right) {
      this.angle -= 0.03;
    }
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @returns {void}
   * @memberof Car
   * @description draw the car on canvas
   */
  draw(ctx) {
    // save the current state of canvas
    ctx.save();
    // translate the canvas to car position
    ctx.translate(this.x, this.y);
    // rotate the canvas to car angle
    ctx.rotate(-this.angle);
    // draw the car
    ctx.fillStyle = "#D5A4FF";
    // put x and y in the middle of the car
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    // restore the canvas to previous state
    ctx.restore();
  }

  /**
   * @returns {void}
   * @memberof Car
   * @description print the car details
   */
  debug() {
    console.log(this);
  }
}
