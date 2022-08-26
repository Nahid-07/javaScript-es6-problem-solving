///* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

const findArray = [
    {   
        productID : 1,
        productName : 'laptob',
        price : '$2000'
        
    },
    {
        productID : 2,
        productName : 'desktop',
        price : '$3000'
    },
    {
        productID : 3,
        productName : 'monitor',
        price : '$5000'
    },
    {
        productID : 4,
        productName : 'macBookPro',
        price : '$5000'
    }
];
const find = findArray.find(prices => prices.price ==='$5000')
console.log(find)