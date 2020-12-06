function tabs(){

const tabsContainer=document.createElement("div");
tabsContainer.classList.add("tabs-container");

const homeTab=document.createElement("div");
homeTab.innerHTML="Home"
homeTab.classList.add("home-tab");

const menuTab=document.createElement("div");
menuTab.innerHTML="Menu"
menuTab.classList.add("menu-tab");

const shopTab=document.createElement("div");
shopTab.innerHTML="Shop"
shopTab.classList.add("shop-tab");

const aboutUsTab=document.createElement("div");
aboutUsTab.innerHTML="About Us"
aboutUsTab.classList.add("aboutUs-tab");

tabsContainer.append(homeTab, menuTab, shopTab, aboutUsTab);
return tabsContainer;


}

export default tabs;