#!/usr/bin/env node
import { BIWAKO } from "./data/biwako-area.js";
import { WARDS } from "./data/tokyo-23-wards.js";
import { Area } from "./area.js";
import { AreaCompare } from "./area_compare.js";
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

const matchedWard = WARDS.find((ward) =>
  ward.aliases.some((alias) => alias.toLowerCase().includes(positionals[0])),
);

const biwakoArea = new Area(BIWAKO);
const wardArea = new Area(matchedWard);

const result = new AreaCompare(biwakoArea, wardArea);
console.log(result.printMessage());
