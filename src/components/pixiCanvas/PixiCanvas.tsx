import { Stage, Sprite } from '@inlet/react-pixi';

interface PixiCanvasProps {

}

export const PixiCanvas: React.FC<PixiCanvasProps> = ({}) => {
  return (
    <Stage
      options={{
        view:
          document.querySelector<HTMLCanvasElement>("orb-canvas") || undefined,
        resizeTo: window,
        // transparent background, we will be creating a gradient background later using CSS
        transparent: true,
      }}
    >
      <Sprite image="./bunny.png" x={100} y={100} />
    </Stage>
  );
}