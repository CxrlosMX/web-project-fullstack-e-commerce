const $productContainer = [...d.querySelectorAll(".product-container")], $nxtBtn = [...d.querySelectorAll(".nxt-btn")],
    $preBtn = [...d.querySelectorAll(".pre-btn")];

$productContainer.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;
    $nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    });
    $preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    });

});