const productImages = document.querySelectorAll(".product-images img"),
    productImageSlide = document.querySelector(".image-slider");

let activeImgeSlide = 0;
productImages.forEach((item, i) => {
    item.addEventListener("click", () => {
        productImages[activeImgeSlide].classList.remove("active");
        item.classList.add("active");
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImgeSlide = i;
        // console.log(i);
    })
});


// toggle size buttons
const sizeBtns = document.querySelectorAll(".size-radio-btn");
let checkedBtn = 0;
sizeBtns.forEach((item, i) => {
    item.addEventListener("click", () => {
        sizeBtns[checkedBtn].classList.remove("check");
        console.log(item);
        item.classList.add("check")
        checkedBtn = i;
    })

});