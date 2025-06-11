export class AreaCompare {
  constructor(biwakoArea, wardArea) {
    this.wardName = wardArea.name;
    this.wardArea = wardArea.area;
    this.biwakoName = biwakoArea.name;
    this.biwakoArea = biwakoArea.area;
  }

  getRatio() {
    return Math.floor(this.biwakoArea / this.wardArea);
  }

  getMessage() {
    const ratio = this.getRatio();
    return `\n${this.wardName}: ■\n琵琶湖: ${"■".repeat(ratio)}\n\n${this.wardName}は琵琶湖の 1/${ratio} の大きさです\n`;
  }
}
