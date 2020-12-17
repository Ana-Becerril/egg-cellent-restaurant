function home (){

const homeContainer=document.createElement("div");
homeContainer.classList.add("home-container");

const homeRight=document.createElement("div");
homeRight.classList.add("home-right");

const homeTittle=document.createElement("div");
homeTittle.innerHTML="Eggcellent"
homeTittle.classList.add("home-tittle");
homeRight.appendChild(homeTittle)


const homeLeft=document.createElement("div");
homeLeft.classList.add("home-left");

homeContainer.append(homeRight, homeLeft);
return homeContainer;


}

export default home;