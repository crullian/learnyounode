

// console.log(+process.argv[i]);

var sum = 0;

for (var index = 2; index < process.argv.length; index++) {
	sum += Number(process.argv[index]);
}

console.log(sum);

//var result = 0

//    for (var i = 2; i < process.argv.length; i++)
//      result += Number(process.argv[i])

//    console.log(result);
