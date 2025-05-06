export interface CartProductTypes {
    id: number;
    title: string;
    image: string;
    price: number;
    size?: string;
    quantity?: number;
}

export interface CartTypes {
    cart: CartProductTypes[],
    total: number
    addToCart: (product: CartProductTypes) => void;
    updateQuantity: (id: string, size: string, quantity: number) => void;
    removeFromCart: (id: string, size: string) => void;
}