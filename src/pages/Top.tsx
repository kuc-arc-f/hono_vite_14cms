import {Layout} from './layout';
import { Hono } from 'hono';
import type { FC } from 'hono/jsx'
import { html } from 'hono/html'

//const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
const Top: FC<{ items: any[], page: string }> = (props: { items: any[], page: string
}) => {
  return (
  <Layout>
    <div>
      <h1 class="text-4xl font-bold">Hello Hono , v14cms</h1>
      <hr />
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
    </div>

  </Layout>
  )
}
export default Top;

