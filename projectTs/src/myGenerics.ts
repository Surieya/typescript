interface Quiz {
    name: string,
    type: string

}

interface Course{
    name: string,
    author: string,
    subjext: string
}


class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product) 
    }
} 