import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  //Obtém a data do input
  const date = selectedDate.value
  //Rendetiza as horas disponíveis
  hoursLoad({ date });
}
