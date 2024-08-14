const epicureData = {
    hero: {
      pictureUrl: "https://www.thefeedfeed.com/wp-content/uploads/2020/05/Epicure-Hero.jpg", // Example hero image
      header: "Epicure works with the top chef restaurants in Tel Aviv",
      searchBarText: "Search for restaurant cuisine, chef"
    },
    restaurants: [
      {
        name: "Ouzeria",
        chef: "Erez Komarovsky",
        isPopular: true,
        imgUrl: "https://media.timeout.com/photos/596f42b56908a00007bc46c6/3:2/w_600,h_400,c_limit/ouzeria.jpg"
      },
      {
        name: "Taizu",
        chef: "Shay Eyal",
        isPopular: true,
        imgUrl: "https://media.timeout.com/photos/58bfa87337a6a205f59f7da0/3:2/w_960,c_limit/Taizu_Tel_Aviv.jpg"
      },
      {
        name: "Shila",
        chef: "Rafi Cohen",
        isPopular: true,
        imgUrl: "https://media.timeout.com/photos/595d00759b7d764d57bb3bfb/3:2/w_600,h_400,c_limit/shila.jpg"
      },
      {
        name: "M25",
        chef: "Oren Marmorstein",
        isPopular: true,
        imgUrl: "https://media.timeout.com/photos/58a9b63b88154f4eae2d03b5/3:2/w_600,h_400,c_limit/m25.jpg"
      },
      {
        name: "Port Said",
        chef: "Eyal Shani",
        isPopular: true,
        imgUrl: "https://media.timeout.com/photos/59c38f496c86351101c5f5a5/3:2/w_600,h_400,c_limit/portsaid.jpg"
      }
    ],
    dishes: [
      {
        name: "Spaghetti Carbonara",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Carbonara.JPG",
        description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        ingredients: "Spaghetti, Eggs, Parmesan Cheese, Pancetta, Black Pepper",
        isSignature: true,
        restaurant: "Shila",
        category: ["Italian", "Pasta"],
        price: 22.99
      },
      {
        name: "Sushi Roll",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Sushi_%28with_tuna%2C_salmon%2C_shrimp%29.jpg",
        description: "Fresh sushi rolls with a variety of fillings and toppings.",
        ingredients: "Rice, Seaweed, Fish, Vegetables, Soy Sauce",
        isSignature: true,
        restaurant: "Taizu",
        category: ["Japanese", "Seafood"],
        price: 18.99
      },
      {
        name: "Beef Tacos",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Beef_tacos_with_sour_cream.jpg",
        description: "Mexican tacos filled with seasoned beef and topped with fresh salsa.",
        ingredients: "Tortillas, Ground Beef, Salsa, Lettuce, Cheese",
        isSignature: false,
        restaurant: "Ouzeria",
        category: ["Mexican", "Beef"],
        price: 14.99
      },
      {
        name: "Chicken Caesar Salad",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chicken_Caesar_Salad.jpg",
        description: "Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing.",
        ingredients: "Romaine Lettuce, Chicken, Croutons, Parmesan Cheese, Caesar Dressing",
        isSignature: false,
        restaurant: "M25",
        category: ["Salad", "Chicken"],
        price: 16.99
      },
      {
        name: "Vegetable Stir-Fry",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Veggie_Stir_Fry.jpg",
        description: "A mix of stir-fried vegetables in a savory sauce.",
        ingredients: "Broccoli, Bell Peppers, Carrots, Snap Peas, Soy Sauce",
        isSignature: false,
        restaurant: "Port Said",
        category: ["Vegetarian", "Asian"],
        price: 12.99
      }
    ],
    chefOfTheWeek: {
      name: "Eyal Shani",
      restaurant: "Port Said",
      bio: "Eyal Shani is a celebrated Israeli chef known for his innovative approach to Middle Eastern cuisine. His restaurant, Port Said, is renowned for its creative dishes and vibrant atmosphere.",
      imgUrl: "https://media.timeout.com/photos/55d40e5b80c64f657cf7f4a4/3:2/w_600,h_400,c_limit/eyal_shani.jpg"
    }
  };
  