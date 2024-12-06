# **E-BOOKSTORE**

## **Team Members:**
- Nguyen Thien Loc - 2252460
- Tran Trung Vinh - 2252914
- Nguyen Tran Huy Viet - 2252906

## **Overview:**
The eBookstore web project will provide a platform for users to purchase and read eBooks. The website will host a wide variety of genres such as fiction, non-fiction, educational, self-help, and more. The main objective is to create a convenient, accessible, and attractive platform for book lovers.

## **How to Run:**
Open terminal and type:
```bash
  npm run dev
```
### Prerequisites:
In this project, we used:
- Frontend: ReactJS, TailwindCSS
- Backend: PostgreSQL

So you must install these framework and librares.
#### Tutorial:
First you have to download the Nodejs at this link https://nodejs.org/en
```bash
  npm create vite@latest
  cd <your-folder>
  npm install
  npm run dev
```
Then, download the tailwind at this: https://tailwindcss.com/docs/guides/vite
```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
and this is tailwind config
```bash
  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
If an error occurs in index.css when you use this:
```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
you should try this:
```bash
  @import "tailwindcss/base"; 
  @import "tailwindcss/components"; 
  @import "tailwindcss/utilities";
```
