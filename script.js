/*fetching api*/

fetch("http://demo.tech2edge.co/samples/data-sg")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    displaydata(data);
  })
  .catch((error) => console.log(error));

function skeleton () {
       const grid = document.querySelector('.CHARACTERS')
  const cardTemplate = document.getElementById('card-template')
  for (let i = 0; i < 6; i++) {
    grid.append(cardTemplate.content.cloneNode(true))
  }
}
/*display function*/

function displaydata(data) {
  const { title, ott, desc, img } = data.series;
  document.querySelector(".TITLE").innerHTML = title;
  document.querySelector(".PLATFORM").innerHTML = ott;
  document.querySelector(".DESCRIPTION").innerHTML = `" ${desc} "`;
  document.querySelector(
    ".MAIN-IMAGE"
  ).src = `http://demo.tech2edge.co/samples/${data.series.img}`;

  /*adding cast*/
  $(".CHARACTERS").empty();
  for (i in data.characters) {
    $(".CHARACTERS").append(`
          <div class="card mb-4 bg-dark" style="width: 60rem" id="${i}">
          <div class="row g-0">
          <div class="col-md-5 p-2">
          <img style="border-radius: 0.55rem;" src="http://demo.tech2edge.co/samples/${data.characters[i].img}" class="skeleton img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
          <div class="card-body">
          <h4 class="card-title">PRESENTING:-</h4>
          <div class="bar"></div>
          <div class="data">
          <div><strong>NAME</strong> : ${data.characters[i].name} </div>
          <div><strong>AGE</strong> : ${data.characters[i].age} </div> 
          <div><strong>PROFESSION</strong> : ${data.characters[i].profession} </div>
          </div>
          </div>
          </div>
          </div>
          </div>`);
  }
}
