/*
1. Створити список з допомогою роботи з домом, 
пронумерувати список та вивести всі його значення. 
Населення відобразити в млн "40 млн". 
Київ та Україна підсвітити синьо-жовтим кольором.

var CountryList = [
    {
    country: "Україна",
    capital:"Київ",
    count: 40000000
    },
    {
    country: "Грузія",
    capital:"Тбілісі"
    count: 10000000
    },
];
*/
console.log("*** task 1 ***");

var countryList = [
    {
        country: "Великобританія",
        capital: "Лондон",
        capital_count: 10000000,
    },
    {
        country: "Німеччина",
        capital: "Берлін",
        capital_count: 3000000,
    },
    {
        country: "Франція",
        capital: "Париж",
        capital_count: 2300000,
    },
    {
        country: "Україна",
        capital: "Київ",
        capital_count: 4000000,
    },
    {
        country: "Грузія",
        capital: "Тбілісі",
        capital_count: 1100000,
    },
    {
        country: "Данія",
        capital: "Копенгаген",
        capital_count: 620000,
    },
    {
        country: "Норвегія",
        capital: "Осло",
        capital_count: 660000,
    },
];

let container = document.createElement('div');
let list = document.createElement('ol');

for (let i = 0; i < countryList.length; i++) {
    let list_item = document.createElement('li');
    let country_name = document.createElement('h1');
    let capital_name = document.createElement('h2');
    let capital_population = document.createElement('p');

    country_name.innerHTML = ` країна: ${countryList[i].country} ` ;//? яка різниця???
    let c = countryList[i].capital;
    capital_name.innerHTML = `столиця: <em> ${c} </em> `;
    capital_population.innerHTML = `Населення столиці: ${countryList[i].capital_count / 1000000} млн. ` ; 

    if (countryList[i].country === "Україна") {
        country_name.classList.add('my-country');
    }
    if (countryList[i].capital === "Київ") {
        capital_name.classList.add('my-capital');
    }

    list_item.append(country_name);
    list_item.append(capital_name);
    list_item.append(capital_population);
    list.append(list_item);
}
container.append(list);
document.body.append(container);
