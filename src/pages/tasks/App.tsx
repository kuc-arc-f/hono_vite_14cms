import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

let itemId = 100;
let nextPage = 1;
let beforePage = 1;
//
const TaskIndex: FC<{ items: any[], page: string }> = (props: { items: any[], page: string}) => {
  console.log(props);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
  //
  return (
    <Layout>
      <div >
        <h1 class="text-4xl font-bold">Tasks-index</h1>
        <hr class="my-2" />
        <label class="text-2xl block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" id="title" 
        class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
        <br />
        <div class="mb-2">
          <label  class="text-2xl block text-gray-700 font-bold mb-2">Content</label>
          <textarea id="content" name="content"
          class="border border-gray-400 rounded-md px-3 py-2 w-full h-16 resize-none focus:outline-none focus:border-blue-500"
            placeholder="" required
          ></textarea>
        </div>
        <button id="save" class="btn-purple ms-2 my-2">Save</button>
        <hr class="my-2" />
        <ul>
          {props.items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/tasks/${item.id}`}><h3 class="text-3xl font-bold"
              >{item.title}</h3></a>
              <p>ID: {item.id}, {item.createdAt}</p>
              <a href={`/tasks/${item.id}`}>
                  <button  class="btn-outline-purple ms-2 my-2">Show</button>
              </a>
              <a href={`/tasks_edit/${item.id}`}>
                  <button  class="btn-outline-purple ms-2 my-2">Edit</button>
              </a>              
              <hr />
            </li>
            );
          })}
        </ul>
        {/* paginate */}
        <div class="paginate_wrap py-2">
          <a href={`/tasks?page=${beforePage}`}><button class="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/tasks?page=${nextPage}`}><button class="btn-outline-purple"> ＞ </button>
          </a>

        </div>
        <hr class="my-8" />
      </div>
      {import.meta.env.PROD ? (
            <script  type="module" src="/static/TaskIndex.js"></script>
      ) : (
          <script type="module" src="/src/client/TaskIndex.ts"></script>
      )}        
    </Layout>
  )
}
export default TaskIndex;
/*
> ＞ <
>Before<
*/