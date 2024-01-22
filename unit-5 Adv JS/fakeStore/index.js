fetchData();
let dataArr;
async function fetchData() {
  try {
    let result = await fetch("https://fakestoreapi.com/products");
    var output = await result.json();
    dataArr = output;
    console.log(dataArr);
    display(output);
  } catch {}
}

function display(array) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  array.forEach(function (element) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    div.setAttribute("class", "item");
    img.setAttribute("src", element.image);
      name.textContent = element.title;
      var cartBtn = document.createElement("button");
    img.addEventListener("click", function () {});
    div.append(img, name);
    container.append(div);
  });
}

var filterBtn = document.getElementById("filter");
filterBtn.addEventListener("click", () => {
  if (event.target.value == "") {
    display(dataArr);
  } else {
    let filterdData = dataArr.filter((element) => {
      return element.category == event.target.value;
    });
    display(filterdData);
  }
});
