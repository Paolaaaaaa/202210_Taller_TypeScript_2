import { data } from "./data.js";
var seriesTbody = document.getElementById('vistaSeries');
var totalSeries = document.getElementById('Total');
var cardsBody = document.getElementById('cards');
renderSeriesTable(data);
totalSeries.innerHTML = "".concat(getTotalSeries(data));
function renderSeriesTable(series) {
    console.log('Despegar series');
    series.forEach(function (dato) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(dato.id, "</td>\n                                <td style='color: #0DA8CC ' onclick=\"renderDescription(").concat(dato.id, ")\" >").concat(dato.name, "</td> \n                                <td>").concat(dato.channel, "</td>\n                                <td>").concat(dato.seasons, "</td>");
        var desElement = document.createElement("div");
        desElement.innerHTML = "<div class=\"card\" style=\"width: 18rem;\" id =\"".concat(dato.id, "\"><img src=\"").concat(dato.imagen, "\">\n                               <h5>").concat(dato.name, "</h5>\n                           <p> ").concat(dato.description, "</p>\n                               <a href=\"").concat(dato.plataforma, "\">").concat(dato.plataforma, "</a></div>");
        seriesTbody.appendChild(trElement);
        cardsBody.appendChild(desElement);
    });
}
function getTotalSeries(series) {
    var totalSeries = 0;
    var promedio = 0;
    series.forEach(function (serie) { return totalSeries = serie.seasons + totalSeries; });
    promedio = totalSeries / series.length;
    return promedio;
}
function renderDescription(idSer) {
    var cdescrip = document.getElementById("".concat(idSer));
    cdescrip.classList.toggle("show");
}
