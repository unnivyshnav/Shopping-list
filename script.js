function ajax() {
  let length = 10 + localStorage.length;
  var list = [];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status) {
      list = JSON.parse(this.responseText);
      var body = document.getElementById("tBody");

      for (var i = 0; i < list.length; i++) {
        var row = `<tr>
        <th scope="row">${list[i].sNo}</th>
        <td class="item">${list[i].iName}</td>
        <td>${list[i].qty}</td>
        <td>${list[i].unit}</td>
        <td>${list[i].dept}</td>
        <td>${list[i].note}</td>
        <td><input class="check" type="checkbox"></td>
        </tr>`;

        body.innerHTML += row;
      }
    }
  };

  xhttp.open("GET", "./list.json", true);
  xhttp.send();
}

window.addEventListener("load", ajax);
