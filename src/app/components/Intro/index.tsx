import Image from "next/image";
import { Button } from "../Button";
import { Github, Linkedin } from "lucide-react";

const Intro = () => {
  return (
    <>
      {/* Left side */}
      <div className="mx-12">
        <h1 className="font-sans text-4xl font-bold">Hey, I&apos;m Alan! 🇲🇽</h1>
        <h2 className="font-sans text-xl w-[500px] mt-4">
          A decade of experience in software development, mostly in startups.
          I&apos;m fan of the challenges that they came up. I enjoy playing any
          kind of games, I believe they can give you the ability to think
          creatively and critically. <br />
          Testing advocate.
        </h2>
        <div className="mt-8 flex flex-row justify-between">
          {/* Buttons to my links */}
          <Button title="Portfolio" url="/portfolio" />
          <Button img={<Github />} url="https://github.com/alannnc" />
          <Button img={<Linkedin />} url="https://linkedin.com/in/alannnc" />
          <Button title="X" url="https://x.com/alannnc_" />
        </div>
      </div>
      {/* Right side */}
      <div className="mx-12">
        <Image
          alt="Alan"
          title={"Alan"}
          src={"/profile_picture.png"}
          width={250}
          height={250}
          className="rounded-full w-[250px] h-[250px] border-4 border-spacing-1 border-indigo-200"
        />
      </div>
    </>
  );
};

export { Intro };
