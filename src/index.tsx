import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
//import { renderer } from './renderer';
interface Env {
  DB: Database
}
const app = new Hono()
//routes
import testRouter from './routes/test';
import taskRouter from './routes/tasks';
import postRouter from './routes/posts';
//pages
import {Layout} from './pages/layout';
import Top from './pages/Top';
import Test1 from './pages/test/App';
import Test3 from './pages/test3/App';
import Test4 from './pages/test4/App';
import Test5 from './pages/test5/App';
/* tasks */
import TaskIndex from './pages/tasks/App';
import TaskShow from './pages/tasks/show/App';
import TaskEdit from './pages/tasks/edit/App';
{/* admin */}
import {AdminIndex} from './pages/admin/App';
import {AdminPostIndex} from './pages/admin/posts/App';
import {AdminPostCreate} from './pages/admin/posts/create/App';
import {AdminPostShow} from './pages/admin/posts/show/App';
import {AdminPostEdit} from './pages/admin/posts/edit/App';

//
app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
})
/* test */
app.get('/test1', async (c) => { 
  return c.render(<Test1 items={[]} />);
});
app.get('/test3', async (c) => { 
  return c.html(<Test3 items={[]} />);
});
app.get('/test4', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
console.log(items);
  return c.html(<Test4 items={items} />);
});
app.get('/test5', async (c) => { 
  return c.html(<Test5 />);
});
/* tasks */
app.get('/tasks', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  const items = await testRouter.get_list_page(c, c.env.DB, page);
  return c.html(<TaskIndex items={items} page={page} />);
});
app.get('/tasks/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(<TaskShow item={item} id={Number(id)} />);
});
app.get('/tasks_edit/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(<TaskEdit item={item} id={Number(id)} />);
});
/* admin */
app.get('/admin', async (c) => { 
  return c.html(<AdminIndex items={[]} />);
});
app.get('/admin/posts', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  const items = await postRouter.get_list_page(c, c.env.DB, page);
  return c.html(<AdminPostIndex items={items} page={page} />);
});
app.get('/admin/posts/create', async (c) => { 
  return c.html(<AdminPostCreate />);
});
app.get('/admin/posts/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await postRouter.get(c, c.env.DB, id);
//console.log(item);
  return c.html(<AdminPostShow item={item} id={Number(id)} />);
});
app.get('/admin/posts/edit/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await postRouter.get(c, c.env.DB, id);
//console.log(item);
  return c.html(<AdminPostEdit item={item} id={Number(id)} />);
});

/******
API
******/
app.post('/api/test/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/test/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
app.get('/api/test1', async (c) => {
  const result = await  c.env.DB.prepare(`SELECT * FROM Task ORDER BY id DESC`).all();
  console.log(result.results); 
  return Response.json({ret: "OK", data: result.results});
});
/* tasks */
app.post('/api/tasks/get_list', async (c) => { 
  const resulte = await taskRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.get(body, c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/update', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.update(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
/* posts */
app.post('/api/posts/get_list', async (c) => { 
  const resulte = await postRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/posts/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/posts/update', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.update(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/posts/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.get(body, c, c.env.DB);
console.log(resulte);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/posts/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
export default app
