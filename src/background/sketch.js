import { useEffect, useRef } from "react";
import p5 from "p5";
import {useTheme} from "styled-components";

function App(props) {
    const theme = useTheme();

    const p5Ref = useRef();

    const Sketch = (p) => {
        const cellWidth = 60;
        let cols = p.floor(p.windowWidth / cellWidth) + 1;
        let rows = p.floor(p.windowHeight / cellWidth) + 1;

        const heightOffset = 4;

        p.windowResized = () => {
            p.createCanvas(p.windowWidth, p.windowHeight- heightOffset);
            cols = p.floor(p.windowWidth / cellWidth) + 1;
            rows = p.floor(p.windowHeight / cellWidth) + 1;
        }

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight- heightOffset);
        }

        p.draw = () => {
            p.background(theme.colors.dBlack);
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    let circleWidth = 2;
                    const distFromMouse = p.dist(p.mouseX, p.mouseY, x * cellWidth, y * cellWidth);
                    const minDist = 500;
                    const size = 250;
                    if (distFromMouse <= minDist) {
                        circleWidth = (circleWidth**((minDist + size - distFromMouse)/size) + 1);
                    }
                    p.circle(10+x * cellWidth, y * cellWidth, circleWidth);
                    p.noStroke();
                    p.fill(theme.colors.lBlack);
                }
            }
        }

    };

    useEffect(() => {
        const mp5 = new p5(Sketch, p5Ref.current);
        return mp5.remove;
    });

    return <div ref={p5Ref} style={props.style}></div>;
}

export default App;