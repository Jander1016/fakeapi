
## Deploy JSON Server to Vercel

A template for deploying [JSON Server](https://github.com/typicode/json-server) on [Vercel](https://vercel.com), allowing you to run a fake REST API online 🐣!

Demo from this repository: 
https://fake-api.vercel.app/
### How to use (resume)

1. Click "**Use this template**" or clone this repository.
2. Update or use the default [`db.json`](./db.json) in the repository.
3. Sign up or log in to [Vercel](https://vercel.com).
4. From the Vercel dashboard, click "**+ New Project**" and then "**Import**" your repository.
5. On the "**Configure Project**" screen, leave everything as default and click "**Deploy**".
6. Wait until deployment is complete, and your custom JSON server will be ready to serve!

## Default `db.json`

```json
{
   "Products": [
    {
      "id": "2",
      "title": "Chaqueta de algodón para hombre",
      "price": 55.99,
      "description": "Excelentes chaquetas de abrigo para primavera/otoño/invierno, adecuadas para muchas ocasiones, como trabajar, hacer caminatas, acampar, escalar montañas/rocas, andar en bicicleta, viajar u otras actividades al aire libre. Buena opción de regalo para usted o su familiar. Un amor de corazón cálido al Padre, esposo o hijo en este día de acción de gracias o Navidad.",
      "category": "sudadera",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "stock": 90
    },
    {
      "id": "3",
      "title": "Camiseta Casual Slim Fit",
      "price": 15.99,
      "description": "El color puede ser ligeramente diferente en la pantalla y en la práctica. / Tenga en cuenta que la constitución corporal varía según la persona, por lo tanto, la información detallada sobre el tamaño debe revisarse a continuación en la descripción del producto.",
      "category": "camiseta",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "stock": 19
    }
   ]
}
```

### Step 1

Create a new repository, for example, **fake-API**. Then clone that empty repository.

### Step 2

You need to run the npm init command:
```
npm init -y
```

This will generate a **package.json**. Now, what you need to do is change these lines:

Change this line:
``` 
 "main": "index.js",
```

To this:

```
  "main": "api/server.js",
```

And this:

```
"test": "echo \"Error: no test specified\" && exit 1"
```

To this:

```
"start": "node api/server.js"
```

### Step 3

Now it's time to run the command:

```
npm install json-server cors
```

You'll see that both **cors** and ***json-server*** have been added to the package.json.

### Step 4

Run the command:
```
npm install json-server
```

Add the ***.gitignore*** file and add ***node_modules***.

### Step 5

Create a ***db.json*** file and add your own data.

Additionally, you'll need to add a new [Folder called ***api***](./api/)  and, inside it, this [**server.js**](./api/server.js) file:

```javascript
// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
```

### Step 6

Create a new file named [***vercel.json***](./vercel.json)

```json
{
  "functions": {
    "api/server.js": {
      "memory": 1024,
      "includeFiles": "db.json"
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "api/server.js"
    }
  ]
}
```

# Don't forget to commit & push your changes 🐣

Go to your Vercel account, connect a new project with your repository, and deploy it💙

## You must be patient

It could take a couple of minutes to finally work. ⏰🥹

