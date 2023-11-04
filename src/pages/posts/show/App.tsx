import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../../layout';
//import {AdminLayout} from '../../../layout/AdminLayout';
//
export const PostShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#taskShow");
console.log(props);
    const timeStamp = Date.now();
    return (
    <Layout title="AdminPostShow">
        <div>
            <a href="/" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-4" />
            <div id="root"></div>
            <h1 class="text-4xl font-bold">{props.item.title}</h1>
            <p>id: {props.item.id}, {props.item.createdAt}</p>
            <hr />
            <p>Content:</p>
            <pre>{props.item.content}</pre>
            <hr />
            {html`
            <script type="text/babel">
            let TaskItemId = ${props.id};
            </script>`
            } 
        </div>
    </Layout>
)
}
/*
{html`<script type="text/babel" src="/js/posts/show.js?${timeStamp}"></script>`}  
*/