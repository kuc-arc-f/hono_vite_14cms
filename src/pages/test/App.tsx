import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
const Test1: FC = (props) => {
    return (
    <Layout title="Show">
        <div>
            <h1 class="text-4xl font-bold">Test11</h1>
            <hr />
            <h2 class="text-3xl font-bold">Test22</h2>
            <hr />
            <h3 class="text-2xl font-bold">Test3</h3>
            <hr />
            {/* JS */}
            {import.meta.env.PROD ? (
                <script type="module" src="/static/Page2.js"></script>
            ) : (
                <script type="module" src="/src/client/Page2.ts"></script>
            )}        
        </div>
    </Layout>
    )
}
export default Test1;