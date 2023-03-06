const filterMenu = document.querySelectorAll('.dish');

document.querySelector('nav').addEventListener('click', event => {

    if (event.target.tagName !== 'BUTTON') return false;

    const filterClass = event.target.dataset['f'];
    
        filterMenu.forEach(elem => {

        const cls = elem.classList

        cls.remove('filter');

        if (!cls.contains(filterClass) && filterClass !== 'all') {
            cls.add('filter');
        }
    });

});




