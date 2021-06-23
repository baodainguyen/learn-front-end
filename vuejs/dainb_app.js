
const app = new Vue({
  el: '#dnbApp',
  data: {
    ParentRegion: [],
    LoadIndex: 1,
    FromDate: "1/5/2021"
  },
  computed: {
    Week(){
      let fromDate = new Date(this.FromDate);

      function getWeek(date){
        
        let fromDate = moveBackMon(date);
        let toDate = new Date(fromDate.getTime() + 6 * 24 * 60 * 60 * 1000);
       
        return {
          FromDate: fromDate,
          ToDate: toDate,
          Number: getNumOfWeek(toDate)
        };
      }

      function moveBackMon(date){
        let day = date.getDay();
        let delta = day > 0 ? day - 1 : 6;
        let deltaMiliS = delta * 24 * 60 * 60 * 1000;
        let firstDinWeek = date.getTime() - deltaMiliS;
        return new Date(firstDinWeek);
      }

      function getNumOfWeek(date){
        let year = date.getFullYear();
        let firstDateY = new Date(year, 0, 1);
        let deltaTime = date.getTime() - firstDateY.getTime();
        deltaTime = deltaTime / 24 / 60 / 60 / 1000;
        return Math.floor(deltaTime / 7);
      }

      return getWeek(fromDate)
    },
    MinMaxDate() {
      let minStart, maxEnd;
      this.ElementMultiLines.filter(pr => {
        pr.ChildStakeHolders.filter(cs => {
          cs.Categories.filter(ct => {
            ct.Elements.filter(es => {
              es.filter(e => {
                if(!minStart){
                    minStart = e.Start;
                } else {
                    let start = new Date(e.Start);
                    let mS = new Date(minStart);
                    if(mS.getTime() > start.getTime()) {
                        minStart = e.Start;
                    }
                }
                  
                if(e.End){
                    if(!maxEnd){
                        maxEnd = e.End;
                    } else {
                        let end = new Date(e.End);
                        let mE = new Date(maxEnd)
                        if(end.getTime() > mE.getTime()){
                            mE = e.End;
                        }
                    }
                }
                return true;
              });
            });
            return true;
          });
          return true;
        });
        return true;
      });
      
      return {
        Min: minStart, Max: maxEnd
      };
    },
    ElementMultiLines() {
      var parentRegion = JSON.parse(JSON.stringify(this.$root.ParentRegion));
      var loadIndex = this.LoadIndex;
      var parentIdx = parentRegion.length;

      let prt = parentRegion.filter((pr, prIdx) => {

        pr.ChildStakeHolders.filter((cs, csIndex) => {

            cs.Categories.filter(ct => {
    
                ct.Elements.filter(e => {
                  e.Start = new Date(e.Start);
                  if (e.End) {
                    e.End = new Date(e.End);
                  }
                 return true;
                });
    
                let elms = getGoalActionLines(ct.Elements);
    
                ct.Elements = elms;

                return true;
              });
              return true;
        })
        return true;
      });
     

      return prt.filter((pr, prIdx) => {
        let childLen = pr.ChildStakeHolders.length;
        
        if(loadIndex <= childLen && prIdx < parentIdx) {
          pr.ChildStakeHolders = pr.ChildStakeHolders.filter((cs, csIndex) => {

            return csIndex < loadIndex;

          });
          parentIdx = 1 + prIdx;
          
        }

        if(loadIndex > childLen) {
          loadIndex -= childLen;
        }

        return prIdx < parentIdx;
        
      });
    }
  },
  mounted(){
    this.ParentRegion = getDataHardCode();
    ;
  }
}
);
