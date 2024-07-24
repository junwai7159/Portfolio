import { PortableText } from "@portabletext/react";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import { sanityFetch } from "@/lib/sanity.client";

import { FaGithub } from 'react-icons/fa'; // Importing Font Awesome GitHub icon
import { DiReact } from 'react-icons/di'; // Importing Devicons React icon

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
          <li className="mb-4">Python - Machine Learning</li>
          <li className="mb-4">C/C++ - System Programming</li>
          <li className="mb-4">Java - Web Development</li>
          <li className="mb-4">JavaScript - Web Development</li>
          <li className="mb-4">TypeScript - Web Development</li>
          <li className="mb-4">SQL - Web Development</li>
          <li className="mb-4">MATLAB - Modeling and Simulation</li>
        </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Programming Frameworks</h3>
        <ul className="mt-2 ml-2">
          <li className="mb-4">PyTorch - Deep Learning</li>
          <li className="mb-4">TensorFlow - Deep Learning</li>
          <li className="mb-4">scikit-learn - Machine Learning</li>
          <li className="mb-4">OpenCV - Image Processing</li>
          <li className="mb-4">NumPy - Arrays</li>
          <li className="mb-4">Pandas - Data Manipulation</li>
          <li className="mb-4">SciPy - Scientific Computing</li>
          <li className="mb-4">Matplotlib - Data Visualization</li>
          <li className="mb-4">Seaborn - Data Visualization</li>
        </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Technologies</h3>
        <ul className="mt-2 ml-2">
          <li className="mb-4">Git - Version Control System</li>
          <li className="mb-4">Node - JavaScript Runtime Environment</li>
          <li className="mb-4">React - Frontend JavaScript Library</li>
          <li className="mb-4">Express - Web Framework for Node.js</li>
          <li className="mb-4">Nginx - Web Server</li>
          <li className="mb-4">Sanity - Headless CMS</li>
          <li className="mb-4">Tailwind CSS - Styling Library</li>
          <li className="mb-4">MongoDB - NoSQL Database</li>
          <li className="mb-4">MySQL - Relational Database</li>
          <li className="mb-4">Docker - Container</li>
          <li className="mb-4">Qt - GUI</li>
        </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Tools</h3>
        <ul className="mt-2 ml-2">
          <li className="mb-4">Visual Studio Code - Code Editor</li>
          <li className="mb-4">PyCharm - Python IDE</li>
          <li className="mb-4">Git Bash - Git Terminal</li>
          <li className="mb-4">GitHub Copilot - AI Coding Assistant</li>
          <li className="mb-4">Notion - Git Terminal</li>
        </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Platform</h3>
        <ul className="mt-2 ml-2">
          <li className="mb-4">GitHub - Version Control / Hosting Service</li>
          <li className="mb-4">Vercel - Hosting</li>
          <li className="mb-4">Render - Hosting</li>
          <li className="mb-4">Steam - Gaming</li>
        </ul>
    </section>
  );
}
