let products = [
    { id: 1001, name: "Noise Cancelling Headphones", price: 349, category: "Electronics", stock: 25, rating: 4.9 },
    { id: 1002, name: "Air Fryer", price: 129, category: "Appliances", stock: 15, rating: 4.6 },
    { id: 1003, name: "Cycling Helmet", price: 79, category: "Fitness", stock: 60, rating: 4.8 },
    { id: 1004, name: "TV Stand", price: 199, category: "Furniture", stock: 12, rating: 4.4 },
    { id: 1005, name: "Smartphone Case", price: 19, category: "Accessories", stock: 100, rating: 4.5 }
];


let parentDiv = document.createElement('div');
parentDiv.className = 'main-container'
document.body.appendChild(parentDiv);

products.forEach((element,index) => {
    let item = document.createElement('div');
    item.className = `card-${index}`;
    for(let key in element){
        let paragraphElement = document.createElement('p');
        paragraphElement.textContent = `${key}: ${element[key]}`
        item.appendChild(paragraphElement)
    }
    let buttonElement = document.createElement('button')
    buttonElement.className = 'button'
    buttonElement.textContent = 'BUY NOW'
    item.appendChild(buttonElement)
    parentDiv.appendChild(item)
});