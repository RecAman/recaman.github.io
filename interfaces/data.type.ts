import { StaticImageData } from "next/image";

export type CardsData = {
  srcVideo?: string;
  srcImg?: string | StaticImageData;
  label?: string;
  title?: string;
  headingOne?: string;
  headingTwo?: string;
  headingThree?: string;
  headingFour?: string;
  headingFive?: string;
  headingSix?: string;
  description?: string;
  alt?: string;
  width?: number;
  height?: number;
  href?: string;
  desc?: { text: string; }[];
  location?: string;
};
