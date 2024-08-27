import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date");

export function scheduleDay() {
  //Rendetiza as horas disponíveis
  hoursLoad({ date });
}
