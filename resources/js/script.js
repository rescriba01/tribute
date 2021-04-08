import imageObjectArray from "./components/data";
//TODO: Figure out how to loop through image object array and tie the generation of a new figure to the click event of the timeline
/**
 * addFigure function
 * - Receives dataObj
 * - Creates <figure> <img> <figcaption>
 * - Returns <figure>
 */
const replaceFigure = (dataObj) => {
    let newFigure = document.createElement("figure");
    let newImg = document.createElement("img");
    newImg.setAttribute("src", dataObj.image);
    newImg.setAttribute("alt", "");
    let newDesc = document.createElement("figcaption");
    newDesc.innerText = dataObj.description;
    newFigure.append(newImg, newDesc);
    return newFigure;
};



// const createImage = function () {
//     let tributeImg = document.querySelector("#img-div");
//
// }