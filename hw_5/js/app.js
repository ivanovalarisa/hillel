const categories = [
  { name: 'Laptops', key: 'laptops' },
  { name: 'Phones', key: 'phones' }
];

const products = {
  laptops: [
    { name: 'Apple Macbook', price: 2000 },
    { name: 'Dell XPS15', price: 2100 },
  ],
  phones: [
    { name: 'iPhone X', price: 1500 },
    { name: 'Samsung S10', price: 1600 },
    { name: 'Samsung S20', price: 2500 },
  ],
};

const DISCOUNT = 0.1;
const DISCOUNT_FROM = 10000;

function selectFromArray(array, message) {
  let result;
  do {
    result = parseInt(prompt(message));
  } while(isNaN(result) || result < 1 || result > array.length);
  return result;
}

// we may use it in future, it's useful
function getIntegerFromUser(message) {
  let result;
  do {
    result = parseInt(prompt(message));
  } while (isNaN(result) || result <= 0);
  return result;
}

function choiceCategory() {
  let categoryNumber = selectFromArray(categories, 'Enter the category');

  const selectedKey = categories[categoryNumber - 1].key;
  let selectedProductsArr = products[selectedKey];

  for (let i = 0; i < categories.length; i++) {
    if(categories[i].key === selectedKey) {
      console.log('You have chosen from the category ' + categories[i].name);
      break;
    }
  }
  return selectedProductsArr;
}

function choiceProduct(selectedProductsArr) {
  let productNumber  = selectFromArray(selectedProductsArr, 'Enter the number of the product which you want to buy');

  let selectedProduct = selectedProductsArr[productNumber - 1];

  for (let j = 0; j < selectedProductsArr.length; j++) {
    if (productNumber - 1 === j) {
      console.log('You chose this product ' + selectedProductsArr[j].name + ' Price: $' + selectedProductsArr[j].price);
      break;
    }
  }
  return selectedProduct;
}

function calculation(selectedProduct) {
  let productAmount = getIntegerFromUser('Enter the amount of product which you wanna buy');

  const resultPrice = productAmount * selectedProduct.price;
  console.log('The cost for ' + productAmount + ' items is $' + resultPrice);

  if (resultPrice > DISCOUNT_FROM) {
    const finalPrice = resultPrice * (1 - DISCOUNT);
    console.log('You got the discount ' + (DISCOUNT * 100) + '%. The final price is $' + finalPrice);
  }
}

function doOrder() {
  let selectedProductsArr = choiceCategory();
  let selectedProduct = choiceProduct(selectedProductsArr);
  calculation(selectedProduct);
}

doOrder();