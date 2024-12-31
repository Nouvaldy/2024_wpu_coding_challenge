// Paste fungsi dengan nama fun1
function fun1(words) {
    let duplicatedChar = '';
    const x = words.toLowerCase();
    for (let i = 0; i < x.length; i++) {
      for (let j = i + 1; j < x.length; j++) {
        if (x[i] === x[j]) duplicatedChar += x[i];
      }
    }
  
    let result = '';
    for (let i = 0; i < x.length; i++) {
      result += duplicatedChar.includes(x[i]) ? ')' : '(';
    }
  
    return result;
}
  
// Paste fungsi dengan nama fun2
function fun2(words) {
    const lower = words.toLowerCase();
    const wordCase = {};
  
    for (const char of lower) {
      wordCase[char] = (wordCase[char] || 0) + 1;
    }
  
    return lower
      .split('')
      .map((char) => (wordCase[char] === 1 ? '(' : ')'))
      .join('');
}
  
// Fungsi untuk mengukur waktu eksekusi
function measureEfficiency(func, words, iterations = 100) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
      func(words);
    }
    const end = performance.now();
    return (end - start).toFixed(2); // Time in milliseconds
  }
  
  // Test data
  const testWord = 'Successes'.repeat(100); // String of 900 characters
  
  // Measure execution times
const timeFun1 = measureEfficiency(fun1, testWord);
const timeFun2 = measureEfficiency(fun2, testWord);
  
// Hasil
console.log(`fun1 execution time: ${timeFun1} ms`);
console.log(`fun2 execution time: ${timeFun2} ms`);
  