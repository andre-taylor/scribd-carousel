# scribd-carousel

I enjoyed the interview carousel exercise. I wanted to flush out a few concepts and get a working demo together. It's far from complete, and isn't perfect, but it was a fun exercise.

## Info
- Created a hybrid of component’s and a component library.
- Added type checking with PropTypes
- Added snapshot’s to test markup rendering.
- I forked a React carousel and chopped it up to get the desired functionality and look and feel.
- Replaced SaSS with CSS Modules as I was getting some collisions.
- Created my own reset styles.

## Todo
- Functional test of the carousel. I ran out of time before creating functional test for the Carousel* components. It’s taco night, and dinner is almost ready! :)

## Known Issues
- The carousel doesn't recognize when the last CarouselItem scrolls into view. You have to click ArrowRight one more time before the carousel registers that you’ve reached the end of the items.
