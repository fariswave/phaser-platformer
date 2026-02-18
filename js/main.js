PlayState = {};

window.onload = function () {
  // Fungsi ini dipanggil setelah seluruh halaman dimuat (load).
  // Membuat instance Phaser.Game dengan parameter:
  //  - 960: lebar canvas (px)
  //  - 600: tinggi canvas (px)
  //  - Phaser.AUTO: gunakan WebGL jika tersedia, jika tidak fallback ke Canvas
  //  - "game": id elemen DOM tempat canvas atau renderer akan dilampirkan
  let game = new Phaser.Game(960, 600, Phaser.AUTO, "game");
};
