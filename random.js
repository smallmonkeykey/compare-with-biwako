import { WARDS } from "./data/tokyo-23-wards.js";

export class Random {
  constructor() {
    this.wards = WARDS;
  }

  getRandomWard() {
    const index = Math.floor(Math.random() * this.wards.length);
    return this.wards[index];
  }
}
