/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */
const number = [5,15,48,12,17,19,25,41];
const odd = number.filter(element=>element%2!==0);
console.log(odd);