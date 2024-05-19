
// ! slider plugin
$(document).ready()
{
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        rtl: true,
        margin: 20,
        nav: true,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items:5
            },
            1480: {
                items:7
            }
        }
    });



}

// ! change img in product
function changeImg(value){
    const imgss=document.getElementById("imgChange");
    imgss.setAttribute("src",value);


}














