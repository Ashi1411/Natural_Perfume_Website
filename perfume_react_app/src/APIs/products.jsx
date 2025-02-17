const perfumes = [
    {
      id: 1,
      name: "Royal Oud",
      categories: ["Men", "Woody", "Oud"],
      price: 79.99,
      quantity: 15,
      description: "A luxurious blend of oud wood, amber, and spicy notes for a powerful presence.",
      image: "https://images.unsplash.com/photo-1515083227058-3a1c21a1e5d3"
    },
    {
      id: 2,
      name: "Dark Mocha",
      categories: ["Men", "Gourmand", "Coffee"],
      price: 59.99,
      quantity: 25,
      description: "A bold and energizing scent with roasted coffee, vanilla, and hints of dark chocolate.",
      image: "https://images.unsplash.com/photo-1511909525232-61113c912358"
    },
    {
      id: 3,
      name: "Leather Storm",
      categories: ["Men", "Woody", "Leather"],
      price: 69.99,
      quantity: 20,
      description: "An intense leather-based fragrance with a touch of smoky cedarwood and spices.",
      image: "https://images.unsplash.com/photo-1510333337682-fdd0eba357a5"
    },
    {
      id: 4,
      name: "Citrus Edge",
      categories: ["Men", "Citrus", "Fresh"],
      price: 49.99,
      quantity: 30,
      description: "A refreshing burst of zesty lemon, bergamot, and orange peel with a crisp finish.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 5,
      name: "Amber Intense",
      categories: ["Men", "Oriental", "Amber"],
      price: 74.99,
      quantity: 12,
      description: "A deep, sensual fragrance with amber, vanilla, and a hint of smoky tonka bean.",
      image: "https://images.unsplash.com/photo-1515083227058-3a1c21a1e5d3"
    },
    {
      id: 6,
      name: "Spiced Noir",
      categories: ["Men", "Spicy", "Warm"],
      price: 65.99,
      quantity: 18,
      description: "A captivating blend of black pepper, cinnamon, and nutmeg with a woody base.",
      image: "https://images.unsplash.com/photo-1510333337682-fdd0eba357a5"
    },
    {
      id: 7,
      name: "Ocean Breeze",
      categories: ["Men", "Aquatic", "Fresh"],
      price: 55.99,
      quantity: 22,
      description: "A crisp and refreshing scent with marine notes, sea salt, and a hint of mint.",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
    },
    {
      id: 8,
      name: "Vanilla Tobacco",
      categories: ["Men", "Gourmand", "Vanilla"],
      price: 69.99,
      quantity: 14,
      description: "A warm and addictive combination of smoky tobacco, rich vanilla, and dried fruits.",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834"
    },
    {
      id: 9,
      name: "Mystic Musk",
      categories: ["Men", "Musk", "Woody"],
      price: 59.99,
      quantity: 16,
      description: "A sensual blend of white musk, sandalwood, and a hint of floral notes.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
    },
    {
      id: 10,
      name: "Golden Sandal",
      categories: ["Men", "Woody", "Sandalwood"],
      price: 72.99,
      quantity: 11,
      description: "A rich and creamy sandalwood fragrance with undertones of amber and tonka bean.",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834"
    },
    {
        id: 11,
        name: "Rose Elegance",
        categories: ["Women", "Floral", "Rose"],
        price: 54.99,
        quantity: 20,
        description: "A romantic fragrance with fresh roses, jasmine, and a soft musky base.",
        image: "https://images.unsplash.com/photo-1611239233030-4a1b3f6f7f3e"
      },
      {
        id: 12,
        name: "Vanilla Dream",
        categories: ["Women", "Gourmand", "Vanilla"],
        price: 59.99,
        quantity: 18,
        description: "A sweet and creamy blend of vanilla, caramel, and a hint of coconut.",
        image: "https://images.unsplash.com/photo-1511909525232-61113c912358"
      },
      {
        id: 13,
        name: "Lily Whisper",
        categories: ["Women", "Floral", "Lily"],
        price: 47.99,
        quantity: 22,
        description: "A soft and delicate fragrance inspired by fresh blooming lilies with a musky finish.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
      },
      {
        id: 14,
        name: "Citrus Blossom",
        categories: ["Women", "Citrus", "Fresh"],
        price: 49.99,
        quantity: 25,
        description: "A refreshing blend of orange blossoms, lemon zest, and green tea.",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
      },
      {
        id: 15,
        name: "Amber Enchant",
        categories: ["Women", "Oriental", "Amber"],
        price: 65.99,
        quantity: 12,
        description: "A warm and alluring scent with amber, vanilla, and a touch of cinnamon.",
        image: "https://images.unsplash.com/photo-1515083227058-3a1c21a1e5d3"
      },
      {
        id: 16,
        name: "Jasmine Breeze",
        categories: ["Women", "Floral", "Jasmine"],
        price: 52.99,
        quantity: 16,
        description: "A floral masterpiece blending jasmine petals with white musk and sandalwood.",
        image: "https://images.unsplash.com/photo-1611239233030-4a1b3f6f7f3e"
      },
      {
        id: 17,
        name: "Golden Peony",
        categories: ["Women", "Floral", "Peony"],
        price: 57.99,
        quantity: 19,
        description: "A vibrant and feminine fragrance with pink peonies, red apples, and honey.",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834"
      },
      {
        id: 18,
        name: "Coffee Seduction",
        categories: ["Women", "Gourmand", "Coffee"],
        price: 61.99,
        quantity: 14,
        description: "A bold and inviting scent with espresso, vanilla, and a hint of caramel sweetness.",
        image: "https://images.unsplash.com/photo-1511909525232-61113c912358"
      },
      {
        id: 19,
        name: "Orchid Noir",
        categories: ["Women", "Floral", "Exotic"],
        price: 68.99,
        quantity: 10,
        description: "A mysterious and sensual fragrance with black orchids, spices, and dark vanilla.",
        image: "https://images.unsplash.com/photo-1611239233030-4a1b3f6f7f3e"
      },
      {
        id: 20,
        name: "Lavender Serenity",
        categories: ["Women", "Floral", "Lavender"],
        price: 50.99,
        quantity: 21,
        description: "A calming scent of fresh lavender fields blended with white tea and musk.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
      },
      {
        id: 21,
        name: "Blush Rose",
        categories: ["Women", "Floral", "Rose"],
        price: 55.99,
        quantity: 20,
        description: "A soft and romantic fragrance with blooming roses, peony, and white musk.",
        image: "https://images.unsplash.com/photo-1529688530648-83956dd3d879"
      },
      {
        id: 22,
        name: "Midnight Rose",
        categories: ["Unisex", "Floral", "Rose"],
        price: 65.99,
        quantity: 18,
        description: "A deep and mysterious rose blend with hints of oud, vanilla, and amber.",
        image: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
      },
      {
        id: 23,
        name: "Rosewood Essence",
        categories: ["Men", "Woody", "Rose"],
        price: 72.99,
        quantity: 15,
        description: "A rich and elegant combination of rose petals, sandalwood, and warm spices.",
        image: "https://images.unsplash.com/photo-1515083227058-3a1c21a1e5d3"
      },
      {
        id: 24,
        name: "Velvet Rose",
        categories: ["Women", "Floral", "Rose"],
        price: 59.99,
        quantity: 25,
        description: "A luxurious scent of velvety red roses with a touch of jasmine and vanilla.",
        image: "https://images.unsplash.com/photo-1611239233030-4a1b3f6f7f3e"
      },
      {
        id: 25,
        name: "Amber Rose",
        categories: ["Unisex", "Floral", "Amber"],
        price: 68.99,
        quantity: 12,
        description: "A warm and sensual blend of roses, amber, and honey for a long-lasting scent.",
        image: "https://images.unsplash.com/photo-1515083227058-3a1c21a1e5d3"
      },
      {
        id: 26,
        name: "Fresh Rose Mist",
        categories: ["Women", "Floral", "Rose"],
        price: 49.99,
        quantity: 30,
        description: "A light and airy fragrance with fresh garden roses and a hint of citrus zest.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
      },
      {
        id: 27,
        name: "Rose Noir",
        categories: ["Men", "Dark", "Rose"],
        price: 74.99,
        quantity: 10,
        description: "An intense and seductive rose scent infused with smoky leather and deep musk.",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834"
      },
      {
        id: 28,
        name: "Rose & Coffee Delight",
        categories: ["Unisex", "Gourmand", "Rose", "Coffee"],
        price: 70.99,
        quantity: 14,
        description: "A unique and addictive fusion of rich coffee beans and delicate rose petals.",
        image: "https://images.unsplash.com/photo-1511909525232-61113c912358"
      },
      {
        id: 29,
        name: "Pink Bloom",
        categories: ["Women", "Floral", "Rose"],
        price: 53.99,
        quantity: 22,
        description: "A cheerful and vibrant rose-based scent with juicy berries and peony accents.",
        image: "https://images.unsplash.com/photo-1529688530648-83956dd3d879"
      },
      {
        id: 30,
        name: "Golden Rose Oud",
        categories: ["Men", "Woody", "Rose"],
        price: 77.99,
        quantity: 11,
        description: "A royal blend of rare rose extracts, oud wood, and deep smoky incense.",
        image: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
      },
      {
        id: 31,
        name: "Lily Bloom",
        categories: ["Women", "Floral", "Lily"],
        price: 54.99,
        quantity: 20,
        description: "A fresh and delicate lily fragrance with a hint of jasmine and white musk.",
        image: "https://images.unsplash.com/photo-1593430991675-55f7cbd9f266"
      },
      {
        id: 32,
        name: "Mystic Lily",
        categories: ["Unisex", "Floral", "Lily"],
        price: 62.99,
        quantity: 18,
        description: "A mysterious blend of lily petals, sandalwood, and a touch of vanilla.",
        image: "https://images.unsplash.com/photo-1583097125205-666fd2bf4c2f"
      },
      {
        id: 33,
        name: "Golden Lily",
        categories: ["Women", "Floral", "Lily"],
        price: 58.99,
        quantity: 22,
        description: "A luxurious scent with golden lilies, honeysuckle, and soft amber undertones.",
        image: "https://images.unsplash.com/photo-1615485928874-cba1d05be1eb"
      },
      {
        id: 34,
        name: "Lily Noir",
        categories: ["Men", "Woody", "Lily"],
        price: 68.99,
        quantity: 15,
        description: "A deep and bold fragrance combining black lilies with oud and spicy notes.",
        image: "https://images.unsplash.com/photo-1532105956626-956c83287b42"
      },
      {
        id: 35,
        name: "White Lily Mist",
        categories: ["Women", "Floral", "Lily"],
        price: 49.99,
        quantity: 30,
        description: "A refreshing mist of white lilies, citrus, and green tea for a light floral experience.",
        image: "https://images.unsplash.com/photo-1595849956526-5b32e264d6e4"
      },
      {
        id: 36,
        name: "Amber Lily",
        categories: ["Unisex", "Floral", "Amber", "Lily"],
        price: 70.99,
        quantity: 14,
        description: "A warm and captivating mix of amber, oriental spices, and blooming lilies.",
        image: "https://images.unsplash.com/photo-1593430991675-55f7cbd9f266"
      },
      {
        id: 37,
        name: "Lily & Rose Harmony",
        categories: ["Women", "Floral", "Lily", "Rose"],
        price: 65.99,
        quantity: 12,
        description: "A harmonious blend of roses and lilies, creating a floral paradise in a bottle.",
        image: "https://images.unsplash.com/photo-1582091924003-555058b2f27a"
      },
      {
        id: 38,
        name: "Midnight Lily",
        categories: ["Men", "Dark", "Lily"],
        price: 75.99,
        quantity: 10,
        description: "A bold and sophisticated blend of black lilies, leather, and dark musk.",
        image: "https://images.unsplash.com/photo-1595849956526-5b32e264d6e4"
      },
      {
        id: 39,
        name: "Lily & Coffee Bliss",
        categories: ["Unisex", "Gourmand", "Lily", "Coffee"],
        price: 69.99,
        quantity: 16,
        description: "A rich, creamy coffee fragrance infused with the delicate floral notes of lilies.",
        image: "https://images.unsplash.com/photo-1511909525232-61113c912358"
      },
      {
        id: 40,
        name: "Serene Lily",
        categories: ["Women", "Floral", "Lily"],
        price: 52.99,
        quantity: 21,
        description: "A calming scent inspired by fresh lily gardens, blended with soft musk and white tea.",
        image: "https://images.unsplash.com/photo-1615485928874-cba1d05be1eb"
      },
      {
        id: 41,
        name: "Zesty Lemon",
        categories: ["Unisex", "Citrus", "Fresh"],
        price: 45.99,
        quantity: 25,
        description: "A vibrant burst of fresh lemon, bergamot, and a touch of white musk for a refreshing experience.",
        image: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
      },
      {
        id: 42,
        name: "Citrus Grove",
        categories: ["Women", "Floral", "Citrus"],
        price: 55.99,
        quantity: 20,
        description: "A bright and cheerful blend of orange blossoms, neroli, and juicy tangerine.",
        image: "https://images.unsplash.com/photo-1595436065982-84fa400d8b92"
      },
      {
        id: 43,
        name: "Orange Sunrise",
        categories: ["Men", "Woody", "Citrus"],
        price: 60.99,
        quantity: 18,
        description: "A deep and masculine scent combining blood oranges, cedarwood, and warm amber.",
        image: "https://images.unsplash.com/photo-1580910051077-6f6c87ff1515"
      },
      {
        id: 44,
        name: "Tropical Lime",
        categories: ["Unisex", "Citrus", "Exotic"],
        price: 49.99,
        quantity: 22,
        description: "A tropical fusion of fresh limes, coconut water, and a hint of vanilla.",
        image: "https://images.unsplash.com/photo-1611080626912-d1e43b9b8b1b"
      },
      {
        id: 45,
        name: "Golden Citrus",
        categories: ["Women", "Citrus", "Floral"],
        price: 52.99,
        quantity: 15,
        description: "A luxurious and radiant scent of grapefruit, jasmine, and sweet honey.",
        image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a"
      },
      {
        id: 46,
        name: "Citrus & Coffee Fusion",
        categories: ["Unisex", "Citrus", "Coffee"],
        price: 64.99,
        quantity: 12,
        description: "A unique blend of citrus peels and roasted coffee beans for a refreshing yet bold scent.",
        image: "https://images.unsplash.com/photo-1570544823412-f5f2a2f65c98"
      },
      {
        id: 47,
        name: "Lime Breeze",
        categories: ["Men", "Citrus", "Fresh"],
        price: 48.99,
        quantity: 30,
        description: "A light and energetic fragrance of green lime, basil, and oceanic accords.",
        image: "https://images.unsplash.com/photo-1612263767927-9f5061c27747"
      },
      {
        id: 48,
        name: "Mandarin Spice",
        categories: ["Women", "Citrus", "Spicy"],
        price: 57.99,
        quantity: 14,
        description: "A warm and spicy blend of mandarin, cinnamon, and creamy sandalwood.",
        image: "https://images.unsplash.com/photo-1595436065982-84fa400d8b92"
      },
      {
        id: 49,
        name: "Citrus Oud",
        categories: ["Men", "Woody", "Citrus"],
        price: 70.99,
        quantity: 10,
        description: "A sophisticated combination of citrus zest, deep oud wood, and smoky incense.",
        image: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
      },
      {
        id: 50,
        name: "Summer Citrus",
        categories: ["Unisex", "Citrus", "Fresh"],
        price: 50.99,
        quantity: 21,
        description: "A perfect summer fragrance featuring sweet oranges, fresh lemons, and cooling mint.",
        image: "https://images.unsplash.com/photo-1570544823412-f5f2a2f65c98"
      }, 
      {
        "id": 51,
        "name": "Woody Mystique",
        "categories": ["Men", "Woody", "Rose"],
        "price": 120,
        "quantity": 50,
        "description": "A bold, woody fragrance with hints of rose, perfect for the modern man.",
        "image": "https://example.com/images/woody_mystique.jpg"
      },
      {
        "id": 52,
        "name": "Choco Bliss",
        "categories": ["Women", "Gourmand", "Chocolate"],
        "price": 95,
        "quantity": 30,
        "description": "A sweet fragrance with rich chocolate notes, ideal for any occasion.",
        "image": "https://example.com/images/choco_bliss.jpg"
      },
      {
        "id": 53,
        "name": "Exotic Woodlands",
        "categories": ["Unisex", "Exotic", "Sandalwood"],
        "price": 145,
        "quantity": 40,
        "description": "A blend of exotic woods and fresh sandalwood, ideal for lovers of earthy fragrances.",
        "image": "https://example.com/images/exotic_woodlands.jpg"
      },
      {
        "id": 54,
        "name": "Amber Vanilla Dream",
        "categories": ["Women", "Gourmand", "Vanilla"],
        "price": 110,
        "quantity": 60,
        "description": "A warm, cozy fragrance with amber and vanilla, perfect for evening wear.",
        "image": "https://example.com/images/amber_vanilla_dream.jpg"
      },
      {
        "id": 55,
        "name": "Coffee Essence",
        "categories": ["Men", "Gourmand", "Coffee"],
        "price": 85,
        "quantity": 75,
        "description": "A fresh coffee fragrance with hints of cinnamon, perfect for an energetic lifestyle.",
        "image": "https://example.com/images/coffee_essence.jpg"
      },
      {
        "id": 56,
        "name": "Lily Blossom",
        "categories": ["Women", "Exotic", "Lily"],
        "price": 95,
        "quantity": 50,
        "description": "A delicate fragrance of lily, perfect for a light and airy everyday scent.",
        "image": "https://example.com/images/lily_blossom.jpg"
      },
      {
        "id": 57,
        "name": "Cedarwood Spice",
        "categories": ["Men", "Woody", "Pepper"],
        "price": 130,
        "quantity": 45,
        "description": "A deep and spicy fragrance with cedarwood and pepper, perfect for the confident man.",
        "image": "https://example.com/images/cedarwood_spice.jpg"
      },
      {
        "id": 58,
        "name": "Vanilla Amber Fantasy",
        "categories": ["Women", "Gourmand", "Amber"],
        "price": 105,
        "quantity": 40,
        "description": "A rich fragrance of vanilla and amber, perfect for a romantic evening.",
        "image": "https://example.com/images/vanilla_amber_fantasy.jpg"
      },
      {
        "id": 59,
        "name": "Tropical Spice",
        "categories": ["Unisex", "Exotic", "Citrus"],
        "price": 120,
        "quantity": 60,
        "description": "A refreshing tropical blend of citrus, perfect for a sunny, island-inspired day.",
        "image": "https://example.com/images/tropical_spice.jpg"
      },
      {
        "id": 60,
        "name": "Rosewood Luxury",
        "categories": ["Women", "Woody", "Rose"],
        "price": 140,
        "quantity": 50,
        "description": "A luxurious scent combining the softness of rose with woody notes, ideal for elegant occasions.",
        "image": "https://example.com/images/rosewood_luxury.jpg"
      }
  ];
  
  export default perfumes;
  