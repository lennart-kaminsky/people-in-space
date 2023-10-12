console.log("Sanity-Check");

const peopleCountElement = document.querySelector('[data-js="people-count"]');
const peopleList = document.querySelector('[data-js="people-list"]');

async function currentPeopleInSpace() {
  const url = "http://api.open-notify.org/astros.json";

  const response = await fetch(url);
  const data = await response.json();

  peopleCountElement.textContent = `${data.number} people are currently in space`;

  data.people.forEach((person) => {
    const personElement = document.createElement("li");
    personElement.textContent = `🚀 ${person.name} (${person.craft})`;
    document.body.append(personElement);
  });
}

currentPeopleInSpace();
