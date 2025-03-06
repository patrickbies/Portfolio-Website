import Card from "@/components/Card";
import Carosel from "@/components/Carosel";
import Header from "@/components/Header";
import Background from "@/components/herobackground";
import { ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <main className="bg-background">
      <Header />
      <body className="px-[2.5vw] pt-[10vh]">
        <section className="relative h-[93vh] w-full rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between">
          <div className="relative z-10 flex flex-col items-center py-[10vh]">
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] poppins-semibold lh">
              Patrick Bies
            </h1>
            <h4 className="text-[5vw] md:text-[3vw] text-foreground/80 text-center roboto-mono-regular mt-[1vh]">
              Developing Innovative
              <br />
              Software Solutions
            </h4>
            <div className="flex gap-[1vh] sm:gap-[5vw] flex-col sm:flex-row mt-[9vh] poppins-medium">
              <a
                href="https://github.com/patrickbies"
                className="w-[25vw] md:w-[12vw] lg:w-[10vw] transition-colors bg-foreground/80 text-background hover:bg-foreground cursor-pointer text-center py-2 rounded-lg"
              >
                Github
              </a>
              <a
                href="#contact"
                className="w-[25vw] md:w-[12vw] lg:w-[10vw] transition-colors bg-foreground/80 text-background hover:bg-foreground cursor-pointer text-center py-2 rounded-lg"
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-bies-76b757308/"
                className="w-[25vw] md:w-[12vw] lg:w-[10vw] bg-foreground/80 transition-colors text-background hover:bg-foreground cursor-pointer text-center py-2 rounded-lg"
              >
                Linkedin
              </a>
            </div>
          </div>
          <a
            href="#projects"
            className="w-full flex justify-center items-center z-10 mb-[4vh]"
          >
            <ChevronDown />
          </a>
          <Background />
        </section>
        <section className="flex flex-col items-center mt-[4vh]">
          <div className="absolute">
            <div id="projects" className="relative top-[-13vh]"></div>
          </div>
          <h1 className="text-3xl poppins-semibold text-foreground/80 mb-[4vh]">
            Recent Projects
          </h1>
          <Carosel>
            <div className="w-[30vw] min-w-[325px] h-[70vh]">
              <Card
                title="iGEM Wiki"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate."
              />
            </div>
            <div className="w-[30vw] min-w-[325px] h-[70vh]">
              <Card
                title="Convolutional Neural Network"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate."
              />
            </div>
            <div className="w-[30vw] min-w-[325px] h-[70vh]">
              <Card
                title="Ai Code Editor"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate."
              />
            </div>
          </Carosel>
        </section>
        <section className="flex flex-col items-center mt-[4vh]">
          <div className="absolute">
            <div id="contact" className="relative top-[-13vh]"></div>
          </div>
          <h1 className="text-3xl poppins-semibold text-foreground/80 mb-[4vh]">
            Contact
          </h1>
        </section>
      </body>
      <footer className="w-full border-t h-[20vh]"></footer>
    </main>
  );
};

export default Home;
