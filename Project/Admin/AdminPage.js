import { ProductMethod } from "./ProductMethod.js";

let listProduct = ProductMethod.getListProductFromLocalStorage();


const btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", function () {
    let listProduct = ProductMethod.addNewProduct();
    displayProductOnAdminPage(listProduct);
    displayManufacturer();
    displayCategory();
});

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function () {
    let searchName = document.getElementById("txtSearch").value;
    let currentList = ProductMethod.searchProductByName(searchName);

    displayProductOnAdminPage(currentList);
})

let btnEditSave = document.getElementById("btnEditSave");
btnEditSave.addEventListener("click", function () {
    let listProduct = ProductMethod.saveEditProduct();
    displayProductOnAdminPage(listProduct);
    displayManufacturer();
    displayCategory();
});

let btnAddnew = document.getElementById("btnAddNew");
btnAddnew.addEventListener("click", function () {
    // let list = Array.from(document.getElementsByTagName("input"));
    // console.log(list);
    // for(var i = 0; i < list.length; i ++){
    //     list[i].value = "";
    // }
    Array.from(document.getElementsByTagName("input")).forEach(element => {
        element.value = "";
    }); // clean form

    displayCategoryForm();
    displayManufacturerForm();
})

function displayManufacturer() {
    let listManufacturer = document.getElementById("listManufacturer");
    listManufacturer.innerHTML = "";
    let manufacturerList = ProductMethod.getManufacturerList();
    manufacturerList.forEach(element => {
        listManufacturer.innerHTML +=
            `<p class="list-group-item">
                <button type="button" id="`+ element + `" class="btnClass">` + element + `</button>
            </p>`;
    });
    manufacturerList.forEach(element => {
        let btnManufacturer = document.getElementById(element);
        btnManufacturer.addEventListener("click", function () {
            let currentList = ProductMethod.searchProductByManufacturer(element)
            displayProductOnAdminPage(currentList);
        });
    });
}
displayManufacturer();

function displayCategory() {
    let categoryList = ProductMethod.getCategoryList();
    let listCategory = document.getElementById("listCategory");
    listCategory.innerHTML = "";
    categoryList.forEach(element => {
        listCategory.innerHTML +=
            '<option>' + element + '</option>'
    });
}
displayCategory();


function displayManufacturerForm() {
    let manufacturerList = ProductMethod.getManufacturerList();
    let datalist = document.getElementById("listManufacturerForm");
    datalist.innerHTML = "";
    console.log(manufacturerList);
    manufacturerList.forEach(element => {
        var option = document.createElement("option");
        option.setAttribute("value", element);
        datalist.appendChild(option);
    });
}

function displayCategoryForm() {
    let categoryList = ProductMethod.getCategoryList();
    const datalist = document.getElementById("listCategoryForm");
    // for (var i = 0 ; i < categoryList.length ; i++){
    //     var option = document.createElement("option");
    //     option.setAttribute("value" , categoryList[i]);
    //     console.log(categoryList[i]);
    //     datalist.appendChild(option);
    // }

    categoryList.forEach(element => {
        var option = document.createElement("option");
        option.setAttribute("value", element);
        datalist.appendChild(option);
    });
}
displayCategoryForm();



function displayProductOnAdminPage(listProduct) {
    let productTableBody = document.getElementById("productTableBody");
    productTableBody.innerHTML = "";
    var count = 0;
    listProduct.forEach(element => {
        count++;
        productTableBody.innerHTML +=
            '<tr id="' + element.getID + '">' +
            '<td>' + count + '</td>' +
            '<td>' + element.getID + '</td>' +
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
            if (confirm("Are you sure to delete product with ID " + element.getID)) {
                let listProduct = ProductMethod.deleteProduct(element.getID);
                displayProductOnAdminPage(listProduct);
                displayManufacturer();
            }
        });

        let btnEdit = document.createElement("button");
        btnEdit.setAttribute("type", "button");
        btnEdit.setAttribute("class", "btn btn-warning");
        btnEdit.innerText = "Edit";
        btnEdit.setAttribute("data-target", "#modalEditForm");
        btnEdit.setAttribute("data-toggle", "modal");
        btnEdit.addEventListener("click", function () {
            ProductMethod.editProduct(element.getID);
        });

        td_edit.appendChild(btnEdit);
        td_delete.appendChild(btnDelete);
        tr.appendChild(td_edit);
        tr.appendChild(td_delete);
    });
}

displayProductOnAdminPage(listProduct);

let btnChange = document.getElementById("btnTest");
btnChange.addEventListener("click", () => {
    let test = document.getElementById("test");
    console.dir(test);
});

let test = [1, 2, 3];
let result = 0;
for(let i = 0; i < test.length; i ++){
    if(i % 2 == 0){
        result += test[i];
    }
}
document.getElementById("test").innerHTML = i;