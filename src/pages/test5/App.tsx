// 

import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
const Test5: FC = (props) => {
  console.log(props);
      //
      return (
      <Layout>
          <h1 class="text-4xl font-bold">Test5</h1>
          <p>JSX-test</p>
          <hr class="my-2" />
          <div id="root"></div>
          <hr class="my-12" />
          {/* JS */}
          {import.meta.env.PROD ? (
              <script  type="module" src="/static/Page5.js"></script>
          ) : (
              <script type="module" src="/src/client/Page5.ts"></script>
          )}        
      </Layout>
      )
  }
  export default Test5;
  