<div align="center">
  <p>
    <b>
      URL shortener
    </b>
  </p>
</div>

</div>

## 👨‍🚀 Introduction


This project uses the following technologies:

- [**create-t3-app**](https://create.t3.gg) - The best way to start a full-stack, typesafe Next.js app.
- [**Next.js 14 App Router**](https://nextjs.org/) - The React Framework for the Web.
- [**Auth.js v5**](https://authjs.dev/) - Authentication for the Web.
- [**Prisma**](https://prisma.io) - A next-generation Node.js and TypeScript ORM.
- [**Turso**](https://turso.tech/) (SQLite) + [**libSQL**](https://github.com/tursodatabase/libsql) - SQLite for Production.
- [**Next.js Server Actions**](https://nextjs.org/docs/api-reference/server-actions) - Asynchronous functions that are executed on the server.
- [**TailwindCSS**](https://tailwindcss.com) + [**shadcn/ui**](https://ui.shadcn.com) & [**Radix Primitives**](https://www.radix-ui.com) - Design System.
- [**Prettier**](https://prettier.io) with [**prettier-plugin-tailwindcss**](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - Code Formatter.
- [**Lucide Icons**](https://lucide.dev) - Beautiful SVG icons & logos for the web.


**Steps:**

3. Install dependencies:

```bash
pnpm install
```

4. Create a **.env** file with the following content:

```bash
# Database:
DATABASE_URL= # "file:./dev.db"
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=

# Auth.js =>
AUTH_SECRET=

# Github Provider =>
GITHUB_ID=
GITHUB_CLIENT_SECRET=
```

5. Generate a new migration file with Prisma:

```bash
pnpm db:migrate
```

6. Insert the migration data into the Turso database. To do this, go to ``package.json``, modify the ``db:push`` command with the name of the migration folder (2024***xxxxxxxxxx***_init) and run it in your terminal:

```bash
pnpm db:push
```

7. Run:

- Development server:

```bash
pnpm dev
```

and open [http://localhost:3000](http://localhost:3000) with your browser 🚀

- Prisma Studio:

```bash
pnpm db:studio
```

and  open [http://localhost:5555](http://localhost:5555) with your browser ✨

⬆️ **Known issues:**

- ⚙️ Fix issue when logging in with different provider but with the same email. Redirect to an existing route in the app ([authjs error](https://authjs.dev/reference/core/errors#accountnotlinked)).

⬆️ **Dependencies:**

- ✅ Update `@prisma/adapter-libsql`, `@prisma/client` & `prisma` to the stable version when it's released.
- ⚙️ Update `authjs` to the stable version (v5) when it's released.

⬆️ **Auth:**

- ✅ Sign In with Github.

⬆️ **Dashboard (tags):**

- ✅ Add search links by tags in the dashboard.
- 🔔 Create a new tag.
- ✅ Delete a tag.
- ⚙️ Update the tags of a link.

🔔 Add option to change tag color.
