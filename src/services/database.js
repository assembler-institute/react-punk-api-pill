
function saveItem(itemName, itemValue) {
  localStorage.setItem(itemName, JSON.stringify(itemValue));
}

function getItem(itemName) {
  const dataBaseItem = localStorage.getItem(itemName);
  return dataBaseItem ? JSON.parse(dataBaseItem) : [];
}

export {
  saveItem,
  getItem
}