export const projects = [

  {
    title: "animation",
    category: "GIFs",
    icon: "",
    description: "2D Animation",
    content: [
      {
      imageurl: "./imagesshrunk/full0bullstreet_mini.jpg",
      caption:"Quickship logo for GRAV"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/pitcher.gif",
      caption:"Cleaning & Care directions for UPLIFT Desk"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/camping.gif",
      caption:"Expressions Experiment in After Effects"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/dribbble_workspace_final.jpg",
      caption:"another caption"
      },
      {
      imageurl:"https://kallenillustration.com/imagesshrunk/WHERETHEFUCK.jpg",
      caption:"another caption part two"
      }
    ],
  },
  {
    title: "render",
    category: "3DS",
    icon: "",
    description: "Objects & Food Series - Beginner's introduction to 3D Design and Animation",
    content: [
      {
      imageurl: "./imagesshrunk/computer_0005.png",
      caption:"Happy Devilled Egg"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/pitcher.gif",
      caption:"Tomato Basil & Ghost Cheese"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/camping.gif",
      caption:"Space Portal Coffee"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/dribbble_workspace_final.jpg",
      caption:"Barbie Hotdog"
      },
      {
      imageurl:"https://kallenillustration.com/imagesshrunk/WHERETHEFUCK.jpg",
      caption:"Box Jellfyish"
    },
    {
      imageurl:"test",
      caption:"Social Domino"
    }
    ],
  },
  {
    title: "GRAVLabs",
    category: "JOB",
    icon: "",
    description: "Various projects with GRAV",
    content: [
      {
      imageurl: "./imagesshrunk/computer_0005.png",
      caption:"3d blender animation"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/pitcher.gif",
      caption:"this is a caption"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/camping.gif",
      caption:"look a caption"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/dribbble_workspace_final.jpg",
      caption:"another caption"
      },
      {
      imageurl:"https://kallenillustration.com/imagesshrunk/WHERETHEFUCK.jpg",

      caption:"another caption part two"
      }
    ],
  },
  {
    title: "UPLIFTDesk",
    category: "JOB",
    icon: "",
    description: "Various projects with UPLIFTDesk",
    content: [
      {
      imageurl: "./imagesshrunk/computer_0005.png",
      caption:"Comparison Chart Feature"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/pitcher.gif",
      caption:"Homepage Update"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/camping.gif",
      caption:"Email and Sale template designs"
      },
      {
      imageurl: "https://kallenillustration.com/imagesshrunk/dribbble_workspace_final.jpg",
      caption:"Merchanise, Tshirts and more"
      },
      {
      imageurl:"https://kallenillustration.com/imagesshrunk/WHERETHEFUCK.jpg",
      caption:"another caption part two"
      }
    ],
  },
    {
      title: "Paintings",
      category: "ART",
      icon: "",
      description: "Personal projects, paintings, etc",
      content: [
        {
        imageurl: "./imagesshrunk/computer_0005.png",
        caption:"3d blender animation"
        },
        {
        imageurl: "https://kallenillustration.com/imagesshrunk/pitcher.gif",
        caption:"this is a caption"
        },
        {
        imageurl: "https://kallenillustration.com/imagesshrunk/camping.gif",
        caption:"look a caption"
        },
        {
        imageurl: "https://kallenillustration.com/imagesshrunk/dribbble_workspace_final.jpg",
        caption:"another caption"
        },
        {
        imageurl:"https://kallenillustration.com/imagesshrunk/WHERETHEFUCK.jpg",

        caption:"another caption part two"
        }
      ],
  }

];

export const placeHolder = "./imagesshrunk/loader.gif"

export const navLinks = [
  {
    title: 'console',
    url: '#console',
  },
  {
    title: 'work',
    url: '#work',
  },

  {
    title: 'about',
    url: '#about',
  },
  {
    title: 'dialup',
    url: '#dialup'
  }
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
