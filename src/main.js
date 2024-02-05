import { calculateDistance } from "../EuclideanDistance";

const form = document.getElementById("form");
form.addEventListener("submit", calculateDistance);

calculateDistance(e);
