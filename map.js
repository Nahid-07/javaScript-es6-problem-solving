/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */
const array = [25,23,15,85,98,79,86,5,22,39,6,6,5,966,7621,3164,6316];
const multiply = array.map(element=>element*5);
console.log(multiply)
