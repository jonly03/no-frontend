// const API_URL = "";

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => {
const container = document.getElementById("data_container");
const data = [
  { title: "title 1" },
  { title: "title 2" },
  { title: "title 3" },
  { title: "title 3" },
];
for (const elt of data) {
  const newP = document.createElement("p");
  newP.innerText = elt.title;

  container.appendChild(newP);
}
//   });
