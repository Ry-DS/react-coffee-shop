let PRICES = {//we define all prices here
    type: {
        name: "Type",
        flat_white: {name: "Flat White", code: "flat_white", price: 2.5},
        cappuccino: {name: "Cappuccino", code: "cappuccino", price: 3},
        short_black: {name: "Short Black", code: "short_black", price: 2},
        latte: {name: "Latte", code: "latte", price: 3}
    },
    milk: {
        name: "Milk Type",
        full_cream_milk: {name: "Full Cream Milk", code: "full_cream_milk", price: 0},
        skim_milk: {name: "Skim Milk", code: "skim_milk", price: 0.5},
        soy_milk: {name: "Soy Milk", code: "soy_milk", price: 1}
    },
    size: {
        name: "Size",
        small: {name: "Small", code: "small", price: 0},
        regular: {name: "Regular", code: "regular", price: 0.5},
        large: {name: "Large", code: "large", price: 1}
    },
    sugar: {
        name: "Sugar Amount",
        none: {name: "None", code: "none", price: 0},
        one: {name: "One", code: "one", price: 0.05},
        two: {name: "Two", code: "two", price: 0.1}
    }

};
export default PRICES;