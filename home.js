var preloader = document.querySelector(".preloader");
var website = document.querySelector(".website");
var html = document.querySelector("html")

preloaderVar = setTimeout(preloaderFunc, 2700);


function preloaderFunc() {
    preloader.style.display = "none";
    website.style.display = "block";
    html.style.backgroundColor = "#02011e"
    html.style.overflowY = "scroll"
    html.style.overflowX = "none"
}

let questionElement = document.querySelector(".questionPre")
var question = ['What is your brand story?', 'I give a 100/100 on every project', 'Saket was born on 12/01/yyyy.', 'Saket lives in India.', 'This website was redesigned almost 5 times']


randomQuestion =  question[Math.floor(Math.random() * question.length)];


questionElement.innerHTML = randomQuestion


// function randomizer() {


        // let b = 0;

        // randomizerDesignerVar = setTimeout(randomDesigner, b);

        // let j = 0

        // randomDesignerArray = [
        //  'B MHB X ',
        //  ' RLN Q  ',
        //  ' W L X K',
        //  'EJ EJLFY',
        //  ' WJHROHZ',
        //  'XN DOWSM',
        //  'QLLGFGLE',
        //  'HV  IGH ',
        //  'YDFAXWLS',
        //  'NEJ OWRL',
        //  ' EVKY HN',
        //  'XEI ZFOF',
        //  'LEHYKB E',
        //  'JEDIZDX ',
        //  'TETI WR ',
        //  'NERI  OB',
        //  'EE ICPPJ',
        //  'LENI  MH',
        //  'IEEIJU E',
        //  'XEJIIE S',
        //  ' EDIFMSD',
        //  'ZELI  KD',
        //  'YE I  ST',
        //  'TEUI A A',
        //  ' E I V  ',
        //  'OEFI   F',
        //  ' E IMJA ',
        //  'IENI S Y',
        //  'KEQITKFD',
        //  'XEFIEG A',
        //  'ZE IEQLC',
        //  'DEIID NQ',
        //  'DE I  KS',
        //  'DE IH ZM',
        //  'DEIIX   ',
        //  'DESI WN ',
        //  'DESIVKUM',
        //  'DESIYPK ',
        //  'DESI F M',
        //  'DESI QVJ',
        //  'DESI UBI',
        //  'DESIKQR ',
        //  'DESI GNR',
        //  'DESI GNR ',
        //  'DESIGNER.']

        // function randomDesigner(){
        //         setInterval(() => {
        //             if (j < randomDesignerArray.length)
        //                 {j+=1; heroSkills.innerHTML = randomDesignerArray[j-1]}
        //         }, 50);
        // }





        // var randomWebDevArray =['WKV XV ',
        //  'JVJ DF ',
        //  'WHN D  ',
        //  'WWP DMB',
        //  'WRC DY ',
        //  'W E DUD',
        //  'WX  DV ',
        //  'l Z DGJ',
        //  'W Y DTD',
        //  'W K D W',
        //  'WFK DXO',
        //  'WWT DEH',
        //  'WBV D#EJ',
        //  'WZS DE ',
        //  'WPP DEK',
        //  'W L! DEJ',
        //  'WLR DE%F',
        //  'WJD DE ',
        //  'UM jDED',
        //  'WOK%EM',
        //  'WT  DEH',
        //  'WBR $DEV',
        //  'WGB% DEV',
        //  'W B DEV',
        //  'WWB DEV',
        //  'WEB DEV.']

        // let heroSkills = document.querySelector(".heroSkills")



        // let x = 3000;

        // randomizerVar = setTimeout(randomWebDev, x);

        // let i = 0

        // function randomWebDev(){
        //         setInterval(function(){
        //             if (i < randomWebDevArray.length) {i+=1; heroSkills.innerHTML = randomWebDevArray[i-1]}
        //         }, 40);
        // }




//         let k = 12000;

//         setTimeout(randomHomosapeian, k);

//         let m = 0

//         randomHomosepianArray = ['B  JDOF   ',
//          'OTO VQ R T',
//          'GMQ CVC OX',
//          ' QV FZU  Y',
//          'U AWMYXO I',
//          'BLU I  SVY',
//          ' Y CY IQPT',
//          'P  O FK  Y',
//          'OS OKWVNEZ',
//          ' TWON BZET',
//          ' YUOHBLZEQ',
//          'NVKOKKRVE ',
//          ' M OOUNMEA',
//          'DZ OY  GE ',
//          ' P O EAOEB',
//          'T HOTHIZES',
//          'TMZOZNNUEV',
//          ' ZSOG  PEZ',
//          ' IAO  VME ',
//          'O ROMQROE ',
//          'WX OLDHOEJ',
//          ' PMOHLGZEO',
//          'DRMOY GBEU',
//          'H MOA  SEE',
//          'HCMO JHAE ',
//          'HDMOVCAYEJ',
//          'HBMOAUPRE ',
//          'HVMOAKP E ',
//          'H MOE PMED',
//          'HGMON P EN',
//          'HQMOH PJEN',
//          'HWMOPSPOEN',
//          'HXMOE PKEN',
//          'HOMOUSPJEN',
//          'HOMOWKPQEN',
//          'HOMOKAP EN',
//          'HOMOFAP EN',
//          'HOMORAP EN',
//          'HOMO APJEN',
//          'HOMOUAPPEN',
//          'HOMOQAPFEN',
//          'HOMOSAP@N ',
//          'HOMOHAP@',
//          'HOMOSAPIEN.']

//         function randomHomosapeian(){
//                 setInterval(() => {
//                     if (m < randomHomosepianArray.length)
//                         {m+=1; heroSkills.innerHTML = randomHomosepianArray[m-1]}
//                 }, 50);
//         }





//         let c = 16000;

//         setTimeout(randomCurious, c);

//         let d = 0

//         randomCuriousArray = ['XEN  M IF NG X',
//          ' HT PKRS G   T',
//          'WK YBPK IQP OS',
//          ' X NOSV XEBVOF',
//          'KSY OQ  WE OOR',
//          'NCVSOZR  EKLOU',
//          '  A O   REBOO ',
//          'C HWO F CEICOQ',
//          'CW KO    E  O ',
//          'CJJROE  RE VOL',
//          'C K O Y PEA OS',
//          'CY AOXN PE  OZ',
//          'CXLQO   PE FOT',
//          'C   O L PE JOX',
//          'CENPOT  PEIOOL',
//          'CVTROJA PE  ON',
//          'CRK O F PEHZON',
//          'CUR OAB PETPON',
//          'CURSO K PE VON',
//          'CUR O L PE  ON',
//          'CURDO   PEEEON',
//          'CURLO^G PE OON',
//          'CURLO(L)% PEGSON',
//          'CUR OOG PE SON',
//          'CURGO   @EQSON',
//          'CUR O M PE SON',
//          'CUR OTX PEDSON',
//          'CUR O Z PE SON',
//          'CURNOIR PE SON',
//          'CURMOVC PE SON',
//          'CURMO U PENSON',
//          'CURBON(D PESSON',
//          'CURKOZP PEGSON',
//          'CURLO   PEWSON',
//          'CUROOV  PE SON',
//          'CURGOD  !EYSON',
//          'CURRORM PE SON',
//          'CUROOBB PEZSON',
//          'CURCO K PE SON',
//          'CURMO P PEXSON',
//          'CURNOWQ PE SON',
//          'CURKOGA PELSON',
//          'CURYOQM PEFSON',
//          'CURCOYC PETSON',
//          'CUR +OBO PETSON',
//          'CURPO S PEYSON',
//          'CURWOWS PEGSON',
//          'CURMO S PEKSON',
//          'CURVOZS PENSON',
//          'CURJO S PEYSON',
//          'CUR O$S PE SON',
//          'CUR OWS #E SON',
//          'CUR O S PEUSON',
//          'CURIO$S PE!SON',
//          'CUR@OQS PERSON',
//          'CURIOUS PE|SON',
//          'CURIOUS PERSON.']

//         function randomCurious(){
//                 setInterval(() => {
//                     if (d < randomCuriousArray.length)
//                         {d+=1; heroSkills.innerHTML = randomCuriousArray[d-1]}
//                 }, 50);
//         }






//         let v = 23000;

//         setTimeout(randomUi, v);

//         let y = 0

//             randomCuriousArray = ['  PEACIXCUXDOV',
//          'SDQ HLTYYXJD Y',
//          'KHVF UADL XT A',
//          'LTCVRSKR MM J ',
//          ' UDFZ  I VRHD ',
//          'AKVYY  HD  XM ',
//          'NBXN   EDO ZM ',
//          '  PBT REFODSKU',
//          'O VTH OE  H L ',
//          'A NEA PEN  JO ',
//          'QA HM IER  U  ',
//          'T  EQ CEZTNLFY',
//          '   J  YEBMWYNN',
//          'C  JU EEDNF  V',
//          'P  TY  EDD  AB',
//          'N  GR MEV GC  ',
//          'KE Y  ZE  GKMF',
//          'ZO  W GELAG B ',
//          'C  A  FEENGSR ',
//          ' N XH AEHRGFAZ',
//          '   GO VEDMGP  ',
//          ' J N  UEVOGETA',
//          'PO  L XE RG  H',
//          'Q   O QEMTGZ B',
//          'CS IG  EHJGE M',
//          'LX D  IEVJG  B',
//          'GV DH PE QG   ',
//          'KK NZ UE QG& CI',
//          'O  +W  KEV GMU ',
//          'QN T   EEDGT H',
//          'YM IJ  ELLGTZL',
//          'YZ )SE CE  GUIP',
//          'ZB U   E*QLGT Y',
//          'BJ UR VENFG  A',
//          'SK U  KE YGFKZ',
//          'X  UP BE PGQNZ',
//          ' R UP VE  GDWT',
//          ' P UU  EBO#G Y ',
//          'XY {UP DEX G FH',
//          ' I UL DE  GD  ',
//          'WI UE DE@ UGGHM',
//          'SI UW DEDQGF  ',
//          'PI UY DE VGPAQ',
//          'AI UH DEVRG H ',
//          'EI UH D$EWGGN R',
//          ' I UB DEFGGNLR',
//          'WI U  ?DED GNNR',
//          'VI||}} UC DE FGNHR',
//          'CI UH DEV! GNER',
//          'UI UX DE EGNER',
//          'JI UF DES GNER',
//          'QI U  DESUGNER',
//          'VI UD DESIGNER',
//          'UI UC DE HGNER',
//          'UI UX DESIGNER.']

//         function randomUi(){
//                 setInterval(() => {
//                     if (y < randomUiArray.length)
//                         {y+=1; heroSkills.innerHTML = randomUiArray[y-1]}
//                 }, 50);
//         }
// }

// setInterval(randomizer, 12000);
