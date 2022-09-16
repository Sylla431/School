
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

// course preview video
function coursePreviewVideo(){
    const coursePreviewVideo = document.querySelector(".js-course-preview-modal");
    if(coursePreviewVideo){
        coursePreviewVideo.addEventListener("shown.bs.modal", function(){
            this.querySelector(".js-course-preview-video").play();
            this.querySelector(".js-course-preview-video").currentTime=0;
        });
        coursePreviewVideo.addEventListener("hide.bs.model" ,function(){
            this.querySelector(".js-course-preview-video").pause();
            
        })
    }
}
coursePreviewVideo()
 