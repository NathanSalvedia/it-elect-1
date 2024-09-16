let editingItem = null;
let groceryList = JSON.parse(localStorage.getItem('groceryList')) || []; // Get saved items from local storage or initialize empty array

document.addEventListener('DOMContentLoaded', function () {
    displayItems(); // Display saved items on page load
});

document.getElementById('grocery').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const store = document.getElementById('store').value;
    const weight = document.getElementById('weight').value;
    const imageFile = document.getElementById('image').files[0];

    // Check if editing an existing item
    if (editingItem) {
        updateItem(editingItem, productName, quantity, category, price, store, weight, imageFile);
        editingItem = null; // Reset after updating
    } else {
        addItem(productName, quantity, category, price, store, weight, imageFile);
    }

    // Clear the form and hide it
    document.getElementById('grocery').reset();
    document.getElementById('grocery').style.display = 'none'; // Hide form after adding or editing item
    saveToLocalStorage(); // Save updated list to local storage
});

// Function to add a new item to the list and save to array
function addItem(productName, quantity, category, price, store, weight, imageFile) {
    const listItem = {
        id: Date.now(), // Unique ID
        productName,
        quantity,
        category,
        price,
        store,
        weight,
        image: imageFile ? URL.createObjectURL(imageFile) : null
    };

    groceryList.push(listItem); // Add item to array
    displayItems(); // Update the display
    saveToLocalStorage(); // Save to local storage
}

// Function to update an existing item
function updateItem(id, productName, quantity, category, price, store, weight, imageFile) {
    const itemIndex = groceryList.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        // Update the existing item
        groceryList[itemIndex] = {
            ...groceryList[itemIndex], // Keep existing data
            productName,
            quantity,
            category,
            price,
            store,
            weight,
            image: imageFile ? URL.createObjectURL(imageFile) : groceryList[itemIndex].image // Use new image if provided
        };
        
        displayItems(); // Re-render the updated list
        saveToLocalStorage(); // Save updated data to local storage
    }
}

// Function to display all items from the array
function displayItems(filteredItems = groceryList) { // Optional parameter for filtered items
    const groceryListElement = document.getElementById('grocery-list');
    groceryListElement.innerHTML = ''; // Clear the list

    filteredItems.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.setAttribute('data-id', item.id);

        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.productName;
            img.className = 'product-image';
            listItem.appendChild(img);
        }

        listItem.innerHTML += `
            <h3>${item.productName}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Category: ${item.category}</p>
            <p>Price: &#8369;${item.price}</p>
            <p>Store: ${item.store}</p>
            <p>Weight: ${item.weight}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        // Add event listeners for edit and delete buttons
        listItem.querySelector('.edit-btn').addEventListener('click', () => editItem(item));
        listItem.querySelector('.delete-btn').addEventListener('click', () => deleteItem(item.id));

        groceryListElement.appendChild(listItem);
    });
}

// Function to save array to local storage
function saveToLocalStorage() {
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}

// Function to delete an item from the list
function deleteItem(id) {
    groceryList = groceryList.filter(item => item.id !== id); // Remove from array
    displayItems(); // Re-render the list after deleting
    saveToLocalStorage(); // Update local storage
}

// Function to edit an existing item
function editItem(item) {
    document.getElementById('product-name').value = item.productName;
    document.getElementById('quantity').value = item.quantity;
    document.getElementById('category').value = item.category;
    document.getElementById('price').value = item.price;
    document.getElementById('store').value = item.store;
    document.getElementById('weight').value = item.weight;

    editingItem = item.id; // Set the item being edited
    document.getElementById('grocery').style.display = 'block'; // Show form when editing
}

// Function to filter the list based on search input
document.getElementById('search').addEventListener('input', function (event) {
    const searchQuery = event.target.value.toLowerCase();
    
    const filteredItems = groceryList.filter(item => 
        item.productName.toLowerCase().includes(searchQuery) || 
        item.category.toLowerCase().includes(searchQuery) || 
        item.store.toLowerCase().includes(searchQuery)
    );
    
    displayItems(filteredItems); // Update the display with filtered items
});
