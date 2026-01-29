import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        console.log('Starting checkout process...');

        // 1. Check inventory
        const inStock = this.inventoryService.checkStock(orderDetails.productIds);
        if (!inStock) {
            console.log('Checkout failed: Products out of stock.');
            return;
        }
        console.log('Inventory check passed.');

        // 2. Process payment
        const paymentSuccess = this.paymentService.processPayment(orderDetails.userId);
        if (!paymentSuccess) {
            console.log('Checkout failed: Payment failed.');
            return;
        }
        console.log('Payment successful.');

        // 3. Arrange shipping
        this.shippingService.arrangeShipping(orderDetails.shippingInfo);
        console.log('Shipping arranged.');

        console.log('Order placed successfully!');
    }
}

export { CheckoutFacade };
