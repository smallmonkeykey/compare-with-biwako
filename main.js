#!/usr/bin/env node
import * as util from "node:util";
import { CompareWithBiwakoApp } from "./compare_with_biwako_app.js";

try {
  const { values, positionals } = util.parseArgs({
    allowPositionals: true,
    options: {
      quiz: {
        type: "boolean",
        short: "q",
      },
    },
  });
  const app = new CompareWithBiwakoApp(values, positionals);
  await app.run();
} catch (e) {
  console.error(e.message);
}
