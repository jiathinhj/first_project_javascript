for(var i = 0; i < list_product.length; i++){
  var element = list_product[i];

  const div_1 = document.createElement("div");
  div_1.className = "col-3 col-sm-3 col-lg-3";

  const div_2 = document.createElement("div");
  div_2.className = "row";

  const div_3 = document.createElement("div");
  div_3.className = "col-12 col-sm-12 col-lg-12"; 
  
  const img = document.createElement("img");
  img.src = element.getImageSoure;
  img.style = "width: 80%";

  const h3 = document.createElement("h3");
  h3.style = "font-weight:bold;";
  h3.innerText = element.getName;

  const h4 = document.createElement("h4");
  h4.innerText = "Hãng sản xuất: " + element.getManufacturer;

  const div_4 = document.createElement("div");
  div_4.className = "row";
  d

  const ul = document.createElement("ul");
  ul.className = "rating";
  ul.style = "list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px";


  div_3.appendChild(img);
  div_3.appendChild(h3);
  div_3.appendChild(h4);
  div_3.appendChild(ul);
  div_3.appendChild(div_4);
  div_2.appendChild(div_3)
  div_1.appendChild(div_2);
  productSection.appendChild(div_1);


}



