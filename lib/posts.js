export function getAllPosts() {
  const posts = [
    {
      id: "lazyvim-beginners-guide",
      title: "Getting Started with LazyVim: A Beginner's Guide",
      date: "2023-10-15",
    },
    {
      id: "microservices-best-practices",
      title: "Microservices Architecture: Best Practices for Scalability",
      date: "2022-03-29",
    },
    {
      id: "tailwind-flexbox-guide",
      title: "Mastering Tailwind CSS: Flexbox Layouts Made Easy",
      date: "2022-03-29",
    },
    {
      id: "webassembly-frontend-performance",
      title: "ntroduction to WebAssembly: Boosting Frontend Performance",
      date: "2023-10-15",
    },
    {
      id: "nodejs-express-rest-api",
      title: "Building RESTful APIs with Node.js and Express",
      date: "2022-03-29",
    },
    {
      id: "ai-software-development-trends",
      title: "The Future of AI in Software Development: Trends and Predictions",
      date: "2022-03-29",
    },
  ];
  return posts;
}

export function getAllPostIds() {
  return [{ params: { id: "pr-rendering" } }, { params: { id: "ssg-ssr" } }];
}
