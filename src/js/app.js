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

    let page = document.querySelector('body')
    if (page){
        let height = page.clientHeight
        console.log(height);
    }


    if (window.innerWidth > 992) {
        let burger = document.querySelector('.hamburger');
        let megaLinks = document.querySelectorAll('.mega-menu__link');
        let megaSubLinks = document.querySelectorAll('.mega-menu__sublink');
        let megaClose = document.querySelector('.mega-block__close');
        let offsetLeft = burger.getBoundingClientRect().left
        let burgerWidth = burger.clientWidth

        if (megaLinks) {
            offsetLeft = offsetLeft + (burgerWidth / 3)
            megaLinks.forEach(megaLink => {
                megaLink.style.paddingLeft = `${offsetLeft}px`;
            })
            megaClose.style.paddingLeft = `${offsetLeft}px`;
            megaSubLinks.forEach(megaSubLink => {
                megaSubLink.style.paddingLeft = `${offsetLeft + 20}px`;
            })
        }
    }

    let burgers = document.querySelectorAll('.hamburger');
    let menu = document.querySelector('.mega-block');
    let closeMega = document.querySelector('.mega-block .close');

    if (burgers) {
        burgers.forEach(burger => {
            burger.addEventListener('click', () => {
                menu.classList.add('active');
                document.body.style.overflow = "hidden";
            })
        })
    }

    if (closeMega) {
        closeMega.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = "visible";
        })
    }


    let trigger = document.querySelector('.trigger');
    let mobileMenu = document.querySelector('.mobile');
    let closeMenu = document.querySelector('.mobile .close');

    if (trigger) {
        trigger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = "hidden";
        })
    }
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = "visible";
        })
    }


    let parentLinks = document.querySelectorAll('.mega-menu__item--parent .mega-menu__link')
    if (parentLinks) {
        for (let i = 0; i < parentLinks.length; i++) {
            parentLinks[i].addEventListener('click', function (e) {
                if (!this.classList.contains('active')) {
                    e.preventDefault()
                    let activeParentLink = document.querySelector('.mega-menu__item--parent .mega-menu__link.active')
                    if (activeParentLink) {
                        activeParentLink.classList.remove('active')
                        activeParentLink.nextElementSibling.style.maxHeight = `0px`
                    }
                    this.classList.add('active');
                    let maxHeight = this.nextElementSibling.querySelector('.mega-menu__subitems').clientHeight
                    let activeSubmenu = this.nextElementSibling
                    activeSubmenu.style.maxHeight = `${maxHeight}px`
                }
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

    if (window.innerWidth < 769) {
        let sliders = document.querySelectorAll('.equipment-update')
        if (sliders) {
            sliders.forEach(slider => {
                const swiper = new Swiper(slider, {
                    navigation: {
                        nextEl: slider.parentNode.querySelector('.equipment-update--next'),
                        prevEl: slider.parentNode.querySelector('.equipment-update--prev'),
                    },
                });
            })

        }
    }

    let slidersTwoPhoto = document.querySelectorAll('.different')
    if (slidersTwoPhoto) {
        slidersTwoPhoto.forEach(sliderTwoPhoto => {
            const swiper = new Swiper(sliderTwoPhoto, {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: sliderTwoPhoto.parentNode.querySelector('.different--next'),
                    prevEl: sliderTwoPhoto.parentNode.querySelector('.different--prev'),
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                }
            });
        })
    }

    let imagesSliders = document.querySelectorAll('.images-slider')
    if (imagesSliders) {
        imagesSliders.forEach(imagesSlider => {
            const swiper = new Swiper(imagesSlider, {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: imagesSlider.parentNode.querySelector('.images-bottom__arrow--next'),
                    prevEl: imagesSlider.parentNode.querySelector('.images-bottom__arrow--prev'),
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                }
            });
        })
    }

    let file = document.querySelector('.form-file input[type=file]')
    if (file) {
        file.addEventListener('change' , function (){
            let fileName = this.files[0].name;
            this.nextElementSibling.innerHTML = fileName
        })
    }

    let portfolioSliders = document.querySelectorAll('.portfolio-slider')
    if (portfolioSliders) {
        portfolioSliders.forEach(portfolioSlider => {
            const swiper = new Swiper(portfolioSlider, {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: portfolioSlider.parentNode.querySelector('.portfolio-slider__arrow--next'),
                    prevEl: portfolioSlider.parentNode.querySelector('.portfolio-slider__arrow--prev'),
                },
            });
        })
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
    // появление модалки вынести в отдельный файл который будет подклбючаться только на главной странице
    // if (modal){
    //     setTimeout(()=>{
    //         document.querySelector('.modal').classList.add('modal--active')
    //     }, 5000)
    // }

    let gallery = document.querySelectorAll("[data-fancybox]")
    if (gallery) {
        Fancybox.bind("[data-fancybox]", {});
    }
});
