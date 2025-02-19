import type { Project } from "$lib/types/types";
export const projects: Project[] = [
  {
    title: "Boids Simulation",
    imagePath: "boids.gif",
    repoLink: "https://github.com/jmarron7/odin-boids",
    description: "Simulation of emergent behavior in a flock of birds using the Boids algorithm. Implemented in Odin with the Raylib library.",
    tech: ["Odin", "Raylib", "Simulation"]
  },
  // {
  //   title: "Project 2",
  //   imagePath: "no-image.png",
  //   description: "project 2 desc",
  //   tech: ["Angular", "Typescript"]
  // },
  // {
  //   title: "Project 3",
  //   imagePath: "no-image.png",
  //   description: "project 3 desc",
  //   tech: ["C++", "Raylib"]
  // },
];