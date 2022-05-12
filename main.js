/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.ㅇㅋ
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.ㅇㅋ
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.ㅇㅋ
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.ㅇㅋ
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.ㅇㅋ

*/
const right = document.querySelector("i.fa-arrow-right");
const left = document.querySelector("i.fa-arrow-left");
const imgbx = document.querySelector(".image-box")
const dotZero = document.querySelectorAll("li")[0];
const dotOne = document.querySelectorAll("li")[1];
const dotTwo = document.querySelectorAll("li")[2];
const dotThree = document.querySelectorAll("li")[3];
const dotFour = document.querySelectorAll("li")[4];

dotZero.addEventListener("click", function(){
  imgbx.prepend(document.querySelector("img#four"));
  imgbx.prepend(document.querySelector("img#three"));
  imgbx.prepend(document.querySelector("img#two"));
  imgbx.prepend(document.querySelector("img#one"));
  imgbx.prepend(document.querySelector("img#zero"));
})
dotOne.addEventListener("click", function(){
  imgbx.prepend(document.querySelector("img#zero"));
  imgbx.prepend(document.querySelector("img#four"));
  imgbx.prepend(document.querySelector("img#three"));
  imgbx.prepend(document.querySelector("img#two"));
  imgbx.prepend(document.querySelector("img#one"));
})
dotTwo.addEventListener("click", function(){
  imgbx.prepend(document.querySelector("img#one"));
  imgbx.prepend(document.querySelector("img#zero"));
  imgbx.prepend(document.querySelector("img#four"));
  imgbx.prepend(document.querySelector("img#three"));
  imgbx.prepend(document.querySelector("img#two"));
})
dotThree.addEventListener("click", function(){
  imgbx.prepend(document.querySelector("img#two"));
  imgbx.prepend(document.querySelector("img#one"));
  imgbx.prepend(document.querySelector("img#zero"));
  imgbx.prepend(document.querySelector("img#four"));
  imgbx.prepend(document.querySelector("img#three"));
})
dotFour.addEventListener("click", function(){
  imgbx.prepend(document.querySelector("img#three"));
  imgbx.prepend(document.querySelector("img#two"));
  imgbx.prepend(document.querySelector("img#one"));
  imgbx.prepend(document.querySelector("img#zero"));
  imgbx.prepend(document.querySelector("img#four"));
})

right.addEventListener("click", function(){
  var img = document.querySelectorAll("img");
  imgbx.appendChild(img[0]);
}) 

left.addEventListener("click", function(){
  var img = document.querySelectorAll("img");
  imgbx.prepend(img[4]);
}) 