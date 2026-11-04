import rug1 from "@/assets/rug-1.jpg";
import rug2 from "@/assets/rug-2.jpg";
import rug3 from "@/assets/rug-3.jpg";
import rug4 from "@/assets/rug-4.jpg";

export type Rug = {
  id: string;
  name: string;
  collection: "Heritage" | "Botanical" | "Contemporary" | "Silk";
  origin: string;
  material: string;
  knots: string;
  size: string;
  image: string;
  blurb: string;
};

export const collections = [
  "All",
  "Heritage",
  "Botanical",
  "Contemporary",
  "Silk",
] as const;

export const rugs: Rug[] = [
  {
    id: "kci-101",
    name: "Mughal Medallion",
    collection: "Heritage",
    origin: "Bhadohi",
    material: "Hand-spun New Zealand wool",
    knots: "9/9 · 121 KPSI",
    size: "8' x 10'",
    image: rug1,
    blurb:
      "A crimson court classic — the medallion redrawn from a 17th century Mughal cartoon and knotted over eleven months.",
  },
  {
    id: "kci-204",
    name: "Jungle Reverie",
    collection: "Botanical",
    origin: "Mirzapur",
    material: "Wool & bamboo silk, hand tufted",
    knots: "Loop & cut pile",
    size: "6' x 9'",
    image: rug2,
    blurb:
      "Leopards drifting through banana leaf on a blush ground. Designed for rooms that want a story on the floor.",
  },
  {
    id: "kci-318",
    name: "Ivory Fold",
    collection: "Contemporary",
    origin: "Bhadohi",
    material: "Wool with silk highlight",
    knots: "8/8 · 100 KPSI",
    size: "9' x 12'",
    image: rug3,
    blurb:
      "Quiet geometry in oat and stone — a minimal field made for architects and gallery-white interiors.",
  },
  {
    id: "kci-422",
    name: "Kashmir Indigo",
    collection: "Silk",
    origin: "Srinagar",
    material: "Pure mulberry silk",
    knots: "18/18 · 400 KPSI",
    size: "5' x 7'",
    image: rug4,
    blurb:
      "Saffron paisley on midnight indigo. Two weavers, two years, one heirloom that shifts colour as you walk past.",
  },
];
