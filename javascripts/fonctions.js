function filtrage_num(array,key) {
filtre_num = array.filter(function(element) {
  return (typeof element[key] === "number")
});
}

var tableau_filtre = [];

function decoupe(array,key,info_bornes) {

for (let i = 0; i < info_bornes.length-1; i++) {
    tableau_filtre[i] = filtre_num.filter(function(element)
    { return element[key] <= info_bornes[i+1] &&
    element[key] > info_bornes[i];})
}
}
