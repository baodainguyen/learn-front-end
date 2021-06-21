
function getGoalActionLines(items) {

    let newArr = [];
    let a2 = splitArr(items);

    do {
        if (a2.length > 1) {
            newArr.push(a2[0]);     // Array 1
            a2 = splitArr(a2[1]);   // Array 2

        }
        else if (a2.length > 0) {
            newArr.push(a2[0]);     // Array

            break;
        }

    }
    while (newArr.length < items.length);

    function splitArr(a) {
        if (a.length < 1) return [];
        if (a.length < 2) {
            return [a];
        }

        var i = 0;
        var newA = [a[i]], newB = [];

        function pushToNewB(m) {
            let msa = a[m];
            if (newB.indexOf(msa) < 0) {
                newB.push(msa);
            }
        }
        function pushToNewA(m) {
            let msa = a[m];
            if (newA.indexOf(msa) < 0 && newB.indexOf(msa) < 0) {
                newA.push(msa);
            }
        }

        while (i < a.length - 1) {
            var endDi = a[i].End;

            if (!endDi) {
                pushToNewA(i);

                for (var x = i + 1; x < a.length; x++) {
                    pushToNewB(x);
                }
                i = a.length;
                break;    // break while-i-loop
            }
            else {
                for (let j = i + 1; j < a.length; j++) {
                    let startDj = a[j].Start;
                    startDj = startDj.getTime();
                    endDiTime = endDi.getTime();

                    if (a[j].End == null) {
                        if (startDj < endDiTime) { // isOverlap
                            pushToNewB(j);
                        } else {
                            pushToNewA(j);

                            i = j - 1;
                            break;  // break for-j-loop
                        }
                    }
                    else {
                        if (startDj < endDiTime) { // isOverlap
                            pushToNewB(j);
                        }
                        else {
                            pushToNewA(j);

                            i = j - 1;
                            break;  // break for-j-loop
                        }
                    }
                }   // end for-j-loop

                i += 1;
            }
        };

        if (newB.length > 0)
            return [newA, newB];

        return [newA];
    }

    return newArr;
}

