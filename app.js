Vue.component('sapa', {
  template: "<p>Hai {{nama}} yang ada di sana mari belajar Vue JS. <button @click='gantiNama'>Ganti nama</button></p>",
  data: function () {
    return {
      nama: 'Subhan',
    };
  },
  methods: {
    gantiNama: function () {
      this.nama = "Ja'far";
    },
  },
});

new Vue({
  el: '#app',
  data: {
    text: '',
    nama: '',
    telp: '',
    bil1: '',
    bil2: '',
    hasiltambah: '',
    hasilkurang: '',
    hasilkali: '',
    hasilbagi: '',
    mate: 90,
    indo: 90,
    no1: '',
    no2: '',
    tersedia: false,
    jaya: false,
    jurusan: ['IF', 'RPL', 'SI', 'TE', 'TI'],
    mahasiswa: [
      { nama: 'Subhan', umur: 19 },
      { nama: 'Jakfar', umur: 24 },
      { nama: 'Ridho', umur: 17 },
      { nama: 'Ilham', umur: 27 },
    ],
    nilai1: '',
    nilai2: '',
    ket: '',
    b1: '',
    b2: '',
    h1: '',
    h2: '',
    anjay: false,
  },
  methods: {
    end: function () {
      return (this.ket = parseFloat(this.nilai1) + parseFloat(this.nilai2));
    },

    tambah: function () {
      return (this.hasiltambah = parseInt(this.bil1) + parseInt(this.bil2));
    },
    kurang: function () {
      return (this.hasilkurang = parseInt(this.bil1) - parseInt(this.bil2));
    },
    kali: function () {
      return (this.hasilkali = parseInt(this.bil1) * parseInt(this.bil2));
    },
    bagi: function () {
      return (this.hasilbagi = parseFloat(this.bil1) / parseInt(this.bil2));
    },
    klikDisini: function () {
      console.log(this.$refs.inputan.value);
      this.text = this.$refs.inputan.value;
      console.log(this.$refs.dataku.innerText);
    },
  },
  computed: {
    warna: function () {
      return parseFloat(this.h1) + parseFloat(this.h2);
    },
    start: function () {
      return parseFloat(this.b1) + parseFloat(this.b2);
    },
    rata: function () {
      return (parseFloat(this.mate) + parseFloat(this.indo)) / 2;
    },
    value1: function () {
      return parseInt(this.no1) + parseInt(this.no2);
    },
    value2: function () {
      return parseInt(this.no1) - parseInt(this.no2);
    },
    value3: function () {
      return parseInt(this.no1) * parseInt(this.no2);
    },
    value4: function () {
      return parseFloat(this.no1) / parseFloat(this.no2);
    },
    ClassComp: function () {
      return {
        kotak: this.tersedia,
        jaya: this.jaya,
        warna: this.anjay,
      };
    },
  },
});

var app = new Vue({
  el: '#satu',
  data: {
    tampil: true,
    lampu: 'kuning',
    passwordif: '',
    passwordshow: '',
  },
});

var appdua = new Vue({
  el: '#dua',

  data: {
    text: '',
    siswa: '',
    mtk: '90',
    fsk: '90',
    agm: '90',
    ips: '90',
    ipa: '90',
    pkn: '90',
    olg: '90',    
    akhir: '',    

  },
  methods: {
    KlikDisini:function(){
      console.log(this.$refs.inputan.value)
      this.text= this.$refs.inputan.value;
      console.log(this.$refs.dataku.innerText)
    }
  },
  computed:{
    hr: function(){
      return (parseFloat(this.mtk) + parseFloat(this.fsk) + parseFloat(this.agm) + parseFloat(this.ips) + parseFloat(this.ipa) + parseFloat(this.pkn) + parseFloat(this.olg))/7
    }
  }
});
