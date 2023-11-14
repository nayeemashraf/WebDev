const inputEl = document.getElementById("input-el");
const saveInput = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let myLeads = loadLeadsFromLocalStorage();

render(myLeads);

function loadLeadsFromLocalStorage() {
  const leadsFromLocalStorage =
    JSON.parse(localStorage.getItem("myLeads")) || [];
  return leadsFromLocalStorage;
}

const addLead = function (lead) {
  const filteredLead = lead.trim();
  if (filteredLead.length > 0 && !(myLeads.includes(filteredLead))) {
    myLeads.push(filteredLead);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
  }
};

function render(leads) {
  // leads.map() method returns an array of strings and then join() method is applied to join all array elements into one string, which is then assigned to ulEl.innerHTML to create the li elements.
  ulEl.innerHTML = leads
    .map((lead) => `<li><a target='_blank' href='${lead}'>${lead}</a></li>`)
    .join("");
}

function clearLocalStorage() {
  localStorage.clear();
  myLeads = [];
}

function saveLead(e) {
  if (e.type === "click" || e.key === "Enter") {
    addLead(inputEl.value);
    inputEl.value = "";
    render(myLeads);
  }
}

saveInput.addEventListener("click", saveLead);

inputEl.addEventListener("keyup", saveLead);

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    addLead(tabs[0].url);
    render(myLeads);
  });
});

deleteBtn.addEventListener("click", function () {
  clearLocalStorage();
  render(myLeads);
});
