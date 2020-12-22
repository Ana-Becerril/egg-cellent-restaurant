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
    textStarters.innerHTML="[Starters]"
    textStarters.classList.add("txt-starters");
    const textStartersMenu=document.createElement("div");
    textStartersMenu.classList.add("txt-starters-menu");
    textStartersMenu.append(addElementsToList("Eggs Benedict","Toasted French bread, two poached eggs and ham served withour home made Hollandaise sauce. "), addElementsToList("Country Benedict","Toasted French bread, two poached eggs, sausage patties and our home made Hollandaise sauce"), addElementsToList("Eggs Blackstone","Toasted French bread, two poached eggs, bacon and our home made Hollandaise sauce"));
    menuStarters.append(textStarters,textStartersMenu)
    
    const menuSpecials=document.createElement("div")
    menuSpecials.classList.add("menu-specials");
    const textSpecials=document.createElement("span")
    textSpecials.innerHTML="[Specials]"
    textSpecials.classList.add("txt-specials");
    const textSpecialsMenu=document.createElement("div");
    textSpecialsMenu.classList.add("txt-specials-menu");
    textSpecialsMenu.append(addElementsToList("Eggs & Bravas","Two poached eggs over Spanish tapas-style roasted potatoes. Served with buttered toast."), addElementsToList("Nested Eggs","Two poached eggs nestled in dressed greens with buttered seedy sourdough toast"),addElementsToList("Eggcellents","House made turkey sausage, in medium egg, cheddar cheese and honey mustard aioli in a house made bailey biscuit"));

    menuSpecials.append(textSpecials, textSpecialsMenu);
    
    const menuDrinks=document.createElement("div")
    menuDrinks.classList.add("menu-drinks");
    const textDrinks=document.createElement("span");
    textDrinks.innerHTML="[Drinks]"
    textDrinks.classList.add("txt-drinks");
    const textDrinksMenu=document.createElement("div");
    textDrinksMenu.classList.add("txt-drinks-menu")
    textDrinksMenu.append(addElementsToList("Juice", "Orange, cononut, strawberry or blackberries"),addElementsToList("House made beer", ""), addElementsToList("Ice green tea","") );

    menuDrinks.append(textDrinks, textDrinksMenu);

    menuMiddle.append(menuStarters, menuSpecials, menuDrinks)

    const menuRight=document.createElement("div");
    menuRight.classList.add("menu-right");

    menuContainer.append(menuLeft,menuMiddle, menuRight);

    function addElementsToList(tittle, description){
        const option=document.createElement("div")
        option.classList.add("option")
        const tittleList=document.createElement("div")
        tittleList.innerHTML=tittle;
        tittleList.classList.add("options-tittle");
        const list=document.createElement("div");
        list.innerHTML=description;
        list.classList.add("options-description");
        option.append(tittleList,list);
        return option;
    }
return menuContainer;

}
export default menu;