import { header, nav } from "./header/header";
import './reset.css';
// import { homeTemplate } from "./home/home.js";
import { createMenu } from "./menu/menu.js";

const wrapper = document.querySelector('#wrapper');

wrapper.append(
    header(),
    nav(),
    createMenu().createMenuHeader(),
    createMenu().divMenu
);