


fs		= require('fs');




	
lien_du_livre	= './martin_1707.txt';
lignes			= fs.readFileSync(lien_du_livre, 'utf8').split(/\r?\n/);



book_code = {
"Mt":1,
"Mc":2,
"Lc":3,
"Jn":4,
"Ac":5,
"Rm":6,
"1Co":7,
"2Co":8,
"Gal":9,
"Eph":10,
"Ph":11,
"Col":12,
"1Th":13,
"2Th":14,
"1Ti":15,
"2Ti":16,
"Tt":17,
"Phm":18,
"Hé":19,
"Jc":20,
"1P":21,
"2P":22,
"1Jn":23,
"2Jn":24,
"3Jn":25,
"Jd":26,
"Ap":27,
}


xbook = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1CORINTHIENS',
8:'2CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1THESSALONICIENS',
14:'2THESSALONICIENS',
15:'1TIMOTHEE',
16:'2TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1PIERRE',
22:'2PIERRE',
23:'1JEAN',
24:'2JEAN',
25:'3JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}


for (l = 0 ; l != lignes.length ; l++)
{
	if (lignes[l] != "")
	{
		
		if (!lignes[l].match(/:/))
		{
			//console.log(lignes[l])
			
		}
		else
		{
			
			//4:3:6:JEAN:1:2022:OLIVETAN
			
			split_line = lignes[l].match(/\S+/g)
			//console.log(split_line)
			
			
			livre		= book_code[split_line[0]]
			
			cv			= split_line[1].split(':')
			chapitre	= cv[0]
			verset		= cv[1]
			
			lcv = split_line[0]+' '+chapitre+':'+verset
			
			texte = lignes[l].replace(lcv,"")
			
			console.log(
			
			livre    		+':'+
			chapitre  		+':'+
			verset    		+':'+
			xbook[livre]	+':'+
			'20:1707:MARTIN-1707' +
			texte
			);
			
			//console.log(lignes[l])
			
		}
		
		
		
	}
		
		
}