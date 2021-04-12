import imageObjectArray from "../js/components/data.js";

// Get the header
const header = document.querySelector("header");

// Get the current figure element
const original = document.querySelector("#img-div");

// Map through image array and create a new array
const figureContent = imageObjectArray.map((image) => {
    // Image should now hold single Image object

    // Create a new figure
    let tributeFigure = document.createElement("figure");
    tributeFigure.classList.add("tribute__figure");
    // Set figure ID to the image.id property
    tributeFigure.setAttribute("id", image.id);

    //Create a img element to populate the figure
    let newImg = document.createElement("img");
    newImg.setAttribute("src", image.src);
    newImg.setAttribute("alt", image.alt);
    // Create figcaption element to populate the figure
    let newDesc = document.createElement("figcaption");
    newDesc.innerText = image.alt;

    // Add created elements to the figure
    tributeFigure.append(newImg, newDesc);

    // Return the new figure to the figureContent array
    return tributeFigure;

});

//TODO: Get figure location. Figure out how to add the event listener and decide which image goes with which radio button press
// this is the reference I am using: Downloads/javascript-essential-training-2832077-main/08_16/script.js

const switchFigure = () => {
    // Get all the input elements within the timeline element as a Node List
    const radio = document.querySelectorAll("input");
    // Create an array from the Node list using Array.from() method https://attacomsian.com/blog/javascript-convert-nodelist-to-array
    const radioArr = Array.from(radio)

    radioArr.map((input) => {
        // each radio button should now be mapped to input
        console.log("made it before the listener");
        input.addEventListener("click", (event) => {
            // Check the id of the element
            let hook = input.getAttribute(input.id);
            console.log(hook);
        });
    });
};

switchFigure();