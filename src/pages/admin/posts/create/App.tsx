import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//import {Layout} from '../../layout';
import {AdminLayout} from '../../../layout/AdminLayout';
//
export const AdminPostCreate: FC = (props) => {
    const timeStamp = Date.now();
    return (
    <AdminLayout title="AdminPostCreate">
        <div>
            <h1 class="text-4xl font-bold">Create</h1>
            <hr class="my-2" />
            <label>Title:</label>
            <input type="text" id="title" 
            class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
            <hr />
            <div class="mb-2">
                <label  class="text-2xl block text-gray-700 font-bold mb-2">Content</label>
                <textarea id="content" name="content"
                class="input_textarea"
                 placeholder="markdown input, please" required
                 rows={15}
                ></textarea>
            </div>
            <hr />
            <button id="save" class="btn-purple ms-2 my-2">Save</button>
            {import.meta.env.PROD ? (
                <script  type="module" src="/static/AdminPostCreate.js"></script>
            ) : (
                <script type="module" src="/src/client/AdminPostCreate.ts"></script>
            )}       
        </div>
    </AdminLayout>
    )
}
//AdminPostCreate
/*
{html`<script src="/js/posts/create.js?${timeStamp}"></script>`}  
*/