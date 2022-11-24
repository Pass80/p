const data = [
    {
        img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Air',
        brand: 'Nike',
        price: '120.00 $',
        sizes: ['37', '38', '39'],
    },
    {
        img: 'https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Dunk High Pro',
        brand: 'Nike',
        price: '150.00 $',
        sizes: ['37', '38', '39', '40', '42'],
    },
    {
        img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Old Skool',
        brand: 'Vans',
        price: '50.00 $',
        sizes: ['37'],
    },
    {
        img: 'https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Summer Party',
        brand: 'Nike',
        price: '100.00 $',
        sizes: ['42', '43', '44', '45', '46'],
    },
    {
        img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Retro',
        brand: 'Adidas',
        price: '149.00 $',
        sizes: ['39', '40'],
    },
    {
        img: 'https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Fancy Doc',
        brand: 'Crocs',
        price: '79.00 $',
        sizes: ['37', '38', '39', '40', '41', '42'],
    },
    {
        img: 'https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Classic',
        brand: 'Reebok',
        price: '99.00 $',
        sizes: ['43', '44', '45', '46'],
    },
    {
        img: 'https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        name: 'Jungle',
        brand: 'New Balance',
        price: '110.00 $',
        sizes: ['39', '40', '41', '42'],
    },
    {
        img: 'https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        name: 'Essentials',
        brand: 'Errant',
        price: '120.00 $',
        sizes: ['41', '42', '43', '44', '45', '46'],
    },
    {
        img: 'https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Très chic',
        brand: 'Nike',
        price: '150.00 $',
        sizes: ['45', '46'],
    },
    {
        img: 'https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80',
        name: 'Plastic Revolution',
        brand: 'Adidas',
        price: '180.00 $',
        sizes: ['37', '38', '39', '40'],
    },
    {
        img: 'https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Sporty',
        brand: 'Asics',
        price: '90.00 $',
        sizes: ['41', '42', '43', '44'],
    },
];

const galleryContainer = document.querySelector('.gallery-container');
data.forEach((product) => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');
    const image = document.createElement('img');
    image.src = product.img;
    productContainer.appendChild(image);
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    const name = document.createElement('h2');
    name.textContent = product.name;
    const price = document.createElement('p');
    price.textContent = product.price;
    const brand = document.createElement('p');
    brand.textContent = product.brand;
    const sizes = document.createElement('p');
    sizes.textContent = product.sizes;
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.appendChild(name);
    productInfo.appendChild(price);
    productInfo.appendChild(brand);
    productInfo.appendChild(sizes);
    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btns-container');
    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    const showBtn = document.createElement('button');
    showBtn.textContent = '^';
    btnsContainer.appendChild(addBtn);
    btnsContainer.appendChild(showBtn);
    detailsContainer.appendChild(productInfo);
    detailsContainer.appendChild(btnsContainer);
    productContainer.appendChild(detailsContainer);
    galleryContainer.appendChild(productContainer);
});
