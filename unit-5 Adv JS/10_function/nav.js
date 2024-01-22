function navbar() {
  return ` <div>
    <a href="./index.html"><h4>Index</h4></a>

  </div>
  <div>
    <a href="./page.html"><h4>Page</h4></a>

  </div>
  <div>
     <h4 id="logoutBtn"  >Logout</h4>
  </div>`;
}

function forAll() {
  let btn = document.getElementById("logoutBtn");
  btn.addEventListener("click", () => {
    let container = document.getElementById("container");
    container.innerHTML = "Clicked";

    display("hiii");
  });

  function display(a) {
    console.log(a);
  }
}
export { navbar, forAll };
