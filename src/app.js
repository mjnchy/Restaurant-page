import { header, nav } from "./header/header";
import './reset.css';
import { homeTemplate } from "./home/home.js";
import { createMenu } from "./menu/menu.js";
import { createContact } from "./contact/contact";

const wrapper = document.querySelector('#wrapper');

wrapper.append(
    header(),
    nav()
);

function makePage() {
    const navList = document.querySelectorAll('.nav-item');

    window.onload = () => {
        wrapper.append(homeTemplate());
        navList[0].dataset.active = 'true';
    };

    function loadNewPage (e) {
        navList.forEach(li => {
            li.dataset.active = 'false';
        });
        
        wrapper.removeChild(wrapper.children[2]);
        e.target.parentElement.dataset.active = 'true';
    }

    window.addEventListener('click', (e) => {
        if (e.target.id === 'home') {
            loadNewPage(e);
            wrapper.append(homeTemplate());
        };

        if (e.target.id === 'menu') {
            loadNewPage(e);
            wrapper.append(createMenu());
        };

        if (e.target.id === 'contact') {
            loadNewPage(e);
            wrapper.append(createContact());
        };
    })
}

makePage();