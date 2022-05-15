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

    const topLeft = { x: this.left, y: this.top };
    const topRight = { x: this.right, y: this.top };
    const bottomLeft = { x: this.left, y: this.bottom };
    const bottomRight = { x: this.right, y: this.bottom };

    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ];
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

    // draw the inner edges dashed lane edges
    for (let index = 1; index < this.laneCount; index++) {
      // get the x-coordinate of the edge of the lane
      const lenX = lerp(this.left, this.right, index / this.laneCount);
      // draw the inner edges
      ctx.setLineDash([30, 15]);
      ctx.beginPath();
      ctx.moveTo(lenX, this.top);
      ctx.lineTo(lenX, this.bottom);
      ctx.stroke();
    }

    // draw the borders
    ctx.setLineDash([]);
    this.borders.forEach((border) => {
      ctx.beginPath();
      ctx.moveTo(border[0].x, border[0].y);
      ctx.lineTo(border[1].x, border[1].y);
      ctx.stroke();
    });
  }
}
