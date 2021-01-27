interface User {
    name: string;
}
interface Product {
    id: string;
    price: number;
}
class Cart {
    user: User; //기본 public
    private store: Object;
    constructor(user: User) {
    // constructor(public user: User, private store: object = {}) {
        this.user = user;
        this.store = {};
    }
    put(id: string, product: Product) {
        this.store[id] = product;
    }

    private get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart { //상속
    addPromotion(){
        this.user
    }
}

const cart1 = new Cart({name: 'john'});
const cart2 = new Cart({name: 'jay'});

const cart3 = new PromotionCart({name:'what'});
cart3.addPromotion();