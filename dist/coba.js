"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("----- Data Type -----");
// explicit
let nama = "indah";
nama = "indah ra";
console.log(`namaku: ${nama}`);
// implicit
let umur = 21;
let jomblo = true;
console.log(`umurku: ${umur}`);
console.log(`jomblo: ${jomblo}`);
// Array (explicit)
let hobi = ["memasak", "menyanyi"];
hobi.push("mengaji");
// loop
for (const element of hobi) {
    console.log(element);
}
console.log(`hobi saya: ${hobi[0]}`);
// Map
const sekolah = new Map([
    ["sd", "sdn 1 sukasetia"],
    ["smp", "smpn 1 cihaurbeuti"],
]);
sekolah.set("sma", "sman 2 tasikmalaya");
// loop
for (const element of sekolah.keys()) {
    console.log(element);
}
console.log(sekolah.values());
console.log(sekolah.get("sd"));
console.log("----- Function -----");
// return type
function getNumber() {
    return 0;
}
console.log(getNumber());
// void
function getText() {
    console.log("hi aku void ");
}
getText();
// param
function hitung(a, b = 9) {
    return a * b;
}
console.log(hitung(10));
// named param
function tambah({ c, d }) {
    return c + d;
}
console.log(tambah({ c: 9, d: 9 }));
//# sourceMappingURL=coba.js.map