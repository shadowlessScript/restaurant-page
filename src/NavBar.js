import { content, currentPage } from "./index.js";
import aboutPage from "./aboutPage.js"
import changePage from "./changePage.js";

export default function navBar() {
    const nav = document.createElement("div")
    nav.classList.add("nav")
    const homeLink = document.createElement("button")
    const aboutLink = document.createElement("button")
    const orderLink = document.createElement("button")
    const contactLink = document.createElement("button")
    homeLink.textContent = "Home"
    homeLink.classList.add("home-btn", "active-btn")
    aboutLink.textContent = "About"
    aboutLink.classList.add("about-btn")
    contactLink.textContent = "Contact"
    contactLink.classList.add("contact-btn")
    orderLink.textContent = "Order"
    orderLink.classList.add("order-btn")
    nav.append(homeLink, aboutLink, contactLink, orderLink)
    
    // document.querySelectorAll("button").forEach(
    //     (btn) => {
    //         btn.addEventListener("click", changePage)
    //     }
    // );
    aboutLink.addEventListener("click", changePage
     
    )
    homeLink.addEventListener("click", changePage)
    contactLink.addEventListener("click", changePage)
    orderLink.addEventListener("click", changePage)
    return nav
}