import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../../layout';
//
const TaskEdit: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#TaskEdit");
console.log(props.item);
    const timeStamp = Date.now();
    return (
    <Layout title="TaskShow">
        <div>
            <a href="/tasks" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-4" />
            <h1 class="text-4xl font-bold">Edit</h1>
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
            class="border border-gray-400 rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
            placeholder="" required
            >{props.item.content}</textarea>            
            <hr class="my-2" />
            <button id="btn_save" class="btn-purple ms-2 my-2">Save</button>
            <hr class="my-2" />
            <div id="root"></div>
            {html`
            <script>
            let TaskItemId = ${props.item.id};
            </script>`
            } 
            <button id="btn_delete" class="btn-red ms-2 my-2">Delete</button>
            {/* TS */}
            {import.meta.env.PROD ? (
            <>
                <script src="/static/TaskShow.js"></script>
                <script src="/static/TaskEdit.js"></script>
            </>
            ) : (
            <>
                <script src="/src/client/TaskShow.ts"></script>
                <script src="/src/client/TaskEdit.ts"></script>
            </>
            )} 
        </div>
    </Layout>
    )
}
export default TaskEdit;
/*
{html`<script src="/js/tasks/delete.js?${timeStamp}"></script>`}
{html`<script src="/js/tasks/edit.js?${timeStamp}"></script>`}
*/
