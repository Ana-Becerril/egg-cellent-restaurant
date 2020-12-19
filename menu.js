function menu(){

    const menuContainer=document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuLeft=document.createElement("div");
    menuLeft.classList.add("menu-left");

    const menuMiddle=document.createElement("div");
    menuMiddle.classList.add("menu-middle");

    const menuStarters=document.createElement("div")
    menuStarters.classList.add("menu-starters");
    const textStarters=document.createElement("span")
    textStarters.innerHTML="Starters"
    textStarters.classList.add("txt-starters");
    menuStarters.appendChild(textStarters)
    
    const menuSpecials=document.createElement("div")
    menuSpecials.classList.add("menu-specials");
    const textSpecials=document.createElement("span")
    textSpecials.innerHTML="Specials"
    textSpecials.classList.add("txt-specials");
    menuSpecials.appendChild(textSpecials);
    
    const menuDrinks=document.createElement("div")
    menuDrinks.classList.add("menu-drinks");
    const textDrinks=document.createElement("span");
    textDrinks.innerHTML="Drinks"
    textDrinks.classList.add("txt-drinks");
    menuDrinks.appendChild(textDrinks);

    menuMiddle.append(menuStarters, menuSpecials, menuDrinks)

    const menuRight=document.createElement("div");
    menuRight.classList.add("menu-right");

    menuContainer.append(menuLeft,menuMiddle, menuRight);


return menuContainer;

}
export default menu;