// number type
var integer = 10;
var double = 10.12;
var negative = -20;

var binary = 0b1010;       // 2진수
var octal = 0o127;         // 8진수
var hex = 0xff;            // 16진수


console.log("양수 :" + integer);
console.log("음수 :" + negative);
console.log("소수 :" + double);
console.log("2진수 :" + binary);
console.log("8진수 :" + octal);
console.log("16진수 :" + hex);

console.log(1 / 0);
console.log(-1 / 0);
console.log(Number("abc"));




// string 타입
var string;
string = '작은 따옴표를 감싼 문자열에서는 "큼 따옴표"를 특수기호로 사용 가능합니다.'
console.log(string);
string = "큰 따옴표를 감싼 문자열에서는 '작은 따옴표'를 특수기호로 사용 가능합니다."
console.log(string);
string = '작은 따옴표 사이에서 또다시 작은 따옴표는 \'이렇게\' 사용 가능합니다.'
console.log(string);


// 탬플릿 리터럴
var name = "김정은"
var age = 21;
var height = 155;
var weight = 45;

console.log(`이름 : ${name}, 나이 : ${age}, 키 : ${height}, 몸무게 : ${weight}`);
console.log("이름 : " + name, "나이 : " + age, "키 : " + height, "몸무게 : " + weight);



// boolean 타입
var isTrue = true;
var isFalse = false;
console.log(isTrue);
console.log(isFalse);

var num1 = 1;
console.log(num1 == isTrue);

// undefined 타입
var isUndefined;
console.log(isUndefined);

var asUndefined = 1;
asUndefined = undefined;
console.log(asUndefined);

// null 타입
asUndefined = null;
console.log(asUndefined);

