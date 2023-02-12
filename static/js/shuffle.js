"use strict";

shuffleGames();

function shuffleGames() {
    // don't bother if we can't save the permutation between page visits
    if (!isLocalStorageAvailable()) return;

    const container = document.querySelector("[data-jam]");
    if (!container) return;

    // load the previous permutation or otherwise save a new one
    const jam = container.dataset.jam;
    let permutation = JSON.parse(localStorage.getItem(jam) ?? "null");
    if (!permutation || permutation.length !== container.childElementCount) {
        permutation = new Array(container.childElementCount).fill(0).map((_, i) => i);
        shuffle(permutation);
        localStorage.setItem(jam, JSON.stringify(permutation));
    }

    // apply permutation
    const permuted = permutation.map((i) => container.children[i]);
    container.replaceChildren(...permuted);

    // rescroll to particular game based on url fragment
    if (window.location.hash.length > 0) {
        const target = document.getElementById(window.location.hash.slice(1));
        target?.scrollIntoView();
    }
}

function shuffle(array) {
    var currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function isLocalStorageAvailable(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}
