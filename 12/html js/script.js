function clickHandler() {
    // Зміна фону для div 3
    const div3 = document.getElementById("div3");
    div3.style.backgroundColor = "green";
  
    // Зміна кольору тексту для першого елемента ul
    const firstLi = document.querySelector(".first-ul-li");
    firstLi.style.color = "blue";
  }
  
  // Прив'язка події (альтернативний варіант замість onclick в HTML)
  document.getElementById("btn").addEventListener("click", clickHandler);  