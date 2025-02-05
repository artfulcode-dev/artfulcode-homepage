export function getAllPosts() {
  const posts = [
    {
      id: "pre-rendering",
      title: "When to use static generation Vs Server Side rendering",
      date: "2022-01-01",
    },
    {
      id: "ssg-ssr",
      title: "Two forms of Pre-rendering",
      date: "2022-03-22",
    },
  ];
  return posts;
}

export function getAllPostIds() {
  return [{ params: { id: "pr-rendering" } }, { params: { id: "ssg-ssr" } }];
}
