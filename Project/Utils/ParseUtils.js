import { Product } from "../Models/Product.js";

class ParseUtils {
    constructor() { }
    parseJSONtoProduct(JSONstring) {
        var objectListJSON = JSON.parse(JSONstring) || [];
        var objectList = [];
        objectListJSON.forEach(element => {
            var values = Object.values(element);
            objectList.push(new Product(values[0], values[1], values[2], values[3], values[4], values[5], values[6]));
        });
        return objectList;
    }
};

export{ParseUtils};

