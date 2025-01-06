function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }
  
  // Contoh penggunaan
  console.log(validatePassword("Pass43word1")); // true
  console.log(validatePassword("password")); // false (tidak ada huruf besar)
  console.log(validatePassword("PASSWORD")); // false (tidak ada huruf kecil)
  console.log(validatePassword("Passw1"));   // false (kurang dari 8 karakter)
  console.log(validatePassword("Passw@rd")); // false (mengandung karakter selain alfanumerik)
  