//Intro:

var introVid = "http://www.openbeelden.nl/files/65/65751.65625.POLYGOONLEADE-HRE0001E30E.mp4";

// nog te bepalen welke leaders


//Dieren
 var oiVids1  = [
"http://www.openbeelden.nl/files/06/25/625698.625672.WEEKNUMMER593-HRE0001D3B3.mp4#t=15",
"http://www.openbeelden.nl/files/06/50/650424.650409.WEEKNUMMER520-HRE00012F7F_786160_895640.mp4#t=27",
"http://www.openbeelden.nl/files/06/76/677490.676468.WEEKNUMMER301-HRE0001DAB0_2814720_2911000.mp4",
"http://www.openbeelden.nl/files/06/16/617004.616989.WEEKNUMMER513-HRE0001A714.mp4#t=20",
"http://openimages.eu/files/06/58/659219.658959.WEEKNUMMER694-HRE0000E86B_119000_189520.mp4#t=39",
"http://openbeelden.nl/files/BG/WEEKNUMMER575-HRE00015A6C.mp4#t=29",
"http://openbeelden.nl/files/06/63/664604.663553.WEEKNUMMER543-HRE0000CD9A_322560_376720.mp4#t=12",
"http://openbeelden.nl/files/06/24/624253.624223.WEEKNUMMER732-HRE00015B29.mp4#t=44",
"http://openbeelden.nl/files/06/48/648973.648914.WEEKNUMMER702-HRE0001B62B.mp4#t=15"];

//Tradities
 var oiVids2  = [
"http://openimages.eu/files/06/17/617557.617519.WEEKNUMMER685-HRE000188F0.mp4#t=5",
"http://openimages.eu/files/50/50572.50558.BG_4659.mp4#t=92",
"http://openimages.eu/files/80/80076.80060.WEEKNUMMER730-HRE0000CB17.mp4#t=10",
"http://www.openbeelden.nl/files/06/93/693848.693833.WEEKNUMMER675-HRE0001C20F_3137000_3266000.mp4#t=16",
"http://www.openbeelden.nl/files/23/23808.23794.WEEKNUMMER473-HRE0001D43E.mp4#t=2",
"http://www.openbeelden.nl/files/29/29531.29517.WEEKNUMMER252-HRE0000C815.mp4#t=45",
"http://www.openbeelden.nl/files/08/8325.8313.WEEKNUMMER741-HRE00016E94.mp4#t=15",
"http://www.openbeelden.nl/files/BG/WEEKNUMMER485-HRE00015FBB.mp4#t=1",
"http://www.openbeelden.nl/files/07/00/701311.700968.WEEKNUMMER601-HRE00013642_1559960_1638600.mp4",
"http://www.openbeelden.nl/files/71/71608.71593.WEEKNUMMER700-HRE0001B149.mp4",
"http://www.openbeelden.nl/files/06/50/650599.650576.WEEKNUMMER470-HRE00016B04.mp4#t=20",
"http://www.openbeelden.nl/files/06/63/664112.663763.WEEKNUMMER610-HRE0001DC15_2783440_2911000.mp4#t=5",
"http://www.openbeelden.nl/files/30/30404.30391.WEEKNUMMER464-HRE0001D413.mp4#t=7",
"http://openbeelden.nl/files/27/27898.27772.WEEKNUMMER510-HRE000158E7.mp4#t=71",
"http://openbeelden.nl/files/06/55/655018.WEEKNUMMER540-HRE0001F1B8_3216000_3323000.mp4#t=42"];

//Sport
 var oiVids3  = [
"http://www.openbeelden.nl/files/81/81285.81269.WEEKNUMMER481-HRE0000CAC6.mp4#t=42",
"http://www.openbeelden.nl/files/49/49261.49247.WEEKNUMMER790-HRE0001B850.mp4#t=1",
"http://www.openbeelden.nl/files/86/86269.86254.WEEKNUMMER322-HRE0001DB06.mp4#t=10",
"http://www.openbeelden.nl/files/86/86233.86218.WEEKNUMMER332-HRE0000DF9D.mp4#t=15",
"http://www.openbeelden.nl/files/09/9690.9679.WEEKNUMMER300-HRE0000C81C.mp4#t=30",
"http://www.openbeelden.nl/files/06/55/655599.655584.WEEKNUMMER574-HRE00015A7F_310400_398000.mp4#t=6",
"http://www.openbeelden.nl/files/10/10567.10554.WEEKNUMMER493-HRE000154B4.mp4#t=3",
"http://www.openbeelden.nl/files/09/9591.9580.WEEKNUMMER210-HRE0001B070.mp4#t=103",
"http://openbeelden.nl/files/06/48/648714.648700.BG_10591.mp4#t=22",
"http://openbeelden.nl/files/06/48/648714.648700.BG_10591.mp4#t=35",
"http://openbeelden.nl/files/06/17/617589.617542.WEEKNUMMER722-HRE0001A368.mp4",
"http://openbeelden.nl/files/06/16/616185.616170.WEEKNUMMER522-HRE0000D76E.mp4#t=12", ];

//Stad en Transport
 var oiVids4  = [
"http://www.openbeelden.nl/files/BG/WEEKNUMMER310-HRE00015649.mp4#t=3",
"http://www.openbeelden.nl/files/BG/WEEKNUMMER493-HRE0000DF21.mp4#t=2",
"http://www.openbeelden.nl/files/01/689768.1940.WEEKNUMMER472-HRE0000657A_1462000_1605000.mp4",
"http://www.openbeelden.nl/files/01/689768.1940.WEEKNUMMER472-HRE0000657A_1462000_1605000.mp4#t=44",
"http://www.openbeelden.nl/files/01/689768.1940.WEEKNUMMER472-HRE0000657A_1462000_1605000.mp4#t=104",
"http://www.openbeelden.nl/files/BG/WEEKNUMMER621-HRE0001C278.mp4#t=8",
"http://www.openbeelden.nl/files/07/01/702652.701293.WEEKNUMMER494-HRE00018B07_1811400_1926320.mp4",
"http://www.openbeelden.nl/files/BG/WEEKNUMMER375-HRE0000D0FE.mp4#t=28",
"http://www.openbeelden.nl/files/52/52896.52882.WEEKNUMMER642-HRE00029A35.mp4#t=2",
"http://www.openbeelden.nl/files/52/52896.52882.WEEKNUMMER642-HRE00029A35.mp4#t=33",
"http://www.openbeelden.nl/files/06/51/651472.651457.WEEKNUMMER800-HRE0001D36D.mp4#t=18",
"http://www.openbeelden.nl/files/06/51/651472.651457.WEEKNUMMER800-HRE0001D36D.mp4#t=42",
"http://www.openbeelden.nl/files/07/01/702652.701293.WEEKNUMMER494-HRE00018B07_1811400_1926320.mp4#t=28",
"http://openbeelden.nl/files/84/84933.84918.BG_32213.mp4#t=20"
];

