import Link from "next/link";
import Layout from "../components/layout";
import UtilStyles from "../styles/utils.module.css";
import Date from "../components/Date";
import { getAllPosts, getAllPosIds } from "../lib/posts";

const posts = function () {
  const posts = getAllPosts();

  return (
    <Layout>
      <article className={`${UtilStyles.headingMd} ${UtilStyles.padding1px}`}>
        <div className="w-full">
          <h3 className="leading-loose text-2xl mb-6">Popular Posts</h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map(({ id, title, date }) => (
              <li key={id} className="text-teal-600">
                <Link href={`posts/${id}`}>{title}</Link>
                <br />
                <small className={UtilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default posts;
