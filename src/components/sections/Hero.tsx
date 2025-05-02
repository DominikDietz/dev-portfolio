import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import HeroImg from "@/assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full space-y-6 md:w-1/2">
            <div>
              <p className="text-primary mb-3 text-lg font-medium">
                Hi! I am Dominik Dietz
              </p>
              <h1 className="text-3xl leading-tight font-bold md:text-5xl lg:text-5xl">
                <span className="bg-gradient-to-r bg-clip-text">
                  Software Developer
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl dark:text-gray-300">
                Bridging design and functionality with modern JavaScript
                frameworks
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-primary dark:hover:text-primary text-gray-600 transition-colors dark:text-gray-400"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-primary dark:hover:text-primary text-gray-600 transition-colors dark:text-gray-400"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={HeroImg.src}
              alt="Hero Image"
              className="shadow-accent aspect-square h-full w-full rounded-full border-4 border-sky-900 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
