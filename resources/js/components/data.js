// Import my Image class so I can create image objects

import Image from "../components/Image.js";

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

const battingTitleImg = new Image(
    "resources/image/battingtitle-1967_750×1021.jpg",
    "Clemente after a hard swing releasing bat as he prepares to run",
    "image5"
);

const worldSeries1971Img = new Image(
    "resources/image/worldseries-1971_600×462.jpg",
    "Clemente takes practice swings before the final game of the '71 World Series",
    "image6"
);

const careerHitImg = new Image(
    "resources/image/hitclub3000-1972_320×400.jpg",
    "Clemente stands at base raising his hat and the text on the image indicates his 3000th hit.",
    "image7"
);

const newspaperHeadlineImg = new Image(
    "resources/image/newspaperarticle-1972_400×582.jpg",
    "Headline in a New York newspaper of the accident that took Roberto Clemente's life",
    "image8"
);

const hallOfFameImg = new Image(
    "resources/image/halloffame-1973_545×459.jpg",
    "Clemente's wife Vera wipes away tears as she attends Roberto Clemente's induction posthumously into the Baseball Hall Of Fame",
    "image9"
);



// Add image objects into an array
const imageObjectArray = [rookieImg, worldSeries1Img, allstarImg, nlMvpImg, battingTitleImg, worldSeries1971Img, careerHitImg, newspaperHeadlineImg, hallOfFameImg];

// Export the array to be used in other files
export default imageObjectArray;