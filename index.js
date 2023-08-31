const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function  destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyRemoveLastCat() {
    cats.pop();
}
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyRemoveFirstCat() {
    cats.shift();
}
beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});
function appendCat(Broom) {
  Broom = [...cats, Broom];
  return Broom
}
function prependCat(Tom) {
  Tom = [Tom, ...cats];
  return Tom
}
function removeLastCat(gone) {
 gone = cats.slice(0,cats.length-1);
 return gone;
}
function removeFirstCat(lost) {
  lost = cats.slice(1);
  return lost
}