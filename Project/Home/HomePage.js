import { ParseUtils } from "../Utils/ParseUtils.js";
import { Product } from "../Models/Product.js";

const productSection = document.getElementById("ProductSection");


/** check if listProduct is null */
function checkListProduct() {
  let listProduct = localStorage.getItem("listProduct");
  if (listProduct == null) {
    listProduct = [
      new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Điện thoại"),
      new Product("../Asset/Product/iphone14prm.png", "Iphone 14 promax", "Apple", "28.490.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Điện thoại"),
      new Product("../Asset/Product/zfold3.png", "Z Fold 3", "Samsung", "19.990.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Điện thoại"),
      new Product("../Asset/Product/S22Ultra.png", "S22 Ultra", "Samsung", "23.990.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Điện thoại"),
    ];
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
  }
}
checkListProduct();


function displayProduct(listProduct) {
  var result = "";
  listProduct.forEach(element => {
    result +=
      `<div class="col-3 col-sm-3 ">
    <div class="row">
      <div class="col-12 col-sm-12 ">`
      + `<div class="row"> <img src="` + element.getImageSoure + `" alt="" style="height: 300px;"> </div>`
      + `<div class="row"> <h3  style="font-weight:bold;">` + element.getName + `</h3> </div>`
      + `<div class="row"> <h4>Hãng sản xuất: ` + element.getManufacturer + `</h4> </div>`
      + ` <div class="row"> <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px">
          <li>
            <p class="fa fa-star selected" style="color: orange"></p>
          </li>
          <li>
            <p class="fa fa-star selected" style="color: orange"></p>
          </li>
          <li>
            <p class="fa fa-star selected" style="color: orange"></p>
          </li>
          <li>
            <p class="fa fa-star selected" ></p>
          </li>
          <li>
            <p class="fa fa-star selected" ></p>
          </li>
        </ul> </div>
        <div class="row">
          <div class="col-7 col-sm-7  ">
            <h4>`+ element.getPrice + `</h4>
          </div>
          <div class="col-4 col-sm-4  ">
            <button type="button" class="btn btn-default" style="border: 0px">
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

function onLoad() {
  var listProductJSON = localStorage.getItem("listProduct");
  const parseUtils = new ParseUtils();
  var listProduct = parseUtils.parseJSONtoProduct(listProductJSON);
  displayProduct(listProduct);
}
onLoad();