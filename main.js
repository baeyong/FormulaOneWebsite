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
      a.setAttribute("href", race.url);
      a.setAttribute("rel", "noopener noreferrer");
      a.setAttribute("target", "_blank");
      a.addEventListener("click", function() {myFunction(race.raceName)});
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
          if(file2.MRData.RaceTable.Races[i].raceName == raceName){
              let R = document.createElement("li");
              let r = document.createElement("p");

              r.setAttribute("href", file2.MRData.RaceTable.Races[i].url);
              r.setAttribute("target", "_blank");
              r.setAttribute("rel", "noopener noreferrer");
              r.setAttribute("style" ,"padding-top: 2px");
              r.textContent = "Round: "
              r.textContent += file2.MRData.RaceTable.Races[i].round;
              R.className = "facts";
              R.appendChild(r);

              let C = document.createElement("li");
              let c = document.createElement("p");

              c.setAttribute("href", file2.MRData.RaceTable.Races[i].url);
              c.setAttribute("target", "_blank");
              c.setAttribute("rel", "noopener noreferrer");
              c.setAttribute("style" ,"padding-top: 2px");
              c.textContent = "Date: ";
              c.textContent += file2.MRData.RaceTable.Races[i].date;
              C.className = "facts";
              C.appendChild(c);

              let F = document.createElement("li");
              let f = document.createElement("p");

              f.setAttribute("href", file2.MRData.RaceTable.Races[i].url);
              f.setAttribute("target", "_blank");
              f.setAttribute("rel", "noopener noreferrer");
              f.setAttribute("style" ,"padding-top: 2px");
              f.textContent = "Time: ";
              f.textContent += file2.MRData.RaceTable.Races[i].time;
              F.className = "facts";
              F.appendChild(f);

              let D = document.createElement("li");
              let d = document.createElement("a");

              d.setAttribute("href", file2.MRData.RaceTable.Races[i].url);
              d.setAttribute("target", "_blank");
              d.setAttribute("rel", "noopener noreferrer");
              d.setAttribute("style" ,"padding-top: 2px");
              d.textContent += file2.MRData.RaceTable.Races[i].url;
              D.className = "facts";
              D.appendChild(d);
  
              facts.appendChild(R);
              facts.appendChild(C);
              facts.appendChild(F);
              facts.appendChild(D);
              

          }// if

        }// for loop for file2.MRData.RaceTable.Races
      
      }) // then

  }// myFunction