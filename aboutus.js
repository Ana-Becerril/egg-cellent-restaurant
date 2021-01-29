import github from    './src/github.svg'
import linkedin from './src/linkedin.svg'
import twitter from './src/twitter.svg'

function aboutus(){

    const aboutContainer=document.createElement("div");
    aboutContainer.classList.add("about-container");

    const headerAbout=document.createElement("div");
    headerAbout.classList.add("header-about");
    
    const tittleAbout=document.createElement("div");
    tittleAbout.innerHTML="Made with lots of love (and eggs)"
    tittleAbout.classList.add("tittle-about");

    const aboutMe=document.createElement("div");
    aboutMe.innerHTML="Hello, I'm Ana Frontend Developer"
    aboutMe.classList.add("aboutme");

    const contactCotainer=document.createElement("div");
    contactCotainer.classList.add("contact-container");

    const githubIcon=document.createElement("img");
    githubIcon.src=github;
    githubIcon.classList.add("github-icon");
    
    const linkedinIcon=document.createElement("img");
    linkedinIcon.src=linkedin;
    linkedinIcon.classList.add("linkedin-icon");

    contactCotainer.append(githubIcon, linkedinIcon);
    headerAbout.append(tittleAbout, aboutMe, contactCotainer);

    const bodyAbout=document.createElement("div");
    bodyAbout.classList.add("body-about");

    aboutContainer.append(headerAbout, bodyAbout);

    return aboutContainer;
}

export default aboutus;