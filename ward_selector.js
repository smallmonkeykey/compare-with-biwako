import pkg from "enquirer";
import { WARDS } from "./data/tokyo-23-wards.js";

export class WardSelector {
  constructor() {
    this.wards = WARDS;
  }

  async select() {
    const { prompt } = pkg;
    const question = {
      type: "select",
      name: "ward",
      message: "琵琶湖とどの区を比べる？",
      choices: this.wards.map((ward) => ({
        name: ward.id,
        message: ward.name,
      })),
    };
    const answer = await prompt(question);
    const selectedWard = this.wards.find((ward) => ward.id === answer.ward);
    return selectedWard;
  }
}
