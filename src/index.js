import './style.css';
import tabs from "../tabs"
import home from "../home"
import Image from './home-image.jpg';
import menu from '../menu';
import shop from '../shop'
import shopImage from './shop-image.jpg';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


const parent=document.getElementById("parent")
parent.append(tabs(), shop());

const myImage = document.createElement("img");
myImage.src = Image;

const myImageTwo = document.createElement("img");
myImageTwo.src= shopImage;

element.appendChild(myImage);
