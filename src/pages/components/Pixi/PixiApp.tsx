import { Container, Stage, withFilters } from "@inlet/react-pixi";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
import { settings, SCALE_MODES } from "pixi.js";
import SimplexNoise from "simplex-noise";
import ColorPalette from "../../../styles/ColorPalette";
import Orb from "./Orb";

const Filters = withFilters(Container, {
  blur: KawaseBlurFilter,
});
const orbs: { ID: number; fill: string; }[] = [];
interface PixiCanvasProps {
  numOrbs: number;
}

// settings.SCALE_MODE = SCALE_MODES.NEAREST;

export const PixiApp = ({ numOrbs }: PixiCanvasProps) => {
  // console.log("mounted");
  const simplex = new SimplexNoise(Math.random);
  const colorPalette = new ColorPalette();

  if (orbs.length !== numOrbs) {
    for (let i = 0; i < numOrbs; i++) {
      // each orb will be black, just for now
      orbs.push({ ID: i, fill: colorPalette.randomColor() });
    }
  }

  return (
    <Stage
      options={{
        resizeTo: window,
        backgroundAlpha: 0,
      }}
    >
      <Filters blur={{ blur: 30, quality: 10 }}>
        {orbs.map((orb) => (
          <Orb key={orb.ID} orbID={orb.ID} fill={orb.fill} simplex={simplex} />
        ))}
      </Filters>
    </Stage>
  );
};

export default PixiApp;
