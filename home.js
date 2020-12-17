function home (){

const homeContainer=document.createElement("div");
homeContainer.classList.add("home-container");

const homeRight=document.createElement("div");
homeRight.classList.add("home-right");

const homeTittle=document.createElement("div");
homeTittle.innerHTML="Eggcellent"
homeTittle.classList.add("home-tittle");
const homeSlogan=document.createElement("div")
homeSlogan.innerHTML="MADE WITH LOTS OF... LOVE"
homeSlogan.classList.add("home-slogan");
homeRight.append(homeTittle, homeSlogan)


const homeLeft=document.createElement("div");
homeLeft.classList.add("home-left");

homeContainer.append(homeRight, homeLeft);
return homeContainer;


}

export default home;