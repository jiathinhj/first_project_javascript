import { Product } from "../Models/Product.js";
import { ParseUtils } from "../Utils/ParseUtils.js";

let productTableBody = document.getElementById("productTableBody");

function displayProductOnAdminPage(listProduct){
    var result = "";
    var count = 0;
    listProduct.forEach(element => {
        count ++;
        result += 
        '<tr>' +
            '<th scope="col">' + count + '</td>' +
            '<td>' + element.getName + '</td>' +
            '<td>' + element.getPrice + '</td>' +
            '<td>' + element.getInfo + '</td>' +
            '<td>' + element.getDetail + '</td>' +
            '<td><img src="' + element.getImageSoure + '" width="50px"></td>' +
            '<td>' + element.getManufacturer + '</td>' +
            '<td>' + element.getCategory + '</td>' +
            '<td><button type="button" class="btn btn-warning">Edit</button></td>' +
            '<td><button type="button" class="btn btn-danger">Delete</button></td>' +
        '</tr>'
    });

    productTableBody.innerHTML = result;
}

function onAdminLoad() {
    let listProductJSON = localStorage.getItem("listProduct");
    const parseUtils = new ParseUtils();
    var listProduct = parseUtils.parseJSONtoProduct(listProductJSON);
    displayProductOnAdminPage(listProduct);
    const btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", addNewProduct);
}
onAdminLoad();


function addNewProduct(){
    var inputID = document.getElementById("inputID").value;
    var inputName = document.getElementById("inputName").value;
    var inputPrice = document.getElementById("inputPrice").value;
    var inputInfo = document.getElementById("inputInfo").value;
    var inputDetail = document.getElementById("inputDetail").value;
    var inputImage = document.getElementById("inputImage").value;
    var inputManufacturer = document.getElementById("inputManufacturer").value;
    var inputCategory = document.getElementById("inputCategory").value;
    console.log(inputID, inputName, inputPrice, inputInfo, inputDetail, inputImage, inputManufacturer, inputCategory);
    let newProduct = new Product(inputImage, inputName, inputManufacturer, inputPrice, inputInfo, inputDetail, inputCategory);
    let listProductJSON = localStorage.getItem("listProduct");
    let parseUtils = new ParseUtils();
    let listProduct = parseUtils.parseJSONtoProduct(listProductJSON);
    listProduct.push(newProduct);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    onAdminLoad();
}//image_soure, name, manufaturer, price, info, detail, categor