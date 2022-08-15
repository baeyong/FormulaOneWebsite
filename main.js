const raceList = document.querySelector(".race-List");
const facts = document.querySelector(".facts");

const api = {
  url: "http://ergast.com/api/f1/2021.json",
};

const { url } = api;
const apiUrl = `${url}`;

console.log(apiUrl);

fetch(apiUrl)
  .then(res => res.json())
  .then((file1) => {
    console.log("this is file1", file1)
    console.log("try looking at keys", Object.keys(file1))
    console.log("this is MRData", file1.MRData, "its keys is", Object.keys(file1.MRData))
    console.log("this is the racetable", file1.MRData.RaceTable, "its keys are", Object.keys(file1.MRData.RaceTable))
    file1.MRData.RaceTable.Races.forEach((race) => {
      console.log("this is each race", race)
      let R = document.createElement("li");
      let a = document.createElement("p");
      // a.setAttribute("href", race.url);
      // a.setAttribute("rel", "noopener noreferrer");
      a.setAttribute("target", "_blank");
      a.addEventListener("click", function () { myFunction(race.raceName) });
      a.setAttribute("style", "padding-top: 3px;");
      a.textContent = race.raceName;
      R.className = "race-List";
      R.appendChild(a);
      raceList.appendChild(R);

      // do the work here
    })
  }
  );

  function myFunction(raceName){
    const api2 = {
      url:"http://ergast.com/api/f1/2021.json"
    };
    const {url} = api2;
    const apiUrl2 = `${url}`;

    document.getElementById("root").innerHTML = "";
    fetch(apiUrl2)
      .then(res => res.json())
      .then((file2) => {console.log(file2.MRData.RaceTable.Races)
        for(let i = 0; i < file2.MRData.RaceTable.Races.length; i++){
          if(file2.data.MRData.RaceTable.Races[i].raceName == raceName){
              let R = document.createElement("li")
              let a = document.createElement("p");

              a.setAttribute("href", file2.MRData.RaceTable.Races[i].url);
              a.setAttribute("target", "_blank");
              a.setAttribute("rel", "noopener noreferrer");
              a.setAttribute("style" ,"padding-top: 3px");
              a.textContent = file2.MRData.RaceTable.Races[i].url;
              R.className = "facts";
              R.appendChild(a);
              facts.appendChild(R);

          }// if

        }// for loop for file2.MRData.RaceTable.Races
      
      }) // then

  }// myFunction