import Link from "next/link";
import Layout from "../components/layout";
import UtilStyles from "../styles/utils.module.css";
import { getAllPosts, getAllPostIds } from "../lib/posts";
import { getSocialMedias } from "../lib/socialMedias";
import Image from "next/image";
import Date from "../components/Date";
import ReactMarkdown from "react-markdown";
export default function Home({ posts }) {
  const socialMedias = getSocialMedias();
  return (
    <Layout home>
      <div className="rounded-md p-3 mb-6 text-center dark:bg-zinc-800 bg-orange-50">
        Hi, I&apos;m a developer based in Paris with a passion for creating
        digital services
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-4xl font-medium leading-8">
            Abdennour Mesdour
          </div>
          <p>Developer / Designer</p>
        </div>
        <div className="overflow-hidden rounded-full w-[140px] h-[140px] bg-black">
          <Image
            src="/images/author-profile.jpg"
            width={400}
            height={385}
            alt="picture of the author"
          />
        </div>
      </div>

      <section className="mb-6">
        <h3 className="mt-3 mb-4 tex-2xmagel capitalize leading-loose font-semibold underline decoration-2">
          work
        </h3>
        <p className="indent-2 tex-justify">
          I&apos;m a full-stack developer based in Paris, passionate about
          creating impactful digital solutions. I have a knack for all things
          launching products, from planing and designing to tackling real-world
          challenges through code. So, I created this space to share some of my
          most exciting experiences as developer, including tutorials on
          emerging technologies and and insights from my journey. Stay tuned!
          I&apos;m launching a Youtube channel soon. Don&apos;t forget to check
          it out and hit that subscribe button!
        </p>
      </section>
      <section className="mb-6">
        <h3 className="mt-3 mb-4 text-2xl capitalize leading-loose font-semibold underline decoration-2">
          Bio
        </h3>
        <div className="pl-12 -indent-12 text-justify">
          <span className="font-semibold mr-2">1985</span>born in Algeria
        </div>
        <div className="pl-12 -indent-12 text-justify">
          <span className="font-semibold mr-2">2009</span>Completed engineer
          program&apos;s graduate at the university of science and technology.
          Algiers
        </div>
        <div className="pl-12 -indent-12 text-justify">
          <span className="font-semibold mr-2">2009</span>Worked as software
          integrator
        </div>
        <div className="pl-12 -indent-12 text-justify">
          <span className="font-semibold mr-2">2014</span>
          Completed Master&apos;s graduate at the university of Poitiers.
          Poitiers
        </div>
        <div className="pl-12 -indent-12 text-justify">
          <span className="font-semibold mr-2">2014</span>
          Worked at FeelEurope Paris
        </div>
        <div className="pl-12 -indent-12 text-justify">
          <span className="font-semibold mr-2">2015</span>
          Worked at Edmond de Rothshilld Group
        </div>
        <div className="pl-12 -indent-12 text-justify">
          <span className="font-semibold mr-2">2017 to present</span>
          Working at BNP Paribas Realestate
        </div>
      </section>
      <section className="mb-6">
        <h3 className="mt-3 mb-4 text-2xl capitalize leading-loose font-semibold underline decoration-2">
          I ❤️{" "}
        </h3>
        <p className="indent-2 text-justify">
          Video games, Manga, Playing guitar, Machine Learning
        </p>
      </section>
      <section className="mb-6">
        <h3 className="mt-3 mb-4  text-2xl capitalize leading-loose font-semibold underline decoration-2">
          On the web
        </h3>
        <ul>
          {socialMedias.map(({ id, profile, url, svg }) => (
            <li key={id}>
              <Link href={url}>
                <button
                  type="button"
                  className="inline-flex leading-[3rem] font-semibold items-center justify-between text-1xl text-teal-600"
                >
                  <span className="flex mr-2">
                    <svg
                      viewBox="0 0 512 512"
                      width="1em"
                      fill="currentColor"
                      className="text-teal-500"
                    >
                      <path d={svg} />
                    </svg>
                  </span>
                  {profile}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
