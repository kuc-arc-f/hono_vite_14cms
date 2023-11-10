import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../../layout';
import { marked } from 'marked';
//
export const PostShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#taskShow");
console.log(props);
    const content = marked.parse(props.item.content);
    const timeStamp = Date.now();
    return (
    <Layout title="Show">
        {/*CSS */}
        {html`
        <link href="/static/postshow.css" rel="stylesheet" />
        `} 
        <div>
            <a href="/" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-4" />
            <div id="root"></div>
            <h1 class="text-4xl font-bold">{props.item.title}</h1>
            <p>id: {props.item.id}, {props.item.createdAt}</p>
            <hr />
            <div id="post_item"></div>
            <pre class="d-none">{props.item.content}</pre>
            <input class="d-none" type="text" value={props.item.id} id="item_id" />
            <input class="d-none" type="text" value={content} id="item_content" />
            <hr />
            {html`
            <script type="text/babel">
            let TaskItemId = ${props.id};
            </script>`
            }
            {import.meta.env.PROD ? (
                <script type="module" src="/static/PostShow.js"></script>
            ) : (
                <script type="module" src="/src/client/PostShow.ts"></script>
            )} 
        </div>
    </Layout>
)
}
/*
<p>Content:</p>
{html`<script type="text/babel" src="/js/posts/show.js?${timeStamp}"></script>`}  
*/