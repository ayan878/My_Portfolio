
import SkillsImg from "../assets/img/Skills.png";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TbBrandRedux} from "react-icons/tb";
import { SiReactquery } from "react-icons/si";

import {  FaCss3Alt, FaFigma, FaJs, FaNode, FaReact } from "react-icons/fa";
import Border from "@/components/ui/Border";
import Card from "@/components/ui/Card";


function Skills() {
  return (
    <>
      <div
        id="skills"
        className="flex flex-col items-center justify-center bg-black"
        style={{
          boxShadow:
            "6px 6px -1px rgba(0,0,0,0.15), -6px -6px 10px rgba(255,255,255,0.7)",
        }}
      >
        <h1 className="text-4xl font-bold justify-items-center text-white text-center py-4">
          Skills
        </h1>
        <h3 className="text-stone-200 px-52 text-center mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
          possimus. Nihil esse soluta sint minima nemo ratione consectetur,
          delectus veniam?
        </h3>
        <div className="flex gap-2">
          <HoverCard >
            <HoverCardTrigger>
              <FaFigma className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaReact className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              React is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaNode className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <TbBrandRedux
                className="text-white w-12 h-12 py-3
              bg-purple-900 rounded-full"
              />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaJs className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaCss3Alt className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <SiReactquery className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="flex gap-2">
          <HoverCard>
            <HoverCardTrigger>
              <FaFigma className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaFigma className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaFigma className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaFigma className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaFigma className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FaFigma className="text-white w-12 h-12 py-3 bg-purple-900 rounded-full" />
            </HoverCardTrigger>
            <HoverCardContent>
              Figma is used to design template UI.
            </HoverCardContent>
          </HoverCard>
        </div>
        <img src={SkillsImg} alt="skills" />
        <Border/>
        <Card/>
      </div>
    </>
  );
}

export default Skills;
