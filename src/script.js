console.log('uzomian...');

// IMPORTS
import {html1, html2} from './content';
import {html as homeHTML} from './home';
import {html as mealsHTML} from './meals';
import {html as orderHTML} from './order';

// FUNCTIONS
function init() {
    const content = document.querySelector('.content');
    content.insertAdjacentHTML('afterbegin', html1);
    content.insertAdjacentHTML('afterend', html2);

    content.insertAdjacentHTML('beforeend', homeHTML);
    content.insertAdjacentHTML('beforeend', mealsHTML);
    content.insertAdjacentHTML('beforeend', orderHTML);
}

// EVENT HANDLERS
function changeTab(e) {
    if (!e.target.closest('a')) return;

    const pageTabs = ['home', 'meals', 'order'];

    pageTabs.forEach(pageTab => {
        // Show / Hide tab content
        document.querySelector(`.${pageTab}`).classList[pageTab == e.target.innerHTML ? 'add' : 'remove']('active-tab');
        
        // Show / Hide Order Now button
        orderBtnDiv.classList[e.target.innerHTML == 'order' ? 'add' : 'remove']('hidden');
    })

    // Set active tab link
    navLi.forEach(li => li.classList[li.querySelector('a').innerHTML == e.target.innerHTML ? 'add' : 'remove']('nav-li--active'));
}

function showOrderTab() {
    document.querySelector('.order').classList.add('active-tab');
    ['home', 'meals'].forEach(tab => document.querySelector(`.${tab}`).classList.remove('active-tab'));
    orderBtnDiv.classList.add('hidden');

    // Set active tab link to order
    navLi.forEach(li => li.classList[li.querySelector('a').innerHTML == 'order' ? 'add' : 'remove']('nav-li--active'));
}


// DOM
init();

const nav = document.querySelector('nav');
const navLi = document.querySelectorAll('nav li');
const orderBtnDiv = document.querySelector('.btn-div');
const orderBtn = document.querySelector('.btn-div > button');

nav.addEventListener('click', changeTab);
orderBtn.addEventListener('click', showOrderTab);
