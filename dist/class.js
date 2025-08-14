"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manusia {
    nama;
    umur;
    //   nama: string;
    //   umur: number;
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
        (this.nama = nama), (this.umur = umur);
    }
    getName() {
        return this.nama;
    }
    getUmur() {
        return this.umur;
    }
    haloDek() {
        console.log("i always loving u 'till rn");
    }
}
class Mahasiswa extends Manusia {
    fakultas;
    jurusan;
    angkatan;
    constructor(fakultas, jurusan, angkatan) {
        super("f----", 22);
        (this.fakultas = fakultas),
            (this.jurusan = jurusan),
            (this.angkatan = angkatan);
    }
    haloDek() {
        console.log("'till 7 years u still not loving me");
    }
}
const mahasiswa = new Mahasiswa("edu", "gatau", 2022);
console.log(mahasiswa.getName());
console.log(mahasiswa.getUmur());
console.log(mahasiswa.fakultas);
console.log(mahasiswa.jurusan);
console.log(mahasiswa.angkatan);
mahasiswa.haloDek();
class Gaji {
    golongan;
    bayaran;
    nama;
    umur;
    constructor(golongan, bayaran, nama, umur) {
        (this.golongan = golongan),
            (this.bayaran = bayaran),
            (this.nama = nama),
            (this.umur = umur);
    }
    hitung() {
        return this.golongan * this.bayaran;
    }
}
const gaji = new Gaji(3, 5000000, "fresh graduate", 22);
console.log(gaji);
console.log(gaji.hitung());
//# sourceMappingURL=class.js.map