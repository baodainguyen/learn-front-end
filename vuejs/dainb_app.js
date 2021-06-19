var dataServer = getDataHardCode();

const app = new Vue({
  el: '#dnbApp',
  data: {
    ParentRegion: []
  },
  computed: {
    MinMaxDate() {
      let minStart, maxEnd;
      this.ParentRegionMultiLines.filter(pr => {
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
    ParentRegionMultiLines() {
      //var parentRegion = this.$root.ParentRegion.slice(0);
      var parentRegion = [...this.$root.ParentRegion];
      parentRegion.forEach((pr, prIdx) => {
        pr.ChildStakeHolders.forEach((cs, csIndex) => {
          let hasOnlyOneElement = false;

          cs.Categories.forEach(ct => {
            ct.Elements.forEach(e => {
              e.Start = new Date(e.Start);
              if (e.End) {
                e.End = new Date(e.End);
              }
            });

            let elms = getGoalActionLines(ct.Elements);

            ct.Elements = elms;

            if (elms.length == 1 && cs.Categories.length == 1) {
              hasOnlyOneElement = true;
            }
          });

          if (hasOnlyOneElement) {
            cs.ClassOneElement = 'rm-only-one-category';
          }
          lastVerticalItem = `${cs.Id}${csIndex}${prIdx}`;
        });
      });

      return parentRegion;
    }
  },
  mounted(){
    this.ParentRegion = dataServer;
  }
});

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

function getDataHardCode() {
    return [        // ParentRegion
        {
            Id: 'guid-or-long',
            Name: "Region a",
            Index: 1,
            ChildStakeHolders: [
                {
                    Id: 'guid-or-long-ChildStakeHolders-1',
                    Name: "Stakeholder group 1",
                    PathName: "Region a > Market-segment",
                    Index: 1,
                    Categories: [
                        {
                            Id: 11,
                            Name: 'Category 11',
                            Index: 1,
                            TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Id: 'guid-or-long',
                                    Name: 'Main 1 (8/16/2020 - 9/23/2020)',
                                    TypeId: 1,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/16/2020", End: "9/23/2020",
                                    SubMarketProductId: 'guid-',
                                    ParentId: 'guid-main-or-sub-or-undefined-null-if-is-main',
                                    IndependencyId: 1,      // or null/undefinded
                                    RegionId: 2,        // or null/undefined
                                    Index: 1,
                                    Color: '#DE7EB5',
                                    Description: '',
                                    Finish: false,
                                    ExpectedCost: null,     // or 35xx
                                    ActualCost: 23,         // or null/undefined
                                    RoleId: 2
                                },
                                {
                                    Id: 'guid-or-long',
                                    Name: 'Main 1.2 (8/22/2020 - 10/20/2020)',
                                    TypeId: 1,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/22/2020", End: "10/20/2020",
                                    SubMarketProductId: 'guid-',
                                    ParentId: 'guid-main-or-sub-or-undefined-null-if-is-main',
                                    IndependencyId: 1,      // or null/undefinded
                                    RegionId: 2,        // or null/undefined
                                    Index: 1,
                                    Color: '#DE7EB5',
                                    Description: '',
                                    Finish: false,
                                    ExpectedCost: null,     // or 35xx
                                    ActualCost: 23,         // or null/undefined
                                    RoleId: 2
                                },
                                {
                                    Id: 'guid-or-long',
                                    Name: 'Main 2 (10/13/2020 - 1/20/2021)',
                                    TypeId: 1,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/13/2020", End: "1/20/2021",
                                    SubMarketProductId: 'guid-',
                                    ParentId: 'guid-main-or-sub-or-undefined-null-if-is-main',
                                    IndependencyId: 1,      // or null/undefinded
                                    RegionId: 2,        // or null/undefined
                                    Index: 1,
                                    Color: '#DE7EB5',
                                    Description: '',
                                    Finish: false,
                                    ExpectedCost: null,     // or 35xx
                                    ActualCost: 23,         // or null/undefined
                                    RoleId: 2
                                },
                                {
                                    Id: 'guid-or-long',
                                    Name: 'Main (1/13/2021 - null)',
                                    TypeId: 1,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "1/13/2021", End: null,
                                    SubMarketProductId: 'guid-',
                                    ParentId: 'guid-main-or-sub-or-undefined-null-if-is-main',
                                    IndependencyId: 1,      // or null/undefinded
                                    RegionId: 2,        // or null/undefined
                                    Index: 1,
                                    Color: '#DE7EB5',
                                    CategoryName: 'Category 11',
                                    Description: '',
                                    Finish: false,
                                    ExpectedCost: null,     // or 35xx
                                    ActualCost: 23,         // or null/undefined
                                    RoleId: 2
                                }
                            ]
                        },
                        {
                            Id: 12,
                            Name: 'Category 12',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Id: 'guid-or-long',
                                    Name: 'Sub (8/29/2020 - 9/20/2020)',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/29/2020", End: "9/20/2020",
                                    Color: '#1AB696',
                                    RoleId: 2,
                                    SubMarketProductId: 'guid-',
                                    ParentId: 'guid-main-or-sub-or-undefined-null-if-is-main',
                                    IndependencyId: 1,      // or null/undefinded
                                    RegionId: 2,        // or null/undefined
                                    Index: 2,
                                    CategoryName: 'Category 11',
                                    Description: '',
                                    Finish: false,
                                    ExpectedCost: null,     // or 35xx
                                    ActualCost: 23         // or null/undefined
                                }
                            ]
                        }
                    ]
                },
                {
                    Id: 'guid-or-long-ChildStakeHolders-2',
                    Name: "Stakeholder group 11112",
                    PathName: "Region abbb > Market-segment bdd",
                    Index: 1,
                    Categories: [
                        {
                            Id: 15,
                            Name: 'Category 15',
                            Index: 1,
                            TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Id: 'guid-or-long',
                                    Name: 'Action (10/15/2020 - null)',
                                    TypeId: 3,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/15/2020", End: null,
                                    SubMarketProductId: 'guid-',
                                    ParentId: 'guid-main-or-sub-or-undefined-null-if-is-main',
                                    IndependencyId: 1,      // or null/undefinded
                                    RegionId: 2,        // or null/undefined
                                    Index: 2,
                                    Color: '#7ec1de',
                                    CategoryName: 'Category 11',
                                    Description: '',
                                    Finish: false,
                                    ExpectedCost: null,     // or 35xx
                                    ActualCost: 23,         // or null/undefined
                                    RoleId: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    Id: 'guid-or-long-ChildStakeHolders-3',
                    Name: "Stakeholder group ccc",
                    PathName: "Region c33 > Market-segment ceec",
                    Index: 3,
                    Categories: [
                        {
                            Id: 16,
                            Name: 'Category 116',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Main Lorem Ipsum is simply dummy text of the printing and typesetti',
                                    TypeId: 1,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/26/2020", End: "9/2/2020",
                                    Color: '#DE9C7E',
                                    RoleId: 1
                                },
                                {
                                    Name: 'Sub Letraset sheets containing Lorem Ipsum passages, and more',
                                    TypeId: 2,
                                    Start: "9/12/2020", End: "12/20/2020",
                                    Color: '#DE9C7E',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Main 2 It is a long established fact that a reader will be d',
                                    TypeId: 1,
                                    Start: "11/13/2020", End: "1/20/2021",
                                    Color: '#DE9C7E',
                                    RoleId: 1
                                },
                                {
                                    Name: 'Main (1/13/2021 - 1/28/2021)',
                                    TypeId: 1,
                                    Start: "1/13/2021", End: "1/28/2021",
                                    Color: '#DE9C7E',
                                    RoleId: 2
                                }
                            ]
                        },
                        {
                            Id: 19,
                            Name: 'Category 1219',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Sommefirst text l',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/29/2020", End: "9/20/2020",
                                    Color: '#de7e89',
                                    RoleId: 2
                                }
                            ]
                        },
                        {
                            Id: 20,
                            Name: 'Category 20 C',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Neue Webseite - online Mai 2021',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Sub 2 in actions Contrary to popular belief, Lorem IL',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Website Opt.',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: ' x Mars Event',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Winter Event',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Planning 2022',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Action 1 in actions of passages of L',
                                    TypeId: 3,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Activity Contrary to popular belief, Lorem I',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    Id: 'guid-or-long--ChildStakeHolders-4',
                    Name: "Stakeholder group ccc",
                    PathName: "Region c33 > Market-segment ceec",
                    Index: 3,
                    Categories: [
                        {
                            Id: 16,
                            Name: 'Category 116',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Main Lorem Ipsum is simply dummy text of the printing and typesetti',
                                    TypeId: 1,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/26/2020", End: "9/2/2020",
                                    Color: '#DE9C7E',
                                    RoleId: 1
                                },
                                {
                                    Name: 'Sub Letraset sheets containing Lorem Ipsum passages, and more',
                                    TypeId: 2,
                                    Start: "9/12/2020", End: "12/20/2020",
                                    Color: '#DE9C7E',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Main 2 It is a long established fact that a reader will be d',
                                    TypeId: 1,
                                    Start: "11/13/2020", End: "1/20/2021",
                                    Color: '#DE9C7E',
                                    RoleId: 1
                                },
                                {
                                    Name: 'Main 3 There are many variations of passages of Lorem Ipsu',
                                    TypeId: 1,
                                    Start: "1/13/2021", End: "1/28/2021",
                                    Color: '#DE9C7E',
                                    RoleId: 2
                                }
                            ]
                        },
                        {
                            Id: 19,
                            Name: 'Category 1219',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Sommefirst text l',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/29/2020", End: "9/20/2020",
                                    Color: '#de7e89',
                                    RoleId: 2
                                }
                            ]
                        },
                        {
                            Id: 20,
                            Name: 'Category 20 C',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Neue Webseite - online Mai 2021',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Sub 2 in actions Contrary to popular belief, Lorem IL',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Website Opt.',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: ' x Mars Event',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Winter Event',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Planning 2022',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Action 1 in actions of passages of L',
                                    TypeId: 3,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Activity Contrary to popular belief, Lorem I',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    Id: 'guid-or-long--ChildStakeHolders-5',
                    Name: "Stakeholder group ccc",
                    PathName: "Region c33 > Market-segment ceec",
                    Index: 3,
                    Categories: [
                        {
                            Id: 16,
                            Name: 'Category 116',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Main Lorem Ipsum is simply dummy text of the printing and typesetti',
                                    TypeId: 1,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/26/2020", End: "9/2/2020",
                                    Color: '#DE9C7E',
                                    RoleId: 1
                                },
                                {
                                    Name: 'Sub Letraset sheets containing Lorem Ipsum passages, and more',
                                    TypeId: 2,
                                    Start: "9/12/2020", End: "12/20/2020",
                                    Color: '#DE9C7E',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Main 2 It is a long established fact that a reader will be d',
                                    TypeId: 1,
                                    Start: "11/13/2020", End: "1/20/2021",
                                    Color: '#DE9C7E',
                                    RoleId: 1
                                },
                                {
                                    Name: 'Main 3 There are many variations of passages of Lorem Ipsu',
                                    TypeId: 1,
                                    Start: "1/13/2021", End: "1/28/2021",
                                    Color: '#DE9C7E',
                                    RoleId: 2
                                }
                            ]
                        },
                        {
                            Id: 19,
                            Name: 'Category 1219',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Sommefirst text l',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/29/2020", End: "9/20/2020",
                                    Color: '#de7e89',
                                    RoleId: 2
                                }
                            ]
                        },
                        {
                            Id: 20,
                            Name: 'Category 20 C',
                            Index: 1, TypeId: 1,      // goal: 1, action 2
                            Elements: [
                                {
                                    Name: 'Neue Webseite - online Mai 2021',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Sub 2 in actions Contrary to popular belief, Lorem IL',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Website Opt.',
                                    TypeId: 2,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: ' x Mars Event',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "8/12/2020", End: "10/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Winter Event',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Planning 2022',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Action 1 in actions of passages of L',
                                    TypeId: 3,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                },
                                {
                                    Name: 'Activity Contrary to popular belief, Lorem I',
                                    TypeId: 4,      // main: 1 ; sub: 2 ; action: 3 ; activity: 4
                                    Start: "10/29/2020", End: "11/20/2020",
                                    Color: '#7ec1de',
                                    RoleId: 2
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}