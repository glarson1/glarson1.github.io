window.MENU_DATA = {
  restaurant: "Better Days Bar & Grill",
  menu: {
    food: [
      {
        category: "Appetizers",
        items: [
          { name: "Edamame", price: 8.99, description: "Choice of salt & garlic or spicy" },
          {
            name: "Quesadillas",
            description: "Served with a side of guac and sour cream",
            variants: [
              { name: "Plain", price: 9.99 },
              { name: "Chicken", price: 12.99 },
              { name: "Shrimp", price: 13.99 },
              { name: "Steak", price: 14.99 },
            ],
          },
          {
            name: "Nachos",
            description: "Queso, jalapeños, tomatoes & sour cream",
            variants: [
              { name: "Plain", price: 9.99 },
              { name: "Chicken", price: 12.99 },
              { name: "Steak", price: 14.99 },
            ],
          },
          { name: "Buffalo Fries", price: 11.99, description: "Chicken, queso, fries" },
          { name: "Jalapeño Poppers", price: 11.99, description: "Served with ranch" },
          { name: "Chips & Salsa", price: 8.99 },
          { name: "Chips & Queso", price: 8.99 },
          { name: "Chips & Guacamole", price: 9.99 },
          { name: "Trio Dip", price: 12.99, description: "Chips, guacamole, queso, salsa" },
          {
            name: "Sampler Platter",
            price: 24.99,
            description: "Jalapeño poppers, mozzarella sticks, chicken bites & fries",
          },
          { name: "Pepperoni Pizza Waffle Fries", price: 9.99 },
          {
            name: "Mozzarella Sticks",
            price: 8.99,
            quantity: 6,
            description: "Choice of any house-made sauce +$1.00",
          },
          { name: "Fried Pickle Chips", price: 8.99 },
          {
            name: "Hand-Breaded Shrimp",
            price: 10.99,
            quantity: 5,
            description: "Choice of any house-made sauce",
          },
        ],
      },
      {
        category: "Salads",
        items: [
          { name: "House Salad", price: 6.99 },
          {
            name: "Caesar Salad",
            price: 6.99,
            addOns: [{ name: "Add Grilled Chicken", price: 5.99 }],
          },
        ],
      },
      {
        category: "Pizzas",
        items: [
          { name: "Buffalo Chicken Pizza", price: 12.99 },
          { name: "Pepperoni Pizza", price: 12.99 },
        ],
      },
      {
        category: "Burgers",
        meta: {
          description: "Served with waffle fries",
          substitution: "Sub fries +$1.99",
        },
        items: [
          { name: "Backyard Classic", price: 13.99, description: "Lettuce, tomato, pickles" },
          { name: "Green Chile", price: 13.99, description: "Green chile, monterey jack" },
          { name: "Mushroom Swiss", price: 13.99 },
        ],
        addOns: [
          { name: "Bacon", price: 2.0 },
          { name: "Fried Egg", price: 1.5 },
          { name: "Grilled Jalapeños", price: 0.75 },
          { name: "Avocado", price: 1.5 },
          { name: "Queso", price: 2.0 },
          { name: "Cheese", price: 1.0 },
        ],
      },
      {
        category: "Sandwiches",
        meta: {
          description: "Served with waffle fries",
          substitution: "Sub fries +$1.99",
        },
        items: [
          { name: "BLT", price: 9.99 },
          { name: "El Chavo (Hotdog)", price: 9.99, description: "Charro beans, avocado, jalapeño" },
          { name: "Grilled Chicken", price: 13.99, description: "Lettuce, tomato, aioli" },
          { name: "Fried Chicken", price: 13.99, description: "Lettuce, tomato, choice of sauce" },
        ],
      },
      {
        category: "Tacos",
        items: [
          { name: "Carne Taco", price: 10.99, quantity: 3 },
          { name: "Baja Shrimp Taco", price: 12.99, quantity: 3 },
          { name: "Hot Drip Chicken Taco", price: 10.99, quantity: 3 },
          { name: "Rolled Beef Taco", price: 10.99, quantity: 3 },
        ],
      },
      {
        category: "Wings",
        meta: {
          description: "All flats or all drums +$1.99 / 12pc sub +$2.99",
          dippingSauces: ["Ranch", "Blue Cheese"],
        },
        items: [
          { name: "6 Piece Wings", price: 12.99 },
          { name: "12 Piece Wings", price: 24.99 },
          { name: "18 Piece Wings", price: 34.99 },
        ],
      },
      {
        category: "Hand-Breaded Boneless Bites",
        items: [
          { name: "8 Piece Boneless Bites", price: 9.99 },
          { name: "16 Piece Boneless Bites", price: 17.99 },
          { name: "24 Piece Boneless Bites", price: 27.99 },
        ],
      },
      {
        category: "Hand-Breaded Chicken Tenders",
        items: [
          { name: "3 Piece Chicken Tenders", price: 9.99 },
          { name: "5 Piece Chicken Tenders", price: 14.99 },
        ],
      },
      {
        category: "Wing Sauce",
        items: [
          { name: "Buffalo" },
          { name: "Lemon Pepper" },
          { name: "Spicy Lemon Pepper" },
          { name: "Pineapple Habanero" },
          { name: "Honey Hot BBQ" },
        ],
      },
      {
        category: "Sides",
        items: [
          { name: "French Fries", price: 3.5 },
          { name: "Waffle Fries", price: 4.0 },
          { name: "Side Salad", price: 5.0 },
          { name: "Torreados", price: 1.0 },
          { name: "Charro Beans", price: 3.5 },
        ],
      },
      {
        category: "Kids Menu",
        meta: { description: "Choice of french fries or waffle fries" },
        items: [
          { name: "Cheeseburger", price: 7.99 },
          { name: "Chicken Tenders", price: 7.99, quantity: 2 },
        ],
      },
      {
        category: "Dessert",
        items: [
          { name: "Fried Ice Cream", price: 9.99 },
          { name: "Churro Donut", price: 9.99 },
        ],
      },
      {
        category: "Menudo",
        items: [
          {
            name: "Menudo",
            price: 8.99,
            description: "Only served on Saturday and Sunday until supplies last",
          },
        ],
      },
    ],
    drinks: [
      {
        category: "Signature Drinks",
        items: [
          { name: "Jameson Orange Mule" },
          { name: "Blueberry Coconut Mojito" },
          { name: "Cucumber Margarita (Rocks)" },
        ],
      },
      {
        category: "Frozen Drinks",
        items: [
          { name: "Strawberry Daiquiri" },
          { name: "Margarita (Flavored)" },
          { name: "Piña Colada" },
          { name: "Mango Sunrise" },
          { name: "Mangonada" },
          { name: "Cherry Colada" },
        ],
      },
      {
        category: "Beer",
        sections: [
          {
            name: "Bottles",
            items: [
              "805",
              "Bud Light",
              "Budweiser",
              "Bud Zero",
              "Coors",
              "Coors Light",
              "Corona",
              "Corona Premier",
              "Miller Lite",
              "Modelo Especial",
              "Negra Modelo",
              "Stella",
              "Ultra Gold",
              "Yuengling",
              "Lonestar",
              "Pacifico",
              "XX",
            ],
          },
          {
            name: "Cans",
            items: [
              "Guinness",
              "Happy Dad",
              "High Noons",
              "Santa Fe 7K",
              "Sierra Nevada Hazy IPA",
              "Tecate",
              "Tecate Light",
              "Truly Berry",
              "Twisted Tea",
              "White Claw",
              "Nutrl",
              "Dos XX Pineapple",
              "Hoop Tea",
            ],
          },
          {
            name: "Draft",
            items: [
              "Blue Moon",
              "Bud Light",
              "Budweiser",
              "Miller Lite",
              "Modelo",
              "Shiner Bock",
              "Ultra",
              "XX Lager",
            ],
          },
          {
            name: "Draft Towers",
            items: [
              "Blue Moon",
              "Bud Light",
              "Budweiser",
              "Miller Lite",
              "Modelo",
              "Shiner Bock",
              "Ultra",
              "XX Lager",
            ],
          },
        ],
      },
      {
        category: "Wine",
        items: [{ name: "Mimosa Glass" }, { name: "Mimosa Tower" }],
      },
      {
        category: "Non-Alcoholic",
        meta: { price: 3.0, description: "$3.00 each unless noted" },
        items: [
          { name: "Coke" },
          { name: "Sprite" },
          { name: "Cranberry Juice" },
          { name: "Pineapple Juice" },
          { name: "Unsweet Tea" },
          { name: "Diet Coke" },
          { name: "Dr. Pepper" },
          { name: "Orange Juice" },
          { name: "Coconut Tea", priceModifier: 0.5 },
          { name: "Raspberry Tea", priceModifier: 0.5 },
          { name: "Peach Tea", priceModifier: 0.5 },
        ],
      },
    ],
  },
  notes: [
    "Subject to availability.",
    "Some item descriptions were hard to read from the photo and may need a final manual check against the printed menu.",
  ],
};
