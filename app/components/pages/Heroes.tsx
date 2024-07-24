import { heroesQuery } from "@/lib/sanity.query";
import { HeroeType } from "@/types";
import EasterEgg from "../shared/EasterEgg";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";

export default async function Heroes() {
  const heroes: HeroeType[] = await sanityFetch({
    query: heroesQuery,
    tags: ["heroe"],
  });

  return (
    <section className="mt-32 max-w-5xl">
      <Slide delay={0.17}>
        {/* <h2 className="text-4xl mb-4 font-bold tracking-tight">Heroes</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          Inspired by{" "}
          <RefLink
            href="https://rafa.design"
            className="dark:text-blue-400 text-blue-500 underline"
          >
            Rafael Condo&apos;s
          </RefLink>{" "}
          heroes list, here&apos;s my own curated lineup of code conjurers and
          digital dynamos that I&apos;m absolutely stoked to meet someday.{" "}
          <strong className="font-semibold">
            &quot;In no particular order&quot;
          </strong>
        </p> */}

        <h2 className="text-4xl mb-4 font-bold tracking-tight">Achievements</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">Here are some achievements that I'm proud of:</p>
        <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Shanghai Jiao Tong University Outstanding Undergraduate Graduates</h3>
        <p className="mt-2 ml-2">Awared to one of 22 top graduating International students for the class of 2024.</p>
        <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Shanghai Jiao Tong University International Student Scholarship</h3>
        <p className="mt-2 ml-2">Awared a half tuition fee waiver for four consecutive years.</p>
      </Slide>

      {/* <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 tracking-tight">
        {heroes.map((heroe) => (
          <li
            key={heroe._id}
            className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1"
          >
            <EasterEgg isMet={heroe.met} />
            <RefLink
              href={heroe.url}
              className={`font-incognito tracking-wide hover:underline ${
                heroe.met && "dark:text-green-300 text-green-800"
              }`}
            >
              {heroe.name}
            </RefLink>
          </li>
        ))}
      </ul> */}
    </section>
  );
}
