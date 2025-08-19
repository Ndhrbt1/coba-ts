console.log("----- Object Types-----");
// explicit (declare)
// optional just use ?
const hp: {
  merk: string;
  tipe: string;
  ram: number;
  year?: number;
} = {
  merk: "samsung",
  tipe: "s24",
  ram: 512,
  year: 2025,
};
hp.merk = "xiaomi";
console.log(hp);

console.log("----- Enum -----");
// also can string, and also we can add fix value to each properties
enum CardinalDirections {
  North = 1,
  East,
  South,
  West,
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);

console.log("----- Interface -----");
interface Rectangle {
  height: number;
  width: number;
}

const rectangley: Partial<Rectangle> = {
  height: 0,
  // width: 0,
};
console.log(rectangley);

// extends
interface Rectanglex extends Rectangle {
  color: string;
}
const rectangle: Required<Rectanglex> = {
  height: 20,
  width: 10,
  color: "white",
};
console.log(rectangle);
