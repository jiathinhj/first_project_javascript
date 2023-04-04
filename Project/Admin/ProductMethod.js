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

  static editProduct(productID) {
    let listProduct = this.getListProductFromLocalStorage();
    let index = this.getIndexProductById(productID);
    let product = listProduct[index];

    var inputID = document.getElementById("inputID");
    inputID.setAttribute("value", product.getID);
    var inputName = document.getElementById("inputName");
    inputName.setAttribute("value", product.getName);
    var inputPrice = document.getElementById("inputPrice");
    inputPrice.setAttribute("value", product.getPrice);
    var inputInfo = document.getElementById("inputInfo");
    inputInfo.setAttribute("value", product.getInfo);
    var inputDetail = document.getElementById("inputDetail");
    inputDetail.setAttribute("value", product.getDetail);
    var inputImage = document.getElementById("inputImage");
    inputImage.setAttribute("file", product.getImageSoure);
    var inputManufacturer = document.getElementById("inputManufacturer");
    inputManufacturer.setAttribute("select", product.getManufacturer);
    var inputCategory = document.getElementById("inputCategory");
    inputCategory.setAttribute("value", product.getCategory);
    var inputStar = document.getElementById("inputStar");
    inputStar.setAttribute("value", product.getRating);
  }

  static searchProductByName(searchName){
    let listProduct = this.getListProductFromLocalStorage();

    let result = [];
    listProduct.forEach(element => {
      if(element.getName.toLowerCase().includes(searchName.toLowerCase().trim())){
        result.push(element);
      }
    });

    localStorage.setItem("currentSearchValue", searchName);

    return result;
  }
}