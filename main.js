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
function whiteSection(navElement){
    navElement.style.backgroundColor = 'white';
    const texts = document.getElementsByClassName('text');
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.color = 'black';
    }
}
function blackSection(navElement){
    const texts = document.getElementsByClassName('text');
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.color = 'white';
    }
}
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    console.log(scroll);
    const currentSection = getCurrentSection(scroll);
    console.log(currentSection);
    const navElement = document.getElementById('nav');
    if (currentSection === 'home') {
        blackSection();
        navElement.style.backgroundColor = '#0099ff';
    } else if (currentSection === 'projects' || currentSection === 'projects_wave') {
        whiteSection(navElement);
    } else if (currentSection === 'contact' || currentSection === 'contact_wave') {
        whiteSection(navElement);
    } else if(currentSection === 'about' || currentSection === 'about_wave'){
        navElement.style.backgroundColor = '#ff5500';
        blackSection();
    }
    navElement.style.transition = 'background-color 0.3s ease-in-out';
});