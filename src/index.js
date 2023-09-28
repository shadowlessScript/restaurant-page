import { homePage } from "./homePage.js";
import './style.css';
import navBar from "./NavBar.js"
import changePage from "./changePage.js";

export let content = document.createElement("div");
content.classList.add("content");

export let currentPage = {
    page: homePage(),

    get() {
        return page
    },
    set (newPage) {
        this.page = newPage
    }
}
function component() {    
   
    content.append(currentPage.page)   
    
    
    return content
}

document.body.append(navBar(),component())