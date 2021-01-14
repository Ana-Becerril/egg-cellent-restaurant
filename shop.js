function shop(){
    const shopContainer=document.createElement("div");
    shopContainer.classList.add("shop-container");

    const headerShop=document.createElement("div");
    headerShop.classList.add("header-shop");

    const tittleShop=document.createElement("div");
    tittleShop.innerHTML="Enjoy!"
    tittleShop.classList.add("shop-tittle")
    const iconCartContainer=document.createElement("div");
    iconCartContainer.classList.add("icon-cart-container");

    headerShop.append(tittleShop,iconCartContainer);

    const bodyShop=document.createElement("div");
    bodyShop.classList.add("body-shop");
    const itemsParent=document.createElement("div");
    itemsParent.classList.add("items-parent")
    const itemOneShop=document.createElement("div");
    itemOneShop.classList.add("item-one-shop");
    itemOneShop.append(addElementsToListShop("LOOKING 4 EGGS", "4 eggs (to choose), 4 breads, 4 drinks", "ADD TO CART"));
    const itemTwoShop=document.createElement("div");
    itemTwoShop.classList.add("item-two-shop");
    itemTwoShop.append(addElementsToListShop("FOR SHARE", "2 eggs (to choose), 2 breads, 2 drinks", "ADD TO CART"));
    const itemThreeShop=document.createElement("div");
    itemThreeShop.classList.add("item-three-shop");
    itemThreeShop.append(addElementsToListShop("ÑAM", "1 eggs (to choose), 1 breads, 1 drink", "ADD TO CART"));
    itemsParent.append(itemOneShop,itemTwoShop,itemThreeShop);
    bodyShop.appendChild(itemsParent);
    shopContainer.append(headerShop, bodyShop);

    function addElementsToListShop(tittle, description,button){
        const optionShop=document.createElement("div")
        optionShop.classList.add("option-shop")
        const tittleListShop=document.createElement("div")
        tittleListShop.innerHTML=tittle;
        tittleListShop.classList.add("options-tittle-shop");
        const listShop=document.createElement("div");
        listShop.innerHTML=description;
        listShop.classList.add("options-description-shop");
        const buttonShop=document.createElement("button");
        buttonShop.innerHTML=button;
        buttonShop.classList.add("button-shop");
        optionShop.append(tittleListShop,listShop,buttonShop);
        return optionShop;
    }

    return shopContainer;

}

export default shop;