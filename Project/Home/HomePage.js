var list_product = [];
const productSection = document.getElementById("ProductSection");

class Product {
  constructor(image_soure, name, manufaturer, price) {
    this.image_soure = image_soure;
    this.name = name;
    this.manufaturer = manufaturer;
    this.price = price;
  };
  get getImageSoure() {
    return this.image_soure
  }
  get getName() {
    return this.name
  }
  get getManufacturer() {
    return this.manufaturer
  }
  get getPrice() {
    return this.price
  }
}
function displayProduct(list_product) {
  var result = "";
  list_product.forEach(element => {
    result += `<div class="col-3 col-sm-3 col-lg-3">
    <div class="row">
      <div class="col-12 col-sm-12 col-lg-12">`
      + `<img src="` + element.getImageSoure + `" alt="" style="width: 80%;">`
      + `<h3  style="font-weight:bold;">` + element.getName + `</h3>`
      + `<h4>Hãng sản xuất: ` + element.getManufacturer + `</h4>`
      + ` <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px">
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
        </ul>
        <div class="row">
          <div class="col-sm-4 col-md-4 col-lg-4">
            <h4>`+ element.getPrice + `</h4>
          </div>
          <div class="ccol-sm-6 col-md-6 col-lg-6">
            <button type="button" class="btn btn-default" style="border: 0px">
              <p class="fa fa-shopping-cart" style="color: red; font-size: 35px"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  });
    
  document.getElementById("ProductSection").innerHTML = result;
};

function myFunction() {
  list_product1 = [
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫"),
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫"),
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫"),
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫"),
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫"),
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫"),
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫"),
    new Product("../Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫")
  ]
  displayProduct(list_product1);
}
myFunction();