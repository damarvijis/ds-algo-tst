/* 
  Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, 
  sdimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" 
  dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, 
  cetak menggunakan console log atau sejenisnya.
*/

export const fishBash = number => {
  for (let i = 1; i <= number; i++) {
    let output

    if (i % 15 === 0) {
      output = "fish bash"
    } else if (i % 3 === 0) {
      output = "fish"
    } else if (i % 5 === 0) {
      output = "bash"
    } else {
      output = i.toString()
    }

    console.log(output)
  }
}
