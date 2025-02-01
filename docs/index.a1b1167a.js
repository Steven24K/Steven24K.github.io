const navbar = document.getElementById('sidebar');
const toggleNavbar = ()=>{
    if (navbar !== null) navbar.classList.toggle('open');
    const bars = document.getElementsByClassName('bar');
    for(let i = 0; i < bars.length; i++)bars[i].classList.toggle('cross');
};
const toggleCard = (id)=>{
    const card = document.getElementById(id);
    if (card) {
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
        card.classList.toggle('card-open');
        if (navbar && navbar.classList.contains('open')) toggleNavbar();
    }
};

//# sourceMappingURL=index.a1b1167a.js.map
