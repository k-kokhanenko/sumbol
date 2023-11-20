import Player from '../player';

test('Player get square', () => {
  const player = new Player();
  expect(player.square).toBe(1);
});

test('Player set square', () => {
  const player = new Player();
  player.square = 5;
  const result = player.square;
  expect(player.square).toBe(5);
});

test('Player set square throw', () => {
  const player = new Player();
  expect(() => player.square = 35).toThrow('Значение клетки должно быть в диапазоне от 1 до 10');
});

test('Player get stoned', () => {
  const player = new Player();
  expect(player.stoned).toBe(true);
});

test('Player set stoned', () => {
  const player = new Player();
  player.stoned = false;
  expect(player.stoned).toBe(false);
});

test('Player set attack throw', () => {
  const player = new Player();
  expect(() => player.attack = 150).toThrow('Значение атаки должно быть в диапазоне от 0 до 100');
});

test('Player get attack', () => {
  const player = new Player();
  player.stoned = false;
  player.attack = 100;
  expect(player.attack).toBe(100);
});

test('Player get attack 2', () => {
  const player = new Player();
  player.stoned = false;
  player.attack = 100;
  player.square = 3;
  expect(player.attack).toBe(80);
});

test('Player get attack 3', () => {
  const player = new Player();
  player.stoned = true;
  player.attack = 100;
  player.square = 2;
  expect(player.attack).toBe(85);
});