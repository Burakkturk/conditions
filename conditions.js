




const calismaSuresi = prompt("Calisma Suresi:")
let maas = prompt("Maasini giriniz:")

// if(calismaSuresi >=10){
//     maas = maas * 1.1
//     console.log(`Zamlı maasiniz: , ${maas}`)
// }else {
//     console.log("üzgünüz maasiniza zam yapamıyoruz",maas)
// }

// console.log("Güle güle")

// ?Tek Koşullu
if(calismaSuresi >=10){
    maas = maas * 1.1
    console.log(`Zamlı maasiniz: ${maas}`)
}
    console.log("Güle güle")

//? Çok Koşullu


const grade = prompt("Please enter your grade:")


let result = ""
if (grade < 0){
console.log("Grade can not be smaller than zero")
}else if (grade< 40){
    result = "FF"
}else if(grade <= 50){
    result ="DD"
}else if(grade<= 65){
    result = "CC"
}else if(grade<= 89){
    result = "BB"
}else if(grade <= 100){
    result = "AA"
} else {
    console.log("Grade can not be bigger than 100")
}

if (result != "") {

console.log(`Your Score: ${result} `)}





const n1 = +prompt("Num1")
const n2 = +prompt("Num2")
const n3 = +prompt("Num3")


// if ( n1 > n2){
//     if(n1 > n3){
//         console.log("Biggest:", n1)
//     }
// }

//? kosolların logical operatorler yardımıyla birletirilmesi
if (n1 > n2 && n1 > n3) {
    console.log("biggest:", n1)
}else if(n2 > n1 && n2 > n3){
    console.log("biggest:",n2)
}else if(n3 > n1 && n3 > n2){
    console.log(`biggest: ${n3}`)
}
