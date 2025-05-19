#!/usr/bin/env node
import { BIWAKO_AREA } from "./data/biwako-area.js";
import { WARDS } from "./data/tokyo-23-wards.js";

const compare = Math.floor(BIWAKO_AREA / WARDS.shibuya.area);

console.log(`${WARDS.shibuya.jp}: ■`);
console.log(`琵琶湖: ${"■".repeat(compare)}`);
console.log(`${WARDS.shibuya.jp}は琵琶湖の 1/${compare} の大きさです`);
