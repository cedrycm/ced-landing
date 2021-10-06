import * as Pixi from 'pixi.js';
// import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
// import SimplexNoise from "simplex-noise";
// import hsl from "hsl-to-hex";
// import debounce from "debounce";
import Orb from "./Orb";
import React from "react";

interface IMainProps {}
interface IMainState {}

export class PixiComponent extends React.Component<IMainProps, IMainState> {
  app: Pixi.Application | undefined;
  bgCanvas: HTMLDivElement | undefined;

  constructor() {
    super({});
  }

  componentDidMount() {
    const orbs = [];
    this.app = new Pixi.Application({
      // render to <canvas class="orb-canvas"></canvas>
      view:
        document.querySelector<HTMLCanvasElement>("orb-canvas") || undefined,
      // auto adjust size to fit the current window
      resizeTo: window,
      // transparent background, we will be creating a gradient background later using CSS
      transparent: true,
    });
    this.bgCanvas!.appendChild(this.app.view);

    for (let i = 0; i < 10; i++) {
      // each orb will be black, just for now
      const orb = new Orb(0x000000);
      this.app.stage.addChild(orb.graphics);

      orbs.push(orb);
    }
  }
  componentWillUnmount() {
    this.app!.stop();
  }

  render() {
    let component = this;
    return (
      <div
        ref={(thisDiv: HTMLDivElement) => {
          component.bgCanvas = thisDiv;
        }}
      />
    );
  }
};

export default PixiComponent;