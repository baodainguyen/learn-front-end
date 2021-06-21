
const app = new Vue({
  el: '#dnbApp',
  data: {
    ParentRegion: [],
    LoadIndex: 5
  },
  computed: {
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
     

      parentRegion.filter((pr) => {

        pr.ChildStakeHolders = pr.ChildStakeHolders.filter((cs, csIndex) => {

            return csIndex < loadIndex;

          });

        return true;
      }).filter((pr, prIdx) => {

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

      return parentRegion;
    }
  },
  mounted(){
    this.ParentRegion = getDataHardCode();
    ;
  }
}
);
