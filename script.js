document.querySelector("button").addEventListener("click", resultone);

async function resultone() {
  try {
    var test = document.getElementById("text").value;
    var data = await fetch(
      `https://openlibrary.org/search.json?q=${test}`
    );
    var res = await data.json();
    console.log(res);

    var docs = res.docs;
    var container = document.getElementById("card-container");
    container.innerHTML = ""; // Clear previous results

    docs.forEach((doc) => {
      var col = document.createElement("div");
      col.className = "col-lg-4 mb-3";
      col.innerHTML = `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${doc.title}</h5>
            <p class="card-text"><b>Author:</b> ${doc.author_name}</p>
            <p class="card-text"><b>publish year:</b> ${doc.publish_year}</p>
            <p class="card-text"><b>Author Name:</b> ${doc.author_name}</p>
            <p class="card-text"><b>Title Suggest:</b> ${doc.title_suggest}</p>
          </div>
          </div>`;
      container.appendChild(col);
    });

  } catch (error) {
    console.log(error);
  }
}
