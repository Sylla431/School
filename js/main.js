
// testimonial section silder
window.onload = function(){
    function testimonialSlider(){
     const carouselOne = document.getElementById('carouselOne');
        if(carouselOne){  
            carouselOne.addEventListener('slid.bs.carousel', function () {
                const activeItem = this.querySelector(".active");
                console.log(activeItem);
                 document.querySelector(".js-testimonial-img").src = 
                 activeItem.getAttribute("data-js-testimonial-img");
                  })
        }
    }
    testimonialSlider();
};
 