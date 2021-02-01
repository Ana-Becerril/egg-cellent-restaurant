import menu from './menu';
import shop from './shop';
import aboutus from './aboutus';
import home from './home';

function tabs(){

    function tabBuilder(tab){
        let parent= document.getElementById("parent");
         parent.innerHTML="";
         parent.append(tabs(),tab);
     }

const tabsContainer=document.createElement("div");
tabsContainer.classList.add("tabs-container");

const homeTab=document.createElement("div");
homeTab.innerHTML="HOME"
homeTab.classList.add("home-tab");
homeTab.classList.add("tabs-test");
homeTab.addEventListener("click", ()=>{tabBuilder(home())});

const menuTab=document.createElement("div");
menuTab.innerHTML="MENU"
menuTab.classList.add("menu-tab");
menuTab.classList.add("tabs-test");
menuTab.addEventListener("click", ()=>{tabBuilder(menu())});


const shopTab=document.createElement("div");
shopTab.innerHTML="SHOP"
shopTab.classList.add("shop-tab");
shopTab.classList.add("tabs-test");
shopTab.addEventListener("click", ()=>{tabBuilder(shop())});

const aboutUsTab=document.createElement("div");
aboutUsTab.innerHTML="ABOUT US"
aboutUsTab.classList.add("aboutUs-tab");
aboutUsTab.classList.add("tabs-test");
aboutUsTab.addEventListener("click", ()=>{ tabBuilder(aboutus())});

tabsContainer.append(homeTab, menuTab, shopTab, aboutUsTab);


return tabsContainer;
}

export default tabs;