import { ParseUtils } from "../Utils/ParseUtils.js";
import { Product } from "../Models/Product.js";

export class ProductMethod {

  static getListProductFromLocalStorage() {
    let listProductJSON = localStorage.getItem("listProduct");
    let parseUtils = new ParseUtils();
    return parseUtils.parseJSONtoProduct(listProductJSON);
  }

  static getIndexProductById(productID) {
    let listProduct = this.getListProductFromLocalStorage();
    for (var i = 0; i < listProduct.length; i++) {
      if (listProduct[i].getID == productID) {
        return i;
      }
    }
    return null;
  }

  static addNewProduct() {
    var inputID = document.getElementById("inputID").value;
    var inputName = document.getElementById("inputName").value;
    var inputPrice = document.getElementById("inputPrice").value;
    var inputInfo = document.getElementById("inputInfo").value;
    var inputDetail = document.getElementById("inputDetail").value;
    var inputImage = document.getElementById("inputImage").value;
    var inputManufacturer = document.getElementById("inputManufacturer").value;
    var inputCategory = document.getElementById("inputCategory").value;
    var inputStar = document.getElementById("inputStar").value;

    let newProduct = new Product([inputImage, inputName, inputManufacturer, inputPrice, inputInfo, inputDetail, inputCategory, inputStar]);

    let listProduct = this.getListProductFromLocalStorage();
    listProduct.push(newProduct);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));

    return listProduct;
  }

  static deleteProduct(productID) {
    let listProduct = this.getListProductFromLocalStorage();
    let index = this.getIndexProductById(productID);
    if (index != null) {
      listProduct.splice(index, 1);
      localStorage.setItem("listProduct", JSON.stringify(listProduct));
    }

    return listProduct;
  }

  static searchProductByName(searchName) {
    let listProduct = this.getListProductFromLocalStorage();

    let result = [];
    listProduct.forEach(element => {
      if (element.getName.toLowerCase().includes(searchName.toLowerCase().trim())) {
        result.push(element);
      }
    });

    localStorage.setItem("currentSearchValue", searchName);

    return result;
  }

  static editProduct(productID) {
    let listProduct = this.getListProductFromLocalStorage();
    let index = this.getIndexProductById(productID);
    let product = listProduct[index];

    var inputID = document.getElementById("inputEditID");
    inputID.setAttribute("value", product.getID);
    var inputName = document.getElementById("inputEditName");
    inputName.setAttribute("value", product.getName);
    var inputPrice = document.getElementById("inputEditPrice");
    inputPrice.setAttribute("value", product.getPrice);
    var inputInfo = document.getElementById("inputEditInfo");
    inputInfo.setAttribute("value", product.getInfo);
    var inputDetail = document.getElementById("inputEditDetail");
    inputDetail.setAttribute("value", product.getDetail);
    var inputImage = document.getElementById("inputEditImage");
    inputImage.setAttribute("value", product.getImageSoure);
    var inputManufacturer = document.getElementById("inputEditManufacturer");
    inputManufacturer.setAttribute("value", product.getManufacturer);
    var inputCategory = document.getElementById("inputEditCategory");
    inputCategory.setAttribute("value", product.getCategory);
    var inputStar = document.getElementById("inputEditStar");
    inputStar.setAttribute("value", product.getRating);

    localStorage.setItem("currentSelectedProductID", product.getID);

  }

  static saveEditProduct() {
    const productID = localStorage.getItem("currentSelectedProductID");

    var inputID = parseInt(document.getElementById("inputEditID").value);
    var inputName = document.getElementById("inputEditName").value;
    var inputPrice = document.getElementById("inputEditPrice").value;
    var inputInfo = document.getElementById("inputEditInfo").value;
    var inputDetail = document.getElementById("inputEditDetail").value;
    var inputImage = document.getElementById("inputImage").value;
    var inputManufacturer = document.getElementById("inputEditManufacturer").value;
    var inputCategory = document.getElementById("inputEditCategory").value;
    var inputStar = document.getElementById("inputEditStar").value;
    let listProduct = this.getListProductFromLocalStorage();

    let index = this.getIndexProductById(productID);

    let newProduct = new Product([inputImage, inputName, inputManufacturer, inputPrice, inputInfo, inputDetail, inputCategory, inputStar, inputID]);
    listProduct[index] = newProduct;
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    return listProduct;

  }

}