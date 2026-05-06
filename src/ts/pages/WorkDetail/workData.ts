import suirosum from "./../../../assets/images/works/suiro.webp";
import towersum from "./../../../assets/images/works/tower.webp";
import suiro from "./../../../assets/images/workdetails/suiro.webp";
import tower from "./../../../assets/images/workdetails/adventCarendar_End_HD.webp";


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
