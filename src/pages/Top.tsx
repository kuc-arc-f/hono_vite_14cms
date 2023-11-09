import {Layout} from './layout';
import { Hono } from 'hono';
import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
let nextPage = 1;
let beforePage = 1;
//
const Top: FC<{ items: any[], page: string }> = (props: { items: any[], page: string
}) => {
  console.log("#top:");
console.log(props.items);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }  
  //
  return (
  <Layout>
    <div>
      <h1 class="text-4xl font-bold">Blogs</h1>
      <hr class="my-4" />
      <ul>
      {props.items.map((item) => {
        return (
        <li key={item.id}>
          <a href={`/posts/${item.id}`}><h3 class="text-3xl font-bold"
          >{item.title}</h3></a>
          <p>id={item.id}, {item.createdAt}</p>
          <hr />
        </li>
        );
      })}
      </ul>
      {/* paginate */}
      <div class="paginate_wrap py-2 my-2">
        <a href={`/?page=${beforePage}`}>
          <button class="btn-outline-purple"> ＜ </button>
        </a>
        <a href={`/?page=${nextPage}`}>
          <button class="btn-outline-purple"> ＞ </button>
        </a>
      </div>
      <hr class="my-8" />
    </div>

  </Layout>
  )
}
export default Top;

