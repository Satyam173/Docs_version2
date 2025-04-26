import { useRef } from "react";
import Card from "./Card";


function Foreground() {
const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColour: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "0.5mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColour: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "0.2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColour: "green",
      },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-8 flex-wrap p-5">
      {data.map((item) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
