import pkg from "enquirer";

export class Quiz {
  constructor(compare) {
    this.compare = compare;
    this.correctNumber = compare.getRatio();
  }

  start() {
    const { prompt } = pkg;
    (async () => {
      const question = {
        type: "select",
        name: "ratio",
        message: `\n問題: 琵琶湖は${this.compare.wardName}の何倍？`,
        choices: this.#makeChoice(),
      };
      const answer = await prompt(question);
      if (Number(answer.ratio) === this.correctNumber) {
        console.log(`\n正解🥳 琵琶湖は渋谷区の${this.correctNumber}倍です\n`);
      } else {
        console.log(`\n不正解😭 正解は${this.correctNumber}倍です\n`);
      }
    })();
  }

  #makeChoice() {
    const numbers = [];
    for (let number = 1; number < 100; number += 1) {
      numbers.push(number);
    }

    const IncorrectNumbers = numbers.filter(
      (number) => number !== this.correctNumber,
    );

    const selectedNumbers = this.#shuffle(IncorrectNumbers).slice(0, 3);
    selectedNumbers.push(this.correctNumber);
    return this.#shuffle(selectedNumbers).map(String);
  }

  #shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
