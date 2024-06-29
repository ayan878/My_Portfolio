import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { stagger, useAnimate } from "framer-motion";

interface HoverButton{
    name:string
}
const HoverLink:React.FC<HoverButton>=({name})=> {
  const [scope, animate] = useAnimate();
  const letter = name;
  const onLinkHover = () => {
    animate([
      [".letter", { y: -32 }, { duration: 0.5, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      [".letter", { y: 0 }, { duration: 0.0000001, at: 0.5 }],
    ]);
  };

  return (
    <div ref={scope}>
      <ScrollLink
        to={name.toLowerCase()}
        smooth={true}
        duration={500}
        onMouseOver={onLinkHover}
       
        className="text-2xl flex items-center font-paytone px-6 py-2 text-yellow-300 cursor-pointer justify-between "
      >
        <span className="sr-only">{name}</span>
        <span className="h-8 overflow-hidden flex" aria-hidden>
          <span
            data-letter={letter}
            className="letter inline-block leading-8 relative h-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
          >
            {letter}
          </span>
        </span>
      </ScrollLink>
    </div>
  );
}

export default HoverLink;
