import { Product } from "./Models/Product.js";

localStorage.clear();
let product = new Product("./Asset/Product/ImgMobile1.png", "Reno6 Z 5G", "OPPO", "9.490.000₫", "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh", "ProductDetail1", "Điện thoại");
localStorage.setItem("test", JSON.stringify(product));
console.log(product instanceof Product);

function onLoad(){
  let product = localStorage.getItem("test");
  console.log("Type of Product which is saved on localStorage: " + typeof product);
  console.log("Product which is saved on localStorage by JSON String: " + product);
  product = JSON.parse(product) || [];
  console.log(product);
  console.log(product instanceof Product);
  console.log(typeof product);
}

onLoad();