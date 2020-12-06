function home (){

const homeContainer=document.createElement("div");
homeContainer.classList.add("home-container");

const homeRight=document.createElement("div");
homeRight.classList.add("home-right");

const homeLeft=document.createElement("div");
homeLeft.classList.add("home-left");

const homeTittle=document.createElement("div");
homeTittle.classList.add("home-tittle");

homeContainer.append(homeRight, homeLeft, homeTittle);
return homeContainer;


}

export default home;