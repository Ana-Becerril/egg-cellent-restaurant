function shop(){
    const shopContainer=document.createElement("div");
    shopContainer.classList.add("shop-container");

    const headerShop=document.createElement("div");
    headerShop.classList.add("header-shop");
    const tittleShop=document.createElement("div");
    tittleShop.innerHTML="Enjoy!"
    tittleShop.classList.add("shop-tittle")
    headerShop.appendChild(tittleShop);

    const bodyShop=document.createElement("div");
    bodyShop.classList.add("body-shop");


    shopContainer.append(headerShop, bodyShop);
    return shopContainer;

}

export default shop;