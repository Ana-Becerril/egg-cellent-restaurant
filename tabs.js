function tabs(){

const tabsContainer=document.createElement("div");
tabsContainer.classList.add("tabs-container");

const homeTab=document.createElement("div");
homeTab.innerHTML="HOME"
homeTab.classList.add("home-tab");

const menuTab=document.createElement("div");
menuTab.innerHTML="MENU"
menuTab.classList.add("menu-tab");

const shopTab=document.createElement("div");
shopTab.innerHTML="SHOP"
shopTab.classList.add("shop-tab");

const aboutUsTab=document.createElement("div");
aboutUsTab.innerHTML="ABOUT US"
aboutUsTab.classList.add("aboutUs-tab");

tabsContainer.append(homeTab, menuTab, shopTab, aboutUsTab);
return tabsContainer;
}

export default tabs;