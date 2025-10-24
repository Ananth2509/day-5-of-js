// Grocery List Management

// 1. List Storage: Array to store grocery items
let groceryList = [];

// 2. Add Items
function addItem(item) {
  groceryList.push(item);
  console.log(`${item} added to the grocery list.`);
}

// 3. View Items (without forEach)
function viewList() {
  if (groceryList.length === 0) {
    console.log("The grocery list is empty.");
  } else {
    console.log("🛒 Grocery List:");
    for (let i = 0; i < groceryList.length; i++) {
      console.log((i + 1) + ". " + groceryList[i]);
    }
  }
}

// 4. Remove Items
function removeItem(item) {
  const index = groceryList.indexOf(item);
  if (index !== -1) {
    groceryList.splice(index, 1);
    console.log(`${item} has been removed from the list.`);
  } else {
    console.log(`${item} not found in the list.`);
  }
}

// Example usage:
addItem("Apples");
addItem("Milk");
addItem("Bread");
viewList();

removeItem("Milk");
viewList();
