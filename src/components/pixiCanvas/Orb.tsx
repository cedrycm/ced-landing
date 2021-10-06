import React, { useCallback, useEffect } from "react";
import { Graphics } from "@inlet/react-pixi";
import debounce from "debounce";
import { random } from "../../utils/utils";

interface OrbProps {
  orbID: number;
}
const Orb: typeof Graphics ({}) => 
{
  fill: number;
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
  xOff: any;
  yOff: any;
  inc: number;

  constructor(fill = 0x000000)
  {
    super({});
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.002;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    // this.graphics = new PIXI.Graphics();
    // this.graphics.alpha = 0.825;

    // 250ms after the last window resize event, recalculate orb positions.
    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // how far from the { x, y } origin can each orb move
    const maxDist =
      window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 1.25;
    const originY =
      window.innerWidth < 1000
        ? window.innerHeight
        : window.innerHeight / 1.375;

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
  }
  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(props.color);
      g.drawRect(props.x, props.y, props.width, props.height);
      g.endFill();
    },
    [props]
  );

  return <Graphics draw={draw} />;
}
 
