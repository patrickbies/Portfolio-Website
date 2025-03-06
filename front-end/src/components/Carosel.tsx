import { ReactNode, useEffect, useRef } from "react";

const Carosel = ({children} : {children : ReactNode}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = (container.scrollWidth - container.clientWidth) / 2;

      scrollContainerRef.current.scrollTo({left: scrollLeft})
    }
  }, []);

  return (
    <div ref={scrollContainerRef} className="flex flex-row gap-[2vw] !w-full overflow-x-scroll">
      {children}
    </div>
  );
};

export default Carosel