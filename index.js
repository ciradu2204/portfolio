
const writeMyName = () => {
 document.getElementById("name").innerHTML="HI, I’M Cynthia Iradukunda";
}
writeMyName();

/** Track the next and prev project in desktop mode */
let firstProject = 0;
let secondProject = 1;
let thirdProject = 2;
/** Track the next and prev project in mobile mode */
let currentProject = 0;
let numberProject = document.getElementsByClassName("project").length;
const displayProjects = () => {

    if (window.innerWidth > 800) {
        document.getElementById(firstProject).style.display = "flex";
        document.getElementById(secondProject).style.display = "flex";
        document.getElementById(thirdProject).style.display = "flex";
    } else {
        document.getElementById(currentProject).style.display = "flex";
    }
}

document.getElementById("prevIcon").addEventListener('click', () => {

    if (firstProject > 0 && window.innerWidth > 800) {
        document.getElementById(thirdProject).style.display = "none";
        thirdProject = secondProject;
        secondProject = firstProject;
        document.getElementById(--firstProject).style.display = "flex";
        firstProject - 1;
    } else if (currentProject > 0 && window.innerWidth < 800) {
        document.getElementById(currentProject).style.display = "none";
        document.getElementById(--currentProject).style.display = "flex";
        currentProject - 1;
    }

})


document.getElementById("nextIcon").addEventListener('click', () => {

    if (thirdProject < numberProject - 1 && window.innerWidth > 800) {
        document.getElementById(firstProject).style.display = "none";
        firstProject = secondProject;
        secondProject = thirdProject;
        document.getElementById(++thirdProject).style.display = "flex";
        thirdProject + 1;
    } else if (currentProject < numberProject - 1 && window.innerWidth < 800) {
        console.log("yess");
        document.getElementById(currentProject).style.display = "none";
        document.getElementById(++currentProject).style.display = "flex";
        currentProject + 1;
    }

})




displayProjects();


window.addEventListener("scroll", (event) => {
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#navBarContainer div a");
    let scroll = this.scrollY;
    if (scroll > 0) {
        document.getElementById("logo").style.display = "block";
    }else{
        document.getElementById("logo").style.display = "none";

    }

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop);
        console.log(pageYOffset);
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

document.getElementById("arrowDown").addEventListener('click', (event) =>{
 event.pageY = 0;     
})

