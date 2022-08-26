/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */
let name = 'Nahidul Islam Asif'
let age = 24;
const foodHabit = 'Rice';

const sentence = `Hello my name is ${name}.i am ${age} years old.i like to eat ${foodHabit}.`
console.log(sentence);
/* Template string is too much powerfull syntax in javaScript.i can add value dynamically. */

const student = {
    name : name,
    age : age,
    class : 'Bbs of degree',
    resul : {
        bangla : 74,
        accounting : 84,
        finance : 78
    }
}
const sentence2 = `Hi my name is ${student.name}.I am ${student.age} years old.I read in class ${student.class}.My result in every subjects are ${student.resul.accounting},${student.resul.bangla},${student.resul.finance}`
console.log(sentence2)