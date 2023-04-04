import { Product } from "../Models/Product.js";

class ParseUtils {
    constructor() { }
    parseJSONtoProduct(JSONstring) {
        var objectListJSON = JSON.parse(JSONstring) || [];
        var objectList = [];
        objectListJSON.forEach(element => {
            var values = Object.values(element);
            objectList.push(new Product(values));
        });
        return objectList;
    }
};

export{ParseUtils};

