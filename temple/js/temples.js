const requestURL = 'https://ckcomin.github.io/wdd230/temple/json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['temples'];
    companies.forEach(displayCompanies);
});

function displayCompanies(company) {  
    // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');    
    let p = document.createElement('p');   
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    // Change the textContent property of the h2 element to contain the company's full name
    h3.textContent = company.name;
    p.textContent = company.address;
    p2.textContent = company.phone;
    p3.textContent = company.services;

    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card); 
}