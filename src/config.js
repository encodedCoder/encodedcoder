// filepath: /C:/Users/theCode/OneDrive/Desktop/portfolio-website/src/config.js
const config = {
  showBlog: process.env.NEXT_PUBLIC_SHOW_BLOG === "true",
};

{
  console.log(config.showBlog);
}

export default config;
