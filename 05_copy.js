var num1 = 10;
var str1 = "Hello";
var bool1 = true;

var pCopy1 = num1;
var pCopy2 = str1;
var pCopy3 = bool1;

// 참조 자료형의 녀석들은 복사할 때 신경 써줘야 함
// 실제로 Heap 메모리 영역에 저장되는 실제 값이 아니라 "주소값"이기 때문
// 실제 값은 Stack 메모리 영역에 건물을 짓고 저장됨

var originalUser = {
    name: "송민서",
    age: 21,
    sex: "Male",
};

var sCopyUser = originalUser; // originalUser의 값을 복사해서 sCopyUser에게 복사하는데, 이 "값"은 "주소값"
                                  //  얕은 복사 (swallow copy)
originalUser.name = "홍길동"
console.log(sCopyUser.name);

var dCopyUser = {            // 객체룰 새로 만들고, 그 안의 값들을 복사해주는 복사
    name: originalUser.name,     // 깊은 복사 (deep copy)
    age: originalUser.age,
    sex: originalUser.sex,
}

originalUser.name = "율곡이이";
console.log(`dCopyUser.name은 ${dCopyUser.name}입니다`);
console.log(`originalUser.name은 ${originalUser.name}입니다`);


var dCopyUser2 = {
    ...originalUser,            // ... 문법 (스프레드 문법, spread) : originalUser 변수 안에 있는 프로퍼티를 나열하겠다
};


var oUser2 = {
    name:"김철수",
    age: 25,
    address: {
        city: "서울",
        zipCode: "04524"
    }
};
// 스프레드 문법만 써서 사용하면 아래와 같은 결과가 됨 => 프로퍼티가 객체면 걔도 마찬가지로 주소값만 복사됩
// var dUser2 = {
//     name: dUser2.name,
//     age: dUser2.age,
//     address: dUser2.address,
// };
// oUser2.address.city = "안산시";
// console.log(`dUser2.address.city는 ${dUser2.address.city}입니다.`);

// oUser2에 대해 깊은 복사를 하려면 아래와 같이 작성
var dUser3 = {
    ...oUser2,
    address: {
        ...oUser2.address,
    }
}
// var dUser3 = {
//     name: oUser.name,
//     age: oUser.age,
//     address: oUser.address,
//     address: {                      //객체 안에 동일한 key를 갖고 있는 프로퍼티가 있다면, 덮어쓰기함
//         ...oUser2.address,
//     }
// }