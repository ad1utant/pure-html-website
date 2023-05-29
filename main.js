
function getCurrentSection(scrollPosition){
    const sections = document.querySelectorAll("section");
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            return section.id;
        }
    }
}


window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    console.log(scroll);
    const currentSection = getCurrentSection(scroll);
    console.log(currentSection);
    const navElement = document.getElementById('nav');
    if (currentSection === 'home') {
        navElement.style.backgroundColor = '#0099ff';
    } else if (currentSection === 'projects' || currentSection === 'projects_wave') {
        navElement.style.backgroundColor = 'white';
    } else if (currentSection === 'contact' || currentSection === 'contact_wave') {
        navElement.style.backgroundColor = 'white';

    } else if(currentSection === 'about' || currentSection === 'about_wave'){
        navElement.style.backgroundColor = '#ff5500';
    }
    navElement.style.transition = 'background-color 0.3s ease-in-out';
});