import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//import {Layout} from '../../layout';
import {AdminLayout} from '../../../layout/AdminLayout';
import ShowModal from './ShowModal';
//
export const AdminPostEdit: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#taskShow");
console.log(props.item);
    const timeStamp = Date.now();
    return (
    <AdminLayout title="PostsEdit">
        {/*CSS */}
        {html`
        <link href="/static/postshow.css" rel="stylesheet" />
        `} 
        <div>
            <a href="/admin/posts" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-2" />
            <div class="flex flex-row">
                <div class="flex-1 text-start p-0 m-1">
                    <h1 class="text-4xl font-bold">Edit</h1>
                </div>
                <div class="flex-1 text-center p-0 m-1">
                    <button class="btn-outline-purple" id="show_modal_btn" >Preview</button>
                </div>
            </div>
            
            <hr class="my-2" />
            <p>ID: {props.item.id}
            , {props.item.createdAt}
            </p>
            <hr class="my-2" />
            <label>Title:</label>
            <input type="text" id="title" 
            class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            value={props.item.title}
            />
            <hr class="my-2" />
            <label  class="text-2xl block text-gray-700 font-bold mb-2">Content</label>
            <textarea id="content" name="content"
            class="input_textarea"
            placeholder="markdown input, please" required
            rows={15}
            >{props.item.content}</textarea>            
            <hr class="my-2" />
            <button id="btn_save" class="btn-purple ms-2 my-2">Save</button>
            <hr class="my-2" />
            <div id="root"></div>
            <ShowModal />
            {html`
            <script>
            let TaskItemId = ${props.item.id};
            </script>`
            } 
            <button id="btn_delete" class="btn-red ms-2 my-2">Delete</button>
            {import.meta.env.PROD ? (
                <script  type="module" src="/static/AdminPostEdit.js"></script>
            ) : (
                <script type="module" src="/src/client/AdminPostEdit.ts"></script>
            )}
        </div>
    </AdminLayout>
    )
}
/*
*/
