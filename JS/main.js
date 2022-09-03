const button = document.getElementById('button');
const popup_div = document.getElementById('popup');
const cookie_image = document.getElementById('cookie-image');
const cookie_name = document.getElementById('cookie-name');
const cookie_info = document.getElementById('cookie-info');

button.onmouseup = function(){
  file_list = getFile2();
  num = Math.floor(Math.random() * file_list.length);

  // console.log(popup_div.style.display);
  // console.log("num = " + num);
  // console.log("file_list[num] = " + file_list[num]);
  cookie_name.innerText = file_list[num][0];
  cookie_image.src = file_list[num][1];
  cookie_info.innerText = file_list[num][2];

  setTimeout(()=>{
    popup_div.style.display = 'flex';
    

    // console.log(cookie_image.src);
    // console.log(popup_div.style.display);
    // console.log(cookie_image.src);
  }, 150);
  
}

popup_div.onclick = function(){
  popup_div.style.display = 'none';
}

function getFile2(){
  return [
    ["용감한 쿠키", "../IMG/c_brave.png", "맨 처음 탈출을 감행한 용감한 쿠키.\n 마녀의 오븐속에서 구워지고 있던 쿠키가 어떻게 해서 생명을 얻게 되었는지 알려져 있지 않다. \n아마도 쿠키를 만들던 마녀가 생강가루와 생명을 주는 마법가루를 혼동했던 것은 아닐까?"],
    ["천사맛 쿠키", "../IMG/c_angel.png", "천사맛이 나는 쿠키지만, 아직 나는법을 완전히 익히지 못해 날 수 있는 높이가 1cm 남짓밖에 안된다. \n탱탱한 곱슬머리에서 나오는 특별한 자력으로 주변의 젤리와 아이템들을 끌어당긴다! \n좋아하는 동물은 펭귄과 타조 그리고 귀여운 병아리다."],
    ["마법사맛 쿠키", "../IMG/c_wizard.png", "정말 우연히 마녀의 마법사탕지팡이를 얻게된 이후로, 매우 특별하고도 강력한 마법을 사용할 수 있게된 쿠키. \n톡톡 터지는 식감의 팝핑캔디 아이스크림을 멋스럽게 얹어, 마법사다운 맛을 더했다. \n자주 쓰는 주문으로는 언제나 축제처럼 즐거운 분위기를 일으키는 '파티파티 페스티베르르(patipari-festiverrrr)', \n그리고 예상치도 못한 행운과 우연한 재미를 불러오는 '세렌디피티 아프라시아시타(serendipiti-aprasiasitda)'가 있다."],
    ["비트맛 쿠키", "../IMG/c_beet.png", "바위 바닥과 거친 흙마저 뚫고 자란 야생 비트로 만들어 근성으로 넘치는 쿠키. \n이렇게 힘든 날을 견디고 참으며 자랐기 때문인지 더욱 붉게 익어버렸다. \n깊은 숲에 텐트 하나를 치고 사는데, 자신의 영역을 지키기 위해 석궁을 겨누며 주변을 경계한다. \n힘든 환경에 그나마 남은 단내가 쏙 빠져도, 비바람에 텐트가 날아가도 어떻게든 살 길을 찾는 야무지고 끈질긴 쿠키! \n홀로 숲에서만 살았기 때문인지 쿠키를 만나기라도 하는 날에는 사냥감을 봤을 때보다 더 화들짝 놀란다고 한다."],
    ["닌자맛 쿠키", "../IMG/c_ninja.png", "김치에게 숙성이 중요한 만큼 쿠키에게도 수련이 중요하다는 걸 닌자맛 쿠키를 통해 알 수 있다. \n바람을 딛고 여러번의 점프를 할 수 있다는 이 쿠키의 성분이나 맛의 비결이 밝혀지지 않았다. \n닌자맛 쿠키가 점프를 하면 결코 발이 땅에 닿지 않는다는 소문도 있고, 사실 뛰고 있는 것은 분신 뿐이라는 소문도 있다. \n수련을 계속하여 점프실력을 더 향상시킬 수 있다는데 과연 어디까지 올라갈 수 있을까."],
    ["딸기맛 쿠키", "../IMG/c_strawberry.png", "부끄러움이 많아 좋은점이 있다면 달콤한 딸기향이 쉽게 날아가지 않는다는 것. \n다른 쿠키들처럼 활발하게 움직였다면, 사실 딸기가 직접 들어있지는 않고 향만 첨가되었다는 사실을 금방 들켜버렸을지도 모른다. \n하지만 젤리들을 녹여 딸기젤리로 만들 정도로 달콤상큼한 향이니 자신감을 가지기를!"],
    ["근육맛 쿠키", "../IMG/c_muscle.png", "근육맛 쿠키에는 단백질 파우더가 들어가며, 땀이 쏙 빠질때까지 열심히 반죽을 해줘야 한다. \n3주 정도 반죽을 하고 나면 비로소 근육맛이 나기 시작한다... \n이렇게 오랜 단련을 통해 만들어진 근육맛 쿠키는 화가나면 운동기구를 던져버리는 습관이 있다. \n그러나 케이크 괴물들을 웬만큼 혼내주고 나면 금방 화가 풀리니 너무 무서워하지 말자."],
  ]
}
// function getFile(){
//   const fs = require('fs');
//   const imgArr = [];

//   fs.readdir('../IMG', 'png')
//     .then((data)=>{
//       data.forEach((img)=>{
//         if(img.toString().indexOf('c_') !== -1){
//           imgArr.push(img);
//         }
//       })
//     })
//     .catch((err)=>{
//       console.error(err);
//     })

//     if(imgArr){
//       return imgArr;
//     }
// }
