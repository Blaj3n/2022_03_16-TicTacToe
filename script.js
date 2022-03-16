window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function querry_all(name, arg) {
  //querry_all("name", q => q.argument);
  document.querySelectorAll(name).forEach((elem) => {
    arg(elem);
  });
}

var lepes = 0;

function init() {
  var txt = "";
  for (let index = 0; index < 9; index++) {
    txt += "<div></div>";
  }
  $("article")[0].innerHTML = txt;

  var elem = $("article div");
  querry_all("div", (q) =>
    q.addEventListener("mouseout", function change(Event) {
      Event.target.style.backgroundColor = "";
    })
  );
  querry_all("div", (q) =>
    q.addEventListener("mouseover", function change(Event) {
      Event.target.style.backgroundColor = "darkgray";
    })
  );
  for (let index = 0; index < elem.length; index++) {
    elem[index].addEventListener("click", function kattintas(Event) {
      if (lepes % 2 === 0) {
        Event.target.innerHTML = "X";
      } else {
        Event.target.innerHTML = "O";
      }
      lepes++;
      Event.target.removeEventListener("click", kattintas);
      Event.target.className = "kesz";
    });
  }
  for (let index = 0; index < elem.length; index++) {
    elem[index].addEventListener("mouseover", hattersinAllitas);
    elem[index].addEventListener("mouseout", hattersinLeAllitas);
  }
}
