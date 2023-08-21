/** choose a random item. */
 function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
 }

/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 **/ 
function remove(items, item) {
    // iterate over the items array and if item randomly selected with choice(items) above is in the array, cut out that item from the array at index i and create a new array with items up to index i (...items.slice(0, i)) joined with the items after index i to the end of the array (...items.slice(i + 1)) 
    for (let i=0; i < items.length; i++){
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }

}


 export {choice, remove};

 