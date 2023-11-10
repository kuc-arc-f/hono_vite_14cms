import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {AdminLayout} from '../../../layout/AdminLayout';
import { marked } from 'marked';
//
export const AdminPostShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#taskShow");
console.log(props);
    const content = marked.parse(props.item.content);
    const timeStamp = Date.now();
    return (
    <AdminLayout title="AdminPostShow">
        <div>
            {/*CSS */}
            {html`
            <link href="/static/postshow.css" rel="stylesheet" />
            `} 
            <a href="/admin/posts" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-4" />
            <div id="root"></div>
            <h1 class="text-4xl font-bold">{props.item.title}</h1>
            <p>id: {props.item.id}, {props.item.createdAt}</p>
            <hr class="my-2" />
            <p>Content:</p>
            <div id="post_item"></div>
            <input class="d-none" type="text" value={props.item.id} id="item_id" />
            <input class="d-none" type="text" value={content} id="item_content" />
            <hr />
            {html`<script>let TaskItemId = ${props.id};
            </script>`} 
            <button id="btn_delete" class="btn-red ms-2 my-2">Delete</button>
            {import.meta.env.PROD ? (
                <script type="module" src="/static/AdminPostShow.js"></script>
            ) : (
                <script type="module" src="/src/client/AdminPostShow.ts"></script>
            )}
        </div>
    </AdminLayout>
)
}
/*
<pre>{props.item.content}</pre>
*/