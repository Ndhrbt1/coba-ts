abstract class Manusia {
  //   nama: string;
  //   umur: number;

  constructor(private nama: string, protected umur: number) {
    (this.nama = nama), (this.umur = umur);
  }

  getName(): string {
    return this.nama;
  }
  getUmur(): number {
    return this.umur;
  }

  haloDek(): void {
    console.log("i always loving u 'till rn");
  }
}

class Mahasiswa extends Manusia {
  fakultas: string;
  jurusan: string;
  angkatan: number;
  constructor({
    fakultas,
    jurusan,
    angkatan,
  }: {
    fakultas: string;
    jurusan: string;
    angkatan: number;
  }) {
    super("f----", 22);
    (this.fakultas = fakultas),
      (this.jurusan = jurusan),
      (this.angkatan = angkatan);
  }

  override haloDek(): void {
    console.log("'till 7 years u still not loving me");
  }
}
const mahasiswa = new Mahasiswa({
  fakultas: "edu",
  jurusan: "gatau",
  angkatan: 2022,
});
console.log(mahasiswa.getName());
console.log(mahasiswa.getUmur());
console.log(mahasiswa.fakultas);
console.log(mahasiswa.jurusan);
console.log(mahasiswa.angkatan);
mahasiswa.haloDek();

interface Dosen {
  nama: string;
  umur: number;
}

class Gaji implements Dosen {
  golongan: number;
  bayaran: number;
  nama: string;
  umur: number;

  constructor(golongan: number, bayaran: number, nama: string, umur: number) {
    (this.golongan = golongan),
      (this.bayaran = bayaran),
      (this.nama = nama),
      (this.umur = umur);
  }

  hitung(): number {
    return this.golongan * this.bayaran;
  }
}

const gaji = new Gaji(3, 5000000, "fresh graduate", 22);
console.log(gaji);
console.log(gaji.hitung());
