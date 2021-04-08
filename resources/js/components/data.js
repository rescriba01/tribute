// Import my Image class so I can create image objects

import Image from "./components/Image.js";

const rookieImg = new Image(
    "resources/image/clemente-rookie-1955.jpg",
    "Roberto Clemente in his Pittsburgh Pirates uniform",
    "image1"
);

const worldSeries1Img = new Image(
    "resources/image/worldseries-1960_1000x647.jpg",
    "Collector card collage of the 1960 World Series Champions Pittsburgh Pirates",
    "image2"
);

const allstarImg = new Image(
    "resources/image/all-star-1961_640x513.jpg",
    "From Left to Right: Roberto Clemente, Willie Mays, and Hank Aaron udring All-Star '61",
    "image3"
);

const nlMvpImg = new Image(
    "resources/image/NLMVP-1966_1193x1500.jpg",
    "Roberto Clemente stands with bat ready to swing",
    "image4"
);
//TODO: Add the rest of the image objects and add to the array.


// Add image objects into an array
const imageObjectArray = [rookieImg, worldSeries1Img, allstarImg, nlMvpImg, ];

// Export the array to be used in other files
export default imageObjectArray;