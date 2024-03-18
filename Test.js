function createmarks(str) {
    let nlkeys = ["new", "sale", "super", "rec", "white"];
    let nlimgs = [
      "https://static.tildacdn.com/tild6463-6435-4937-b935-643130626435/_1.svg",
      "https://static.tildacdn.com/tild6436-3534-4363-b266-373134316165/_1.svg",
      "https://static.tildacdn.com/tild3931-3438-4261-b361-366437323864/_1_1.png",
      "https://static.tildacdn.com/tild3561-3466-4233-b133-643038383966/_1.svg",
      "https://static.tildacdn.com/stor3033-3462-4534-b238-303930323066/47893609.png"
    ];
    
    let nlurls = [
      "/new",
      "/catalog/rasprodazha",
      "/khit",
      "/rekomenduem",
      ""
    ];
  
    let marksArray = str.split(',').map(label => label.trim().toLowerCase());
  
    var s = '';
    s += '<div class="nl_marwrapper">';
   for (let i = 0; i < marksArray.length; i++) {
    for (let ins = 0; ins < nlkeys.length; ins++) {
      if (marksArray[i] != undefined && nlkeys[ins].includes(marksArray[i])) {
        s +=
          '<a href="' + nlurls[ins] + '" class="nl_markimg" title="' +
          nlkeys[ins] +
          '" style="background-image:url(' +
          nlimgs[ins] +
          ')"' +
          ' onclick="event.stopPropagation();">';
        s += '</a>';
      }
    }
  }
  
    s += '</div>';
    return s;
  }
  
  function addMarkersToCards() {
    let marks = document.querySelectorAll('.t-store__card__mark-wrapper');
    for (let i = 0; i < marks.length; i++) {
      if (!marks[i].classList.contains('marked')) {
        let valstr = marks[i].textContent.replace(/\s/g, '');
        marks[i].insertAdjacentHTML('beforebegin', createmarks(valstr));
        marks[i].classList.add('marked');
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    setInterval(addMarkersToCards, 500);
  });


  // 



  var block = document.querySelector("#rec707186754 .t396__artboard");

  // Скрываем блок изначально
  block.style.display = "none";
  
  window.onscroll = function() {
      if (window.pageYOffset > 200) {
          // Если прокрутка больше 200px, показываем блок и применяем стили для фиксации
          block.style.display = "block";
          block.style.position = "fixed";
          block.style.top = "0";
          block.style.left = "0";
          block.style.width = "100%";
          block.style.zIndex = "1000";
      } else {
          // В противном случае скрываем блок и возвращаем стандартные стили
          block.style.display = "none";
          block.style.position = "static";
          block.style.top = "auto";
          block.style.left = "auto";
          block.style.width = "auto";
          block.style.zIndex = "1";
      }
  };
