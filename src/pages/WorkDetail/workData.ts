import suirosum from "./../workimage/suiro.webp";
import towersum from "./../workimage/tower.webp";
import suiro from "./suirodef.webp";
import tower from "./towerdef.webp";


export type WorkItem = {
  id: string;
  title: string;
  image: string;
  thumbnail?: string;
  description: string;
};

export const worksData: WorkItem[] = [
  {
    id: "1",
    title: "小樽運河",
    image: suiro,
    thumbnail: suirosum,
    description:
      "小樽運河の写真\n春先に行ったけどちゃんと寒かった",
  },
  {
    id: "2",
    title: "さっぽろテレビ塔",
    image: tower,
    thumbnail: towersum,
    description:
      "noteにて投稿\nさっぽろテレビ塔の写真を背景にした",
  },
];