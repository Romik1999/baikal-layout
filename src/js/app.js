document.addEventListener('DOMContentLoaded', function () {

    let scrollpos = window.scrollY
    const header = document.querySelector(".header")
    const mobHeader = document.querySelector(".header-mob")
    const scrollChange = 50

    window.addEventListener('scroll', function () {
        scrollpos = window.scrollY;

        if (scrollpos >= scrollChange) {
            header.classList.add("bg-dark")
            mobHeader.classList.add("bg-dark")
        } else {
            header.classList.remove("bg-dark")
            mobHeader.classList.remove("bg-dark")
        }

    })


    if (window.innerWidth > 1920) {
        let burger = document.querySelector('.hamburger');
        let megaLinks = document.querySelectorAll('.mega-menu__link');
        let megaSubLinks = document.querySelectorAll('.mega-menu__subitems');
        let megaClose = document.querySelector('.mega-block__close');
        let offsetLeft = burger.getBoundingClientRect()
        if (megaLinks) {
            megaLinks.forEach(megaLink => {
                megaLink.style.paddingLeft = `${offsetLeft.left}px`;
            })
            megaClose.style.paddingLeft = `${offsetLeft.left}px`;
            megaSubLinks.forEach(megaSubLink => {
                let offset = offsetLeft.left + 20
                megaSubLink.style.paddingLeft = `${offset}px`;
            })
        }
    }

    let burgers = document.querySelectorAll('.hamburger');
    let menu = document.querySelector('.mega-block');
    let close = document.querySelector('.close');

    if (burgers) {
        burgers.forEach(burger => {
            burger.addEventListener('click', () => {
                menu.classList.add('active');
                document.body.style.overflow = "hidden";
            })
        })
    }

    if (close) {
        close.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = "visible";
        })
    }


    let trigger = document.querySelector('.trigger');
    let mobileMenu = document.querySelector('.header-bottom');
    if (trigger) {
        trigger.addEventListener('click', () => {
            if (trigger.classList.contains('active')) {
                trigger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = "visible";
            } else {
                trigger.classList.add('active');
                mobileMenu.classList.add('active');
                document.body.style.overflow = "hidden";
            }
        })
    }


    let parentLinks = document.querySelectorAll('.mega-menu__item--parent .mega-menu__link')
    if (parentLinks) {
        for (let i = 0; i < parentLinks.length; i++) {
            parentLinks[i].addEventListener('click', function () {
                let activeParentLink = document.querySelector('.mega-menu__item--parent .mega-menu__link.active')
                if (activeParentLink) {
                    activeParentLink.classList.remove('active')
                    activeParentLink.nextElementSibling.style.maxHeight = `0px`
                }
                this.classList.add('active');
                let maxHeight = this.nextElementSibling.querySelector('.mega-menu__subitems').clientHeight
                let activeSubmenu = this.nextElementSibling
                activeSubmenu.style.maxHeight = `${maxHeight}px`
            })
        }
    }


    let faqsTop = document.querySelectorAll('.faq-item__top');
    if (faqsTop) {
        faqsTop.forEach(faqTop => {
            faqTop.addEventListener('click', () => {
                let text = faqTop.parentNode.parentNode.querySelector('.faq-item__bottom')
                let height = faqTop.parentNode.parentNode.querySelector('.faq-item__text').clientHeight

                if (faqTop.classList.contains('active')) {
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
