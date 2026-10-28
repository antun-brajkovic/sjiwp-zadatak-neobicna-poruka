let seg1 = "ba";
let seg2 = "a ide na Mjesec ";
let seg3 = "kad";
let bool1 = false;
let nan1 = Number.NaN + 67 + bool1;

let gen1 = seg1 + nan1 + seg2 + nan1 + seg3;
let cilj = "baNaNa ide na Mjesec NaNkad"; // samo za usporedbu
let rez = (gen1 === cilj);

function printVarData(var1, varName1) {
	console.log(varName1 + ": " + var1 + "\ntype: " + typeof(var1));
}

function printVarsData(vars) {
	for(let i = 0; i < vars.length; i++) {
		printVarData(vars[i][0], vars[i][1]);
	}
}

console.log(rez);

printVarsData([
	[seg1, "seg1"], 
	[seg2, "seg2"], 
	[seg3, "seg3"], 
	[bool1, "bool1"], 
	[nan1, "nan1"], 
	[gen1, "gen1"], 
	[rez, "rez"]
]);