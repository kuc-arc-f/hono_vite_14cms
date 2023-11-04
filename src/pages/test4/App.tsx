// SSR: jsxレンダリング

import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
const Test4: FC = (props) => {
console.log(props);
    //
    return (
    <Layout>
        <h1 class="text-4xl font-bold">Test4</h1>
        <p>SSR-List</p>
        <hr class="my-2" />
        <label>Title:</label>
        <input type="text" id="title" 
        class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
        <br /><button id="save" class="btn-purple ms-2 my-2">Save</button>
        <hr class="my-2" />
        <div id="root"></div>
        <ul>
          {props.items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/test/${item.id}`}><h3 class="text-3xl font-bold">{item.title}</h3>
              </a>
              <p>id={item.id}</p>
              <hr class="my-2" />
            </li>
            );
          })}
        </ul>        
        <hr class="my-12" />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script  type="module" src="/static/Page4.js"></script>
        ) : (
            <script type="module" src="/src/client/Page4.ts"></script>
        )}        
    </Layout>
    )
}
export default Test4;
