import { dataInfo } from "./data.js";

const content = document.querySelector(".content");

const data = JSON.parse(dataInfo);
console.log(data);

data.forEach(({ id, name, price, url }) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = url;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = name;

  const subtitle = document.createElement("h4");
  subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
  subtitle.textContent = `Price ${price}RUB`;

  const idPara = document.createElement("p");
  idPara.classList.add("card-content");
  idPara.textContent = `ID ${id}`;

  cardBody.appendChild(title);
  cardBody.appendChild(subtitle);
  cardBody.appendChild(idPara);

  div.appendChild(img);
  div.appendChild(cardBody);

  content.appendChild(div);
});
