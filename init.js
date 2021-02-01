
document.getElementById('btnStart').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('surNameOutput').innerText = initPerson.lastName;
})

document.getElementById('btnСlear').addEventListener('click', function () {
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('middleNameOutput').innerText = "";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('professionOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('surNameOutput').innerText = "";
})
