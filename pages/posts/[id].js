import { getAllPostIds } from "../../lib/posts";

export default function Post({ id }) {
  return <p>Welcome to Post {id}</p>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  return {
    props: {
      id,
    },
  };
}
