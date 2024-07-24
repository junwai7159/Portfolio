import { PortableText } from "@portabletext/react";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import { sanityFetch } from "@/lib/sanity.client";

// icons
import Image from "next/image";

import pythonlogo from "@/public/python.svg";
import clogo from "@/public/c.svg";
import javalogo from "@/public/java.svg";
import jslogo from "@/public/js.svg";
import tslogo from "@/public/ts.svg";
import sqllogo from "@/public/sql.svg";
import matlablogo from "@/public/matlab.svg";

import pytorchlogo from "@/public/pytorch.svg";
import tensorflowlogo from "@/public/tensorflow.svg";
import scikitlearnlogo from "@/public/scikit-learn.svg";
import opencvlogo from "@/public/opencv.svg";
import numpylogo from "@/public/numpy.svg";
import pandaslogo from "@/public/pandas.svg";
import scipylogo from "@/public/scipy.png";
import matplotliblogo from "@/public/matplotlib.svg";
import seabornlogo from "@/public/seaborn.svg";

import gitlogo from "@/public/git.svg";
import nodelogo from "@/public/nodejs.svg";
import reactlogo from "@/public/react.svg";
import expresslogo from "@/public/express.svg";
import nginxlogo from "@/public/nginx.svg";
import sanitylogo from "@/public/sanity.png";
import tailwindlogo from "@/public/tailwind.svg";
import mongodblogo from "@/public/mongodb.svg";
import mysqllogo from "@/public/mysql.svg";
import dockerlogo from "@/public/docker.svg";
import qtlogo from "@/public/qt.svg";

import vscodelogo from "@/public/vscode.svg";
import pycharmlogo from "@/public/pycharm.svg";
import copilotlogo from "@/public/copilot.png";
import notionlogo from "@/public/notion.svg";

import githublogo from "@/public/github.svg";
import vercellogo from "@/public/vercel.svg";
import spotifylogo from "@/public/spotify.svg";
import steamlogo from "@/public/steam.svg";

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

      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Programming Languages</h3>
      <ul className="mt-2 ml-2">
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={pythonlogo} width={20} height={20} alt="python logo" />
            <span className="ml-2">Python - Machine Learning & Data Science</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={clogo} width={20} height={20} alt="c logo" />
            <span className="ml-2">C/C++ - System  Programming</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={javalogo} width={20} height={20} alt="java logo" />
            <span className="ml-2">Java - Web Development</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={jslogo} width={20} height={20} alt="js logo" />
            <span className="ml-2">JavaScript - Web Development</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={tslogo} width={20} height={20} alt="ts logo" />
            <span className="ml-2">TypeScript - Web Development</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={sqllogo} width={20} height={20} alt="sql logo" />
            <span className="ml-2">SQL - Web Development</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={matlablogo} width={20} height={20} alt="matlab logo" />
            <span className="ml-2">MATLAB - Modeling and Simulation</span>
          </div>
        </li>
      </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Programming Frameworks</h3>
      <ul className="mt-2 ml-2">
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={pytorchlogo} width={20} height={20} alt="pytorch logo" />
            <span className="ml-2">PyTorch - Deep Learning</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={tensorflowlogo} width={20} height={20} alt="tensorflow logo" />
            <span className="ml-2">TensorFlow - Deep Learning</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={scikitlearnlogo} width={20} height={20} alt="scikitlearn logo" />
            <span className="ml-2">scikit-learn - Machine Learning</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={opencvlogo} width={20} height={20} alt="opencv logo" />
            <span className="ml-2">OpenCV - Image Processing</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={numpylogo} width={20} height={20} alt="numpy logo" />
            <span className="ml-2">NumPy - Arrays</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={pandaslogo} width={20} height={20} alt="pandas logo" />
            <span className="ml-2">Pandas - Data Manipulation</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={scipylogo} width={20} height={20} alt="scipy logo" />
            <span className="ml-2">SciPy - Scientific Computing</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={matplotliblogo} width={20} height={20} alt="matplotlib logo" />
            <span className="ml-2">Matplotlib - Data Visualization</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={seabornlogo} width={20} height={20} alt="seaborn logo" />
            <span className="ml-2">Seaborn - Data Visualization</span>
          </div>
        </li>
      </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Technologies</h3>
      <ul className="mt-2 ml-2">
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={gitlogo} width={20} height={20} alt="git logo" />
            <span className="ml-2">Git - Version Control System</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={nodelogo} width={20} height={20} alt="node logo" />
            <span className="ml-2">Node - JavaScript Runtime Environment</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={reactlogo} width={20} height={20} alt="react logo" />
            <span className="ml-2">React - Frontend JavaScript Library</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={expresslogo} width={20} height={20} alt="express logo" />
            <span className="ml-2">Express - Web Framework for Node.js</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={nginxlogo} width={20} height={20} alt="nginx logo" />
            <span className="ml-2">Nginx - Web Server</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={sanitylogo} width={20} height={20} alt="sanity logo" />
            <span className="ml-2">Sanity - Headless CMS</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={tailwindlogo} width={20} height={20} alt="tailwind logo" />
            <span className="ml-2">Tailwind CSS - Styling Library</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={mongodblogo} width={20} height={20} alt="mongodb logo" />
            <span className="ml-2">MongoDB - NoSQL Database</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={mysqllogo} width={20} height={20} alt="mysql logo" />
            <span className="ml-2">MySQL - Relational Database</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={dockerlogo} width={20} height={20} alt="docker logo" />
            <span className="ml-2">Docker - Container</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={qtlogo} width={20} height={20} alt="qt logo" />
            <span className="ml-2">Qt - GUI</span>
          </div>
        </li>
      </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Tools</h3>
      <ul className="mt-2 ml-2">
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={vscodelogo} width={20} height={20} alt="vscode logo" />
            <span className="ml-2">Visual Studio Code - Code Editor</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={pycharmlogo} width={20} height={20} alt="pycharm logo" />
            <span className="ml-2">PyCharm - Python IDE</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={gitlogo} width={20} height={20} alt="gitbash logo" />
            <span className="ml-2">Git Bash - Git Terminal</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={copilotlogo} width={20} height={20} alt="copilot logo" />
            <span className="ml-2">GitHub Copilot - AI Coding Assistant</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={notionlogo} width={20} height={20} alt="notion logo" />
            <span className="ml-2">Notion - Productivity</span>
          </div>
        </li>
      </ul>
      <h3 className="font-incognito font-semibold text-2xl mt-6 mb-2">Platform</h3>
      <ul className="mt-2 ml-2">
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={githublogo} width={20} height={20} alt="github logo" />
            <span className="ml-2">GitHub - Version Control / Hosting Service</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={vercellogo} width={20} height={20} alt="vercel logo" />
            <span className="ml-2">Vercel - Hosting</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={spotifylogo} width={20} height={20} alt="spotify logo" />
            <span className="ml-2">Spotify - Music</span>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <Image src={steamlogo} width={20} height={20} alt="steam logo" />
            <span className="ml-2">Steam - Gaming</span>
          </div>
        </li>
      </ul>

      <div className="mt-6">
        {profile.map((textBlock, id) => (
          <PortableText
            key={id}
            value={textBlock.usage}
            components={CustomPortableTextFavicon}
          />
        ))}
      </div>
    </section>
  );
}
