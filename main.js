const races = document.querySelector(".races")
const facts = document.querySelector(".facts")

const api = {
    url: "http://ergast.com/api/f1/2021"
    roundnumber: "/"
    parameter: "?limit=22"
}

const { url , roundnumber, parameter} = apiData;
const apiUrl = '${ur}${roundnumber}${parameter}';