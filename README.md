# CanWork Blog

A simple blog website built upon Gatsby.js

## Blog-Writing

To write a blog post :
1. Navigate to files -> src -> posts, and then click the '+' icon and choose 'Create new file.' 
2. Create a file with a .md extension, e.g. `blog-post-1.md`
3. Once the file is created, you will see the file's page, but it will be empty. Click the 'edit' button on the right-hand side of the screen.
4. You can now start writing your blog. note that you MUST add these block of text at the VERY TOP of your file before adding any text.
```
---
title: 'Your Blog Title'
date: '2019-02-01'
image: 'Image Url'
---
```
5. Write the blog as usual, follow  guide [this](https://guides.github.com/features/mastering-markdown/) if you need to
6. Once you're done writing the blog, fill in the commit message and click the 'commit change' button.
7. Once commited, Gitlab's CI will do the rest for you. (WIP)

## Development

1. Download Gatsby CLI

Run `npm i gatsby-cli` in the terminal

2. Project setup 

Clone the repository and navigate to the project's folder, then run

`npm install`

Once everything is installed you can then run

`gatsby develop`

To run a local development server. You can then access it by opening `https://localhost:8000` in your browser.

3. Compiling production-ready files

Run `gatsby build`



