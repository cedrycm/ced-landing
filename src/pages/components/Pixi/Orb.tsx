import React, {
  useCallback,
  useReducer,
  ComponentProps,
  useRef,
  useEffect,
} from "react";
import { Graphics, useTick } from "@inlet/react-pixi";
import debounce from "debounce";
import { map, random } from "../../../utils/utils";
import SimplexNoise from "simplex-noise";
type Draw = ComponentProps<typeof Graphics>["draw"];



const setBounds = () => {
  // how far from the { x, y } origin can each orb move
  const maxDist =
    window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
  // the { x, y } origin for each orb (the bottom right of the screen)
  const originX = window.innerWidth / 1.15;
  const originY =
    window.innerWidth < 1000 ? window.innerHeight : window.innerHeight / 1.775;

  // allow each orb to move x distance away from it's { x, y }origin
  return {
    x: {
      min: originX - maxDist,
      max: originX + maxDist,
    },
    y: {
      min: originY - maxDist,
      max: originY + maxDist,
    },
  };
};

interface OrbProps {
  orbID: number;
  fill: string;
  simplex: SimplexNoise;
}
export type Orb = {
  fill: string;
  bounds: {
    x: {
      min: number;
      max: number;
    };
    y: {
      min: number;
      max: number;
    };
  };
  x: number;
  y: number;
  scale: number;
  radius: any;
  xOff: number;
  yOff: number;
  inc: number;
};

export const Orb = ({ orbID, fill, simplex }: OrbProps) => {
  const initBounds = setBounds();

  const reducer = (_: any, orbState: Orb) => orbState;
  const [motion, update] = useReducer(reducer, {
    fill: fill,
    // bounds = the area an orb is "allowed" to move within
    bounds: initBounds,
    // initialize the orb's { x, y } values to a random point within it's bounds
    x: random(initBounds["x"].min, initBounds["x"].max),
    y: random(initBounds["y"].min, initBounds["y"].max),
    // how large the orb is vs it's original radius (props will modulate over time)
    scale: 1,
    // the original radius of the orb, set relative to window height
    radius: random(window.innerHeight / 6, window.innerHeight / 3),
    // starting points in "time" for the noise/self similar random values
    xOff: random(0, 10000),
    yOff: random(0, 10000),
    // how quickly the noise/self similar random values step through time
    inc: 0.002,
  });
  const iter = useRef(0);

  //Update on time ticks

  useTick((delta) => {
    // console.log("Ticked")
    // const i = (iter.current += motion.inc * delta);
    const xNoise = simplex.noise2D(motion.xOff, motion.xOff);
    const yNoise = simplex.noise2D(motion.yOff, motion.yOff);
    const scaleNoise = simplex.noise2D(motion.xOff, motion.yOff);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      update({
        ...motion,
        x: map(xNoise, -1, 1, motion.bounds["x"].min, motion.bounds["x"].max),
        y: map(yNoise, -1, 1, motion.bounds["y"].min, motion.bounds["y"].max),
        // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
        scale: map(scaleNoise, -1, 1, 0.5, 1),
        // step through "time"
        xOff: motion.xOff + motion.inc,
        yOff: motion.yOff + motion.inc,
      });
    }
  });

  // 250ms after the last window resize event, recalculate orb positions.
  window.addEventListener(
    "resize",
    debounce(() => {
      // console.log("Debounced")
      const newBounds = setBounds();
      update({
        ...motion,
        bounds: newBounds,
        x: random(newBounds["x"].min, newBounds["x"].max),
        y: random(newBounds["y"].min, newBounds["y"].max),
      });
    }, 250)
  );

  // const draws = useEffect(()=>void{
  //   return (g) => {
  //     g.x = motion.x;
  //     g.y = motion.y;
  //     g.scale.set(motion.scale);

  //     // clear anything currently drawn to graphics
  //     g.clear();

  //     // tell graphics to fill any shapes drawn after motion with the orb's fill color
  //     g.beginFill(parseInt(motion.fill, 16));
  //     // draw a circle at { 0, 0 } with it's size set by motion.radius
  //     g.drawCircle(0, 0, motion.radius);
  //     // let graphics know we won't be filling in any more shapes
  //     g.endFill();
  //   };
  // },
  //   [motion]
  // );

  // const draw = useCallback(
  //   (g) => {
  //     g.x = motion.x;
  //     g.y = motion.y;
  //     g.scale.set(motion.scale);

  //     // clear anything currently drawn to graphics
  //     g.clear();

  //     // tell graphics to fill any shapes drawn after motion with the orb's fill color
  //     g.beginFill(parseInt(motion.fill, 16));
  //     // draw a circle at { 0, 0 } with it's size set by motion.radius
  //     g.drawCircle(0, 0, motion.radius);
  //     // let graphics know we won't be filling in any more shapes
  //     g.endFill();
  //   },
  //   [motion]
  // );

  return (
    <Graphics
      draw={(g) => {
        g.x = motion.x;
        g.y = motion.y;
        g.scale.set(motion.scale);

        // clear anything currently drawn to graphics
        g.clear();

        // tell graphics to fill any shapes drawn after motion with the orb's fill color
        g.beginFill(parseInt(motion.fill, 16));
        // draw a circle at { 0, 0 } with it's size set by motion.radius
        g.drawCircle(0, 0, motion.radius);
        // let graphics know we won't be filling in any more shapes
        g.endFill();
      }}
    />
  );
};

export default Orb;
