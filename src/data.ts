import ClaroImg from "./assets/images/claro.svg";
import LumiaImg from "./assets/images/luima.jpg";
import OnazaImg from "./assets/images/screen-shot-2019-01-06-at-10-55-45@3x 1.svg";
import MashyaImg from "./assets/images/mashya.png";
import Hero from "./assets/images/hero-picture 1.svg";
import pizzaImg from "./assets/images/pizza.svg";
import chefImg from "./assets/images/chef.svg";

export const epicureData = {
  hero: {
    pictureUrl: Hero,
    header: "Epicure works with the top chef restaurants in Tel Aviv",
    searchBarText: "Search for restaurant cuisine, chef",
  },
  restaurants: [
    {
      name: "Claro",
      chef: "Ran Shmueli",
      isPopular: true,
      stars: 5,
      imgUrl: ClaroImg,
    },
    {
      name: "Lueima",
      chef: "Meir Adoni",
      isPopular: true,
      stars: 4,
      imgUrl: LumiaImg,
    },
    {
      name: "Onaza",
      chef: "Yossi Shitrit",
      isPopular: true,
      stars: 5,
      imgUrl: OnazaImg,
    },
    {
      name: "Kitchen Market",
      chef: "Yossi Shitrit",
      isPopular: false,
      stars: 3,
      imgUrl: LumiaImg,
    },
    {
      name: "Malca",
      chef: "Eyal Shani",
      isPopular: true,
      stars: 3,
      imgUrl: MashyaImg,
    },
    {
      name: "Mashya",
      chef: "Yossi Shitrit",
      isPopular: false,
      stars: 5,
      imgUrl: MashyaImg,
    },
  ],
  dishes: [
    {
      name: "Pad Ki Mao",
      imgUrl: ClaroImg,
      description:
        "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      ingredients:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      isSignature: true,
      restaurant: "Shila",
      category: ["spicy"],
      price: 88,
    },
    {
      name: "Garbanzo Frito",
      imgUrl: LumiaImg,
      description: "Fresh sushi rolls with a variety of fillings and toppings.",
      ingredients:
        "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      isSignature: true,
      restaurant: "Taizu",
      category: ["spicy"],
      price: 98,
    },
    {
      name: "Smoked Pizza",
      imgUrl: pizzaImg,
      description:
        "Mexican tacos filled with seasoned beef and topped with fresh salsa.",
      ingredients: "Basil dough, cashew butter, demi-glace,bison & radish",
      isSignature: true,
      restaurant: "Ouzeria",
      category: ["veg"],
      price: 65,
    },
    {
      name: "Caesar Salad",
      imgUrl: ClaroImg,
      description:
        "Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing.",
      ingredients:
        "Romaine Lettuce, Chicken, Croutons, Parmesan Cheese, Caesar Dressing",
      isSignature: true,
      restaurant: "M25",
      category: ["spicy", "veg"],
      price: 83,
    },
    {
      name: "Vegetable Stir-Fry",
      imgUrl: LumiaImg,
      description: "A mix of stir-fried vegetables in a savory sauce.",
      ingredients: "Broccoli, Bell Peppers, Carrots, Snap Peas, Soy Sauce",
      isSignature: true,
      restaurant: "Port Said",
      category: ["vegetarian", "spicy"],
      price: 46,
    },
  ],
  chefOfTheWeek: {
    name: "Yossi Shitrit",
    restaurant: "Port Said",
    bio: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish.",
    imgUrl: chefImg,
  },
};
