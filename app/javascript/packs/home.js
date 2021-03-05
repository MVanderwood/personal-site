// (() => {
//     let slideIndex;

//     // Controls
//     const incrementSlide = () => {
//         slideIndex += 1;
//         showSlides(slideIndex);
//     };

//     const decrementSlide = () => {
//         slideIndex -= 1;
//         showSlides(slideIndex);
//     };

//     const setSlide = (i) => {
//         if (i > 3 || i < 0) { throw RangeError; }
//         slideIndex = i;

//         showSlides(slideIndex);
//     };

//     function showSlides(n) {
//         console.log("showing the mfing slide");
//         let index;
//         let slides = document.getElementsByClassName("slide");
//         let dots   = document.getElementsByClassName("dot");

//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1)             {slideIndex = slides.length}

//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }

//         slides[slideIndex - 1].style.display = "block";
//         dots[slideIndex - 1].className += " active";
//     }

//     window.incrementSlide = incrementSlide;
//     window.decrementSlide = decrementSlide;
//     window.setSlide       = setSlide;
//     window.addEventListener("load", () => {
//         slideIndex = 1;
//         showSlides(slideIndex);
//     });
// })()
