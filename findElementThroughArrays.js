
function findElementThroughArrays(array, elementToFind) {
    return array.some(el=> 
        Array.isArray(el) 
            ? findElementThroughArrays(el,elementToFind)
            : el === elementToFind
    )
}

//Optional Test
console.log('-----------');
console.log( findElementThroughArrays([[[1,122],22,3,[[[222,[1,11,[323,22,211]]]]]],10,11], 211) );
console.log('-----------');
