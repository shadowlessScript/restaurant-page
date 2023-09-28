import aboutImage from "./aboutImage.jpg";
import { content } from "./index.js";


export default function aboutPage() {
    const image = document.createElement("img");
    image.src = aboutImage;
    image.classList.add("about-image")
    // content.append(image)
    const about = document.createElement("div");
    about.classList.add("about")
    // about.textContent = "About Page"   
    

    const aboutText = document.createElement("div");
    aboutText.classList.add("about-text")
    aboutText.innerHTML = `<h3>Welcome to BrewTech Café</h3>

<p>Founded in 2022, BrewTech Café is a haven for coffee enthusiasts, tech-savvy individuals, and bookworms alike. With our unique blend of delicious beverages, cozy atmosphere, and cutting-edge amenities, we strive to create the perfect space for work, relaxation, and community.

The BrewTech Experience

At BrewTech Café, we understand that your coffee experience extends beyond the simple act of sipping a cup of joe. That's why we are dedicated to providing an environment that caters to your needs and passions.</p>

<h3>Zen Area: Unleash Your Creativity</h3>

<p>Step into our Zen Area, a specially designated space reserved for customers seeking focus and tranquility. Whether you're a coder, a writer, or an avid reader, our Zen Area offers a serene and distraction-free zone where you can immerse yourself in your work or dive into the pages of your favorite book.</p>

<h3>Secure and High-Speed Connectivity</h3>

<p>Stay connected with our robust and secure WiFi network, designed to meet the demands of digital nomads and remote workers. Our reliable internet connection ensures that you can work, stream, or connect with friends and colleagues without interruption.</p>

<h3>Expansion Plans</h3>

<p>With the success and popularity of our flagship location, we are thrilled to announce our plans for expansion. BrewTech Café is determined to bring our unique experience to coffee lovers across Nairobi. Keep an eye out for our future branches, as we aim to create a network of welcoming spaces where people can gather, connect, and be inspired.</p>

<h4>Visit BrewTech Café Today</h4>

<p>Whether you're in search of exceptional coffee, a cozy place to work, or a spot to unwind with a good book, BrewTech Café is here to serve you. We invite you to join us in our mission to provide an exceptional café experience that combines the love of coffee with the power of technology.</p>

<i>BrewTech Café: Where Coffee Meets Innovation</i>`

    about.append(image,aboutText)
    return about
}

//Photo by <a href="https://unsplash.com/@subagjav?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rizky Subagja</a> on <a href="https://unsplash.com/photos/1k7TnX5GAww?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  