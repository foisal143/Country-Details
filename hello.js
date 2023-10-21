const country = 'https://restcountries.com/v3.1/all';

const loadData = () => {
  fetch(country)
    .then(res => res.json())
    .then(data => showData(data));
};

const showData = datas => {
  datas.forEach(data => {
    const name = data.name?.common;
    const flag = data.flags.png;
    const code = data.cca2;
    const div = document.createElement('div');
    div.innerHTML = `
   
      <img src="${flag}" alt="">
      <h3>${name}</h3>
      <button onclick="loadDetails('${code}')"> Details </button>
    `;
    document.getElementById('container').appendChild(div);
  });
};

const loadDetails = code => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => showDetails(data));
};

const showDetails = data => {
  const commonName = data[0].name.common;
  const officialName = data[0].name.official;
  const flag = data[0].flags.png;
  const area = data[0].area;
  const Independent = data[0].independent === true ? 'Yes' : 'No';
  const captal = data[0].capital[0] ? data[0].capital[0] : 'No Capital here';

  const div = document.getElementById('details');

  div.innerHTML = `
  <div>
  <img src="${flag}" alt="">
    <h2>Name: ${commonName}</h2>
    <h2>Official Name: ${officialName}</h2>
    <p>Area: ${area}</p>
    <p>Capital: ${captal}</p>
    <p>Independent: ${Independent}</p>
  </div>`;
};
loadData();
