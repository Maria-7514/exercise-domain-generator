/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Any string");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".io", ".go.cr"];

let elementa = Math.floor(Math.random() * pronoun.length);
let elementb = Math.floor(Math.random() * adj.length);
let elementc = Math.floor(Math.random() * noun.length);
let elementd = Math.floor(Math.random() * domain.length);

let cambioa = pronoun[elementa];
let cambiob = adj[elementb];
let cambioc = noun[elementc];
let cambiod = domain[elementd];

let change = document.getElementById("Domain");
change.innerHTML = cambioa + "" + cambiob + cambioc + "" + cambiod;
