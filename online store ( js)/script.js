const container = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      container.innerHTML += `
            <div class = "card">
            <img src="${element.image}" alt="image" width="100px"/>
            <h2>${element.title}</h2>
            <p>${element.discription}</p>
            <p>${element.category}</p>
            <p>${element.price}</p>
</div>
            `;
    })
  )
  .catch((err) => console.log(err));

console.log(search.value);

let btn = document.getElementById("btn");
let sec = document.getElementById("sec");

sec.addEventListener("click", () => {
  let user = document.getElementById("user");
  let pass = document.getElementById("pass");
  if (user.value === "adil" && pass.value === "1234") {
    alert("Login succseful");
    window.location.href = "index.html";
  } else {
    alert("Login failed");
    window.location.href = "login.html";
  }
});
