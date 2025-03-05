import Background from "@/components/herobackground";

const Home = () => {
  return (
    <div className="bg-background">
      <header className="h-[5vw] w-full">{/* Header content */}</header>
      <div className="px-[2.5vw]">
        <div className="relative h-[93vh] w-full rounded-2xl shadow-xl overflow-hidden">
          <div className="relative z-50 flex justify-center">
            <h1 className="text-8xl poppins-semibold">Patrick Bies</h1>
          </div>
          <Background />
        </div>
        <div className="flex justify-center">
        <h1 className="text-3xl poppins-semibold text-foreground w-[25vw] pt-[4vh] pl-[5vw]">
          Technologies
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
