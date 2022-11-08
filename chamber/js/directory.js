const requestURL = 'https://ckcomin.github.io/wdd230/chamber/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
});



function displayCompanies(company) {  // Create elements to add to the document
    let card = document.createElement('section');
    let image = document.createElement('img');
    let h2 = document.createElement('h2');    
    let p = document.createElement('p');   
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    // Change the textContent property of the h2 element to contain the company's full name
    image.setAttribute('src', company.imageurl);
    image.setAttribute('alt', company.name);
    p.textContent = company.address;
    p2.textContent = company.phone;
    a.textContent = company.website;

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(image);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card); 
}

