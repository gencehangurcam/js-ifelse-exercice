// let tabPrenoms = ['ger', 'gegew', 'gegsd', 'gegaf', 'gegaf', 'gegfs', 'gegfs', 'gegfs', 'gefsag']
// let tabLength = tabPrenoms.length
// console.log(tabPrenoms.length);
// console.log(`bonjour ${tabPrenoms[0]}`);
// console.log(`bonjour ${tabPrenoms[1]}`);
// console.log(`bonjour ${tabPrenoms[2]}`);
// console.log(`bonjour ${tabPrenoms[3]}`);
// console.log(`bonjour ${tabPrenoms[4]}`);
// console.log(`bonjour ${tabPrenoms[5]}`);
// console.log(`bonjour ${tabPrenoms[6]}`);

//2

let numb =  Math.floor(Math.random() * (10 - 0 + 1)) + 0;

let ran = Number(prompt('choisis un chiffre entre un et dix'));

if(ran > numb){
    alert('un chiffre entre 1 et 10')
}else{
    alert('bien enregistre')
}
