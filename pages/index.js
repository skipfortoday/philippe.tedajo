import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reaveal, text_reaveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "One For All!" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 className="font-cairo font-semibold" variants={text_reaveal}>
        {text.content}
      </motion.h1>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p variants={text_reaveal_fade}>
            I build intuitive multiplatfrom apps with Javascipt experience. I am
            a Fullstack developer and my area of expertise is{" "}
            <a className="text-blue-400">NodeJS 🎗</a>,{" "}
            <a className="text-pink-400">ReactJS ✨</a>,{" "}
            <a className="text-green-400">React Native ♥️</a>,{" "}
            <a className="text-pink-400">ElectronJS</a>,{" "}
            <a className="text-blue-400">Redux</a>,{" "}
            <a className="text-green-400">Scss / CSS </a>,{" "}
            <a className="text-pink-400">MySQL / SQL Server</a>,{" "}
            <a className="text-green-400">Algorithms and data structure</a>,{" "}
            <a className="text-pink-400">RestFull Api</a> and{" "}
            <a className="text-blue-400">ExpressJS</a>. Love to work my passion
            for programming multiplatform apps. Ready on Mobile , Dekstop and
            Web Apps !
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
