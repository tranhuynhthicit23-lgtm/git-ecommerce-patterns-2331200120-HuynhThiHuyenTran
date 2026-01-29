class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        if (typeof this.product.getPrice === "function") {
            return this.product.getPrice();
        }
        return this.product.price;
    }

    getDescription() {
        if (typeof this.product.getDescription === "function") {
            return this.product.getDescription();
        }
        return this.product.name;
    }
}

class GiftWrapDecorator extends ProductDecorator {
    getPrice() {
        return super.getPrice() + 5;
    }

    getDescription() {
        return super.getDescription() + ", Gift Wrapped";
    }
}

class ExtendedWarrantyDecorator extends ProductDecorator {
    getPrice() {
        return super.getPrice() + 20;
    }

    getDescription() {
        return super.getDescription() + ", Extended Warranty";
    }
}

export { GiftWrapDecorator, ExtendedWarrantyDecorator };
