var swiper = new Swiper(".mySwiper", {

    loop: false,
    autoplay: false,
    autoplayTimeout: 1000,
    atoplayHoverPause: true,
    spaceBetween: 0,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // slidesPerView: "auto",
    // breakpoints: {
    //     "@0.00": {
    //       slidesPerView: 1,
    //     },
    //     "@0.75": {
    //       slidesPerView: 2,
    //     },
    //     "@1.00": {
    //       slidesPerView: 3,
    //     },
    //     "@1.50": {
    //       slidesPerView: 4,
    //     },
  
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    }
});

function show() {
    invoice = document.getElementById('invoice_box');
    invoice.style.display = 'block';
    
}

function hide() {
    invoice = document.getElementById('invoice_box');
    invoice.style.display = 'none';
}