import imageObjectArray from "../js/components/data.js";

const swapFigure = () => {

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
        newImg.classList.add("tribute__image");
        
        // Create figcaption element to populate the figure
        let newDesc = document.createElement("figcaption");
        newDesc.innerText = image.alt;
        newDesc.classList.add("tribute__caption");

        // Add created elements to the figure
        tributeFigure.append(newImg, newDesc);

        // Return the new figure to the figureContent array
        return tributeFigure;

    });

    // Create an array of the new figures
    const tributes = [...figureContent];


    // Get all the input elements within the timeline element as a Node List
    const radio = document.querySelectorAll("input");

    // Create an array from the Node list using Array.from() method https://attacomsian.com/blog/javascript-convert-nodelist-to-array
    const radioArr = [...radio];


    // Get original figure element
    let currentFig = document.querySelector("#img-div");


    // event listener for click
    function swapContentEvent() {
        for (let i = 0; i < radioArr.length; i++) {
            radioArr[i].addEventListener("click", function () {
                for (let j = 0; j < tributes.length; j++) {
                    let tributeId = tributes[j].getAttribute("id")
                    let radioId = radio[i].getAttribute("id");
                    let radioSliced = radioId.slice(0, 6)
                    if (tributeId === radioSliced) {
                        currentFig.replaceWith(tributes[j]);
                        currentFig = tributes[j];
                    }
                }
            });
        }
    }

    swapContentEvent();
};

swapFigure();