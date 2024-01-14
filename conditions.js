




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
if (grade<40){
    result = "FF"
}else if(grade <=50){
    result ="DD"
}else if(grade<=65){
    result = "CC"
}else if(grade<=89){
    result = "BB"
}else{
    result = "AA"
}
