import './style.css';
import tabs from "../tabs"
import home from "../home"
import Image from './home-image.jpg';
import menu from '../menu';
import shop from '../shop'
import shopImage from './shop-image.jpg';


const parent=document.getElementById("parent")
parent.append(tabs(), shop());

const myImage = document.createElement("img");
myImage.src = Image;

const myImageTwo = document.createElement("img");
myImageTwo.src= shopImage;

element.appendChild(myImage);
