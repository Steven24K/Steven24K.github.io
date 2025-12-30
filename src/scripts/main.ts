const toggleNavbar = () => {
    const navbar = document.getElementById('sidebar');

    if (navbar !== null) {
        navbar.classList.toggle('open')
    }

    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle('cross')
    }
}

const toggleCard = (id: string) => {
    const navbar = document.getElementById('sidebar');
    const card = document.getElementById(id)
    if (card) {
        window.scrollTo({ behavior: 'smooth', left: 0, top: 0 })
        card.classList.toggle('card-open')
        document.location.hash = id
        if (navbar && navbar.classList.contains('open')) {
            toggleNavbar()
        }
    }
}

const id = document.location.hash.replace('#', '');
if (id) {
    toggleCard(id)
}