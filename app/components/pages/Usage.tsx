import { PortableText } from "@portabletext/react";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import { sanityFetch } from "@/lib/sanity.client";

export default async function Usage() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl mb-4">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      {profile.map((textBlock, id) => (
        <PortableText
          key={id}
          value={textBlock.usage}
          components={CustomPortableTextFavicon}
        />
      ))}
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Programming Languages</h3>
      <ul className="mt-2 ml-2">
          <li className="mb-4">Python</li>
          <li className="mb-4">C/C++</li>
          <li className="mb-4">Java</li>
          <li className="mb-4">JavaScript</li>
          <li className="mb-4">TypeScript</li>
          <li className="mb-4">SQL</li>
          <li className="mb-4">MATLAB</li>
        </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Programming Frameworks</h3>
        <ul className="mt-2 ml-2">
          <li className="mb-4">PyTorch</li>
          <li className="mb-4">TensorFlow</li>
          <li className="mb-4">OpenCV</li>
          <li className="mb-4">NumPy</li>
          <li className="mb-4">Pandas</li>
          <li className="mb-4">SciPy</li>
          <li className="mb-4">Matplotlib</li>
          <li className="mb-4">Seaborn</li>
        </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Technologies</h3>
        <ul className="mt-2 ml-2">
          <li className="mb-4">Git</li>
          <li className="mb-4">Node</li>
          <li className="mb-4">React</li>
          <li className="mb-4">Express</li>
          <li className="mb-4">Nginx</li>
          <li className="mb-4">MongoDB</li>
          <li className="mb-4">MySQL</li>
          <li className="mb-4">Docker</li>
          <li className="mb-4">Qt</li>
        </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Tools</h3>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Platform</h3>
        <ul className="mt-2 ml-2">
          <li className="mb-4">GitHub</li>
          <li className="mb-4">Vercel</li>
          <li className="mb-4">Render</li>
          <li className="mb-4">Steam</li>
        </ul>
    </section>
  );
}
