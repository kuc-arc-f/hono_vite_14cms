import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//import {Layout} from '../../layout';
import {AdminLayout} from '../../../layout/AdminLayout';
//
export const AdminPostShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#taskShow");
console.log(props);
    const timeStamp = Date.now();
    return (
    <AdminLayout title="AdminPostShow">
        <div>
            <a href="/admin/posts" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-4" />
            <div id="root"></div>
            <h1 class="text-4xl font-bold">{props.item.title}</h1>
            <p>id: {props.item.id}, {props.item.createdAt}</p>
            <hr class="my-2" />
            <p>Content:</p>
            <pre>{props.item.content}</pre>
            <hr />
            {html`<script>let TaskItemId = ${props.id};
            </script>`} 
            <button id="btn_delete" class="btn-red ms-2 my-2">Delete</button>
            {import.meta.env.PROD ? (
                <script  src="/static/AdminPostShow.js"></script>
            ) : (
                <script  src="/src/client/AdminPostShow.ts"></script>
            )}
        </div>
    </AdminLayout>
)
}
/*
{html`<script type="text/babel" src="/js/posts/delete.js?${timeStamp}"></script>`}
*/