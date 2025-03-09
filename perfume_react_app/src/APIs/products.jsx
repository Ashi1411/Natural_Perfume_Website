const perfumes = [
    {
      id: 1,
      name: "Royal Oud",
      categories: ["Men", "Woody", "Oud"],
      price: 79.99,
      quantity: 15,
      description: "A luxurious blend of oud wood, amber, and spicy notes for a powerful presence.",
      image: "https://fimgs.net/mdimg/secundar/o.68105.jpg"
    },
    {
      id: 2,
      name: "Dark Mocha",
      categories: ["Men", "Gourmand", "Coffee"],
      price: 59.99,
      quantity: 25,
      description: "A bold and energizing scent with roasted coffee, vanilla, and hints of dark chocolate.",
      image: "https://i.pinimg.com/originals/66/26/2e/66262e8d00ddd2c21e36ff859b30777a.jpg"
    },
    {
      id: 3,
      name: "Leather Storm",
      categories: ["Men", "Woody", "Leather"],
      price: 69.99,
      quantity: 20,
      description: "An intense leather-based fragrance with a touch of smoky cedarwood and spices.",
      image: "https://tse2.mm.bing.net/th?id=OIP.P2pRLx8Gg9D4vpkc6zjatwHaHa&pid=Api&P=0&h=180"
    },
    {
      id: 4,
      name: "Citrus Edge",
      categories: ["Men", "Citrus", "Fresh"],
      price: 49.99,
      quantity: 30,
      description: "A refreshing burst of zesty lemon, bergamot, and orange peel with a crisp finish.",
      image: "https://tse1.mm.bing.net/th?id=OIP.81iz7BOv4BMa4fKRrC4Z9AHaHa&pid=Api&P=0&h=180"
    },
    {
      id: 5,
      name: "Amber Intense",
      categories: ["Men", "Oriental", "Amber"],
      price: 74.99,
      quantity: 12,
      description: "A deep, sensual fragrance with amber, vanilla, and a hint of smoky tonka bean.",
      image: "https://tse1.mm.bing.net/th?id=OIP.xI2gP-eX7OXmutQR1w-lpAHaGe&pid=Api&P=0&h=180"
    },
    {
      id: 6,
      name: "Spiced Noir",
      categories: ["Men", "Spicy", "Warm"],
      price: 65.99,
      quantity: 18,
      description: "A captivating blend of black pepper, cinnamon, and nutmeg with a woody base.",
      image: "https://tse4.mm.bing.net/th?id=OIP.L7udsvplxSOgto-w9DLmkwHaHi&pid=Api&P=0&h=180"
    },
    {
      id: 7,
      name: "Ocean Breeze",
      categories: ["Men", "Aquatic", "Fresh"],
      price: 55.99,
      quantity: 22,
      description: "A crisp and refreshing scent with marine notes, sea salt, and a hint of mint.",
      image: "https://tse3.mm.bing.net/th?id=OIP.nizKmO33S95sUPPhsEx-_AAAAA&pid=Api&P=0&h=180"
    },
    {
      id: 8,
      name: "Vanilla Tobacco",
      categories: ["Men", "Gourmand", "Vanilla"],
      price: 69.99,
      quantity: 14,
      description: "A warm and addictive combination of smoky tobacco, rich vanilla, and dried fruits.",
      image: "https://tse4.mm.bing.net/th?id=OIP.h01Dy4II8aghxz0Hs1gffQHaHH&pid=Api&P=0&h=180"
    },
    {
      id: 9,
      name: "Mystic Musk",
      categories: ["Men", "Musk", "Woody"],
      price: 59.99,
      quantity: 16,
      description: "A sensual blend of white musk, sandalwood, and a hint of floral notes.",
      image: "https://tse3.mm.bing.net/th?id=OIP.bSD041DJ4GT8tjMJxjRilAHaHa&pid=Api&P=0&h=180"
    },
    {
      id: 10,
      name: "Golden Sandal",
      categories: ["Men", "Woody", "Sandalwood"],
      price: 72.99,
      quantity: 11,
      description: "A rich and creamy sandalwood fragrance with undertones of amber and tonka bean.",
      image: "https://tse1.mm.bing.net/th?id=OIP.Tay-TTdiXG15hbjnQdPoPAHaHa&pid=Api&P=0&h=180"
    },
    {
        id: 11,
        name: "Rose Elegance",
        categories: ["Women", "Floral", "Rose"],
        price: 54.99,
        quantity: 20,
        description: "A romantic fragrance with fresh roses, jasmine, and a soft musky base.",
        image: "https://tse3.mm.bing.net/th?id=OIP.ovwS7_qhFfeb0uR1xJlSEgHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 12,
        name: "Vanilla Dream",
        categories: ["Women", "Gourmand", "Vanilla"],
        price: 59.99,
        quantity: 18,
        description: "A sweet and creamy blend of vanilla, caramel, and a hint of coconut.",
        image: "https://tse1.mm.bing.net/th?id=OIP.PCQSbzohBQY2h7W8Vg_LKQHaLW&pid=Api&P=0&h=180"
      },
      {
        id: 13,
        name: "Lily Whisper",
        categories: ["Women", "Floral", "Lily"],
        price: 47.99,
        quantity: 22,
        description: "A soft and delicate fragrance inspired by fresh blooming lilies with a musky finish.",
        image: "https://tse3.mm.bing.net/th?id=OIP.vfvjT0FAy5jcqBaNtAhNhAHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 14,
        name: "Citrus Blossom",
        categories: ["Women", "Citrus", "Fresh"],
        price: 49.99,
        quantity: 25,
        description: "A refreshing blend of orange blossoms, lemon zest, and green tea.",
        image: "https://i5.walmartimages.com/asr/b8871c44-c2b1-4233-9aac-fb18edeae6ff_1.50bdf6da582d4f150df873580bd57625.jpeg"
      },
      {
        id: 15,
        name: "Amber Enchant",
        categories: ["Women", "Oriental", "Amber"],
        price: 65.99,
        quantity: 12,
        description: "A warm and alluring scent with amber, vanilla, and a touch of cinnamon.",
        image: "https://tse1.mm.bing.net/th?id=OIP.ZZIm4Oe4hY9Ppr37f1zegAHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 16,
        name: "Jasmine Breeze",
        categories: ["Women", "Floral", "Jasmine"],
        price: 52.99,
        quantity: 16,
        description: "A floral masterpiece blending jasmine petals with white musk and sandalwood.",
        image: "https://tse4.mm.bing.net/th?id=OIP.lAmU2rTBk0hwDqKLfD159QHaJE&pid=Api&P=0&h=180"
      },
      {
        id: 17,
        name: "Golden Peony",
        categories: ["Women", "Floral", "Peony"],
        price: 57.99,
        quantity: 19,
        description: "A vibrant and feminine fragrance with pink peonies, red apples, and honey.",
        image: "https://tse2.mm.bing.net/th?id=OIP.FphP1WjcNws8xki_jXWq5QHaLH&pid=Api&P=0&h=180"
      },
      {
        id: 18,
        name: "Coffee Seduction",
        categories: ["Women", "Gourmand", "Coffee"],
        price: 61.99,
        quantity: 14,
        description: "A bold and inviting scent with espresso, vanilla, and a hint of caramel sweetness.",
        image: "https://tse4.mm.bing.net/th?id=OIP.oneOflVsuWsupiIDBRgxOwHaGp&pid=Api&P=0&h=180"
      },
      {
        id: 19,
        name: "Orchid Noir",
        categories: ["Women", "Floral", "Exotic"],
        price: 68.99,
        quantity: 10,
        description: "A mysterious and sensual fragrance with black orchids, spices, and dark vanilla.",
        image: "https://tse4.mm.bing.net/th?id=OIP.G-tWn-PYcxc_wm63LaP20wHaJ3&pid=Api&P=0&h=180"
      },
      {
        id: 20,
        name: "Lavender Serenity",
        categories: ["Women", "Floral", "Lavender"],
        price: 50.99,
        quantity: 21,
        description: "A calming scent of fresh lavender fields blended with white tea and musk.",
        image: "https://tse2.mm.bing.net/th?id=OIP._zQSOwnDX3EdhOfqG8PXOAHaLH&pid=Api&P=0&h=180"
      },
      {
        id: 21,
        name: "Blush Rose",
        categories: ["Women", "Floral", "Rose"],
        price: 55.99,
        quantity: 20,
        description: "A soft and romantic fragrance with blooming roses, peony, and white musk.",
        image: "https://tse3.mm.bing.net/th?id=OIP.RX8UUN4McHaKeevL6rXXWQAAAA&pid=Api&P=0&h=180"
      },
      {
        id: 22,
        name: "Midnight Rose",
        categories: ["Unisex", "Floral", "Rose"],
        price: 65.99,
        quantity: 18,
        description: "A deep and mysterious rose blend with hints of oud, vanilla, and amber.",
        image: "https://tse4.mm.bing.net/th?id=OIP.rLFCrwg4PLQLCro-J3D09wHaJf&pid=Api&P=0&h=180"
      },
      {
        id: 23,
        name: "Rosewood Essence",
        categories: ["Men", "Woody", "Rose"],
        price: 72.99,
        quantity: 15,
        description: "A rich and elegant combination of rose petals, sandalwood, and warm spices.",
        image: "https://tse2.mm.bing.net/th?id=OIP.sr1EKmV4ig2ImDopNnnGTgHaIa&pid=Api&P=0&h=180"
      },
      {
        id: 24,
        name: "Velvet Rose",
        categories: ["Women", "Floral", "Rose"],
        price: 59.99,
        quantity: 25,
        description: "A luxurious scent of velvety red roses with a touch of jasmine and vanilla.",
        image: "https://tse4.mm.bing.net/th?id=OIP.vioNuD6DVx0T09c1d6JqLQHaJJ&pid=Api&P=0&h=180"
      },
      {
        id: 25,
        name: "Amber Rose",
        categories: ["Unisex", "Floral", "Rose"],
        price: 68.99,
        quantity: 12,
        description: "A warm and sensual blend of roses, amber, and honey for a long-lasting scent.",
        image: "https://tse4.mm.bing.net/th?id=OIP.sOasFrHEvUyroP1cx8zgOwHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 26,
        name: "Fresh Rose Mist",
        categories: ["Women", "Floral", "Rose"],
        price: 49.99,
        quantity: 30,
        description: "A light and airy fragrance with fresh garden roses and a hint of citrus zest.",
        image: "https://tse4.mm.bing.net/th?id=OIP.HddHWyKPBX4Z-lH1H1walAHaLG&pid=Api&P=0&h=180"
      },
      {
        id: 27,
        name: "Rose Noir",
        categories: ["Men", "Dark", "Rose"],
        price: 74.99,
        quantity: 10,
        description: "An intense and seductive rose scent infused with smoky leather and deep musk.",
        image: "https://tse2.mm.bing.net/th?id=OIP.rH608GBEauSkHPDgBVB0WAHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 28,
        name: "Rose & Coffee Delight",
        categories: ["Unisex", "Gourmand", "Rose", "Coffee"],
        price: 70.99,
        quantity: 14,
        description: "A unique and addictive fusion of rich coffee beans and delicate rose petals.",
        image: "https://tse3.mm.bing.net/th?id=OIP.nvjnIdsGYE8oHeyH98IGdgHaIb&pid=Api&P=0&h=180"
      },
      {
        id: 29,
        name: "Pink Bloom",
        categories: ["Women", "Floral", "Rose"],
        price: 53.99,
        quantity: 22,
        description: "A cheerful and vibrant rose-based scent with juicy berries and peony accents.",
        image: "https://tse4.mm.bing.net/th?id=OIP.gbCI7N4icCHwtECCV_RHSQHaFD&pid=Api&P=0&h=180"
      },
      {
        id: 30,
        name: "Golden Rose Oud",
        categories: ["Men", "Woody", "Rose"],
        price: 77.99,
        quantity: 11,
        description: "A royal blend of rare rose extracts, oud wood, and deep smoky incense.",
        image: "https://tse3.mm.bing.net/th?id=OIP.vTliblI8RRRYADq_brXDywHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 31,
        name: "Lily Bloom",
        categories: ["Women", "Floral", "Lily"],
        price: 54.99,
        quantity: 20,
        description: "A fresh and delicate lily fragrance with a hint of jasmine and white musk.",
        image: "https://tse2.mm.bing.net/th?id=OIP.fn2byXDsotySAciPpd0-qwHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 32,
        name: "Mystic Lily",
        categories: ["Unisex", "Floral", "Lily"],
        price: 62.99,
        quantity: 18,
        description: "A mysterious blend of lily petals, sandalwood, and a touch of vanilla.",
        image: "https://tse2.mm.bing.net/th?id=OIP.-DDgKx5-wfdl6QYAuVHbhgHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 33,
        name: "Golden Lily",
        categories: ["Women", "Floral", "Lily"],
        price: 58.99,
        quantity: 22,
        description: "A luxurious scent with golden lilies, honeysuckle, and soft amber undertones.",
        image: "https://tse2.mm.bing.net/th?id=OIP.rqs3L6xVbambcN0ZM3hkSQHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 34,
        name: "Lily Noir",
        categories: ["Men", "Woody", "Lily"],
        price: 68.99,
        quantity: 15,
        description: "A deep and bold fragrance combining black lilies with oud and spicy notes.",
        image: "https://tse1.mm.bing.net/th?id=OIP.KeGnolRbM7y6p0P82ZP_UwAAAA&pid=Api&P=0&h=180"
      },
      {
        id: 35,
        name: "White Lily Mist",
        categories: ["Women", "Floral", "Lily"],
        price: 49.99,
        quantity: 30,
        description: "A refreshing mist of white lilies, citrus, and green tea for a light floral experience.",
        image: "https://tse3.mm.bing.net/th?id=OIP.SycV4ajSBp4XUD6tRb8OdAHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 36,
        name: "Amber Lily",
        categories: ["Unisex", "Floral", "Amber", "Lily"],
        price: 70.99,
        quantity: 14,
        description: "A warm and captivating mix of amber, oriental spices, and blooming lilies.",
        image: "https://tse2.mm.bing.net/th?id=OIP.c2WtuTjaR4HDvqxevmaApQHaD0&pid=Api&P=0&h=180"
      },
      {
        id: 37,
        name: "Lily & Rose Harmony",
        categories: ["Women", "Floral", "Lily", "Rose"],
        price: 65.99,
        quantity: 12,
        description: "A harmonious blend of roses and lilies, creating a floral paradise in a bottle.",
        image: "https://tse1.mm.bing.net/th?id=OIP.0gSbugII7JhjWe8Nc1Iv3QHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 38,
        name: "Midnight Lily",
        categories: ["Men", "Dark", "Lily"],
        price: 75.99,
        quantity: 10,
        description: "A bold and sophisticated blend of black lilies, leather, and dark musk.",
        image: "https://tse4.mm.bing.net/th?id=OIP.XSFcl2wi5aUlxNOPEpcjzwAAAA&pid=Api&P=0&h=180"
      },
      {
        id: 39,
        name: "Lily & Coffee Bliss",
        categories: ["Unisex", "Gourmand", "Lily", "Coffee"],
        price: 69.99,
        quantity: 16,
        description: "A rich, creamy coffee fragrance infused with the delicate floral notes of lilies.",
        image: "https://tse4.mm.bing.net/th?id=OIP.UvEGs1dXoMJpUMLnnernVgAAAA&pid=Api&P=0&h=180"
      },
      {
        id: 40,
        name: "Serene Lily",
        categories: ["Women", "Floral", "Lily"],
        price: 52.99,
        quantity: 21,
        description: "A calming scent inspired by fresh lily gardens, blended with soft musk and white tea.",
        image: "https://tse3.mm.bing.net/th?id=OIP.fN-UICWlDxxkXJ5EYooODwHaJl&pid=Api&P=0&h=180"
      },
      {
        id: 41,
        name: "Zesty Lemon",
        categories: ["Unisex", "Citrus", "Fresh"],
        price: 45.99,
        quantity: 25,
        description: "A vibrant burst of fresh lemon, bergamot, and a touch of white musk for a refreshing experience.",
        image: "https://tse4.mm.bing.net/th?id=OIP.wtcIu4cR_nQrvQd1osZQlwHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 42,
        name: "Citrus Grove",
        categories: ["Women", "Floral", "Citrus"],
        price: 55.99,
        quantity: 20,
        description: "A bright and cheerful blend of orange blossoms, neroli, and juicy tangerine.",
        image: "https://tse1.mm.bing.net/th?id=OIP.D1o6CloPiVGkxjf9X-r7KAAAAA&pid=Api&P=0&h=180"
      },
      {
        id: 43,
        name: "Orange Sunrise",
        categories: ["Men", "Woody", "Citrus"],
        price: 60.99,
        quantity: 18,
        description: "A deep and masculine scent combining blood oranges, cedarwood, and warm amber.",
        image: "https://tse4.mm.bing.net/th?id=OIP.kpWhrMB8uy6gSi1GFHIuvwHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 44,
        name: "Tropical Lime",
        categories: ["Unisex", "Citrus", "Exotic"],
        price: 49.99,
        quantity: 22,
        description: "A tropical fusion of fresh limes, coconut water, and a hint of vanilla.",
        image: "https://tse1.mm.bing.net/th?id=OIP.C2QeVmTLSVKf_s0Ja9hWpgHaJ3&pid=Api&P=0&h=180"
      },
      {
        id: 45,
        name: "Golden Citrus",
        categories: ["Women", "Citrus", "Floral"],
        price: 52.99,
        quantity: 15,
        description: "A luxurious and radiant scent of grapefruit, jasmine, and sweet honey.",
        image: "https://tse4.mm.bing.net/th?id=OIP.XU-SlgG09Rpv3Osn_eLOZgHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 46,
        name: "Citrus & Coffee Fusion",
        categories: ["Unisex", "Citrus", "Coffee"],
        price: 64.99,
        quantity: 12,
        description: "A unique blend of citrus peels and roasted coffee beans for a refreshing yet bold scent.",
        image: "https://tse1.mm.bing.net/th?id=OIP.yXW3mURXNUC4-zO_NOZUpwHaLH&pid=Api&P=0&h=180"
      },
      {
        id: 47,
        name: "Lime Breeze",
        categories: ["Men", "Citrus", "Fresh"],
        price: 48.99,
        quantity: 30,
        description: "A light and energetic fragrance of green lime, basil, and oceanic accords.",
        image: "https://tse3.mm.bing.net/th?id=OIP.FCv4KGlP_dYEvecDTIImVwHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 48,
        name: "Mandarin Spice",
        categories: ["Women", "Citrus", "Spicy"],
        price: 57.99,
        quantity: 14,
        description: "A warm and spicy blend of mandarin, cinnamon, and creamy sandalwood.",
        image: "https://tse1.mm.bing.net/th?id=OIP.zaEf8pobshu9P5c13WPMSAAAAA&pid=Api&P=0&h=180"
      },
      {
        id: 49,
        name: "Citrus Oud",
        categories: ["Men", "Woody", "Citrus"],
        price: 70.99,
        quantity: 10,
        description: "A sophisticated combination of citrus zest, deep oud wood, and smoky incense.",
        image: "https://tse3.mm.bing.net/th?id=OIP.r0DE2ihT96QgnghXGoDvcwHaHa&pid=Api&P=0&h=180"
      },
      {
        id: 50,
        name: "Summer Citrus",
        categories: ["Unisex", "Citrus", "Fresh"],
        price: 50.99,
        quantity: 21,
        description: "A perfect summer fragrance featuring sweet oranges, fresh lemons, and cooling mint.",
        image: "https://tse4.mm.bing.net/th?id=OIP.GKPNK2TobK0dvn84lXKiOgHaFi&pid=Api&P=0&h=180"
      }, 
      {
        "id": 51,
        "name": "Woody Mystique",
        "categories": ["Men", "Woody", "Rose"],
        "price": 120,
        "quantity": 50,
        "description": "A bold, woody fragrance with hints of rose, perfect for the modern man.",
        "image": "https://tse2.mm.bing.net/th?id=OIP.C26p4yLv--IWTDlMk1T3ewHaEo&pid=Api&P=0&h=180"
      },
      {
        "id": 52,
        "name": "Choco Bliss",
        "categories": ["Women", "Gourmand", "Chocolate"],
        "price": 95,
        "quantity": 30,
        "description": "A sweet fragrance with rich chocolate notes, ideal for any occasion.",
        "image": "https://tse4.mm.bing.net/th?id=OIP.1WTq8bES3f1AVlVlp_bTJAHaI5&pid=Api&P=0&h=180"
      },
      {
        "id": 53,
        "name": "Exotic Woodlands",
        "categories": ["Unisex", "Exotic", "Woody"],
        "price": 145,
        "quantity": 40,
        "description": "A blend of exotic woods and fresh sandalwood, ideal for lovers of earthy fragrances.",
        "image": "https://tse4.mm.bing.net/th?id=OIP.-K709auDdHh2Q6Z0kcr65QAAAA&pid=Api&P=0&h=180"
      },
      {
        "id": 54,
        "name": "Amber Vanilla Dream",
        "categories": ["Women", "Gourmand", "Vanilla"],
        "price": 110,
        "quantity": 60,
        "description": "A warm, cozy fragrance with amber and vanilla, perfect for evening wear.",
        "image": "https://tse2.mm.bing.net/th?id=OIP.64AZr6ttLQYa6RGSp6I7ZAHaHa&pid=Api&P=0&h=180"
      },
      {
        "id": 55,
        "name": "Coffee Essence",
        "categories": ["Men", "Gourmand", "Coffee"],
        "price": 85,
        "quantity": 75,
        "description": "A fresh coffee fragrance with hints of cinnamon, perfect for an energetic lifestyle.",
        "image": "https://tse4.mm.bing.net/th?id=OIP.ocGotw3rD3Ixshawv7l9ZgHaMA&pid=Api&P=0&h=180"
      },
      {
        "id": 56,
        "name": "Lily Blossom",
        "categories": ["Women", "Exotic", "Lily"],
        "price": 95,
        "quantity": 50,
        "description": "A delicate fragrance of lily, perfect for a light and airy everyday scent.",
        "image": "https://tse3.mm.bing.net/th?id=OIP.M_E3AkU8HANErDbU7vkjUAAAAA&pid=Api&P=0&h=180"
      },
      {
        "id": 57,
        "name": "Cedarwood Spice",
        "categories": ["Men", "Woody", "Pepper"],
        "price": 130,
        "quantity": 45,
        "description": "A deep and spicy fragrance with cedarwood and pepper, perfect for the confident man.",
        "image": "https://tse2.mm.bing.net/th?id=OIP.iknLKf07ZsGEXhiOW76uSwHaFj&pid=Api&P=0&h=180"
      },
      {
        "id": 58,
        "name": "Vanilla Amber Fantasy",
        "categories": ["Women", "Gourmand", "Amber"],
        "price": 105,
        "quantity": 40,
        "description": "A rich fragrance of vanilla and amber, perfect for a romantic evening.",
        "image": "https://tse3.mm.bing.net/th?id=OIP.b0NzCsgcTJp76K2XAYQsMgAAAA&pid=Api&P=0&h=180"
      },
      {
        "id": 59,
        "name": "Tropical Spice",
        "categories": ["Unisex", "Exotic", "Citrus"],
        "price": 120,
        "quantity": 60,
        "description": "A refreshing tropical blend of citrus, perfect for a sunny, island-inspired day.",
        "image": "https://tse2.mm.bing.net/th?id=OIP.spcV9C28f25JSO7pndshWwHaIz&pid=Api&P=0&h=180"
      },
      {
        "id": 60,
        "name": "Rosewood Luxury",
        "categories": ["Women", "Woody", "Rose"],
        "price": 140,
        "quantity": 50,
        "description": "A luxurious scent combining the softness of rose with woody notes, ideal for elegant occasions.",
        "image": "https://tse2.mm.bing.net/th?id=OIP.U39smHYwgELleyMoDg_uIQHaFj&pid=Api&P=0&h=180"
      }
  ];
  
  export default perfumes;
  