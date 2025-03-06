import Banner from "./components/Banner";

import ThreeDImg from "assets/img/services/3d.jpg";
import AnimationImg from "assets/img/services/animation.jpg";
import ChatImg from "assets/img/services/chat.jpg";
import ComicImg from "assets/img/services/comics.jpg";
import GamingImg from "assets/img/services/gaming.jpg";
import ImageImg from "assets/img/services/image.jpg";
import MusicImg from "assets/img/services/music.jpg";
import NarrativeImg from "assets/img/services/narrative.jpg";

import ServiceCard from "components/card/ServiceCard";
import {
  MdMovie,
  MdBook,
  MdImage,
  MdBookmark,
  MdMusicNote,
  MdGamepad,
  Md3DRotation,
  MdChat,
} from "react-icons/md";

interface ServiceList {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  list: string[];
  image: string;
  bgColor: string;
}
const Marketplace = () => {
  const serviceList: ServiceList[] = [
    {
      title: "Image Generation",
      subTitle: "Create images with Stable Diffusion",
      icon: <MdImage className="mr-4 h-10 w-10 text-white" />,
      list: ["High quality generation", "Style control", "Advanced edition"],
      image: ImageImg,
      bgColor: "bg-purple-500",
    },
    {
      title: "Narrative",
      subTitle: "Create stories, scenes and characters",
      icon: <MdBook className="mr-4 h-10 w-10 text-white" />,
      list: ["Frame generation", "Character development", "NovelAI style"],
      image: NarrativeImg,
      bgColor: "bg-blue-500",
    },
    {
      title: "Comics and Manga",
      subTitle: "Design and create comics",
      icon: <MdBookmark className="mr-4 h-10 w-10 text-white" />,
      list: ["Automatic panels", "Manga styles", "Dynamic dialogues"],
      image: ComicImg,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Animation",
      subTitle: "Create animations and motion graphics",
      icon: <MdMovie className="mr-4 h-10 w-10 text-white" />,
      list: ["2D/3D Animation", "Motion capture", "Special effects"],
      image: AnimationImg,
      bgColor: "bg-green-500",
    },
    {
      title: "Audio and Voice",
      subTitle: "Generate synthetic music and voices",
      icon: <MdMusicNote className="mr-4 h-10 w-10 text-white" />,
      list: ["Voice synthesis", "Musical composition", "Sound effects"],
      image: MusicImg,
      bgColor: "bg-red-500",
    },
    {
      title: "Game Creation",
      subTitle: "Develop games with AI",
      icon: <MdGamepad className="mr-4 h-10 w-10 text-white" />,
      list: ["Level Generation", "Smart NPCs", "Game systems"],
      image: GamingImg,
      bgColor: "bg-blue-500",
    },
    {
      title: "3D Creation",
      subTitle: "Design 3D characters and scenarios",
      icon: <Md3DRotation className="mr-4 h-10 w-10 text-white" />,
      list: ["3D modeling", "Texturing", "Automatic rigging"],
      image: ThreeDImg,
      bgColor: "bg-cyan-500",
    },
    {
      title: "Chat with Characters",
      subTitle: "Interact with AI characters",
      icon: <MdChat className="mr-4 h-10 w-10 text-white" />,
      list: ["Unique characters", "Contextual memory", "Character.ai style"],
      image: ChatImg,
      bgColor: "bg-pink-300",
    },
  ];
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 ">
      <div className="col-span-2 h-fit w-full  2xl:col-span-4">
        <Banner />

        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            AI Creation Tools
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                <a href=" ">All</a>
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Illustration
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Manga
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Novels
              </a>
            </li>
          </ul>
        </div>

        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {serviceList.map((service, key) => (
            <ServiceCard
              key={key}
              list={service.list}
              title={service.title}
              author={service.subTitle}
              image={service.image}
              bgColor={service.bgColor}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
