#!/usr/bin/env node
import { BIWAKO } from "./data/biwako-area.js";
import { WARDS } from "./data/tokyo-23-wards.js";
import { Area } from "./area.js";
import { AreaCompare } from "./area_compare.js";
import { Random } from "./random.js";
import { Quiz } from "./quiz.js";
import { WardSelector } from "./ward_selector.js";
import * as util from "node:util";

const { values, positionals } = util.parseArgs({
  allowPositionals: true,
  options: {
    quiz: {
      type: "boolean",
      short: "q",
    },
  },
});

if (values.quiz) {
  const random = new Random();
  const randomWard = random.getRandomWard();
  const randomWardArea = new Area(randomWard);
  const biwakoArea = new Area(BIWAKO);
  const wardArea = new Area(randomWardArea);
  const compare = new AreaCompare(biwakoArea, wardArea);
  const quiz = new Quiz(compare);
  quiz.start();
} else {

 if (positionals[0] === undefined){
    (async () => {
      const wardSelector = new WardSelector();
      const selectedWard = await wardSelector.select();

      const biwakoArea = new Area(BIWAKO);
      const wardArea = new Area(selectedWard);

      const result = new AreaCompare(biwakoArea, wardArea);
      console.log(result.printMessage());
    })();

 }else{
   const matchedWard = WARDS.find((ward) =>
     ward.aliases.some((alias) => alias.toLowerCase().includes(positionals[0]))
   );

   if (matchedWard === undefined) {
     console.log("\n指定された区は見つかりませんでした😢\n");
   } else {
     const biwakoArea = new Area(BIWAKO);
     const wardArea = new Area(matchedWard);

     const result = new AreaCompare(biwakoArea, wardArea);
     console.log(result.printMessage());
   }
 }
}
