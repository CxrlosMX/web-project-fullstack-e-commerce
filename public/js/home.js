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
    },
    createFooter = () => {
        let footer = d.querySelector("footer");
        footer.innerHTML = `
        <div class="footer-content">
        <img src="img/light-logo.png" alt="logo" class="logo">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">woman</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>

    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur, dolores, illum
        laboriosam repellat, accusantium quam odio eos suscipit doloremque est consequuntur mollitia dolor
        dolore fuga quisquam numquam dolorum! Consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla nemo laudantium odio ut animi ex iusto reprehenderit dolore, fuga recusandae, officiis non,
        cupiditate voluptatem labore quo repudiandae? Doloribus, voluptate ducimus?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>

        
        `;
    }

createNav();
createFooter();

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

