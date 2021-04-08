// TODO:Create a function that changes the image to coincide with the selection on the timeline

/**
 * Dynamically change the image to coincide with a the checking of one of the radio buttons.
 */

// Image class
class Image {
    constructor(
        // Defines parameters:
        src,
        alt,
    ) {
    }
}


/**
 * addFigure function
 * - Receives dataObj
 * - Creates <figure> <img> <figcaption>
 * - Returns <figure>
 */
const addFigure = (dataObj) => {
    let newFigure = document.createElement("figure");
    let newImg = document.createElement("img");
    newImg.setAttribute("src", dataObj.image);
    newImg.setAttribute("alt", "");
    let newDesc = document.createElement("figcaption");
    newDesc.innerText = dataObj.description;
    newFigure.append(newImg, newDesc);
    return newFigure;
};

const updateImage = function () {
    let tributeImg = document.querySelector("#img-div");

}