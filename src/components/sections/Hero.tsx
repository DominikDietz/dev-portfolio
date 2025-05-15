import GithubIcon from "@/assets/icons/github";
import LinkedinIcon from "@/assets/icons/linkedin";
import HeroImg from "@/assets/images/hero.jpg";

const Hero = () => {
  return (
    <section id="about" className="h-screen pt-16 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="space-y-6">
            <div>
              <p className="text-3xl leading-tight font-bold md:text-5xl lg:text-5xl">
                Hi! I am{" "}
                <span className="text-sky-700 dark:text-blue-400">Dominik</span>
              </p>
              <h1 className="text-primary mb-3 text-lg md:text-2xl">
                Software Developer
              </h1>
              <p className="text-primary/80 mt-6 text-lg md:text-xl">
                Bridging design and functionality with modern Javascript
                frameworks
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/DominikDietz"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:hover:text-primary text-gray-800 transition-transform hover:scale-110 dark:text-gray-200"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/dominik-dietz-3006a0218/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:hover:text-primary text-gray-800 transition-transform hover:scale-110 dark:text-gray-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={HeroImg.src}
              alt="Hero Image"
              decoding="async"
              className="aspect-square max-h-96 rounded-full border-3 border-sky-700 object-cover dark:border-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
