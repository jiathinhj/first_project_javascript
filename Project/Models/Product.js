class Product {
    constructor(arr) {
        this.image_soure = arr[0];
        this.name = arr[1].trim();
        this.manufaturer = arr[2].toUpperCase().trim();
        this.price = arr[3];
        this.info = arr[4].trim();
        this.detail = arr[5].trim();
        this.category = arr[6].trim();
        this.star = arr[7];
        this.id = (arr[8] === undefined) ? Math.floor(Math.random() * Date.now()) : arr[8];
    };  
    get getImageSoure() {
        return this.image_soure;
    }
    get getName() {
        return this.name;
    }
    get getManufacturer() {
        return this.manufaturer;
    }
    get getPrice() {
        return this.price;
    }
    get getInfo(){
        return this.info;
    }
    get getDetail(){
        return this.detail;
    }
    get getCategory(){
        return this.category;
    }
    get getRating(){
        return this.star;
    } 
    get getID(){
        return this.id;
    }

    set setID(id){
        this.id = id;
    }
    set setName(name){
        this.name = name.trim();
    }
    set setManufacturer(man){
        this.manufaturer = man.toUpperCase().trim();
    }
    set setPrice(price){
        this.price = price;
    }
    set setDetail(detail){
        this.detail = detail.trim();
    }
    set setInfo(info){
        this.info = info.trim();
    }
    set setCategory(cat){
        this.category = cat.trim();
    }
    set setRating(star){
        this.star = star;
    }
}   


export {Product};