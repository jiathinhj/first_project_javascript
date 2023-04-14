import { ParseUtils } from "../Utils/ParseUtils.js";
import { Product } from "../Models/Product.js";

const productSection = document.getElementById("ProductSection");


/** check if listProduct is null */
function checkListProduct() {
  let listProduct = localStorage.getItem("listProduct");
  if (listProduct == null) {
    listProduct = [
      new Product(["../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Điện thoại", 3]),
      new Product(["../Asset/Product/iphone14prm.png", "Iphone 14 promax", "Apple", "28.490.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Máy tính",3]),
      new Product(["../Asset/Product/zfold3.png", "Z Fold 3", "Samsung", "19.990.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Tablet",3]),
      new Product(["../Asset/Product/S22Ultra.png", "S22 Ultra", "Samsung", "23.990.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Điện thoại",3]),
    ];
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
  }
}
checkListProduct();


function displayProduct(listProduct) {
  var result = "";
  listProduct.forEach(element => {
    result +=
      `<div class="col-3 col-sm-3">
    <div class="row">
      <div class="col-12 col-sm-12">`
      + `<div > <img src="` + element.getImageSoure + `" alt="" style="height: 250px;"> </div>`
      + `<div> <h3>` + element.getName + `</h3> </div>`
      + `<div> <h5>Hãng sản xuất: ` + element.getManufacturer + `</h5> </div>`
      + `<div> <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px;">`
      + showStarRating(element.getRating) +
       `</ul> 
        </div>
        <div class="row col-12 col-sm-12" style="padding-inline-start: 0px; padding-top: 0px;" >
          <div class="col-8 col-sm-8">
            <h4>`+ element.getPrice + `</h4>
          </div>
          <div class="col-3 col-sm-3  ">
            <button type="button" class="btn btn-default" style="border: 0px; background-color: white">
              <p class="fa fa-shopping-cart" style="color: red; font-size: 35px"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  });

  productSection.innerHTML = result;
};

function showStarRating(ratingStar) {
  // Khai báo mảng
  let starRating = "";
  // Hiển thị đánh giá có Sao
  for (let i = 1; i <= ratingStar; i++) {
    starRating += `
      <li>
      <p class="fa fa-star selected" style="color: orange"></p>
      </li>`;
  }
  // Hiển thị các Sao không được đánh gía
  for (let i = 1; i <= 5 - ratingStar; i++) {
    starRating += `
    <li>
    <p class="fa fa-star selected" ></p>
    </li>`;
  }
  
  return starRating;
};





function onLoad() {
  var listProductJSON = localStorage.getItem("listProduct");
  const parseUtils = new ParseUtils();
  var listProduct = parseUtils.parseJSONtoProduct(listProductJSON);
  displayProduct(listProduct);
}
onLoad();


