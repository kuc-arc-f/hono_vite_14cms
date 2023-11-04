import type { FC } from 'hono/jsx'
//import { html } from 'hono/html'
import {AdminLayout} from '../layout/AdminLayout';

//
export const AdminIndex: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <AdminLayout title="AdminTop">
      <div>
        <h1 class="text-4xl font-bold">Admin</h1>
        <div id="root"></div>
      </div>
    </AdminLayout>
  )
}
/*
*/