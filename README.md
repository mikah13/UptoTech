
# UptoTech

Introducing a full-stack Next.js application designed to aggregate and display blog posts from the top tech companies in real-time. 


## Tech Stack

**Framework:** React, Next.js

**Styling:** TalwindCSS, Shadcn

**Libraries:** cheerio 

**Hosting:** Vercel


## Installation

Clone the project

```bash
  git clone https://github.com/mikah13/UptoTech
```

Go to the project directory

```bash
  cd uptotech
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`BASE_URL`


If you host it locally, it would look like:


```
BASE_URL=http://localhost:3000
```

## Add a new blog platform

Edit `blogs.config.ts` file to add a new platform. 

- Create a new JSON object for the blog platform and mark as const. This JSON object needs to follow the type structure of `PAGEFIELD` which is defined in type.ts. Example would look like below:

```js
const BLOG_PLATFORM = {
  platform: 'Name of platform',
  url: 'link to the page',
  postSelector: 'selector to each of blog item',
  title: 'selector to title',
  link: 'selector to link',
  date: 'selector to date',
  thumbnail: 'selector to thumbnail',
  tags: 'selector to tags. can take multiple tags.',
  dateConversion: 'date conversion function, defined in types',
};

```

- Then you need to add this object to `BLOGS_TO_FETCH`

``` ts
export const BLOGS_TO_FETCH: Record<string, PageField> = {
  Google: GOOGLE_BLOG,
  Meta: META_BLOG,
  IBM: IBM_BLOG,
  Lyft: LYFT_BLOG,
  GitHub: GITHUB_BLOG,
  Amazon: AMAZON_BLOG,
  Dropbox: DROPBOX_BLOG,
  NewBlog: BLOG_PLATFORM
};
```

## Roadmap

* [ ] Add more platforms

* [ ] Store blog posts in database

* [ ] Add searching/filtering ability

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)

