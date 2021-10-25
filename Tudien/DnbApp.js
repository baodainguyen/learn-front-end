var len = dicTxt.length;
var char = 'ạ';

//console.log(getAllText(char));

function getAllText(char) {
    var txtArr = [];
    let i = 0;
    while(i < len) {
        i = dicTxt.indexOf(char, i);
        let Str = getTextFrom(char, i);
        txtArr.push(Str.Text);
        i = Str.NextIndex;
    }

    return txtArr;
}

function getTextFrom(char, i) {
    let j = i;
    let text = char;
    do {
        j--;
        if(j > -1) {
            if(dicTxt.charAt(j) !== `"`)
                text = dicTxt[j] + text;
            else {
                break;
            }
        } else {
            break;
        }
    } while (j > -1);

    j = i;
    do {
        j++;
        if(j < len) {
            if(dicTxt.charAt(j) !== `"`)
                text += dicTxt[j];
            else {
                break;
            }
        } else {
            break;
        }
    } while (j <= len);

    return {
        Text: text, NextIndex: j
    }
}