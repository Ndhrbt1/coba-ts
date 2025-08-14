"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("----- Object Types-----");
// explicit (declare)
// optional just use ?
const hp = {
    merk: "samsung",
    tipe: "s24",
    ram: 512,
    year: 2025,
};
hp.merk = "xiaomi";
console.log(hp);
console.log("----- Enum -----");
// also can string, and also we can add fix value to each properties
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);
console.log("----- Interface -----");
const rectangle = {
    height: 20,
    width: 10,
    color: "white",
};
console.log(rectangle);
//# sourceMappingURL=obj.js.map