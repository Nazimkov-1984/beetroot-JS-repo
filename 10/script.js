window.addEventListener('DOMContentLoaded', function() {

    
    
	let tabs = document.querySelectorAll('.link-wrapper-link'),
		tabsContent = document.querySelectorAll('.main-items'),
        tabsParent = document.querySelector('.tab-link'),
        linkwrapper = document.querySelectorAll('.link__wrapper');
        
        function hideTabContent () {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        } );
        tabs.forEach( item => {
            item.classList.remove('link-wrapper-link-active');
        });
        linkwrapper.forEach( item => {
            item.classList.remove('link-wrapper-active');
        });
    }

    function showTabContent (i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('link-wrapper-link-active');
        linkwrapper[i].classList.add('link-wrapper-active');

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener ('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('link-wrapper-link')) {
            tabs.forEach ((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});