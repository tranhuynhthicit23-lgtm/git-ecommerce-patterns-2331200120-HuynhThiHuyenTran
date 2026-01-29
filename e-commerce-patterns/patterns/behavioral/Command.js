class AddToCartCommand {
    constructor(cartService, product) {
        this.cartService = cartService;
        this.product = product;
    }

    execute() {
        this.cartService.addProduct(this.product);
    }

    undo() {
        this.cartService.removeProduct(this.product);
    }
}

class CommandInvoker {
    constructor() {
        this.history = [];
    }

    executeCommand(command) {
        command.execute();
        this.history.push(command);
    }

    undoLastCommand() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

export { AddToCartCommand, CommandInvoker };
