/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 14 2022 01:00:59 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const canvas = document.getElementById("canvas");
// set height and width of canvas
canvas.width = 200;

// canvas context
const ctx = canvas.getContext("2d");
// road
const road = new Road(canvas.width / 2, canvas.width * 0.9);
// car
const carWidth = 30;
const carHeight = 50;
const car = new Car(
  road.getLaneCenter(1),
  window.innerHeight - carHeight,
  carWidth,
  carHeight
);
car.draw(ctx);

animate();

function animate() {
  car.update();
  // update the canvas with new car position
  canvas.height = window.innerHeight;
  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}
