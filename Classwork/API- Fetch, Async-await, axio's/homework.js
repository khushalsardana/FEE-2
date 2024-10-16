let url = "https://swapi.dev/api/people/1";

let container = document.querySelector(".container");

async function getAPIdata() {
  try {
    let data = await fetch(url);
    let resultData = await data.json();
    showData(resultData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function showData(data) {
  container.innerHTML = `
    <div class="name">Name: ${data.name}</div>
    <div class="gender">Gender: ${data.gender}</div>
    <div class="height">Height: ${data.height} cm</div>`;
}
container.append();
getAPIdata();
