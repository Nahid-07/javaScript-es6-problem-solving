/* 
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

const object = {
    name : 'nahid Hassan asif',
    age : 24,
    class : 14,
    hairColor : 'black',
    eyecolor : 'black',
    height : '5 feet 6 inch'
}
const {name,height} = object;
console.log(name,height);