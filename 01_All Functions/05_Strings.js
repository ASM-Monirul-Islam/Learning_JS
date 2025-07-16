let s = "ASM Monirul Islam";
console.log(s[5]); //o
console.log(s[20]); //undefined

// 01. length of the string
console.log(s.length); //17

// 02. Template Literals in Strings
let friend = "Hafiza";
console.log(s + " and "+friend+" are friends"); //ASM Monirul Islam and Hafiza are friends
console.log(`${s} and ${friend} are friends`); //ASM Monirul Islam and Hafiza are friends

// 03. upper case and lower case conversion
let a = "Sayem";
console.log(a.toLowerCase()); //sayem
console.log(a); //Sayem
console.log(a.toUpperCase()); //SAYEM
a = a.toLowerCase();
console.log(a); //sayem
a = a.toUpperCase();
console.log(a); //SAYEM

// 04. string slicing
let b = "Monirul";
console.log(b.slice(1,4)); //oni
console.log(b.slice(1)); //onirul

// 05. replace the string
console.log(b.replace("on", "jh")); //Mjhirul


// 06. concatinate the strings
let c = "Monirul"
let d = "Islam"
console.log(c.concat(d)); //MonirulIslam

// 07. removing white spaces
let e = " hello ";
console.log(e.trim()); //hello