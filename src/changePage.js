import { content, currentPage } from "./index.js";
import aboutPage from "./aboutPage.js"
import { homePage } from "./homePage.js";
import contactPage from "./contactPage.js";
import orderPage from "./orderPage.js";

export default function changePage(e) {
    let btnName = e.view.document.activeElement.innerText
    let contentChild = content.childNodes[0];
    let btn = e.view.document.activeElement

    let sibling = btn.parentNode.firstChild

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== btn) {
            sibling.classList.remove("active-btn")
        } else
        {
            btn.classList.add("active-btn");

        }
        sibling = sibling.nextSibling;
    }

    if (btnName === "About")
    {        
        content.replaceChild(aboutPage(),contentChild)
    } else if (btnName === "Home")
    {

        content.replaceChild(homePage(),contentChild)
    } else if (btnName === "Contact")
    {
            content.replaceChild(contactPage(),contentChild)
    } else
    {
        content.replaceChild(orderPage(),contentChild)

    }
    // console.log(e.view.document.activeElement.innerText)
    }