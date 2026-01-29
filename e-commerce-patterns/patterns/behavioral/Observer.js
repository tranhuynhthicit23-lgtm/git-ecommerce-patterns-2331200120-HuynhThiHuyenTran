class OrderTracker {
    constructor(orderId) {
        this.orderId = orderId;
        this.observers = [];
        this.status = 'Created';
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer =>
            observer.update(this.orderId, this.status)
        );
    }

    updateStatus(status) {
        this.status = status;
        console.log(`Order ${this.orderId} status updated to: ${status}`);
        this.notifyObservers();
    }
}

class EmailNotifier {
    update(orderId, status) {
        console.log(`[Email] Order ${orderId} is now ${status}`);
    }
}

class DashboardNotifier {
    update(orderId, status) {
        console.log(`[Dashboard] Order ${orderId} status: ${status}`);
    }
}

export { OrderTracker, EmailNotifier, DashboardNotifier };
