let products = {
  data: [
    {
      productName: "Regular white T-shirt",
      category: "Topwear",
      price: "30",
      image: "./images/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "./images/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "./images/sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "./images/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "./images/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "./images/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "./images/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "./images/comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  const product = document.getElementById("products");
  //Tao card
  let card = document.createElement("div");
  //Ta0 class
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image); //them phan tu con vao cha
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  // product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = i.price + "$";
  //
  container.appendChild(price);
  card.appendChild(container);
  product.appendChild(card);
}

//

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //Select all card
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//SEACH BUTTON
const search = document.querySelector("#search");
search.addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elemnts = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elemnts.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

//DISPLay the products
window.onload = () => {
  filterProduct("all");
};

/*
<div class="container">
<h5 class="product">
Comfy Gray Pants
</h5>
</div>
*/
