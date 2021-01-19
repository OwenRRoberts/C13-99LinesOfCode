let friends = ['Shelby', 'Claire', 'Lizz', 'Jared', 'Harrison'];

function song() {
    for (let i = 0; i < friends.length; i++) {
        for (let j = 99; j> 0; j--){
            if(j > 2){
                console.log(j + ' Lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + j + ' lines of code in the file');
            } else if(j == 2){
                console.log(j + 'Lines of code in the file, ' + j + 'lines of code; ' + friends[i] + 'strikes one out, clears it all out, 1 line of code in the file');
            } else {
                console.log('1 line of code in the file, 1 line of code;' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
            }
        }
    }
}
song();




// var word = 'lines of code';
// var count = 99;
// while (count>0) {
//     if (count == 1){
//         var word = "line of code";
//     }
//     console.log(count + " " + word + 'on the wall');
//     console.log(count + " " + word);
//     console.log("Owen strikes one out, clears it all out,");\
//     count = count--;
//     if(count > 0) {
//         if(count == 1){
//             var word = "line of code"
//         }
//         console.log(count + " " + word + "on the wall");
//     } else {
//         if(count < 1){
//             var word = "lines of code"
//         }
//         console.log ("no more" + word + " lines of code on the wall");
//     }
// }