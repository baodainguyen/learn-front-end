
function getDataHardCode() {
    return [        // ParentRegion
        {
            Id: 'guid-or-long',
            Name: "Region a",
            ChildStakeHolders: [
                {
                    Id: 'guid-or-long-ChildStakeHolders-1',
                    Name: "Stakeholder group 1",
                    PathName: "Region a > Market-segment",
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
                    Categories: [
                        {
                            Id: 15,
                            Name: 'Category 15',
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
                    Name: "Stakeholder group 333",
                    PathName: "Region c33 > Market-segment ceec",
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
                    Name: "Stakeholder group eee",
                    PathName: "Region c33 > Market-segment ceec",
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
                    Id: 'guid-or-long-ChildStakeHolders-6',
                    Name: "Stakeholder group fff",
                    PathName: "Region a > Market-segment",
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
                    Id: 'guid-or-long-ChildStakeHolders-7',
                    Name: "Stakeholder group ggg",
                    PathName: "Region abbb > Market-segment bdd",
                    Categories: [
                        {
                            Id: 15,
                            Name: 'Category 15',
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
                }
            ]
        },
        {
            Id: 'guid-or-long',
            Name: "Region b",
            ChildStakeHolders: [
                {
                    Id: 'guid-or-long-ChildStakeHolders-8',
                    Name: "Stakeholder group bbb",
                    PathName: "Region c33 > Market-segment ceec",
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
                    Id: 'guid-or-long--ChildStakeHolders-9',
                    Name: "Stakeholder group bbb2",
                    PathName: "Region c33 > Market-segment ceec",
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
                    Id: 'guid-or-long--ChildStakeHolders-0',
                    Name: "Stakeholder group bbb3",
                    PathName: "Region c33 > Market-segment ceec",
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