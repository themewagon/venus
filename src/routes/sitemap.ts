// import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'featured',
    subheader: 'Featured',
    path: '/',
    active: true
  },
  {
    id: 'vegetables-fruits',
    subheader: 'Vegetables & Fruits',
    items: [
      {
        name: 'Fresh Vegetables',
        pathName: 'fresh-vegetables',
        path: '#!',
      },
      {
        name: 'Fresh Fruits',
        pathName: 'fresh-fruits',
        path: '#!',
      },
      {
        name: 'Dried Fruits',
        pathName: 'dried-fruits',
        path: '#!',
      },
      {
        name: 'Organic Vegetables',
        pathName: 'organic-vegetables',
        path: '#!',
      },
      {
        name: 'Organic Fruits',
        pathName: 'organic-fruits',
        path: '#!',
      },
      {
        name: 'Exotic Vegetables',
        pathName: 'exotic-vegetables',
        path: '#!',
      },
      {
        name: 'Exotic Fruits',
        pathName: 'exotic-fruits',
        path: '#!',
      },
      {
        name: 'Leafy Greens',
        pathName: 'leafy-greens',
        path: '#!',
      },
      {
        name: 'Berries',
        pathName: 'berries',
        path: '#!',
      },
      {
        name: 'Citrus Fruits',
        pathName: 'citrus-fruits',
        path: '#!',
      },
    ],
  },
  {
    id: 'meat-fish',
    subheader: 'Meat & Fish',
    items: [
      {
        name: 'Fresh Meat',
        pathName: 'fresh-meat',
        path: '#!',
      },
      {
        name: 'Frozen Fish',
        pathName: 'frozen-fish',
        path: '#!',
      },
      {
        name: 'Dried Fish',
        pathName: 'dried-fish',
        path: '#!',
      },
      {
        name: 'Poultry',
        pathName: 'poultry',
        path: '#!',
      },
      {
        name: 'Seafood',
        pathName: 'seafood',
        path: '#!',
      },
      {
        name: 'Shellfish',
        pathName: 'shellfish',
        path: '#!',
      },
      {
        name: 'Game Meat',
        pathName: 'game-meat',
        path: '#!',
      },
      {
        name: 'Sausages',
        pathName: 'sausages',
        path: '#!',
      },
      {
        name: 'Bacon',
        pathName: 'bacon',
        path: '#!',
      },
      {
        name: 'Smoked Fish',
        pathName: 'smoked-fish',
        path: '#!',
      },
    ],
  },
  {
    id: 'kitchen-supplies',
    subheader: 'Kitchen Supplies',
    items: [
      {
        name: 'Rice',
        pathName: 'rice',
        path: '#!',
      },
      {
        name: 'Flour',
        pathName: 'flour',
        path: '#!',
      },
      {
        name: 'Oil',
        pathName: 'oil',
        path: '#!',
      },
      {
        name: 'Salt & Sugar',
        pathName: 'salt-sugar',
        path: '#!',
      },
      {
        name: 'Spices',
        pathName: 'spices',
        path: '#!',
      },
      {
        name: 'Pasta',
        pathName: 'pasta',
        path: '#!',
      },
      {
        name: 'Baking Supplies',
        pathName: 'baking-supplies',
        path: '#!',
      },
      {
        name: 'Canned Goods',
        pathName: 'canned-goods',
        path: '#!',
      },
      {
        name: 'Condiments',
        pathName: 'condiments',
        path: '#!',
      },
      {
        name: 'Vinegar',
        pathName: 'vinegar',
        path: '#!',
      },
    ],
  },
  {
    id: 'jams-jellies',
    subheader: 'Jams & Jellies',
    items: [
      {
        name: 'Fruit Jams',
        pathName: 'fruit-jams',
        path: '#!',
      },
      {
        name: 'Vegetable Jams',
        pathName: 'vegetable-jams',
        path: '#!',
      },
      {
        name: 'Nut and Seed Jams',
        pathName: 'nut-seed-jams',
        path: '#!',
      },
      {
        name: 'Low-Sugar Jams',
        pathName: 'low-sugar-jams',
        path: '#!',
      },
      {
        name: 'Herbal Jellies',
        pathName: 'herbal-jellies',
        path: '#!',
      },
      {
        name: 'Floral Jellies',
        pathName: 'floral-jellies',
        path: '#!',
      },
      {
        name: 'Gourmet Jellies',
        pathName: 'gourmet-jellies',
        path: '#!',
      },
      {
        name: 'Organic Jellies',
        pathName: 'organic-jellies',
        path: '#!',
      },
      {
        name: 'Seasonal Jellies',
        pathName: 'seasonal-jellies',
        path: '#!',
      },
      {
        name: 'Mixed Fruit Jams',
        pathName: 'mixed-fruit-jams',
        path: '#!',
      },
    ],
  },
  {
    id: 'sauces-pickles',
    subheader: 'Sauces & Pickles',
    items: [
      {
        name: 'Cooking Sauces',
        pathName: 'cooking-sauces',
        path: '#!',
      },
      {
        name: 'Dipping Sauces',
        pathName: 'dipping-sauces',
        path: '#!',
      },
      {
        name: 'Hot Sauces',
        pathName: 'hot-sauces',
        path: '#!',
      },
      {
        name: 'Marinades',
        pathName: 'marinades',
        path: '#!',
      },
      {
        name: 'Salad Dressings',
        pathName: 'salad-dressings',
        path: '#!',
      },
      {
        name: 'Pickles',
        pathName: 'pickles',
        path: '#!',
      },
      {
        name: 'Relishes',
        pathName: 'relishes',
        path: '#!',
      },
      {
        name: 'Chutneys',
        pathName: 'chutneys',
        path: '#!',
      },
      {
        name: 'Pasta Sauces',
        pathName: 'pasta-sauces',
        path: '#!',
      },
      {
        name: 'Soy & Asian Sauces',
        pathName: 'soy-asian-sauces',
        path: '#!',
      },
    ],
  },
  {
    id: 'dairy-eggs',
    subheader: 'Dairy & Eggs',
    items: [
      {
        name: 'Milk',
        pathName: 'milk',
        path: '#!',
      },
      {
        name: 'Cheese',
        pathName: 'cheese',
        path: '#!',
      },
      {
        name: 'Butter',
        pathName: 'butter',
        path: '#!',
      },
      {
        name: 'Yogurt',
        pathName: 'yogurt',
        path: '#!',
      },
      {
        name: 'Cream',
        pathName: 'cream',
        path: '#!',
      },
      {
        name: 'Eggs',
        pathName: 'eggs',
        path: '#!',
      },
      {
        name: 'Non-Dairy Milk',
        pathName: 'non-dairy-milk',
        path: '#!',
      },
      {
        name: 'Cottage Cheese',
        pathName: 'cottage-cheese',
        path: '#!',
      },
      {
        name: 'Sour Cream',
        pathName: 'sour-cream',
        path: '#!',
      },
      {
        name: 'Buttermilk',
        pathName: 'buttermilk',
        path: '#!',
      },
    ],
  },
  {
    id: 'bakery',
    subheader: 'Bakery',
    items: [
      {
        name: 'Bread',
        pathName: 'bread',
        path: '#!',
      },
      {
        name: 'Buns & Rolls',
        pathName: 'buns-rolls',
        path: '#!',
      },
      {
        name: 'Cakes',
        pathName: 'cakes',
        path: '#!',
      },
      {
        name: 'Pastries',
        pathName: 'pastries',
        path: '#!',
      },
      {
        name: 'Muffins',
        pathName: 'muffins',
        path: '#!',
      },
      {
        name: 'Bagels',
        pathName: 'bagels',
        path: '#!',
      },
      {
        name: 'Cookies',
        pathName: 'cookies',
        path: '#!',
      },
      {
        name: 'Pies',
        pathName: 'pies',
        path: '#!',
      },
      {
        name: 'Donuts',
        pathName: 'donuts',
        path: '#!',
      },
      {
        name: 'Croissants',
        pathName: 'croissants',
        path: '#!',
      },
    ],
  },
  {
    id: 'beverages',
    subheader: 'Beverages',
    items: [
      {
        name: 'Juices',
        pathName: 'juices',
        path: '#!',
      },
      {
        name: 'Soft Drinks',
        pathName: 'soft-drinks',
        path: '#!',
      },
      {
        name: 'Tea',
        pathName: 'tea',
        path: '#!',
      },
      {
        name: 'Coffee',
        pathName: 'coffee',
        path: '#!',
      },
      {
        name: 'Water',
        pathName: 'water',
        path: '#!',
      },
      {
        name: 'Energy Drinks',
        pathName: 'energy-drinks',
        path: '#!',
      },
      {
        name: 'Sports Drinks',
        pathName: 'sports-drinks',
        path: '#!',
      },
      {
        name: 'Plant-Based Beverages',
        pathName: 'plant-based-beverages',
        path: '#!',
      },
      {
        name: 'Milkshakes',
        pathName: 'milkshakes',
        path: '#!',
      },
      {
        name: 'Smoothies',
        pathName: 'smoothies',
        path: '#!',
      },
    ],
  },
  {
    id: 'frozen-foods',
    subheader: 'Frozen Foods',
    items: [
      {
        name: 'Frozen Vegetables',
        pathName: 'frozen-vegetables',
        path: '#!',
      },
      {
        name: 'Frozen Fruits',
        pathName: 'frozen-fruits',
        path: '#!',
      },
      {
        name: 'Ice Cream',
        pathName: 'ice-cream',
        path: '#!',
      },
      {
        name: 'Frozen Meals',
        pathName: 'frozen-meals',
        path: '#!',
      },
      {
        name: 'Frozen Desserts',
        pathName: 'frozen-desserts',
        path: '#!',
      },
      {
        name: 'Frozen Snacks',
        pathName: 'frozen-snacks',
        path: '#!',
      },
      {
        name: 'Frozen Seafood',
        pathName: 'frozen-seafood',
        path: '#!',
      },
      {
        name: 'Frozen Pizza',
        pathName: 'frozen-pizza',
        path: '#!',
      },
      {
        name: 'Frozen Breakfast',
        pathName: 'frozen-breakfast',
        path: '#!',
      },
      {
        name: 'Frozen Bread',
        pathName: 'frozen-bread',
        path: '#!',
      },
    ],
  },
  {
    id: 'snacks',
    subheader: 'Snacks',
    items: [
      {
        name: 'Chips',
        pathName: 'chips',
        path: '#!',
      },
      {
        name: 'Crackers',
        pathName: 'crackers',
        path: '#!',
      },
      {
        name: 'Nuts & Seeds',
        pathName: 'nuts-seeds',
        path: '#!',
      },
      {
        name: 'Popcorn',
        pathName: 'popcorn',
        path: '#!',
      },
      {
        name: 'Chocolate',
        pathName: 'chocolate',
        path: '#!',
      },
      {
        name: 'Candy',
        pathName: 'candy',
        path: '#!',
      },
      {
        name: 'Snack Bars',
        pathName: 'snack-bars',
        path: '#!',
      },
      {
        name: 'Dried Snacks',
        pathName: 'dried-snacks',
        path: '#!',
      },
      {
        name: 'Pretzels',
        pathName: 'pretzels',
        path: '#!',
      },
      {
        name: 'Rice Cakes',
        pathName: 'rice-cakes',
        path: '#!',
      },
    ],
  },
  {
    id: 'pantry',
    subheader: 'Pantry',
    items: [
      {
        name: 'Canned Vegetables',
        pathName: 'canned-vegetables',
        path: '#!',
      },
      {
        name: 'Canned Fruits',
        pathName: 'canned-fruits',
        path: '#!',
      },
      {
        name: 'Pasta',
        pathName: 'pantry-pasta',
        path: '#!',
      },
      {
        name: 'Grains',
        pathName: 'grains',
        path: '#!',
      },
      {
        name: 'Beans',
        pathName: 'beans',
        path: '#!',
      },
      {
        name: 'Soups',
        pathName: 'soups',
        path: '#!',
      },
      {
        name: 'Broths',
        pathName: 'broths',
        path: '#!',
      },
      {
        name: 'Peanut Butter',
        pathName: 'peanut-butter',
        path: '#!',
      },
      {
        name: 'Honey',
        pathName: 'honey',
        path: '#!',
      },
      {
        name: 'Cereal',
        pathName: 'cereal',
        path: '#!',
      },
    ],
  },
  {
    id: 'cleaning-supplies',
    subheader: 'Cleaning Supplies',
    items: [
      {
        name: 'Laundry Detergent',
        pathName: 'laundry-detergent',
        path: '#!',
      },
      {
        name: 'Dish Soap',
        pathName: 'dish-soap',
        path: '#!',
      },
      {
        name: 'All-Purpose Cleaners',
        pathName: 'all-purpose-cleaners',
        path: '#!',
      },
      {
        name: 'Glass Cleaners',
        pathName: 'glass-cleaners',
        path: '#!',
      },
      {
        name: 'Bathroom Cleaners',
        pathName: 'bathroom-cleaners',
        path: '#!',
      },
      {
        name: 'Floor Cleaners',
        pathName: 'floor-cleaners',
        path: '#!',
      },
      {
        name: 'Sponges & Scouring Pads',
        pathName: 'sponges-scouring-pads',
        path: '#!',
      },
      {
        name: 'Paper Towels',
        pathName: 'paper-towels',
        path: '#!',
      },
      {
        name: 'Trash Bags',
        pathName: 'trash-bags',
        path: '#!',
      },
      {
        name: 'Disinfecting Wipes',
        pathName: 'disinfecting-wipes',
        path: '#!',
      },
    ],
  },
  {
    id: 'health-beauty',
    subheader: 'Health & Beauty',
    items: [
      {
        name: 'Vitamins',
        pathName: 'vitamins',
        path: '#!',
      },
      {
        name: 'Supplements',
        pathName: 'supplements',
        path: '#!',
      },
      {
        name: 'Skin Care',
        pathName: 'skin-care',
        path: '#!',
      },
      {
        name: 'Hair Care',
        pathName: 'hair-care',
        path: '#!',
      },
      {
        name: 'Oral Care',
        pathName: 'oral-care',
        path: '#!',
      },
      {
        name: 'First Aid',
        pathName: 'first-aid',
        path: '#!',
      },
      {
        name: 'Pain Relief',
        pathName: 'pain-relief',
        path: '#!',
      },
      {
        name: 'Cold & Flu',
        pathName: 'cold-flu',
        path: '#!',
      },
      {
        name: 'Feminine Care',
        pathName: 'feminine-care',
        path: '#!',
      },
      {
        name: 'Deodorants',
        pathName: 'deodorants',
        path: '#!',
      },
    ],
  },
  {
    id: 'baby-products',
    subheader: 'Baby Products',
    items: [
      {
        name: 'Diapers',
        pathName: 'diapers',
        path: '#!',
      },
      {
        name: 'Baby Wipes',
        pathName: 'baby-wipes',
        path: '#!',
      },
      {
        name: 'Baby Food',
        pathName: 'baby-food',
        path: '#!',
      },
      {
        name: 'Formula',
        pathName: 'formula',
        path: '#!',
      },
      {
        name: 'Baby Snacks',
        pathName: 'baby-snacks',
        path: '#!',
      },
      {
        name: 'Baby Shampoo',
        pathName: 'baby-shampoo',
        path: '#!',
      },
      {
        name: 'Baby Lotion',
        pathName: 'baby-lotion',
        path: '#!',
      },
      {
        name: 'Baby Toys',
        pathName: 'baby-toys',
        path: '#!',
      },
      {
        name: 'Baby Gear',
        pathName: 'baby-gear',
        path: '#!',
      },
      {
        name: 'Baby Clothes',
        pathName: 'baby-clothes',
        path: '#!',
      },
    ],
  },
  {
    id: 'pet-supplies',
    subheader: 'Pet Supplies',
    items: [
      {
        name: 'Dog Food',
        pathName: 'dog-food',
        path: '#!',
      },
      {
        name: 'Cat Food',
        pathName: 'cat-food',
        path: '#!',
      },
      {
        name: 'Bird Food',
        pathName: 'bird-food',
        path: '#!',
      },
      {
        name: 'Fish Food',
        pathName: 'fish-food',
        path: '#!',
      },
      {
        name: 'Dog Treats',
        pathName: 'dog-treats',
        path: '#!',
      },
      {
        name: 'Cat Treats',
        pathName: 'cat-treats',
        path: '#!',
      },
      {
        name: 'Pet Toys',
        pathName: 'pet-toys',
        path: '#!',
      },
      {
        name: 'Pet Beds',
        pathName: 'pet-beds',
        path: '#!',
      },
      {
        name: 'Pet Grooming',
        pathName: 'pet-grooming',
        path: '#!',
      },
      {
        name: 'Pet Health',
        pathName: 'pet-health',
        path: '#!',
      },
    ],
  },
  {
    id: 'household-items',
    subheader: 'Household Items',
    items: [
      {
        name: 'Batteries',
        pathName: 'batteries',
        path: '#!',
      },
      {
        name: 'Light Bulbs',
        pathName: 'light-bulbs',
        path: '#!',
      },
      {
        name: 'Plastic Wrap',
        pathName: 'plastic-wrap',
        path: '#!',
      },
      {
        name: 'Aluminum Foil',
        pathName: 'aluminum-foil',
        path: '#!',
      },
      {
        name: 'Storage Bags',
        pathName: 'storage-bags',
        path: '#!',
      },
      {
        name: 'Paper Plates',
        pathName: 'paper-plates',
        path: '#!',
      },
      {
        name: 'Plastic Utensils',
        pathName: 'plastic-utensils',
        path: '#!',
      },
      {
        name: 'Paper Napkins',
        pathName: 'paper-napkins',
        path: '#!',
      },
      {
        name: 'Tissues',
        pathName: 'tissues',
        path: '#!',
      },
      {
        name: 'Air Fresheners',
        pathName: 'air-fresheners',
        path: '#!',
      },
    ],
  },
];

export default sitemap;
