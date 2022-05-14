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
// car
const width = 30;
const height = 50;
const car = new Car(100, window.innerHeight - height, width, height);
car.draw(ctx);

animate();

function animate() {
  car.update();
  // update the canvas with new car position
  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}
