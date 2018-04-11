function main() {
    let lyrics = '';
    for (let i = 99; i > 1; i--) {
        lyrics += beerSong(i);
    }
    lyrics +='    1 bottle of beer on the wall, 1 bottle of beer.\n' +
        '    Take one down and pass it around, no more bottles of beer on the wall.\n' +
        '    No more bottles of beer on the wall, no more bottles of beer.\n' +
        '    Go to the store and buy some more, 99 bottles of beer on the wall.';
    //console.log(lyrics);
    return lyrics;
}
function beerSong(num){
    if(num>2) {
        return `    ${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
            `    Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
    }
    if(num===2){
        return `    ${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
            `    Take one down and pass it around, ${num - 1} bottle of beer on the wall.\n`;
    }

}
//main();
module.exports = main;