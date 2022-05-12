/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.

*/

console.log("hello, vanilla.");

const right = document.querySelector("i.fa-arrow-right");
const left = document.querySelector("i.fa-arrow-left");
const imgbx = document.querySelector(".image-box")
const img = document.querySelectorAll("img");
var num = 0;

right.addEventListener("click", function(){
  imgbx.appendChild(img[num]);
  num = num + 1;
  if (num === 5){
    num = num - 5;
  }
}) 

left.addEventListener("click", function(){
  imgbx.appendChild(img[num]);
  if (num === 0){
    num = num + 5;
  }
  num = num - 1;
}) 