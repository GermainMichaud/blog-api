# NodeJS & Postgresql API

---

![GitHub forks](https://img.shields.io/github/forks/GermainMichaud/blog-api?style=flat-square)
![Version](https://img.shields.io/github/package-json/v/GermainMichaud/blog-api?style=flat-square)

---

## Content

- [NodeJS & Postgresql API](#nodejs--postgresql-api)
  - [Content](#content)
  - [Prerequired](#prerequired)
  - [Get started](#get-started)
  - [Generate migrations (Optional)](#generate-migrations-optional)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
  - [Todo](#todo)
  - [License](#license)

## Prerequired

You need to have [node](http://nodejs.org) installed on your machine and optionaly [sqitch](https://sqitch.org).

## Get started

1. **Clone & install**

```zsh
git clone git@github.com:GermainMichaud/blog-api.git
cd ./blog-api
npm i # or npm install
```

---

2. **Environment Variables**

```bash
cp .env.example .env
```

Add your vaiables

```conf
PORT=3500
DATABASE_URL=postgresql//<username>:<password>@<host>/<database>
JWT_SECRET=
JWT_REFRESH_SECRET=
JWT_EXPIRE=600
JWT_REFRESH_EXPIRE=6000
```

For generate `JWT_SECRET` and `JWT_REFRESH_SECRET`, you can use `crypto` from NodeJS

```bash
node generate-secrets.js
```

Copy related output to your `.env` file:

```bash
{
  jwt_token: '3901f6e19eb1fe4f98fa626d...',
  jwt_refresh_token: '78a031147c0bd426e54f...'
}
```

3. **Start project**

```bash
# Development
npm run dev

# Production
npm start
```

---

## Generate migrations (Optional)

:warning: You need to install `Sqitch` on your machine [See](https://sqitch.org/download/)

<details>

<summary>Instructions</summary>

1. Initialize new Sqitch app

```bash
sqitch init <app_name> --target db:pg:<database> --engine pg --top-dir migrations
```

2. Add a migration

```bash
sqitch add <migration_name> -m "your_commit_message"
```

3. Write you migration

```
- migrations
  - deploy
    - <migration_name>.sql
  - revert
    - <migration_name>.sql
  - verify
    - <migration_name>.sql
```

4. Execute migration

**Deploy:**

`sqitch deploy`

**Verify:**

`sqitch verify`

**Revert:**

`sqitch revert`

> For revert one step back: `sqitch revert HEAD^1`

</details>

---

## Dependencies

| Name         | Version   |                                                |
| ------------ | --------- | ---------------------------------------------- |
| bcryptjs     | `^2.4.3`  | [link](https://npmjs.org/package/bcrypt)       |
| cors         | `^2.8.5`  | [link](https://npmjs.org/package/cors)         |
| dotenv       | `^10.0.0` | [link](https://npmjs.org/package/dotenv)       |
| express      | `^4.17.1` | [link](https://npmjs.org/package/express)      |
| jsonwebtoken | `^8.5.1`  | [link](https://npmjs.org/package/jsonwebtoken) |
| pg           | `^8.7.1`  | [link](https://npmjs.org/package/pg)           |

## Dev Dependencies

| Name    | Version   |                                           |
| ------- | --------- | ----------------------------------------- |
| nodemon | `^2.0.12` | [link](https://npmjs.org/package/nodemon) |

---

## Todo

- [x] Initialize project
- [ ] Create migrations
  - [ ] Post
  - [ ] Category
  - [ ] User
- [ ] Create models
  - [ ] Post
  - [ ] Category
  - [ ] User
- [ ] Create controllers
  - [ ] Post
  - [ ] Category
  - [ ] User
- [ ] Create routes
  - [ ] Post
  - [ ] Category
  - [ ] User
- [ ] Create authentication
  - [ ] Controller
  - [ ] Middleware
  - [ ] ...
- [ ] Create test
- [ ] ...

## License

MIT
