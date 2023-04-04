import { ProductMethod } from "./ProductMethod.js";

let productTableBody = document.getElementById("productTableBody");

let listProduct = ProductMethod.getListProductFromLocalStorage();
displayProductOnAdminPage(listProduct);

const btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", function () {
    let listProduct = ProductMethod.addNewProduct();
    displayProductOnAdminPage(listProduct);
});

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function(){
    let searchName = document.getElementById("txtSearch").value;
    let currentList = ProductMethod.searchProductByName(searchName);

    displayProductOnAdminPage(currentList);
})


function displayProductOnAdminPage(listProduct) {
    productTableBody.innerHTML = "";
    var count = 0;
    listProduct.forEach(element => {
        count++;
        productTableBody.innerHTML +=
            '<tr id="' + element.getID + '">' +
            '<td>' + count + '</td>' +
            '<td>' + element.getName + '</td>' +
            '<td>' + element.getPrice + '</td>' +
            '<td>' + element.getInfo + '</td>' +
            '<td>' + element.getDetail + '</td>' +
            '<td><img src="' + element.getImageSoure + '" width="50px"></td>' +
            '<td>' + element.getManufacturer + '</td>' +
            '<td>' + element.getCategory + '</td>' +
            '<td>' + element.getRating + '</td>' +
            '</tr>'
    });

    listProduct.forEach(element => {
        let tr = document.getElementById(element.getID.toString());
        let td_delete = document.createElement("td");
        let td_edit = document.createElement("td");

        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("type", "button");
        btnDelete.setAttribute("class", "btn btn-danger");
        btnDelete.innerText = "Delete";
        btnDelete.addEventListener("click", function () {
            let listProduct = ProductMethod.deleteProduct(element.getID);
            displayProductOnAdminPage(listProduct);
        })

        let btnEdit = document.createElement("button");
        btnEdit.setAttribute("type", "button");
        btnEdit.setAttribute("class", "btn btn-warning");
        btnEdit.innerText = "Edit";
        btnEdit.setAttribute("data-target", "#modalProductForm");
        btnEdit.setAttribute("data-toggle", "modal");
        btnEdit.addEventListener("click", function () {
            let listProduct = ProductMethod.editProduct(element.getID);
            displayProductOnAdminPage(listProduct);
        })


        td_edit.appendChild(btnEdit);
        td_delete.appendChild(btnDelete);
        tr.appendChild(td_edit)
        tr.appendChild(td_delete);
    });
}
