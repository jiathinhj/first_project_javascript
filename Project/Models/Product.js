class Product {
    constructor(image_soure, name, manufaturer, price, info, detail, category) {
        this.image_soure = image_soure;
        this.name = name;
        this.manufaturer = manufaturer;
        this.price = price;
        this.info = info;
        this.detail = detail;
        this.category = category;
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
    get getInfo(){
        return this.info;
    }
    get getDetail(){
        return this.detail;
    }
    get getCategory(){
        return this.category;
    }
}

export {Product};