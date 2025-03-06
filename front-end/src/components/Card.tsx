const Card = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="relative w-full h-full rounded-2xl border-border hover:border-foreground/80 transition-colors border cursor-pointer group px-10 flex flex-col">
        <h1 className="poppins-medium text-xl py-8 text-foreground/90 transition-colors group-hover:text-foreground">
          {title}
        </h1>
        <p className="poppins-regular text-lg text-foreground/60 transition-colors group-hover:text-foreground/80">
          {desc}
        </p>
        <div className="flex-grow rounded-2xl border border-border transition-colors group-hover:border-foreground/80 my-8"></div>
    </div>
  );
};

export default Card;
