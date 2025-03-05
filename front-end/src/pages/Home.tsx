import Card from "@/components/Card";
import Header from "@/components/Header";
import Background from "@/components/herobackground";

const Home = () => {
  return (
    <main className="bg-background">
      <Header />
      <body className="px-[2.5vw] pt-[10vh]">
        <section className="relative h-[93vh] w-full rounded-2xl shadow-xl overflow-hidden">
          <div className="relative z-10 flex flex-col items-center py-[10vh]">
            <h1 className="text-[15vw] md:text-[10vw] poppins-semibold lh">
              Patrick Bies
            </h1>
            <h4 className="text-[5vw] md:text-[3vw] text-center poppins-medium mt-[1vh]">
              Developing innovative
              <br />
              Software Solutions
            </h4>
          </div>
          <Background />
        </section>
        <section className="flex flex-col items-center mt-[4vh]">
          <div className="absolute"><div id="projects" className="relative top-[-12vh]"></div></div>
          <h1 className="text-3xl poppins-semibold text-foreground/80">
            Recent Projects
          </h1>
          <div className="flex flex-row gap-[2vw] my-[4vh]">
            <div className="w-[30vw] h-[70vh]">
              <Card title="iGEM Wiki" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate." />
            </div>
            <div className="w-[30vw] h-[70vh]">
              <Card title="Convolutional Neural Network" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate." />
            </div>
            <div className="w-[30vw] h-[70vh]">
              <Card title="Ai Code Editor" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate." />
            </div>
          </div>
        </section>
      </body>
      <footer className="w-full border-t h-[20vh]">

      </footer>
    </main>
  );
};

export default Home;
