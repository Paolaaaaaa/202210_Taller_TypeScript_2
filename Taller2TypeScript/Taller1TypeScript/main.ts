import { Serie } from "./Serie.js"; 
import { data } from "./data.js";

let seriesTbody: HTMLElement=document.getElementById('vistaSeries')!;
let totalSeries: HTMLElement = document.getElementById('Total')!;
let cardsBody : HTMLElement = document.getElementById ('cards')!;

renderSeriesTable(data);

totalSeries.innerHTML =`${getTotalSeries(data)}`

function renderSeriesTable(series :Serie[]): void 
{
    console.log('Despegar series');
    series.forEach((dato)=>
    {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${dato.id}</td>
                                <td style='color: #0DA8CC ' onclick="renderDescription(${dato.id})" >${dato.name}</td> 
                                <td>${dato.channel}</td>
                                <td>${dato.seasons}</td>`; 
        let desElement = document.createElement("div");
        desElement.innerHTML =`<div class="card" style="width: 18rem;" id ="${dato.id}"><img src="${dato.imagen}">
                               <h5>${dato.name}</h5>
                           <p> ${dato.description}</p>
                               <a href="${dato.plataforma}">${dato.plataforma}</a></div>`;
        seriesTbody.appendChild(trElement);
        cardsBody.appendChild(desElement);
    });
}



function getTotalSeries (series: Serie[]):number
{
    let totalSeries: number =0;
    let promedio: number= 0;
    series.forEach((serie)=> totalSeries=serie.seasons+totalSeries);
    promedio = totalSeries/series.length;
    return promedio;
}
function renderDescription (idSer: number)
{
    var cdescrip = document.getElementById(`${idSer}`)!;
    cdescrip.classList.toggle("show");

}
