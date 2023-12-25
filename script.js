// 1
const a = [1, 2, 3, 4, 5];
a.forEach((element) => document.writeln(element + '<br>'));

// 2
var salary = prompt("Enter your salary: ", 100);
console.log(salary);

if(salary > 5000){
    document.writeln("You have nice salary" + '<br>');
}
else if (salary > 2000 && salary < 5000){
    document.writeln("You have medium salary" + '<br>');
}
else{
    document.writeln("You have miserable salary" + '<br>');
}
'<br>'
// 3
const b =  [ 15,53,22,198,10,28,16,70,33,951 ];
b.forEach((element) => {
    if(element % 2 == 1){
        document.writeln(element + '<br>')
    }
});