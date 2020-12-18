function menu(){

    const menuContainer=document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuLeft=document.createElement("div");
    menuLeft.classList.add("menu-left");

    const menuMiddle=document.createElement("div");
    const menuStarters=document.createElement("div")
    menuMiddle.classList.add("menu-middle");
    menuStarters.innerHTML="STARTERS"
    menuStarters.classList.add("menu-starters");
    const menuSpecials=document.createElement("div")
    menuSpecials.innerHTML="SPECIALS"
    menuSpecials.classList.add("menu-specials");
    const menuDrinks=document.createElement("div")
    menuDrinks.innerHTML="DRINKS"
    menuDrinks.classList.add("menu-drinks")

    menuMiddle.append(menuStarters, menuSpecials, menuDrinks)

    const menuRight=document.createElement("div");
    menuRight.classList.add("menu-right");

    menuContainer.append(menuLeft,menuMiddle, menuRight);


return menuContainer;

}
export default menu;