let trendfood = document.querySelectorAll(".trendfood");
let foodcart = document.querySelectorAll(".foodcart");
let count = 0;

trendfood.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

function myfun() {
  trendfood.forEach((curimg) => {
    curimg.style.transform = `translatex(-${count * 100}%)`;
  });
}

setInterval(() => {
  count++;
  if (count == trendfood.length) {
    count = 0;
  }
  myfun();
}, 4000);

//food details

foodcart.forEach((curcard) => {
  curcard.addEventListener("click", function () {
    console.log(curcard);

    let div = document.createElement("div");
    div.classList.add("carddetail");
    div.innerHTML = `
   <i id="icon" class="fa-solid fa-xmark"></i>
    <img src="${curcard.firstElementChild.src}" alt="" />
<h1>Food Details</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A assumenda libero
  voluptatibus. Nemo natus ea totam possimus! Corrupti dolorum aspernatur quas
  incidunt.
</p>
`


document.querySelector("body").appendChild(div)
document.querySelector("#icon").addEventListener("click",function(){
    div.remove();
})
  });
});
