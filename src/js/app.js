document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('.hamburger');
    let mobile = document.querySelector('.header-menu');
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobile.classList.remove('active');
            document.body.style.overflow = "visible";
        } else {
            burger.classList.add('active');
            mobile.classList.add('active');
            document.body.style.overflow = "hidden";
        }
    });

    let faqsTop = document.querySelectorAll('.faq-item__top');
    if (faqsTop) {
        faqsTop.forEach(faqTop => {
            faqTop.addEventListener('click', () => {
                let text = faqTop.parentNode.parentNode.querySelector('.faq-item__bottom')
                let height = faqTop.parentNode.parentNode.querySelector('.faq-item__text').clientHeight

                if (faqTop.classList.contains('active')){
                    faqTop.classList.remove('active');
                    console.log(height);
                    text.style.maxHeight = `0px`;
                } else {
                    faqTop.classList.add('active');
                    console.log(height);
                    text.style.maxHeight = `${height}px`;
                }
            })
        });
    }

    // функция для модалки

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
            modal_ = document.querySelector(modal),
            modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });

            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal__container')) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal', 'modal--active', '[data-modal]', '.modal__close');
});
