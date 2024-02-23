updateView();

function updateView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    drawToots();
    `;
}

function drawToots() {
  let result;

  for (let i = 0; i < model.data.myToots.length; i++) {
    const toot = model.data.myToots[i];
    result += /*HTML*/ `
    <div class="toot">
        <div>${toot.name}</div>
        <div>${toot.year}</div>
        <div>${toot.type}</div>
        <div>${toot.value}</div>
        <div>${toot.producer}</div>
    </div>`;
  }

  return result;
}
