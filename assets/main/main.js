const data = [
    {
        id: '1',
        img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Air',
        brand: 'Nike',
        price: '120.00 $',
        sizes: ['37', '38', '39'],
    },
    {
        id: '2',
        img: 'https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Dunk High Pro',
        brand: 'Nike',
        price: '150.00 $',
        sizes: ['37', '38', '39', '40', '42'],
    },
    {
        id: '3',
        img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Old Skool',
        brand: 'Vans',
        price: '50.00 $',
        sizes: ['37'],
    },
    {
        id: '4',
        img: 'https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Summer Party',
        brand: 'Nike',
        price: '100.00 $',
        sizes: ['42', '43', '44', '45', '46'],
    },
    {
        id: '5',
        img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Retro',
        brand: 'Adidas',
        price: '149.00 $',
        sizes: ['39', '40'],
    },
    {
        id: '6',
        img: 'https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Fancy Doc',
        brand: 'Crocs',
        price: '79.00 $',
        sizes: ['37', '38', '39', '40', '41', '42'],
    },
    {
        id: '7',
        img: 'https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        name: 'Classic',
        brand: 'Reebok',
        price: '99.00 $',
        sizes: ['43', '44', '45', '46'],
    },
    {
        id: '8',
        img: 'https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        name: 'Jungle',
        brand: 'New Balance',
        price: '110.00 $',
        sizes: ['39', '40', '41', '42'],
    },
    {
        id: '9',
        img: 'https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        name: 'Essentials',
        brand: 'Errant',
        price: '120.00 $',
        sizes: ['41', '42', '43', '44', '45', '46'],
    },
    {
        id: '10',
        img: 'https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Très chic',
        brand: 'Nike',
        price: '150.00 $',
        sizes: ['45', '46'],
    },
    {
        id: '11',
        img: 'https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80',
        name: 'Plastic Revolution',
        brand: 'Adidas',
        price: '180.00 $',
        sizes: ['37', '38', '39', '40'],
    },
    {
        id: '12',
        img: 'https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Sporty',
        brand: 'Asics',
        price: '90.00 $',
        sizes: ['41', '42', '43', '44'],
    },
];
let tempCartItems;
let cookies;
let cartItems = [];
let cartBadge = 0;

const galleryContainer = document.querySelector('.gallery-container');
const submitBtn = document.querySelector('#submit');
const txtInput = document.querySelector('#txt-input');
const formContainer = document.querySelector('.form-container');
const message = document.querySelector('.message');
const acceptBtn = document.querySelector('.accept');
const rejectBtn = document.querySelector('.reject');
const modal = document.querySelector('.modal');
const cartCounter = document.querySelector('.cart-counter');
const cartModal = document.querySelector('.cart-modal');
const cartContent = document.querySelector('.cart-content');
const closeBtn = document.querySelector('.close');
const closeEmptyBtn = document.querySelector('.close-empty');
const cartIcon = document.querySelector('.cart-container');
const emptyCartModal = document.querySelector('.empty-cart');
const cartTotal = document.querySelector('.total-price');
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

//  eine Funktion, die die Gesamtmenge der Artikel im Warenkorb berechnet
const calculateTotalAmount = (array) => {
    const initialValue = 0;
    const totalPrice = array.reduce((accum, item) => {
        const convertedPrice = +item.price.slice(0, item.price.length - 5);
        return accum + item.amount * convertedPrice;
    }, initialValue);
    cartTotal.innerHTML = `${totalPrice} $`;
};
// eine Funktion, die den Artikel im Warenkorb um eins erhöht
const incrementItems = (element, array) => {
    element.amount += 1;
    cartBadge += 1;
    cartCounter.innerHTML = cartBadge;
    calculateTotalAmount(array);
};
// eine Funktion, die den Artikel im Warenkorb um eins verringert
const decrementItems = (element, array) => {
    if (element.amount === 1) {
        array.splice(array.indexOf(element), 1);
    } else {
        element.amount -= 1;
    }
    cartBadge -= 1;
    cartCounter.innerHTML = cartBadge;
    calculateTotalAmount(array);
};
// Karten für alle Produkte in der Datenbank erstellen und im DOM anzeigen
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
    brand.classList.add('more-details');
    brand.textContent = product.brand;
    const sizes = document.createElement('p');
    sizes.classList.add('more-details');
    product.sizes.forEach((element) => {
        const size = document.createElement('span');
        size.textContent = element;
        sizes.appendChild(size);
    });
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.appendChild(name);
    productInfo.appendChild(price);
    productInfo.appendChild(brand);
    productInfo.appendChild(sizes);
    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btns-container');
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    // Hinzufügen eines event-Listener zum Add-Button. Mit jedem Klick wird das Element zum cartItems-Array hinzugefügt.
    addBtn.addEventListener('click', () => {
        if (cartItems.length === 0) {
            cartItems.push({
                id: product.id,
                image: product.img,
                name: product.name,
                price: product.price,
                amount: 1,
            });
        } else if (
            cartItems.filter((item) => item.id === product.id).length > 0
        ) {
            cartItems = cartItems.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        amount: item.amount + 1,
                    };
                } else {
                    return item;
                }
            });
        } else {
            cartItems.push({
                id: product.id,
                image: product.img,
                name: product.name,
                price: product.price,
                amount: 1,
            });
        }
        cartBadge += 1;
        cartCounter.innerHTML = cartBadge;
        cartContent.innerHTML = '';
        // Erstellen der DOM-Elemente, die im cart modal window angezeigt werden sollen
        cartItems.forEach((item) => {
            const itemContainer = document.createElement('div');
            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            const itemName = document.createElement('p');
            itemName.textContent = item.name;
            const incrementItem = document.createElement('span');
            incrementItem.textContent = '+';
            incrementItem.addEventListener('click', () => {
                incrementItems(item, cartItems);
                itemAmount.textContent = `${item.amount} X`;
            });
            const decrementItem = document.createElement('span');
            decrementItem.textContent = '-';
            decrementItem.addEventListener('click', () => {
                decrementItems(item, cartItems);
                if (
                    cartItems.filter((element) => element.id === item.id)
                        .length === 0
                ) {
                    cartContent.removeChild(itemContainer);
                }
                itemAmount.textContent = `${item.amount} X`;
                if (cartItems.length === 0) {
                    cartModal.style.display = 'none';
                    emptyCartModal.style.display = 'block';
                }
            });
            const itemAmount = document.createElement('p');
            itemAmount.textContent = `${item.amount} X`;
            itemAmount.classList.add('item-amount');
            const itemPrice = document.createElement('p');
            itemPrice.textContent = item.price;
            itemPrice.classList.add('item-price');
            itemContainer.appendChild(itemImage);
            itemContainer.appendChild(itemName);
            itemContainer.appendChild(incrementItem);
            itemContainer.appendChild(decrementItem);
            itemContainer.appendChild(itemAmount);
            itemContainer.appendChild(itemPrice);
            cartContent.appendChild(itemContainer);
        });
        const initialValue = 0;
        const totalPrice = cartItems.reduce((accum, item) => {
            const convertedPrice = +item.price.slice(0, item.price.length - 5);
            return accum + item.amount * convertedPrice;
        }, initialValue);
        cartTotal.innerHTML = `${totalPrice} $`;
    });
    const showBtn = document.createElement('img');
    showBtn.src = 'assets/images/arrow.svg';
    showBtn.addEventListener('click', () => {
        showBtn.classList.add('show-details');
        showBtn.classList.toggle('arrow-direction');
        brand.classList.toggle('more-details');
        sizes.classList.toggle('more-details');
    });
    btnsContainer.appendChild(addBtn);
    btnsContainer.appendChild(showBtn);
    detailsContainer.appendChild(productInfo);
    detailsContainer.appendChild(btnsContainer);
    productContainer.appendChild(detailsContainer);
    galleryContainer.appendChild(productContainer);
});

submitBtn.addEventListener('click', () => {
    if (txtInput.value !== '' && txtInput.value.includes('@')) {
        formContainer.style.display = 'none';
        message.style.display = 'block';
    } else return;
});

acceptBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    localStorage.setItem('cookies', 'true');
});

rejectBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    localStorage.setItem('cookies', 'false');
});

closeBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

closeEmptyBtn.addEventListener('click', () => {
    emptyCartModal.style.display = 'none';
});

cartIcon.addEventListener('click', () => {
    if (cartItems.length === 0) {
        emptyCartModal.style.display = 'block';
    } else cartModal.style.display = 'block';
});

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Erstellen einer Funktion, um zu überprüfen, ob Cookies aktiviert sind oder nicht, und um die Cookies modal bedingt anzuzeigen

const checkCookies = () => {
    cookies = localStorage.getItem('cookies');
    if (cookies === 'true') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
};

checkCookies();
