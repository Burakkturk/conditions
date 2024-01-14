




const calismaSuresi = prompt("Calisma Suresi:")
let maas = prompt("Maasini giriniz:")

if(calismaSuresi >=10){
    maas = maas * 1.1
    console.log(`Zamlı maasiniz: , ${maas}`)
}else {
    console.log("üzgünüz maasiniza zam yapamıyoruz",maas)
}

console.log("Güle güle")