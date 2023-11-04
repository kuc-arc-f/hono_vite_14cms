import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
const Test3: FC = (props) => {
    return (
    <Layout>
        <h1>Test3</h1>
        <div id="root"></div>
        <hr class="my-2" />
        <div id="root2"></div>
        {/* JS */}
        {import.meta.env.PROD ? (
            <script  type="module" src="/static/Page3.js"></script>
        ) : (
            <script type="module" src="/src/client/Page3.ts"></script>
        )}        
    </Layout>
    )
}
export default Test3;
