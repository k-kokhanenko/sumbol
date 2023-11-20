export default class Player {
  constructor() {
    this._attack = 0;
    this._stoned = true;
    this._square = 1;
  }

  get square() {
    return this._square;
  }

  set square(value) {
    if (value > 0 && value <= 10) {
      this._square = value;
    } else {
      throw new Error('Значение клетки должно быть в диапазоне от 1 до 10');
    }
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  set attack(value) {
    if (value >= 0 && value <= 100) {
      this._attack = value;
    } else {
      throw new Error('Значение атаки должно быть в диапазоне от 0 до 100');
    }
  }

  get attack() {
    if (!this._stoned) {
      if (this._square == 1) {
        return this._attack;
      }
      return this._attack * (1 - (this._square - 1) / 10);
    } else {
      let stonedValue = Math.log(this._square) / Math.log(2) * 5;
      if (this._square == 1) {
        return this._attack - stonedValue;
      }
      return this._attack * (1 - (this._square - 1) / 10) - stonedValue;
    }
  }
}
