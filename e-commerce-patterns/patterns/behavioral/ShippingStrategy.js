class FlatRateStrategy {
    calculate(packageDetails) {
        // Flat rate shipping cost
        return 10;
    }
}

class WeightBasedStrategy {
    calculate(packageDetails) {
        // Shipping cost based on weight
        return packageDetails.weight * 5;
    }
}

class ShippingCalculator {
    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(packageDetails) {
        if (!this.strategy) {
            throw new Error("Shipping strategy not set");
        }
        return this.strategy.calculate(packageDetails);
    }
}

export { FlatRateStrategy, WeightBasedStrategy, ShippingCalculator };
