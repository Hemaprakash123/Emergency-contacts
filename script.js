const numbers = [
    { name: "National Emergency Number", number: "112" },
    { name: "Police", number: "112 or 100" },
    { name: "Fire", number: "101" },
    { name: "Ambulance", number: "102" },
    { name: "Disaster Management Services", number: "108" },
    { name: "Women Helpline", number: "1091" },
    { name: "Women Helpline - Domestic Abuse", number: "181" },
    { name: "Air Ambulance", number: "9540161344" },
    { name: "AIDS Helpline", number: "1097" },
    { name: "Anti Poison (New Delhi)", number: "1066 or 011-1066" },
    { name: "Disaster Management (NDMA)", number: "011-26701728 or 1078" },
    { name: "Earthquake/Flood/Disaster (NDRF Headquarters)", number: "011-24363260 or 9711077372" },
    { name: "Deputy Commissioner of Police – Missing Child and Women", number: "1094" },
    { name: "Railway Enquiry", number: "139" },
    { name: "Senior Citizen Helpline", number: "1091 or 1291" },
    { name: "Medical Helpline (Various States)", number: "108" },
    { name: "Railway Accident Emergency Service", number: "1072" },
    { name: "Road Accident Emergency Service", number: "1073" },
    { name: "Road Accident Emergency on National Highway (Private Operators)", number: "1033" },
    { name: "ORBO Centre, AIIMS (Organ Donation, Delhi)", number: "1060" },
    { name: "Relief Commissioner for Natural Calamities", number: "1070" },
    { name: "Children in Difficult Situation", number: "1098" },
    { name: "Central Vigilance Commission", number: "1964" },
    { name: "Tourist Helpline", number: "1363 or 1800111363" },
    { name: "LPG Leak Helpline", number: "1906" },
    { name: "Indian Railways Enquiry", number: "139" },
    { name: "Cyber Crime Helpline", number: "1930" },
];
function renderNumbers() {
    const container = document.getElementById('numbers');
    const list = document.createElement('ul');
    numbers.forEach(service => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="tel:${service.number}"> ${service.name}: ${service.number}</a>`;
      list.appendChild(listItem);
    });
    container.appendChild(list);
  }

  document.addEventListener('DOMContentLoaded', renderNumbers);
  