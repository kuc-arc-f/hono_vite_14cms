import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
const Test1: FC = (props) => {
    return (
    <div>
        <h1 class="text-4xl font-bold">Test11</h1>
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/Page2.js"></script>
        ) : (
            <script type="module" src="/src/client/Page2.ts"></script>
        )}        
    </div>
    )
}
export default Test1;