import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {AdminLayout} from '../../layout/AdminLayout';
//
let nextPage = 1;
let beforePage = 1;
//
export const AdminPostIndex: FC<{ items: any[], page: string }> 
  = (props: { items: any[], page: string}) => {
console.log("#AdminPostIndex");
console.log(props.items);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
  const timeStamp = Date.now();
  return (
  <AdminLayout title="TaskIndex">
    <div>
        <h1 class="text-4xl font-bold">PostsIndex</h1>
        <hr class="my-2" />
        <div class="py-1">
            <a href="/admin/posts/create" class="btn-purple ms-2">Create</a>
        </div>
      <hr class="my-2" />
      <ul>
        {props.items.map((item) => {
          return (
          <li key={item.id}>
            <a href={`/admin/posts/${item.id}`}><h3 class="text-3xl font-bold"
            >{item.title}</h3></a>
            <p>id={item.id}, {item.createdAt}</p>
            <a href={`/admin/posts/${item.id}`}>
              <button class="btn-outline-purple">Show</button>
            </a>
            <a href={`/admin/posts/edit/${item.id}`}>
              <button class="btn-outline-purple ms-2">Edit</button>
            </a>
            <hr />
          </li>
          );
        })}
      </ul>
      {/* paginate */}
      <div class="paginate_wrap py-2">
        <a href={`/admin/posts?page=${beforePage}`}>
          <button class="btn-outline-purple"> ＜ </button>
        </a>
        <a href={`/admin/posts?page=${nextPage}`}>
          <button class="btn-outline-purple"> ＞ </button>
        </a>
      </div>
      <hr class="my-8" />

    </div>
  </AdminLayout>
  )
}

/*
        {html`<script type="text/babel" src="/js/posts/index.js?${timeStamp}"></script>`}       
*/