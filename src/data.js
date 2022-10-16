export const projects = [

  {
    title: "animation",
    category: "GIF",
    icon: "",
    description: "Various Adobe Creative Suite Programs Various Adobe Creative Suite Programs Various Adobe Creative Suite Programs Various Adobe Creative Suite Programs",
    images: [
      "./imagesshrunk/computer_0005.png",
      "https://kallenillustration.com/imagesshrunk/pitcher.gif",
      "https://kallenillustration.com/imagesshrunk/camping.gif",
      "https://kallenillustration.com/imagesshrunk/overworked_plaincandle_final.gif",
      "https://kallenillustration.com/imagesshrunk/WHERETHEFUCK.jpg",
      "https://kallenillustration.com/imagesshrunk/dribbble_workspace_final.jpg",
    ],
  },
  {
    title: "render",
    category: "3DS",
    icon: "",
    description: "Made in Blender / Spline",
    images: [
      "https://via.placeholder.com/151",
      "https://via.placeholder.com/152",
      "https://via.placeholder.com/153",
    ],
  },
  {
    title: "GRAVLabs",
    category: "JOB",
    icon: "",
    description: "Various projects with GRAV",
    images: [
      "https://via.placeholder.com/154",
      "https://via.placeholder.com/155",
      "https://via.placeholder.com/156",
    ],
  },
  {
    title: "UPLIFTDesk",
    category: "JOB",
    icon: "",
    description: "Various projects with UPLIFTDesk",
    images: [
      "https://via.placeholder.com/157",
      "https://via.placeholder.com/158",
      "https://via.placeholder.com/159",
    ],
  }

];

export const placeHolder = "./imagesshrunk/loader.gif"

export const navLinks = [
  {
    title: 'home',
    url: '#home',
  },
  {
    title: 'work',
    url: '#work',
  },

  {
    title: 'about',
    url: '#about',
  },
];


export const animatedImagesArray = [];

for (var i = 1; i <= 100; i++) {
  if (i < 10) {
      animatedImagesArray.push('./imagesshrunk/computer_000' + i + ".png");
  } else if (i >= 10) {
      animatedImagesArray.push('./imagesshrunk/computer_00' + i + ".png");
  }

}




// console.log(animatedImagesArray);
