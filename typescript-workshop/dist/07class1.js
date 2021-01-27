class Cart {
    constructor(user) {
        // constructor(public user: User, private store: object = {}) {
        this.user = user;
        this.store = {};
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}
const cart1 = new Cart({ name: 'john' });
const cart2 = new Cart({ name: 'jay' });
const cart3 = new PromotionCart({ name: 'what' });
cart3.addPromotion();
