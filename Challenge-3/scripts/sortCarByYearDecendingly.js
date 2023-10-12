function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  let done = false;

  while (!done) {
    done = true;
    for (let i = 1; i < result.length; i++) {
      // i-1 = indeks tahun mobil sebelumnya, i=indeks saat ini
      if (result[i - 1].year < result[i].year) {
        // Jika tahun mobil sebelumnya lebih besar dari tahun mobil saat ini, maka tukar posisi keduanya
        [result[i - 1], result[i]] = [result[i], result[i - 1]]; // tukar element
        done = false;
      }
    }
  }
  console.log(result);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
