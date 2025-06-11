import { BIWAKO } from "./data/biwako-area.js";
import { WARDS } from "./data/tokyo-23-wards.js";
import { Area } from "./area.js";
import { AreaCompare } from "./area_compare.js";
import { Random } from "./random.js";
import { Quiz } from "./quiz.js";
import { WardSelector } from "./ward_selector.js";

export class CompareWithBiwakoApp {
  constructor(values, positionals) {
    this.values = values;
    this.positionals = positionals;
  }

  async run() {
    if (this.values.quiz) {
      this.#runQuiz();
    } else if (this.values.quiz === false) {
      console.log("command not found");
    } else if (this.positionals.length === 0) {
      await this.#runWardSelect();
    } else {
      this.#runWardSearch();
    }
  }

  #runQuiz() {
    const random = new Random();
    const randomWard = random.getRandomWard();
    const compare = new AreaCompare(new Area(BIWAKO), new Area(randomWard));
    const quiz = new Quiz(compare);
    quiz.start();
  }

  async #runWardSelect() {
    const wardSelector = new WardSelector();
    const selectedWard = await wardSelector.select();
    const result = new AreaCompare(new Area(BIWAKO), new Area(selectedWard));
    console.log(result.getMessage());
  }

  #runWardSearch() {
    const matchedWard = WARDS.find((ward) =>
      ward.aliases.some((alias) =>
        alias.toLowerCase().includes(this.positionals[0])
      )
    );

    if (matchedWard === undefined) {
      console.log("\n指定された区は見つかりませんでした😢\n");
    } else {
      const result = new AreaCompare(new Area(BIWAKO), new Area(matchedWard));
      console.log(result.getMessage());
    }
  }
}
