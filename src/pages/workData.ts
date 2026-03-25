import suiro from "./suiro.png";
import tower from "./tower.png";

export type WorkItem = {
  id: string;
  title: string;
  image: string;
  description: string;
};

export const worksData: WorkItem[] = [
  {
    id: "1",
    title: "水路",
    image: suiro,
    description:
      "北海道の水路の写真が背景",
  },
  {
    id: "2",
    title: "電波塔",
    image: tower,
    description:
      "noteにて投稿したもの。電波塔の写真を背景とした",
  },
];