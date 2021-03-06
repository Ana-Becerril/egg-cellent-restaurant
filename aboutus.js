import github from    './src/github.svg'
import linkedin from './src/linkedin.svg'
import twitter from './src/twitter.svg'

function aboutus(){

    const aboutContainer=document.createElement("div");
    aboutContainer.classList.add("about-container");

    const headerAbout=document.createElement("div");
    headerAbout.classList.add("header-about");
    
    const tittleAbout=document.createElement("div");
    tittleAbout.innerHTML="MADE WITH LOTS OF LOVE (AND EGGS)"
    tittleAbout.classList.add("tittle-about");

    const aboutMe=document.createElement("div");
    aboutMe.innerHTML="HELLO, I'M ANA A FRONTEND DEVELOPER"
    aboutMe.classList.add("aboutme");

    const contactCotainer=document.createElement("div");
    contactCotainer.innerHTML="CONTACT ME AT"
    contactCotainer.classList.add("contact-container");

    const githubIcon=document.createElement("img");
    githubIcon.src=github;
    githubIcon.classList.add("github-icon");
    githubIcon.onclick= getGithub;
    
    const linkedinIcon=document.createElement("img");
    linkedinIcon.src=linkedin;
    linkedinIcon.classList.add("linkedin-icon");
    linkedinIcon.onclick= getLinkedIn;

    contactCotainer.append(githubIcon, linkedinIcon);
    headerAbout.append(tittleAbout, aboutMe, contactCotainer);

    const bodyAbout=document.createElement("div");
    bodyAbout.classList.add("body-about");

    aboutContainer.append(headerAbout, bodyAbout);

    return aboutContainer;

    function getGithub(){
        
    };

    function getLinkedIn(){
        window.location.href = 'https://www.linkedin.com/in/anabecbel/';
    };

}

export default aboutus;