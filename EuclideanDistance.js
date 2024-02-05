export function euclideanDistance(p1, p2) {
  if (p1?.length != p2?.length) {
    throw new Error("Incompatible Euclidean points.");
  }

  let sqDist = 0;
  for (let i = 0; i < p1?.length; i++) {
    sqDist += (p1[i] - p2[i]) ** 2;
  }

  //    taking sqrt and returning
  //    d = sqrt((p1-p2)**2)
  //    Thats what the euclideanDistance is.

  return sqDist ** 0.5;
}

export function calculateDistance(event) {
  event.preventDefault();

  const p1x = document.getElementById("p1x").value;
  const p1y = document.getElementById("p1y").value;
  const p2x = document.getElementById("p2x").value;
  const p2y = document.getElementById("p2y").value;
  const resultElement = document.getElementById("result");

  const rslt = euclideanDistance([p1x, p1y], [p2x, p2y]);
  resultElement.innerText = rslt;

  console.log(rslt);
}
