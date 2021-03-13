import './style.css';
import tabs from "../tabs"
import home from "../home"
import Image from './home-image.jpg'
import shopImage from './shop-image.jpg';
import aboutusImage from './aboutus.jpg';

const parent=document.getElementById("parent")
parent.append(tabs(), home());

const myImage = document.createElement("img");
myImage.src = Image;

const myImageTwo = document.createElement("img");
myImageTwo.src= shopImage;

const myImageThree = document.createElement("img");
myImageThree.src= aboutusImage;

//element.appendChild(myImage);
