let levelList = [
    {
        id: 1,
        price: 500
    },
    {
        id: 2,
        price: 1000
    },
    {
        id: 3,
        price: 2000
    },
    {
        id: 4,
        price: 4000
    },
    {
        id: 5,
        price: 8000
    },
    {
        id: 6,
        price: 16000
    },
    {
        id: 7,
        price: 32000
    },
    {
        id: 8,
        price: 64000
    },
    {
        id: 9,
        price: 125000
    },
    {
        id: 10,
        price: 250000
    },
    {
        id: 11,
        price: 500000
    },
    {
        id: 12,
        price: 1000000
    },
    {
        id: 13,
        price: 2000000
    },
    {
        id: 14,
        price: 3000000
    },
    {
        id: 15,
        price: 5000000
    }
];
let questionsRandom = [
    // Level 1
    {
        id: 1,
        level_id: 1,
        question: "Որն է Հայաստանի մայրաքաղաքը?",
        a: "Արթիկ",
        b: "Գյումրի",
        c: "Երևան",
        d: "Գառնի",
        current: "c",
    },
    {
        id: 2,
        level_id: 1,
        question: "Որն է Ռուսաստանի մայրաքաղաքը?",
        a: "Սոչի",
        b: "Սանկտ Պետերբուրգ",
        c: "Մոսկվա",
        d: "Կազան",
        current: "c",
    },
    {
        id: 3,
        level_id: 1,
        question: "Որն է Ֆրանսիայի մայրաքաղաքը?",
        a: "Լիոն",
        b: "Մարսել",
        c: "Պարիж",
        d: "Նիցա",
        current: "c",
    },
    {
        id: 4,
        level_id: 1,
        question: "Որն է Գերմանիայի մայրաքաղաքը?",
        a: "Բեռլին",
        b: "Համբուրգ",
        c: "Մյունխեն",
        d: "Դյուսելդորֆ",
        current: "a",
    },
    {
        id: 5,
        level_id: 1,
        question: "Որն է Իտալիայի մայրաքաղաքը?",
        a: "Միլան",
        b: "Հռոմ",
        c: "Վենետիկ",
        d: "Ֆլորենցիա",
        current: "b",
    },

    // Level 2
    {
        id: 6,
        level_id: 2,
        question: "Որն է աշխարհի ամենամեծ օվկիանոսը?",
        a: "Ատլանտյան",
        b: "Հնդկական",
        c: "Խաղաղ",
        d: "Արկտիկական",
        current: "c",
    },
    {
        id: 7,
        level_id: 2,
        question: "Որ տարում տեղի ունեցավ առաջին լուսնի վայրէջքը?",
        a: "1965",
        b: "1969",
        c: "1972",
        d: "1959",
        current: "b",
    },
    {
        id: 8,
        level_id: 2,
        question: "Որն է աշխարհի ամենաբարձր լեռը?",
        a: "Էվերեստ",
        b: "Կիլիմանջարո",
        c: "Մոնբլան",
        d: "Արարատ",
        current: "a",
    },
    {
        id: 9,
        level_id: 2,
        question: "Որ երկրի դրոշն ունի սպիտակ խաչ կարմիր ֆոնի վրա?",
        a: "Շվեդիա",
        b: "Շվեյցարիա",
        c: "Դանիա",
        d: "Նորվեգիա",
        current: "b",
    },
    {
        id: 10,
        level_id: 2,
        question: "Որ քաղաքն է հայտնի որպես 'Հավերժական քաղաք'?",
        a: "Հռոմ",
        b: "Աթենք",
        c: "Կահիրե",
        d: "Թեհրան",
        current: "a",
    },

    // Level 3
    {
        id: 11,
        level_id: 3,
        question: "Որ տարում սկսվեց Երկրորդ համաշխարհային պատերազմը?",
        a: "1935",
        b: "1939",
        c: "1941",
        d: "1945",
        current: "b",
    },
    {
        id: 12,
        level_id: 3,
        question: "Որն է Ամազոնի ամենամեծ գետը?",
        a: "Նեղոս",
        b: "Ամազոն",
        c: "Միսսիսիպի",
        d: "Գանգես",
        current: "b",
    },
    {
        id: 13,
        level_id: 3,
        question: "Որն է Եվրոպայի ամենամեծ երկիրը տարածքով?",
        a: "Ֆրանսիա",
        b: "Գերմանիա",
        c: "Ռուսաստան",
        d: "Իսպանիա",
        current: "c",
    },
    {
        id: 14,
        level_id: 3,
        question: "Որն է Պլուտոնի դասակարգումը?",
        a: "Մոլորակ",
        b: "Թզուկ մոլորակ",
        c: "Աստերոիդ",
        d: "Լուսին",
        current: "b",
    },
    {
        id: 15,
        level_id: 3,
        question: "Որն է Շեքսպիրի ամենահայտնի ողբերգություններից մեկը?",
        a: "Մակբեթ",
        b: "Օթելլո",
        c: "Համլետ",
        d: "Ռոմեո և Ջուլիետ",
        current: "c",
    },
    // Level 4
    {
        id: 16,
        level_id: 4,
        question: "Որ տարում հիմնադրվեց ՄԱԿ-ը?",
        a: "1942",
        b: "1945",
        c: "1948",
        d: "1950",
        current: "b",
    },
    {
        id: 17,
        level_id: 4,
        question: "Որն է առաջին մոլորակը արեգակնային համակարգում?",
        a: "Վեներա",
        b: "Մերկուրի",
        c: "Երկիր",
        d: "Մարս",
        current: "b",
    },
    {
        id: 18,
        level_id: 4,
        question: "Որ երկիրն ունի ամենաշատ բնակչություն աշխարհում?",
        a: "Հնդկաստան",
        b: "Չինաստան",
        c: "ԱՄՆ",
        d: "Ինդոնեզիա",
        current: "b",
    },
    {
        id: 19,
        level_id: 4,
        question: "Որն է աշխարհի ամենամեծ անապատը?",
        a: "Սահարա",
        b: "Անտարկտիկա",
        c: "Գոբի",
        d: "Կարահում",
        current: "b",
    },
    {
        id: 20,
        level_id: 4,
        question: "Որ տարում ծնվեց Ալբերտ Էյնշտեյնը?",
        a: "1879",
        b: "1882",
        c: "1905",
        d: "1895",
        current: "a",
    },

// Level 5
    {
        id: 21,
        level_id: 5,
        question: "Որ գիրքն է համարվում աշխարհում ամենաշատ վաճառվածը?",
        a: "Հարի Փոթեր",
        b: "Աստվածաշունչ",
        c: "Կորան",
        d: "Պատերազմ և խաղաղություն",
        current: "b",
    },
    {
        id: 22,
        level_id: 5,
        question: "Որ երկրում են գտնվում Մաչու Պիչուի ավերակները?",
        a: "Չիլի",
        b: "Պերու",
        c: "Մեքսիկա",
        d: "Բրազիլիա",
        current: "b",
    },
    {
        id: 23,
        level_id: 5,
        question: "Որն է հայտնի մաթեմատիկոսը, ով ստեղծեց ինտեգրալների հիմքերը?",
        a: "Նյուտոն",
        b: "Լեյբնից",
        c: "Էյլեր",
        d: "Գաուս",
        current: "b",
    },
    {
        id: 24,
        level_id: 5,
        question: "Որ տարում տեղի ունեցավ Բեռլինի պատի քանդումը?",
        a: "1987",
        b: "1989",
        c: "1991",
        d: "1985",
        current: "b",
    },
    {
        id: 25,
        level_id: 5,
        question: "Որն է Աֆրիկայի ամենամեծ ջրվեժը?",
        a: "Նիագարա",
        b: "Վիկտորիա",
        c: "Անգել",
        d: "Տուգելա",
        current: "b",
    },

// Level 6
    {
        id: 26,
        level_id: 6,
        question: "Որ գիտնականն է հայտնագործել ռադիոակտիվությունը?",
        a: "Մարի Կյուրի",
        b: "Հենրի Բեքերել",
        c: "Ռեզերֆորդ",
        d: "Դալթոն",
        current: "b",
    },
    {
        id: 27,
        level_id: 6,
        question: "Որն է Երկրի ամենախորը կետը?",
        a: "Մարիանյան իջվածք",
        b: "Ատլանտյան իջվածք",
        c: "Գոբի իջվածք",
        d: "Սահարայի գոգավորություն",
        current: "a",
    },
    {
        id: 28,
        level_id: 6,
        question: "Որն է երաժշտական գամմայի 7-րդ նոտան?",
        a: "Մի",
        b: "Սի",
        c: "Լա",
        d: "Ֆա",
        current: "b",
    },
    {
        id: 29,
        level_id: 6,
        question: "Որն է հայտնի 'Էրատոսթենեսի մաղի' նպատակն?",
        a: "Պարզ թվեր գտնել",
        b: "Բազմապատիկներ գտնել",
        c: "Անվերջ շարք ստեղծել",
        d: "Միջին արժեք հաշվել",
        current: "a",
    },
    {
        id: 30,
        level_id: 6,
        question: "Որ բույսն է հայտնի որպես 'անապատի բույս'?",
        a: "Կակտուս",
        b: "Պալմա",
        c: "Բամբակ",
        d: "Եղեգ",
        current: "a",
    },
// Level 7
    {
        id: 31,
        level_id: 7,
        question: "Որ երկրում են հայտնաբերել առաջին պապիրուսները?",
        a: "Հունաստան",
        b: "Հին Եգիպտոս",
        c: "Բաբելոն",
        d: "Հռոմ",
        current: "b",
    },
    {
        id: 32,
        level_id: 7,
        question: "Որ տարում կայացավ Տրոյական պատերազմը ըստ հնագույն աղբյուրների?",
        a: "Մ.թ.ա. 1000",
        b: "Մ.թ.ա. 1200",
        c: "Մ.թ.ա. 1400",
        d: "Մ.թ.ա. 800",
        current: "b",
    },
    {
        id: 33,
        level_id: 7,
        question: "Որն է քիմիական տարրերի պարբերական աղյուսակի 6-րդ տարրը?",
        a: "Կարբոն",
        b: "Թթվածին",
        c: "Ազոտ",
        d: "Հելիում",
        current: "a",
    },
    {
        id: 34,
        level_id: 7,
        question: "Որ երկրում է գտնվում Էյֆելյան աշտարակը?",
        a: "Գերմանիա",
        b: "Իտալիա",
        c: "Ֆրանսիա",
        d: "Իսպանիա",
        current: "c",
    },
    {
        id: 35,
        level_id: 7,
        question: "Որ գիտնականն է հայտնի որպես 'էլեկտրաոլամաշիտիկայի հայր'?",
        a: "Մայքլ Ֆարադեյ",
        b: "Ջեյմս Մաքսվել",
        c: "Թոմաս Էդիսոն",
        d: "Նիկոլա Թեսլա",
        current: "b",
    },

// Level 8
    {
        id: 36,
        level_id: 8,
        question: "Որ լեզվով է գրված Բեովուլֆի էպոսը?",
        a: "Հին անգլերեն",
        b: "Լատիներեն",
        c: "Գերմաներեն",
        d: "Նորվեգերեն",
        current: "a",
    },
    {
        id: 37,
        level_id: 8,
        question: "Որ տարիքում է մահացել Մոցարտը?",
        a: "30",
        b: "35",
        c: "40",
        d: "45",
        current: "b",
    },
    {
        id: 38,
        level_id: 8,
        question: "Որ աստղագիտական գործիքն է հայտնագործել Գալիլեյը?",
        a: "Հեռադիտակ",
        b: "Կոմպաս",
        c: "Սեքստանտ",
        d: "Աստրոլաբ",
        current: "a",
    },
    {
        id: 39,
        level_id: 8,
        question: "Որն է հայտնի 'Բոսոնի Հիգսի' հիմնական նպատակը ֆիզիկայում?",
        a: "Էներգիայի պահպանություն",
        b: "Զանգվածի առկայության բացատրություն",
        c: "Շարժման օրենքների հաստատում",
        d: "Լուսային ճառագայթների ուսումնասիրություն",
        current: "b",
    },
    {
        id: 40,
        level_id: 8,
        question: "Որ մայրցամաքում է գտնվում Նամիբիան?",
        a: "Ասիա",
        b: "Աֆրիկա",
        c: "Հարավային Ամերիկա",
        d: "Եվրոպա",
        current: "b",
    },

// Level 9
    {
        id: 41,
        level_id: 9,
        question: "Որ տարում վայրէջք կատարեց Վոյաջեր 1-ը Սոլարային համակարգից դուրս?",
        a: "1990",
        b: "2005",
        c: "2012",
        d: "2020",
        current: "c",
    },
    {
        id: 42,
        level_id: 9,
        question: "Որն է մաթեմատիկայի հայտնի 'Ոսկե հարաբերության' մոտավոր արժեքը?",
        a: "2.71",
        b: "1.41",
        c: "1.618",
        d: "3.14",
        current: "c",
    },
    {
        id: 43,
        level_id: 9,
        question: "Որ երկիրը հայտնի է որպես 'Հրաբուխների երկիր'?",
        a: "Իսլանդիա",
        b: "Նոր Զելանդիա",
        c: "Ճապոնիա",
        d: "Ինդոնեզիա",
        current: "a",
    },
    {
        id: 44,
        level_id: 9,
        question: "Որ պատմական իրադարձությունն է հանգեցրել Բյուզանդական կայսրության անկմանը?",
        a: "Կոստանդնուպոլսի անկում",
        b: "Հռոմեական կայսրության անկում",
        c: "Քարավանների առևտրի վերացում",
        d: "Խաչակրաց արշավանքներ",
        current: "a",
    },
    {
        id: 45,
        level_id: 9,
        question: "Որ հայտնի արվեստագետն է նկարել 'Մոնա Լիզան'?",
        a: "Լեոնարդո դա Վինչի",
        b: "Վան Գոգ",
        c: "Պիկասո",
        d: "Ռեմբրանդտ",
        current: "a",
    },

// Level 10
    {
        id: 46,
        level_id: 10,
        question: "Որ տարում Քոլումբոսը հայտնագործեց Ամերիկան?",
        a: "1492",
        b: "1502",
        c: "1519",
        d: "1521",
        current: "a",
    },
    {
        id: 47,
        level_id: 10,
        question: "Որ երաժշտական գործիքն է հայտնի որպես 'Դաշնամուրի նախահայր'?",
        a: "Հարպսիքորդ",
        b: "Վիոլին",
        c: "Ֆորտեպիանո",
        d: "Կլավեսին",
        current: "c",
    },
    {
        id: 48,
        level_id: 10,
        question: "Որն է կվանտային ֆիզիկայի հիմնարար սկզբունքներից մեկը?",
        a: "Փոփոխականության սկզբունք",
        b: "Ոչ համաժամանկայնություն",
        c: "Չվստահության սկզբունք",
        d: "Պահպանության օրենք",
        current: "c",
    },
    {
        id: 49,
        level_id: 10,
        question: "Որ քաղաքն էր հայտնի որպես Հին Աշխարհի 'Լուսավորության կենտրոն'?",
        a: "Ալեքսանդրիա",
        b: "Աթենք",
        c: "Հռոմ",
        d: "Բաղդադ",
        current: "a",
    },
    {
        id: 50,
        level_id: 10,
        question: "Որ գետն է ամենաերկարն աշխարհում?",
        a: "Ամազոն",
        b: "Նեղոս",
        c: "Միսսիսիպի",
        d: "Ենիսեյ",
        current: "b",
    },
// Level 11
    {
        id: 51,
        level_id: 11,
        question: "Որն է Գալիելեի հայտնագործած հիմնական օրենքներից մեկը ֆիզիկայում?",
        a: "Շարժման համաչափության օրենքը",
        b: "Արագության պահպանման օրենքը",
        c: "Ազատ անկման օրենքը",
        d: "Էներգիայի պահպանման օրենքը",
        current: "c",
    },
    {
        id: 52,
        level_id: 11,
        question: "Որ տարում սկսվեց ֆրանսիական հեղափոխությունը?",
        a: "1789",
        b: "1792",
        c: "1804",
        d: "1815",
        current: "a",
    },
    {
        id: 53,
        level_id: 11,
        question: "Որն է մարդկության առաջին գրված պատմական օրենսգիրքը?",
        a: "Համուրաբիի օրենսգիրքը",
        b: "Նեապոլիտանական օրենքները",
        c: "Հռոմեական օրենքը",
        d: "Հին Եգիպտոսի օրենքները",
        current: "a",
    },
    {
        id: 54,
        level_id: 11,
        question: "Որ երկրում է գտնվում Անգկոր Վաթի տաճարը?",
        a: "Թաիլանդ",
        b: "Կամբոջա",
        c: "Վիետնամ",
        d: "Լաոս",
        current: "b",
    },
    {
        id: 55,
        level_id: 11,
        question: "Որ աստղակերպն է հայտնի որպես 'Մահվան աստղ'?",
        a: "Ալդեբարան",
        b: "Բեթելգեուզ",
        c: "Սիրիուս",
        d: "Ալտաիր",
        current: "b",
    },

// Level 12
    {
        id: 56,
        level_id: 12,
        question: "Որ գիտնականն է ստեղծել հարաբերականության հատուկ տեսությունը?",
        a: "Իսահակ Նյուտոն",
        b: "Ալբերտ Էյնշտեյն",
        c: "Գալիլեո Գալիլեյ",
        d: "Մաքս Պլանկ",
        current: "b",
    },
    {
        id: 57,
        level_id: 12,
        question: "Որն է ամենամեծ մոլորակը արեգակնային համակարգում?",
        a: "Սատուրն",
        b: "Յուպիտեր",
        c: "Ուրան",
        d: "Նեպտուն",
        current: "b",
    },
    {
        id: 58,
        level_id: 12,
        question: "Որ քաղաքն է հյուրընկալել առաջին ժամանակակից օլիմպիական խաղերը?",
        a: "Փարիզ",
        b: "Աթենք",
        c: "Լոնդոն",
        d: "Ռոմ",
        current: "b",
    },
    {
        id: 59,
        level_id: 12,
        question: "Որն է հայտնի 'Շումերական ակադեմիայի' գլխավոր տաճարը?",
        a: "Զիգուրատ",
        b: "Պիրամիդա",
        c: "Բաբելոնի աշտարակ",
        d: "Մինարետ",
        current: "a",
    },
    {
        id: 60,
        level_id: 12,
        question: "Որ տարում վայրէջք կատարեց 'Ապոլո 11'-ը լուսնի վրա?",
        a: "1969",
        b: "1971",
        c: "1965",
        d: "1973",
        current: "a",
    },

// Level 13
    {
        id: 61,
        level_id: 13,
        question: "Որն է Շեքսպիրի հայտնի ստեղծագործությունը 'Համլետ'-ի գլխավոր հերոսի անունը?",
        a: "Օֆելիա",
        b: "Լաերտ",
        c: "Համլետ",
        d: "Հորացիո",
        current: "c",
    },
    {
        id: 62,
        level_id: 13,
        question: "Որ երկրում է գտնվում Մաունա Լոա հրաբուխը?",
        a: "Ճապոնիա",
        b: "Ինդոնեզիա",
        c: "Հավայան կղզիներ",
        d: "Չիլի",
        current: "c",
    },
    {
        id: 63,
        level_id: 13,
        question: "Որ հեղափոխությունն է հանգեցրել ԱՄՆ-ի անկախության հռչակմանը?",
        a: "Ամերիկյան հեղափոխություն",
        b: "Ֆրանսիական հեղափոխություն",
        c: "Բրիտանական հեղափոխություն",
        d: "Հոլանդական հեղափոխություն",
        current: "a",
    },
    {
        id: 64,
        level_id: 13,
        question: "Որ տարում հռչակվեց ՄԱԿ-ի հիմնադրումը?",
        a: "1943",
        b: "1945",
        c: "1947",
        d: "1950",
        current: "b",
    },
    {
        id: 65,
        level_id: 13,
        question: "Որ երկիրն ունի ամենաշատ հարևանները?",
        a: "Չինաստան",
        b: "Ռուսաստան",
        c: "Բրազիլիա",
        d: "Հնդկաստան",
        current: "b",
    },

// Level 14
    {
        id: 66,
        level_id: 14,
        question: "Որ տարում տեղի ունեցավ Վաթեռլոյի ճակատամարտը?",
        a: "1804",
        b: "1815",
        c: "1820",
        d: "1799",
        current: "b",
    },
    {
        id: 67,
        level_id: 14,
        question: "Որ երկիրը հայտնի է որպես 'Արևի երկիր'?",
        a: "Ճապոնիա",
        b: "Չինաստան",
        c: "Հնդկաստան",
        d: "Թայլանդ",
        current: "a",
    },
    {
        id: 68,
        level_id: 14,
        question: "Որն է հայտնի 'Կարենինի սկզբունքը'?",
        a: "Հիդրոդինամիկայի օրենք",
        b: "Զանգվածի պահպանություն",
        c: "Նյութի շարունակականության սկզբունք",
        d: "Լիցքավորման հավասարություն",
        current: "c",
    },
    {
        id: 69,
        level_id: 14,
        question: "Որ երկրի խորհրդանիշն է թռչող ավստրալիական էմուն?",
        a: "Ավստրալիա",
        b: "Նոր Զելանդիա",
        c: "Կանադա",
        d: "Աֆրիկա",
        current: "a",
    },
    {
        id: 70,
        level_id: 14,
        question: "Որն է մարդկության պատմության ամենահին քաղաքներից մեկը?",
        a: "Երիքոն",
        b: "Աթենք",
        c: "Հռոմ",
        d: "Բաբելոն",
        current: "a",
    },

// Level 15
    {
        id: 71,
        level_id: 15,
        question: "Որ աստղային համակարգի կենտրոնում է գտնվում Արեգակը?",
        a: "Արեգակնային համակարգ",
        b: "Անդրոմեդա",
        c: "Մտավորական ոլորտ",
        d: "Գալակտիկա",
        current: "a",
    },
    {
        id: 72,
        level_id: 15,
        question: "Որ տարում հայտարարվեց բաբելոնյան աշտարակի վերականգնումը?",
        a: "Մ.թ.ա. 2000",
        b: "Մ.թ.ա. 500",
        c: "Մ.թ.ա. 700",
        d: "Մ.թ.ա. 300",
        current: "c",
    },
    {
        id: 73,
        level_id: 15,
        question: "Որն է հայտնի 'Ռոզետա քար'-ի լեզվական նշանակությունը?",
        a: "Երկու լեզվի միջև համեմատություն",
        b: "Թարգմանության բանալին",
        c: "Բազմալեզվության առաջին օրինակը",
        d: "Հին եգիպտական ժառանգության բացատրություն",
        current: "b",
    },
    {
        id: 74,
        level_id: 15,
        question: "Որն է Տրոյական պատերազմի գլխավոր առասպելը?",
        a: "Աքիլլեսի վրեժխնդրությունը",
        b: "Փարիզի որոշումը",
        c: "Տրոյական ձիու օգտագործումը",
        d: "Հելենայի փախուստը",
        current: "c",
    },
    {
        id: 75,
        level_id: 15,
        question: "Որն է հայտնի 'Մեծ պայթյունի' հիմնական հետևանքը?",
        a: "Տիեզերքի ընդլայնում",
        b: "Աստղերի առաջացում",
        c: "Մոլորակների ձևավորում",
        d: "Էներգիայի պահպանություն",
        current: "a",
    },
];
let questions = [
    // Level 1
    {
        id: 1,
        level_id: 1,
        question: "Ի՞նչ է նշանակում HTML-ը:",
        a: "Hyperlinks and Text Markup Language",
        b: "Hyper Text Markup Language",
        c: "Home Tool Markup Language",
        d: "Hyper Tool Markup Language",
        current: "b",
    },
    {
        id: 2,
        level_id: 1,
        question: "Ո՞ր տեգով են ստեղծում հղումներ HTML-ում:",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<url>",
        current: "a",
    },
    {
        id: 3,
        level_id: 1,
        question: "Ի՞նչ է նախատեսված `<img>` տեգը:",
        a: "Տեքստի ավելացման համար",
        b: "Տաբլիցաների ստեղծման համար",
        c: "Նկար ավելացնելու համար",
        d: "Ֆայլ ներբեռնելու համար",
        current: "c",
    },
    {
        id: 4,
        level_id: 1,
        question: "Ո՞ր տեգն է ամենավերին վերնագիրը ցույց տալիս:",
        a: "<h1>",
        b: "<h6>",
        c: "<head>",
        d: "<title>",
        current: "a",
    },
    {
        id: 5,
        level_id: 1,
        question: "Ի՞նչ է օգտագործվում `<ul>` տեգը:",
        a: "Պարբերություններ համար",
        b: "Կարգավորված ցուցակների համար",
        c: "Չկարգավորված ցուցակների համար",
        d: "Վերնագրերի համար",
        current: "c",
    },

    // Level 2
    {
        id: 6,
        level_id: 2,
        question: "Ի՞նչ է նշանակում CSS-ը:",
        a: "Colorful Style Sheets",
        b: "Creative Style Sheets",
        c: "Cascading Style Sheets",
        d: "Computer Style Sheets",
        current: "c",
    },
    {
        id: 7,
        level_id: 2,
        question: "Ո՞րն է ճիշտ ձևը CSS-ի ֆայլ կապելու համար:",
        a: "<style src='styles.css'>",
        b: "<link rel='stylesheet' href='styles.css'>",
        c: "<css src='styles.css'>",
        d: "<script src='styles.css'>",
        current: "b",
    },
    {
        id: 8,
        level_id: 2,
        question: "Ո՞ր հատկությունը է սահմանում ֆոնի գույնը:",
        a: "color",
        b: "background-color",
        c: "bgcolor",
        d: "background",
        current: "b",
    },
    {
        id: 9,
        level_id: 2,
        question: "Ո՞րն է օգտագործվում տեքստի չափը փոփոխելու համար:",
        a: "text-style",
        b: "font-size",
        c: "text-size",
        d: "font-weight",
        current: "b",
    },
    {
        id: 10,
        level_id: 2,
        question: "Ո՞ր CSS հատկությունն է պատասխանատու բլոկի եզրերի համար:",
        a: "padding",
        b: "border",
        c: "margin",
        d: "outline",
        current: "c",
    },

    // Level 3
    {
        id: 11,
        level_id: 3,
        question: "Ո՞ր հատկությունն է սահմանում HTML տարրի լայնությունը:",
        a: "width",
        b: "size",
        c: "length",
        d: "line-width",
        current: "a",
    },
    {
        id: 12,
        level_id: 3,
        question: "Ո՞ր CSS հատկությունն է փոփոխում տեքստի գույնը:",
        a: "background-color",
        b: "color",
        c: "text-color",
        d: "font-color",
        current: "b",
    },
    {
        id: 13,
        level_id: 3,
        question: "Ինչպե՞ս եք սահմանում բոլոր կողմերից 10px եզրեր:",
        a: "padding: 10px;",
        b: "margin: 10px;",
        c: "spacing: 10px;",
        d: "border: 10px;",
        current: "b",
    },
    {
        id: 14,
        level_id: 3,
        question: "Ինչպե՞ս կարելի է անել տեքստը կիսաթեք (italic):",
        a: "text-style: italic;",
        b: "font-style: italic;",
        c: "font-weight: italic;",
        d: "text-decoration: italic;",
        current: "b",
    },
    {
        id: 15,
        level_id: 3,
        question: "Ինչպե՞ս կարող եք CSS-ում օգտագործել դասը:",
        a: "#classname",
        b: ".classname",
        c: "classname",
        d: "*classname",
        current: "b",
    },

    // Level 4
    {
        id: 16,
        level_id: 4,
        question: "Ինչպե՞ս կարող եք կենտրոնացնել տարրը CSS-ում:",
        a: "text-align: center;",
        b: "align: center;",
        c: "margin: center;",
        d: "center: true;",
        current: "a",
    },
    {
        id: 17,
        level_id: 4,
        question: "Ո՞ր հատկությունն է պատասխանատու էկրանի հարմարվողականության համար:",
        a: "responsive",
        b: "media-query",
        c: "screen-fit",
        d: "device-width",
        current: "b",
    },
    {
        id: 18,
        level_id: 4,
        question: "Ինչպե՞ս եք սահմանում տեքստի գիծ (underline):",
        a: "font-decoration: underline;",
        b: "text-decoration: underline;",
        c: "text-style: underline;",
        d: "font-style: underline;",
        current: "b",
    },
    {
        id: 19,
        level_id: 4,
        question: "Ինչպե՞ս եք կապում արտաքին CSS ֆայլը:",
        a: "<style href='style.css'>",
        b: "<link rel='stylesheet' href='style.css'>",
        c: "<css rel='stylesheet' src='style.css'>",
        d: "<stylesheet link='style.css'>",
        current: "b",
    },
    {
        id: 20,
        level_id: 4,
        question: "Ո՞րն է CSS-ի հիմնական հատկությունը ֆոնի համար:",
        a: "background-color",
        b: "background-image",
        c: "background",
        d: "background-style",
        current: "c",
    },
// Level 5
    {
        id: 21,
        level_id: 5,
        question: "Ինչպե՞ս կարելի է սահմանել տեքստի չափը CSS-ում:",
        a: "font-weight",
        b: "text-size",
        c: "font-size",
        d: "text-weight",
        current: "c",
    },
    {
        id: 22,
        level_id: 5,
        question: "Ինչպե՞ս եք փոխում HTML տարրի ֆոնը պատկեր դարձնելու համար:",
        a: "background-image: url('image.jpg');",
        b: "background: image('image.jpg');",
        c: "image-url: 'image.jpg';",
        d: "bg-image: 'image.jpg';",
        current: "a",
    },
    {
        id: 23,
        level_id: 5,
        question: "Ո՞ր հատկությունն է սահմանում սահմանների լայնությունը:",
        a: "margin-width",
        b: "border-width",
        c: "outline-width",
        d: "padding-width",
        current: "b",
    },
    {
        id: 24,
        level_id: 5,
        question: "Ինչպե՞ս եք սահմանում գույնը որպես կարմիր:",
        a: "color: #ff0000;",
        b: "color: red;",
        c: "color: rgb(255, 0, 0);",
        d: "Բոլորը ճիշտ են",
        current: "d",
    },
    {
        id: 25,
        level_id: 5,
        question: "Ինչպե՞ս կարելի է ջնջել underline-ը հղումից CSS-ում:",
        a: "text-decoration: none;",
        b: "font-style: none;",
        c: "remove-decoration: underline;",
        d: "decoration: none;",
        current: "a",
    },

// Level 6
    {
        id: 26,
        level_id: 6,
        question: "Ո՞ր CSS հատկությունն է սահմանում տարրի բարձրությունը:",
        a: "height",
        b: "line-height",
        c: "block-height",
        d: "max-height",
        current: "a",
    },
    {
        id: 27,
        level_id: 6,
        question: "Ինչպե՞ս եք CSS-ում ընտրում ID:",
        a: ".id",
        b: "#id",
        c: "*id",
        d: "id",
        current: "b",
    },
    {
        id: 28,
        level_id: 6,
        question: "Ինչպե՞ս եք սահմանում տարրի առավելագույն լայնությունը:",
        a: "width: max;",
        b: "max-width",
        c: "maximum-width",
        d: "fit-width",
        current: "b",
    },
    {
        id: 29,
        level_id: 6,
        question: "Ո՞ր հատկությունն է ավելացնում տարածություն տարրի ներսում:",
        a: "margin",
        b: "padding",
        c: "spacing",
        d: "border-spacing",
        current: "b",
    },
    {
        id: 30,
        level_id: 6,
        question: "Ինչպե՞ս եք կենտրոնացնում բլոկ տարրը Flexbox-ով:",
        a: "justify-content: center;",
        b: "align-items: center;",
        c: "Բոլորը ճիշտ են",
        d: "Ոչ մեկը ճիշտ չէ",
        current: "c",
    },

// Level 7
    {
        id: 31,
        level_id: 7,
        question: "Ինչի՞ համար է նախատեսված CSS-ի `z-index` հատկությունը:",
        a: "Ֆոնի գույնի համար",
        b: "Տարրերի շերտավորության համար",
        c: "Տարրի դիրքի համար",
        d: "Սահմանների կարգավորման համար",
        current: "b",
    },
    {
        id: 32,
        level_id: 7,
        question: "Ինչպե՞ս եք սահմանում CSS-ում transition:",
        a: "transition: all 0.3s;",
        b: "transition: 0.3s ease;",
        c: "Բոլորը ճիշտ են",
        d: "Ոչ մեկը ճիշտ չէ",
        current: "c",
    },
    {
        id: 33,
        level_id: 7,
        question: "Ինչի՞ համար է օգտագործվում `position: absolute` CSS-ում:",
        a: "Ֆիքսված դիրք ստեղծելու համար",
        b: "Տարրերը հարաբերական դիրքավորելու համար",
        c: "Տարրերը հարակից տարրերի նկատմամբ դիրքավորելու համար",
        d: "Պատկերների կարգավորման համար",
        current: "c",
    },
    {
        id: 34,
        level_id: 7,
        question: "Ո՞ր CSS հատկությունն է կառավարում ստվերները տեքստի վրա:",
        a: "box-shadow",
        b: "text-shadow",
        c: "shadow",
        d: "font-shadow",
        current: "b",
    },
    {
        id: 35,
        level_id: 7,
        question: "Ինչպե՞ս եք ֆոնային պատկերը չափավորում CSS-ում:",
        a: "background-size",
        b: "image-size",
        c: "background-fit",
        d: "image-fit",
        current: "a",
    },

// Level 8
    {
        id: 36,
        level_id: 8,
        question: "Ինչպե՞ս եք CSS-ում ֆոնը դարձնում անցանկալի:",
        a: "background-color: transparent;",
        b: "opacity: 0;",
        c: "Բոլորը ճիշտ են",
        d: "Ոչ մեկը ճիշտ չէ",
        current: "c",
    },
    {
        id: 37,
        level_id: 8,
        question: "Ինչի՞ համար է նախատեսված `box-shadow` հատկությունը:",
        a: "Սահմանների ստվեր ստեղծելու համար",
        b: "Տարրերի ստվեր ստեղծելու համար",
        c: "Տեքստի ստվեր ստեղծելու համար",
        d: "Ֆոնի ստվեր ստեղծելու համար",
        current: "b",
    },
    {
        id: 38,
        level_id: 8,
        question: "Ինչի՞ համար է նախատեսված `display: flex` CSS հատկությունը:",
        a: "Ֆոնտերի համահունչության համար",
        b: "Flexbox դասավորություն ստեղծելու համար",
        c: "Տեքստի ձևավորման համար",
        d: "Բոլորը ճիշտ են",
        current: "b",
    },
    {
        id: 39,
        level_id: 8,
        question: "Ինչպե՞ս եք ավելացնում տրանսֆորմացիա CSS-ում:",
        a: "transform: rotate(45deg);",
        b: "transition: rotate(45deg);",
        c: "translate: rotate(45deg);",
        d: "rotate: 45deg;",
        current: "a",
    },
    {
        id: 40,
        level_id: 8,
        question: "Ինչպե՞ս եք CSS-ում օգտագործում media query:",
        a: "@media (max-width: 768px) {...}",
        b: "@media-query (768px) {...}",
        c: "@media-fit: (768px);",
        d: "@screen-size (768px);",
        current: "a",
    },
// Level 9
    {
        id: 41,
        level_id: 9,
        question: "Ո՞ր հատկությունն է օգտագործվում տեքստը մեծատառ դարձնելու համար:",
        a: "font-style",
        b: "text-transform",
        c: "text-style",
        d: "text-uppercase",
        current: "b",
    },
    {
        id: 42,
        level_id: 9,
        question: "Ինչի՞ համար է օգտագործվում CSS-ի `overflow` հատկությունը:",
        a: "Բովանդակությունը թաքցնելու կամ կարգավորելու համար",
        b: "Ֆոնի չափերը կարգավորելու համար",
        c: "Տարրերի դիրքը կարգավորելու համար",
        d: "Նկարը տեղադրելու համար",
        current: "a",
    },
    {
        id: 43,
        level_id: 9,
        question: "Ինչպե՞ս եք սահմանում տարրի թափանցիկությունը CSS-ում:",
        a: "opacity",
        b: "transparent",
        c: "visibility",
        d: "filter",
        current: "a",
    },
    {
        id: 44,
        level_id: 9,
        question: "Ինչպե՞ս եք ստանում hover էֆեկտ CSS-ում:",
        a: "element:hover {...}",
        b: "element.onhover {...}",
        c: "hover:element {...}",
        d: "onhover:element {...}",
        current: "a",
    },
    {
        id: 45,
        level_id: 9,
        question: "Ինչի՞ համար է նախատեսված `clip-path` հատկությունը CSS-ում:",
        a: "Տարրը կտրելու համար",
        b: "Տարրը թաքցնելու համար",
        c: "Տարրը սահմանելու համար",
        d: "Տարրը դարձնելու թափանցիկ",
        current: "a",
    },

// Level 10
    {
        id: 46,
        level_id: 10,
        question: "Ինչպե՞ս եք CSS-ում կարգավորում սահմանների գույնը:",
        a: "border-color",
        b: "outline-color",
        c: "color",
        d: "box-color",
        current: "a",
    },
    {
        id: 47,
        level_id: 10,
        question: "Ինչպե՞ս եք կլորացնում սահմանները CSS-ում:",
        a: "border-radius",
        b: "border-style: round;",
        c: "radius",
        d: "box-radius",
        current: "a",
    },
    {
        id: 48,
        level_id: 10,
        question: "Ինչպե՞ս եք փոխում CSS-ում ֆոնի դիրքը:",
        a: "background-position",
        b: "background-align",
        c: "position: background;",
        d: "align-background",
        current: "a",
    },
    {
        id: 49,
        level_id: 10,
        question: "Ինչպե՞ս եք դարձնում տարրը գծի վրա (inline) CSS-ում:",
        a: "display: inline;",
        b: "position: inline;",
        c: "block: inline;",
        d: "line: inline;",
        current: "a",
    },
    {
        id: 50,
        level_id: 10,
        question: "Ինչի՞ համար է նախատեսված `keyframes` հատկությունը CSS-ում:",
        a: "Անիմացիաներ ստեղծելու համար",
        b: "Տեքստի ձևավորման համար",
        c: "Սահմանների կարգավորման համար",
        d: "Փոխելու տարրի գույնը",
        current: "a",
    },

// Level 11
    {
        id: 51,
        level_id: 11,
        question: "Ինչպե՞ս եք CSS-ում ավելացնում ֆոնտ Google Fonts-ից:",
        a: "@import url('google-fonts-url');",
        b: "font-family: google-fonts;",
        c: "add-font: google-fonts;",
        d: "font-google: true;",
        current: "a",
    },
    {
        id: 52,
        level_id: 11,
        question: "Ինչպե՞ս եք սահմանում սյուների քանակը CSS-ում:",
        a: "column-count",
        b: "column-number",
        c: "grid-columns",
        d: "columns: auto;",
        current: "a",
    },
    {
        id: 53,
        level_id: 11,
        question: "Ինչի՞ համար է նախատեսված `filter` հատկությունը CSS-ում:",
        a: "Ֆիլտր է ավելացնում տարրի վրա",
        b: "Տարրը թաքցնում է",
        c: "Տարրի դիրքը փոխում է",
        d: "Նկար ավելացնում է",
        current: "a",
    },
    {
        id: 54,
        level_id: 11,
        question: "Ինչպե՞ս եք ավելացնում սկրոլի ձողի ոճ CSS-ում:",
        a: "::-webkit-scrollbar",
        b: "::scrollbar",
        c: "::scroll",
        d: "scroll-bar-style",
        current: "a",
    },
    {
        id: 55,
        level_id: 11,
        question: "Ինչպե՞ս եք կիրառում CSS-ի grid դասավորությունը:",
        a: "display: grid;",
        b: "grid: true;",
        c: "grid-layout: true;",
        d: "grid-display: flex;",
        current: "a",
    },

// Level 12
    {
        id: 56,
        level_id: 12,
        question: "Ինչպե՞ս եք սահմանում ֆոնտի հաստությունը CSS-ում:",
        a: "font-weight",
        b: "font-thickness",
        c: "text-weight",
        d: "text-thickness",
        current: "a",
    },
    {
        id: 57,
        level_id: 12,
        question: "Ինչպե՞ս եք CSS-ում կենտրոնացնում grid տարրերը:",
        a: "align-items: center; justify-content: center;",
        b: "align-center: true;",
        c: "grid-center: align;",
        d: "center: true;",
        current: "a",
    },
    {
        id: 58,
        level_id: 12,
        question: "Ինչպե՞ս եք CSS-ում սահմանում տարածությունը տողերի միջև:",
        a: "line-height",
        b: "letter-spacing",
        c: "spacing: lines;",
        d: "line-spacing",
        current: "a",
    },
    {
        id: 59,
        level_id: 12,
        question: "Ինչպե՞ս եք ավելացնում անիմացիա CSS-ում:",
        a: "animation: slide-in 2s;",
        b: "transition: slide-in;",
        c: "animation-style: slide-in;",
        d: "keyframes: slide-in;",
        current: "a",
    },
    {
        id: 60,
        level_id: 12,
        question: "Ինչի՞ համար է նախատեսված `float` հատկությունը CSS-ում:",
        a: "Տարրերը ձախ կամ աջ տողում դիրքավորելու համար",
        b: "Տարրերը վերև կամ ներքև դիրքավորելու համար",
        c: "Տարրերը կենտրոնական դիրք տալու համար",
        d: "Տարրերը դարձնելու համար թափանցիկ",
        current: "a",
    },

// Level 13
    {
        id: 61,
        level_id: 13,
        question: "Ինչպե՞ս եք CSS-ում կարգավորում grid սյուների լայնությունը:",
        a: "grid-template-columns",
        b: "grid-columns-width",
        c: "grid-width",
        d: "grid-column-width",
        current: "a",
    },
    {
        id: 62,
        level_id: 13,
        question: "Ինչպե՞ս եք սահմանում անիմացիայի կրկնությունների քանակը:",
        a: "animation-repeat",
        b: "animation-iteration-count",
        c: "animation-loop",
        d: "animation-count",
        current: "b",
    },
    {
        id: 63,
        level_id: 13,
        question: "Ինչի՞ համար է նախատեսված `object-fit` հատկությունը CSS-ում:",
        a: "Նկարների և տարրերի չափավորելու համար",
        b: "Տարրերը կենտրոնացնելու համար",
        c: "Տարրերը դարձնելու համար inline",
        d: "Տեքստի գույնը կարգավորելու համար",
        current: "a",
    },
    {
        id: 64,
        level_id: 13,
        question: "Ինչպե՞ս եք CSS-ում ստեղծում hover transition:",
        a: "transition: all 0.3s;",
        b: "hover: all 0.3s;",
        c: "transition-hover: 0.3s;",
        d: "hover-effect: true;",
        current: "a",
    },
    {
        id: 65,
        level_id: 13,
        question: "Ինչպե՞ս եք CSS-ում կիրառվում grid տարրերի ընդլայնված դասավորություն:",
        a: "grid-template-areas",
        b: "grid-area",
        c: "grid-class",
        d: "grid-layout",
        current: "a",
    },

// Level 14
    {
        id: 66,
        level_id: 14,
        question: "Ինչպե՞ս եք CSS-ում կարգավորում `flex` տարրերի ուղղությունը:",
        a: "flex-direction",
        b: "align-flex",
        c: "flex-align",
        d: "justify-flex",
        current: "a",
    },
    {
        id: 67,
        level_id: 14,
        question: "Ինչպե՞ս եք սահմանում grid item's շարքի դասավորությունը:",
        a: "grid-row",
        b: "grid-row-start",
        c: "grid-row-end",
        d: "Բոլորը ճիշտ են",
        current: "d",
    },
    {
        id: 68,
        level_id: 14,
        question: "Ինչպե՞ս եք CSS-ում ավելացնում սահմանների ստվեր:",
        a: "box-shadow",
        b: "border-shadow",
        c: "outline-shadow",
        d: "shadow",
        current: "a",
    },
    {
        id: 69,
        level_id: 14,
        question: "Ինչի՞ համար է նախատեսված `backface-visibility` հատկությունը CSS-ում:",
        a: "Անտեսանելի դարձնելու համար տարրի հակառակ կողմը",
        b: "Տարրերի դիրքը փոփոխելու համար",
        c: "Տեքստի գույնը կարգավորելու համար",
        d: "Ֆոնային պատկեր ավելացնելու համար",
        current: "a",
    },
    {
        id: 70,
        level_id: 14,
        question: "Ինչպե՞ս եք փոխում սյուների հեռավորությունը Flexbox-ում:",
        a: "gap",
        b: "spacing",
        c: "margin",
        d: "padding",
        current: "a",
    },

// Level 15
    {
        id: 71,
        level_id: 15,
        question: "Ինչպե՞ս եք սահմանում grid item's տեղը CSS-ում:",
        a: "grid-area",
        b: "grid-position",
        c: "grid-align",
        d: "grid-order",
        current: "a",
    },
    {
        id: 72,
        level_id: 15,
        question: "Ինչպե՞ս եք ավելացնում animation delay CSS-ում:",
        a: "animation-delay",
        b: "animation-wait",
        c: "transition-delay",
        d: "animation-hold",
        current: "a",
    },
    {
        id: 73,
        level_id: 15,
        question: "Ինչպե՞ս եք CSS-ում դասավորում Flexbox item's բաշխումը:",
        a: "justify-content",
        b: "align-items",
        c: "align-flex",
        d: "flex-distribute",
        current: "a",
    },
    {
        id: 74,
        level_id: 15,
        question: "Ինչպե՞ս եք կարգավորում overflow behavior-ը CSS-ում:",
        a: "overflow",
        b: "overflow-control",
        c: "scroll-overflow",
        d: "hidden-overflow",
        current: "a",
    },
    {
        id: 75,
        level_id: 15,
        question: "Ինչի՞ համար է նախատեսված `perspective` հատկությունը CSS-ում:",
        a: "3D տարրերի խորության ավելացման համար",
        b: "Տարրերը դարձնելու համար անթափանց",
        c: "Տարրերի կարգավորման համար",
        d: "Տարրերի սահմանները կարգավորելու համար",
        current: "a",
    },


];