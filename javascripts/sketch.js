"use strict";

let SIMULATION;

function setup() {
  let width = document.getElementById("canvas").offsetWidth;
  let height = document.getElementById("canvas").offsetHeight;
  let customCanvas = createCanvas(width, height);
  customCanvas.parent("canvas");
  customCanvas.mouseClicked(ClickManager.clickCanvas);
  windowResized();

  outputMessage("Bem-vindo ao iPEF, o software de análise de estruturas 2D para PEF3208");

  SIMULATION = new Simulation();
}

function draw() {
  clear()
  SIMULATION.draw();
}

function windowResized() {
  let width = document.getElementById("canvas").offsetWidth;
  let height = document.getElementById("canvas").offsetHeight;
  resizeCanvas(width, height);
}