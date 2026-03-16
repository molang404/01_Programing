var a = 10;
var b = 3;

console.log("---- 산술 연산자 -----")

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

console.log(`a % b = ${a % b}`);

console.log("---- 증강 연산자 ----")

var x = 5;
console.log("x =", x);                          // 5

console.log("x++", x++); //출력 후 1 증가        // 5
console.log("x =", x);                         // 6

console.log("++x =", ++x); // 1 증가 후 출력    // 7
console.log("x =", x);                         // 7

console.log("x-- =", x--); // 출력 후 1 감소   // 7
console.log("x =", x);                       // 6

console.log("--x =", --x); // 1 감소 후 출력   // 5
console.log("x =", x);                      // 5

var num1;
num1 = 10;        // "=" 은 할당 연산자

num1 += 5;        // x = x + 5;  이걸 줄여서 썼을 뿐
num1 -= 5;        // x = x - 5;  이걸 줄여서 썼을 뿐



var num2 = 1
var bool1 = true;

console.log(num2 == bool1);     // 1 == true    // == 는 값만 비교
console.log(num2 === bool1);    // 1 === true   // === 는 값과 타입이 같은지 비교

// * 삼항 연산자 *
// 사용법 : (조건식) ? 참일 때 실행되는 코드 : 거짓일 때 실행되는 코드
//          조건식 : 비교 연산자를 사용한 '식'이 써져야 함 -> 결과가 true, false로 나오는 식


var result = num2 === bool1 ? "같다" : "다르다";
console.log(result);


var year = 2006;
var result2 = year <= 2001 ? "2001 이전" : "2001년 이후";
console.log(result2);

var result3 = true ? true : false;
console.log(result3);

// 논리합 (||)     => 둘 중에 하나라도 true면 true
var loginUser = "admin";
var gender = "male";

var result4 = loginUser === "admin" || gender === "female";
console.log(result4);

// 논리곱 (&&)    => 둘 다 true여야 true
var result5 = loginUser === "admin" && gender === "female";
console.log(result5);

// 부정 연산자 (!)

var result6 = !true;          // false
var result7 = !false;         // true
var result8 = !(loginUser === "admin" );    // false
var result9 = !loginUser;     // false
var result10 =!!loginUser;    // true       => 값이 있는 지 없는 지 판볗


// typeof 연산자 => 데이터 타입을 문자열로 반환
console.log(typeof result2);


if (typeof x === "number") {
    x++;
}
var eee = typeof x === "number" ? x++ : x;

var type = typeof x;           // "number"
console.log(x);
console.log(eee);
console.log(type);