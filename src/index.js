import './style.css';
import tabs from "../tabs"
import home from "../home"
import Image from './home-image.jpg';
import menu from '../menu';


const parent=document.getElementById("parent")
parent.append(tabs(), menu());

const myImage = document.createElement("img");
myImage.src = Image;

element.appendChild(myImage);
