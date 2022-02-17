export function showNotification (setter) { 
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function checkWin (correct, wrong, word) {
    let status='win';
    
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = ''
        }
    });

    if(wrong.length === 6){
        status = 'lose';
    }

    return status;
}

export function shuffleArray (array) {
    // console.log("SIN SHUFFLE",array)
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
    // console.log("CON SHUFFLE",array)

}