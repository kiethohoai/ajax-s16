'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/* 
const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const res = JSON.parse(this.responseText);
    const data = res[0];

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.EUR.name}${
      data.currencies.EUR.symbol
    }</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

const getCountryData2 = country => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const res = JSON.parse(this.responseText);
    const data = res[0];

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.vie}</p>
        <p class="country__row"><span>💰</span>${data.currencies.VND.name}${
      data.currencies.VND.symbol
    }</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData2('vietnam'); */

/* 
const renderCountry = (data, className) => {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.EUR.name} ${
    data.currencies.EUR.symbol
  }</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeigbour = country => {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const res = JSON.parse(this.responseText);
    const data = res[0];
    console.log(`🚀  data =>`, data);

    // Render country
    renderCountry(data, '');

    // Render neighbour country
    const neighbour = data.borders.at(0);

    // Guard
    if (!neighbour) return;

    // Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const res = JSON.parse(this.responseText);
      const data2 = res[0];
      console.log(`🚀  data2 =>`, data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeigbour('portugal');
 */

// const res = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(`🚀  res =>`, res.json());

// const renderCountry = (data, className) => {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//         <p class="country__row"><span>💰</span>${data.currencies.EUR.name} ${
//     data.currencies.EUR.symbol
//   }</p>
//       </div>
//     </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = (message) => {
//   countriesContainer.insertAdjacentText('beforeend', message);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errMessage = 'Something went wrong!') {
//   return fetch(url).then((respone) => {
//     if (!respone.ok) {
//       throw new Error(`${errMessage} ${respone.status}`);
//     }

//     return respone.json();
//   });
// };

// const getCountryData = (country) => {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
//     .then((data) => {
//       renderCountry(data[0], '');

//       // 2) Country 2
//       const neighbour = data[0]?.borders?.at(0);
//       if (!neighbour) {
//         throw new Error(`Neighbour not found!`);
//       }

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Neighbour not found`,
//       );
//     })
//     .then((data2) => renderCountry(data2[0], 'neighbour'))
//     .catch((err) => {
//       alert(`Something went wrong! ${err.message}`);
//       // console.log(`🚀  err =>`, err.message);
//       // renderError('Something went wrong!');
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

/* 
console.log(`1) Test start`);

setTimeout(() => {
  console.log(`5) 0 sec timer`);
}, 0);

Promise.resolve(`Resolved Promise 1`).then((res) => console.log(`3) ${res}`));
Promise.reject(`Rejected Promise`).catch((err) => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(`4) ${err}`);
});

console.log(`2) Test end`); */

// 016 Building a Simple Promise
/* 
const temp = new Promise(function (resolve, reject) {
  console.log(`Now start!`);

  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve(`YOU WIN 😘😘😘`);
    } else {
      reject(`YOU LOSE 🤣🤣🤣`);
    }
  }, 2000);
});

temp.then((res) => console.log(res)).catch((err) => console.error(err));
 */

// 017 Promisifying the Geolocation API
/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (error) => reject(error),
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then((pos) => console.log(pos))
  .catch((err) => console.log(err)); */

// 018 Coding Challenge #2
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = (imgPath) => {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error(`Image not found!`));
    });
  });
};

let curImage;

createImage('img/img-1.jpg')
  .then((img) => {
    curImage = img;
    console.log(`Image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    // Hide image
    curImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((img) => {
    curImage = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    curImage.style.display = 'none';
  })
  .catch((err) => {
    console.log(`🚀  err =>`, err);
  });
