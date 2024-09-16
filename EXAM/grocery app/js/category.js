const items = [
  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://maplelawnfarms.ca/wp-content/uploads/2019/12/p3.jpg',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://saverscabin.com/wp-content/uploads/2023/03/SC-Product-WP-Potato.jpg',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/eggplant.jpg',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },
  
  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4rf0Ai6x5Y3ceOk98eBsLAxyvvliVgktKg&s',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },
  
  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://saverscabin.com/wp-content/uploads/2023/03/SC-Kalabasa-3-1.jpg',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },
  
  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-wQq80nMEuRK8uaEJxIpEYy8bx5OFAsAXQ&s',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tni34qgbTPI2GqG4-KcpJ1bwO6pe8po69w&s',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr6TxSU65t995cB7IJqr5f-OW2rD9XBdLyA&s',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko3Ejt-udkebtUFKGmKCOPXTS4N43Udmtwg&s',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },


  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfynxez1CUXwrJP3nNccTkvg02_Z78nn77w&s',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://cdn.britannica.com/63/193863-050-0EC30803/Parsley.jpg',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Tomato',
    category: 'Vegetables',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mung_bean_sprouts.jpg/800px-Mung_bean_sprouts.jpg',
    brand: 'Fresh Farms',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },

  {
    name: 'Chicken Breast',
    category: 'Meat',
    image: 'https://bountyfreshmarket.ph/cdn/shop/products/breastfillet_1080x.jpg?v=1629358574',
    brand: 'Bounty Fresh',
    quantity: 1,
    price: 2.99,
    store: 'Local Market',
    weightVolume: '1 lb'
  },
  // Add more items with additional fields
];

function filterItems(category) {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = ''; // Clear previous items

  // Filter items based on the selected category
  const filteredItems = items.filter(item => item.category === category);

  // Display filtered items
  filteredItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    const itemImg = document.createElement('img');
    itemImg.src = item.image;
    itemImg.alt = item.name;

    const itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';

    const itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.textContent = item.name;

    const itemBrand = document.createElement('p');
    itemBrand.innerHTML = `<strong>Brand:</strong> ${item.brand}`;

    const itemQuantity = document.createElement('p');
    itemQuantity.innerHTML = `<strong>Quantity:</strong> ${item.quantity}`;

    const itemPrice = document.createElement('p');
    itemPrice.innerHTML = `<strong>Price:</strong> &#8369;${item.price.toFixed(2)}`;

    const itemStore = document.createElement('p');
    itemStore.innerHTML = `<strong>Store:</strong> ${item.store}`;

    const itemWeightVolume = document.createElement('p');
    itemWeightVolume.innerHTML = `<strong>Weight/Volume:</strong> ${item.weightVolume}`;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemBrand);
    itemInfo.appendChild(itemQuantity);
    itemInfo.appendChild(itemPrice);
    itemInfo.appendChild(itemStore);
    itemInfo.appendChild(itemWeightVolume);

    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemInfo);
    itemList.appendChild(itemDiv);
  });
}
