/* Карта */

let map = document.querySelector(".map");

if (map.classList.contains("map--nojs")) {
  map.classList.remove("map--nojs");
  map.classList.add("map--js");
}
