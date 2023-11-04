import 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

declare module 'hono' {
  interface ContextRenderer {
    (content: string, props?: { title?: string }): Response
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <link href="/static/globals.css" rel="stylesheet" />
          <link href="/static/main.css" rel="stylesheet" />
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js"></script>
          ) : (
            <script type="module" src="/src/client.ts"></script>
          )}
          <title>{title}</title>
        </head>
        <body>
          <div id="app"></div>
          {children}
        </body>
      </html>
    )
  },
  {
    docType: true
  }
)
