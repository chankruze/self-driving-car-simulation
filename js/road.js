/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 15 2022 22:06:13 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;
    // computed properties
    this.laneWidth = this.width / this.laneCount;
    this.left = x - this.width / 2;
    this.right = x + this.width / 2;
    const INFINITY = 10000000;
    this.top = -INFINITY; // y-axis is negative
    this.bottom = INFINITY;
  }

  getLaneCenter(laneIndex) {
    return (
      this.left +
      this.laneWidth / 2 +
      Math.min(laneIndex, this.laneCount - 1) * this.laneWidth
    );
  }

  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#fff";

    // loop laneCount + 1 times to draw lane edges
    for (let index = 0; index <= this.laneCount; index++) {
      const lenX = lerp(this.left, this.right, index / this.laneCount);

      // dashed line for inner lane edges
      if (index > 0 && index < this.laneCount) {
        ctx.setLineDash([30, 15]);
      } else {
        ctx.setLineDash([]);
      }

      // draw the lane edges
      ctx.beginPath();
      ctx.moveTo(lenX, this.top);
      ctx.lineTo(lenX, this.bottom);
      ctx.stroke();
    }
  }
}
