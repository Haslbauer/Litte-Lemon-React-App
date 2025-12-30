import lemonDessert from "../images/lemondessert.jpg";
import bruscetta from "../images/bruscetta.jpg";
import greekSalad from "../images/greeksalat.jpg";


export const menu = [
  // Starters (inkl. Specials)
  {
    id: 1,
    title: "Bruscetta",
    description: "Grilled bread rubbed with garlic and topped with tomato and olive oil.",
    price: 12.99,
    category: "starters",
    isSpecial: true,
    image: bruscetta,
  },
  {
    id: 2,
    title: "Greek Salad",
    description: "Tomatoes, cucumber, olives and feta cheese with oregano and olive oil.",
    price: 12.99,
    category: "starters",
    isSpecial: true,
    image: greekSalad
  },
  {
    id: 3,
    title: "Grilled Halloumi",
    description: "Warm grilled halloumi cheese served with lemon and herbs.",
    price: 8.0,
    category: "starters",
    isSpecial: false
  },

  // Mains
  {
    id: 4,
    title: "Lemon Chicken",
    description: "Juicy grilled chicken marinated in lemon, garlic and Mediterranean herbs.",
    price: 14.9,
    category: "mains",
    isSpecial: false
  },
  {
    id: 5,
    title: "Seafood Pasta",
    description: "Pasta with shrimp and calamari in a light tomato and white wine sauce.",
    price: 16.5,
    category: "mains",
    isSpecial: false
  },
  {
    id: 6,
    title: "Vegetable Moussaka",
    description: "Layered eggplant, potatoes and lentils baked with béchamel sauce.",
    price: 13.9,
    category: "mains",
    isSpecial: false
  },

  // Desserts (inkl. Specials)
  {
    id: 7,
    title: "Lemon Dessert",
    description: "Light and refreshing lemon cream with a biscuit base.",
    price: 6.5,
    category: "desserts",
    isSpecial: true,
    image: lemonDessert
  },
  {
    id: 8,
    title: "Baklava",
    description: "Traditional pastry with nuts, honey and filo dough.",
    price: 6.5,
    category: "desserts",
    isSpecial: false
  },
  {
    id: 9,
    title: "Greek Yogurt & Honey",
    description: "Creamy Greek yogurt topped with honey and roasted nuts.",
    price: 5.5,
    category: "desserts",
    isSpecial: false
  }
];
