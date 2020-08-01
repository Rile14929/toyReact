import { ToyReact, Component } from './ToyReact';

// class MyComponent extends Component {
//   render() {
//     return <div>
//       <span>hello</span>
//       <span>world</span>
//       {
//         this.children
//       }
//     </div>
//   }
// }


// let a = <MyComponent name="a">
//   <div>123</div>
// </MyComponent>


class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value ? this.state.value : ''}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

let a = <Board name ='board'>1</Board>

ToyReact.render(
  a,
  document.body
)








// @babel/plugin-transform-react-jsx

/* var a = ToyReact.createElement("div", {name: "a"},
ToyReact.createElement("span", null, "Hello"),
ToyReact.createElement("span", null, "World"),
ToyReact.createElement("span", null, "!"));
document.body.appendChild(a); */