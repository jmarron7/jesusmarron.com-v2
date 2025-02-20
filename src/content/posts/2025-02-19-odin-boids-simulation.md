---
title: 'How I Created a Boids Simulation in Odin and Raylib'
slug: 'odin-boids-simulation'
date: '2025-02-19'
tldr: "Web dev has been boring so I wanted to build something to help me learn about Odin and Raylib. The math part to find the vertices for triangles was the hardest part and required some research. The Odin and Raylib portions were simple enough to figure out as I worked on the project. Learning new things is fun and sometimes it's just what you need when you're in a rut."
tags: ['odin', 'raylib', 'simulation']
---

![Boids Simulation Gif](/images/boids.gif)

## Introduction

Recently, I've been having trouble finding the fun in programming. I believe most of it is due to the monotony of day-to-day work, ever-changing decisions based on bureaucratic business politics, and a current lack of interest in web development. I have been wanting to challenge myself and learn a lower level programming language compared to the Typescript, Java, and even Go that I am used to. Game development is also something that I am interested in so, naturally, I found my way leaning towards using [Odin](https://odin-lang.org/) and [Raylib](https://www.raylib.com/) for this project.

Odin is a general purpose programming language, very similar to C, that seems to be picking up popularity in game development. Raylib is a C library used for game programming. Luckily, Odin includes Raylib bindings in its `vendor` collection but there are [bindings for other languages](https://github.com/raysan5/raylib/blob/master/BINDINGS.md) as well. The fact that Odin includes Raylib out of the box was one of the reasons why I chose to pick up Odin in the first place and an even easier reason to use it for this project.

I had never attempted a [Boids simulation](https://en.wikipedia.org/wiki/Boids) before, but I’ve known about these types of *emergent behavior* simulations for a while — things like Particle Life, Game of Life, and Ant Colony Simulations. I had seen several videos of people implementing their own versions of Boids over the past year and I picked up on common patterns and ideas that each one had mentioned.

For Boids specifically, the three main rules are:
- **Separation** – Avoid crowding with other boids
- **Alignment** – Try to stay in formation with the flock
- **Cohesion** – Move towards the center of mass of the flock

Each of these has its own weight, and different weight combinations create different behaviors. For example, a lower cohesion weight makes Boids less likely to stick together since separation has a stronger influence.

## My Approach

I’ve been using to Odin for about a month now, and it’s been simple enough to pick up. If I were brand new to programming or game dev, I would have needed to spend more time thinking about basic concepts like position, velocity, speed, acceleration, etc. Raylib was also pretty easy to use for this project — I’m just using it to display a window and plot boids on the screen.

I started with a basic approach: I had some understanding of Odin and Raylib and was willing to learn as I went. I knew about the three Boids rules, and I had already worked on something similar with Particle Life in Go and Raylib. From past experience with game-like projects, I knew the typical structure was something like:

- A main() procedure that initializes everything.
- An update() procedure that calculates movement based on the rules.
- A draw() procedure that places points on the screen based on the updated positions.

So, I started off simple:
- Plot a single circle with Raylib.
- Add more circles and iterate over them.
- Move the boids on the screen by modifying their positions.
- Introduce Separation – Make Boids avoid each other if they get too close.
- Introduce Alignment – Make Boids move together smoothly.
- Introduce Cohesion – Make Boids stick together.
- Tuning the Weights – Adjust behavior to get the behaviors I wanted.
- Adding Velocity & Speed – Improve movement calculations.
- Using Triangles Instead of Circles – Triangles are more dynamic and better show boids direction movement when turning

## The Hardest Part: Steering and Angles

The hardest part was making the Boids steer properly. Initially, they were just moving as points, so direction didn’t matter. But once I switched to triangles, I needed to calculate angles so they faced the correct direction when turning.

This meant diving into math, specifically:
- Using sin, cos, and atan2 to calculate angles.
- Figuring out how to make turning feel natural rather than abrupt.

I Googled around and found a forum post that helped a lot to calculate the three vertices of the triangles. I also stumbled across a [math for game dev blog post](https://pikuma.com/blog/math-for-game-developers) that I plan to dig into more later.

## Performance and Possible Optimizations

My current implementation is pretty brute-force as each Boid iterates over every other Boid to calculate interactions. This works well enough for me, but possible optimizations could include:
- Spatial grids to reduce unnecessary comparisons
- k-d trees
- GPU Acceleration through compute shaders
- multithreading/parallelization of calculations

That said, I’m not planning to optimize this further. I just wanted to finish something for once without endlessly refactoring.

## Final Thoughts

The whole thing is a single file, about 200 lines long. I’m happy with it the way that it is and am looking forward to recreating other similar simulations. If you’re interested, check out the [GitHub repo](https://github.com/jmarron7/odin-boids).
