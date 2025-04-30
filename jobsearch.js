const categories = Array.from(jCategory);

document.getElementById("searchbar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) =>
      item.title.toLowerCase().includes(searchData)
    );
    displayitems(filterData);
})

const displayitems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

items.forEach((item) => {
    const { index, image, title, rate, av } = item;
    const jlist = document.createElement("div");
    jlist.className = "jlist";
    jlist.innerHTML = `
    <img src="${image}" alt="">
    <h3>${title}</h3>
    <p>${rate}</p>
    <span id="key">${av}</span>
    `;

    rootElement.appendChild(jlist);

    jlist.addEventListener('click', ()=>{
      window.location.href = `job-details.html?id=${index}`;
    });
  });
};

displayitems(categories);