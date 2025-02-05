import "./Home.css";

const Home = () => {
  const grid_rows = 3;
  const grid_size = 100 / 3;
  let opacities: Array<Array<number>> = [];

  for (let i = 0; i < grid_rows; i++) {
    let _row: number[] = [];

    for (
      let j = 0;
      j < Math.ceil(window.innerWidth / (window.innerHeight / 3.0));
      j++
    ) {
      _row.push(Math.random()/20);
    }

    opacities.push(_row);
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white px-6 overflow-x-hidden overflow-y-auto">
      {/* Grid Background */}
        {opacities.map((row, i) =>
          row.map((item, j) => (
            <div
              key={`${i}-${j}`}
              className="absolute bg-white"
              style={{
                left: `${j * grid_size}vh`,
                top: `${i * grid_size}vh`,
                width: `${grid_size}vh`,
                height: `${grid_size}vh`,
                opacity: item,
              }}
            >{i} {j} </div>
          ))
        )}

      {/* Hero Content */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          <div className="text-white/90">Patrick Bies</div>
          <div className="text-white/90">Software Developer</div>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Computer Science and Mathematics student at the University of Ottawa
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition">
            Get resume
          </button>
          <button className="px-6 py-3 border border-white/20 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
