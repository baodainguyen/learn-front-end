var Atsm = (function(){
    'use strict'
    var Persons = [];
    // var P1 = {
    //     metting: [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']],
    //     working: ['9:00', '20:00']
    // };
    var Range = 30;

    function getMinute(time) {
        var minute = parseInt(time.split(':')[1]),
        hour = parseInt(time.split(':')[0]);

        minute += hour * 60;
        return minute;
    };
    function CompareHour(strHM1, strHM2){
        var time1 = getMinute(strHM1),
            time2 = getMinute(strHM2);
        
        if(time1 < time2) return -1;
        else if(time1 > time2) return 1;
        else return 0;
        
    };
    function getAvailFrom(person){
        var Avail = [],
            end1, 
            start2;
        
        function pushAvail(start, end){
            if(CompareHour(start, end) > 0) {
                Avail.push([end, start]);
            };
        }

        start2 = person.metting[0][0];
        end1 = person.working[0];

        pushAvail(start2, end1);

        var len = person.metting.length;
        for(let i = 1; i < len; i++){
            end1 = person.metting[i-1][1];
            start2 = person.metting[i][0];

            pushAvail(start2, end1);
        }

        start2 = person.working[1];
        end1 = person.metting[len-1][1];
        pushAvail(start2, end1);
        
        return Avail;
    };
    
    function getOutput(){
        var minLen = Number.MAX_SAFE_INTEGER,
            availDict = new Map();

        Persons.forEach((_person, i) => {
            var timeAvail = getAvailFrom(_person);      // timeAvail is Array
            availDict.set(i, timeAvail)

            _person.Avail = timeAvail;


            if(_person.Avail.length < minLen){
                minLen = _person.Avail.length;
            }
        });

        var allTimeAvail = [];
        var dictSz = availDict.size ;
        
        if(dictSz > 1){
            var firstVal = availDict.get(0); 

            firstVal.forEach(range => { 
                var count = 1;
                var joinR = range.slice();
                for(let j = 1; j < dictSz; j++){
                    var nextVal = availDict.get(j);
                    
                    for(let k = 0, l = nextVal.length; k < l; k++){
                        var r_g = nextVal[k];
                        var jR = joinRange(joinR, r_g);
                        if(jR != undefined){
                            count += 1;
                            nextVal.splice(k, 1);
                            joinR = jR;
                            break;
                        };
                    };
                };
                if(count >= dictSz){
                    allTimeAvail.push(joinR);
                }
            });
        };


        function joinRange(range1, range2){
            var startStr1 = range1[0],
                endStr1 = range1[1];
            var startStr2 = range2[0],
                endStr2 = range2[1];
            var start;
            if( CompareHour(startStr1, startStr2) <= 0 && CompareHour(startStr2, endStr1) < 0){
                start = startStr2;
            };
            if( CompareHour(startStr2, startStr1) <= 0 && CompareHour(startStr1, endStr2) < 0 ){
                start = startStr1;
            };
            var end;
            if( CompareHour(startStr2, endStr1) < 0 && CompareHour(endStr1, endStr2) <= 0){
                end = endStr1;
            };
            if( CompareHour(startStr1, endStr2) < 0 && CompareHour(endStr2, endStr1) <= 0 ){
                end = endStr2;
            };
            if(start == undefined || end == undefined){
                return undefined;
            };
            return [start, end];
        }

        return allTimeAvail;
    }

    return {
        setPerson: function(person){
            var p = {
                metting: [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']],
                working: ['9:00', '20:00']
            };
            if(p && typeof p == 'object'){
                Object.assign(p, person);
                Persons.push(p);
            };
            return this;
        },
        setRange: function(minute){
            if(minute && typeof minute == 'number'){
                Range = minute;
            };
            return this;
        },
        View: function(idInput, idOutput){
            var Ouput = getOutput();
            if(Ouput.length > 0){
                createUlInput(idInput);
                createUl(idOutput);
             }
            function createUl(parent){
                var ul = document.createElement('ul');
                parent.appendChild(ul);
                Ouput.forEach(function(times, i){
                    let li = document.createElement('li');
                    ul.appendChild(li);
                    li.style.paddingBottom = '10px';
                    li.innerHTML = `Option ${i + 1}: [${times.join(', ')}]`;
                });
            }

            function createUlInput(idInput){
                var ul = document.createElement('ul');
                idInput.appendChild(ul);
                Persons.forEach(function(p, i){
                    let li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerHTML = `<h5>Person ${i + 1} has: </h5>
                    <p>Metting time: [${p.metting.map(item => { return item.join(', ') }).join('], [')}]</p>
                    <p>Working item: [${p.working.join(', ')}]</p>`;
                });
            }
        }
    }
})();
