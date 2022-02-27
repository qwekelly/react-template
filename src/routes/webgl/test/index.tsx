import './index.scss'
import React from 'react';

class Props {

}

class State {

}

class Test extends React.Component<Props, State> {

  game: React.RefObject<HTMLCanvasElement>;

  constructor(props: Props) {
    super(props);
    this.game = React.createRef<HTMLCanvasElement>();
  }

  componentDidMount() {
    if (this.game) {
      this.initCanvas();
    }
  }

  initCanvas() {
    const canvas = this.game.current;
    const gl = canvas?.getContext("webgl");

    if (!gl) {
      return alert('no suppor webgl')
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }


  render(): React.ReactNode {
    return (
      <canvas id="game" width="640" height="480" ref={this.game}></canvas>
    )
  }
}
export default Test;