for (let i = 0; i < 5; i++) {
    let count = 1;
    for(let j = 1; j <= i; j++){
        process.stdout.write(count++ + ' ');
    }
    count = 1;
    console.log();
}

