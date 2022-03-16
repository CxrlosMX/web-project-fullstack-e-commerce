// NAV

const d = document,
    createNav = () => {
        const $nav = d.querySelector(".navbar");
        $nav.innerHTML = `
        <div class="nav">
        <img src="img/dark-logo.png" alt="Logo" class="brand-logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, products">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="img/user.png" alt="User"></a>
            <a href="#"><img src="img/cart.png" alt="Cart"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
    </ul>
        `
    }

createNav();

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

