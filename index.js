let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName){
     cats.push(catName)}
function destructivelyPrependCat(catName){
    cats.unshift(catName)}
function destructivelyRemoveLastCat(catName){
    cats.pop(catName)
};
function destructivelyRemoveFirstCat(catName){
    cats.shift(catName)
};
function appendCat(catName){
    const newCat=[...cats,catName];
    return newCat;
}


function prependCat(catName){
  const newCat=[catName,...cats];
  return newCat
}

function removeLastCat(catName){
    let newCats=cats.slice(0,-1)
   return newCats
}

function removeFirstCat(catName){
    let newCats=cats.slice(1)
    return newCats
}