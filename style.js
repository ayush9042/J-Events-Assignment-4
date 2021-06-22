var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}

// Left container(image container)
var leftContainer = document.getElementById("left-column");

// I will render default image

var imgLeftContainer = document.createElement("img");

// I will access default image

imgLeftContainer.src = productData.preview;

// Appending default image to the leftContainer

leftContainer.appendChild(imgLeftContainer);

// Rendering right container 

// Right container(content container)

var rightContainerDiv = document.createElement("div");

rightContainerDiv.className = "product-description";

var rightContainer = document.getElementById("right-column");

// Appending div child to right container 

rightContainer.appendChild(rightContainerDiv);

// Creating h1 for name in right container div

var headingName = document.createElement("h1");
headingName.innerHTML = productData.name;
headingName.className = "heading-name";

// appending name to right container div
rightContainerDiv.appendChild(headingName);

// Creating h4 for brand in right container div

var contentBrand = document.createElement("h4");
contentBrand.innerHTML = productData.brand;
contentBrand.className = "brand-name";

// Appending brand to right container div
rightContainerDiv.appendChild(contentBrand);

// Creating h3 for brand in right container div

var contentPrice = document.createElement("h3");
contentPrice.innerHTML = "Price: " + "Rs " + productData.price;
contentPrice.className = "product-price";

// Appending brand to right container div
rightContainerDiv.appendChild(contentPrice);

// Creating div for Description in right container div

var contentDescription = document.createElement("div");
var contentDescriptionHeading = document.createElement("h3");
contentDescriptionHeading.className = "desc-heading";
var contentDescriptionPara = document.createElement("p");
contentDescriptionPara.className = "desc-explain";
contentDescriptionHeading.innerHTML = "Description";
contentDescriptionPara.innerHTML = productData.description;


// Appending content material to right container div
contentDescription.appendChild(contentDescriptionHeading);
contentDescription.appendChild(contentDescriptionPara);

rightContainerDiv.appendChild(contentDescription);


// Creating div for Product preview in right container div

var productPreview = document.createElement("div");
var productPreviewHeading = document.createElement("h3");
productPreview.className = "product-preview";

productPreviewHeading.innerHTML = "Product Preview";

productPreview.appendChild(productPreviewHeading);
rightContainerDiv.appendChild(productPreview);

// Now use loop to render different images from obj

var productPreviewContainer = document.createElement("div");
productPreviewContainer.id = "previewing";
productPreview.appendChild(productPreviewContainer);

for (i = 0; i < productData.photos.length; i++) {
  var imgContainer = document.createElement("img");
  imgContainer.src = productData.photos[i];
  imgContainer.id = "img" + i;
  imgContainer.className = "border-none";
  productPreviewContainer.appendChild(imgContainer);
}

// For First Image

var firstImage = document.getElementById('img0')

firstImage.addEventListener("click", function () {
  leftContainer.innerHTML = "";
  // I will render default image

  var imgLeftContainer = document.createElement("img");

  // I will access default image

  imgLeftContainer.src = productData.photos[0];

  // Giving style to image border
  firstImage.style.border = "2px solid #009688";

  // Appending default image to the leftContainer

  leftContainer.appendChild(imgLeftContainer);

});

// For second Image

var secondImage = document.getElementById('img1')

secondImage.addEventListener("click", function () {
  leftContainer.innerHTML = "";
  // I will render default image

  var imgLeftContainer = document.createElement("img");

  // I will access default image

  imgLeftContainer.src = productData.photos[1];

  // Giving style to image border
  secondImage.style.border = "2px solid #009688";

  // Appending default image to the leftContainer

  leftContainer.appendChild(imgLeftContainer);

});

// For Third Image

var thirdImage = document.getElementById('img2')

thirdImage.addEventListener("click", function () {
  leftContainer.innerHTML = "";
  // I will render default image

  var imgLeftContainer = document.createElement("img");

  // I will access default image

  imgLeftContainer.src = productData.photos[2];

  // Giving style to image border
  thirdImage.style.border = "2px solid #009688";

  // Appending default image to the leftContainer

  leftContainer.appendChild(imgLeftContainer);

});

// For Fourth Image

var fourthImage = document.getElementById('img3')

fourthImage.addEventListener("click", function () {
  leftContainer.innerHTML = "";
  // I will render default image

  var imgLeftContainer = document.createElement("img");

  // I will access default image

  imgLeftContainer.src = productData.photos[3];

  // Giving style to image border
  // fourthImage.style.border = "2px solid #009688";

  // Appending default image to the leftContainer

  leftContainer.appendChild(imgLeftContainer);
});

// For Fifth Image

var fifthImage = document.getElementById('img4')

fifthImage.addEventListener("click", function () {
  leftContainer.innerHTML = "";
  // I will render default image

  var imgLeftContainer = document.createElement("img");

  // I will access default image

  imgLeftContainer.src = productData.photos[4];

  // Giving style to image border
  fifthImage.className = "border-img";

  // Appending default image to the leftContainer

  leftContainer.appendChild(imgLeftContainer);
});










