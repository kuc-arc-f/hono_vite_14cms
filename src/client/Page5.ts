
console.log("#Page5.client.ts_start");
//
import { h, Component, render } from 'preact';
import htm from 'htm';


const html = htm.bind(h);
const elem = document.getElementById("root") as HTMLElement;
//
function App (props) {
    return html`<h1>Hello ${props.name}!</h1>`;
  }
render(html`<${App} name="World-1234" />`, elem);

/*
class App extends Component {
  render() {
    return (<h1>Hello, world - page5!</h1>);
  }
}
render(<App />, document.getElementById("root") as HTMLElement);
*/

