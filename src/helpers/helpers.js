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
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}
