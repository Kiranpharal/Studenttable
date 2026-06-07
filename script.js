
const users = [
    {
        id: 1,
        surname: "Jha",
        firstname: "Rabi",
        age: "23",
        gender: "Male",
        level: "100 level",
        province: "Bagmati"
    },
    {
        id: 2,
        surname: "Sharma",
        firstname: "Sita",
        age: "21",
        gender: "Female",
        level: "200 level",
        province: "Koshi"
    },
    {
        id: 3,
        surname: "Thapa",
        firstname: "Ram",
        age: "20",
        gender: "Male",
        level: "100 level",
        province: "Lumbini"
    },
    {
        id: 4,
        surname: "Karki",
        firstname: "Gita",
        age: "22",
        gender: "Female",
        level: "300 level",
        province: "Karnali"
    },
    {
        id: 5,
        surname: "Rai",
        firstname: "Suman",
        age: "24",
        gender: "Male",
        level: "400 level",
        province: "Bagmati"
    },
     {
        id: 6,
        surname: "Jha",
        firstname: "Rabi",
        age: "23",
        gender: "Male",
        level: "100 level",
        province: "Bagmati"
    },
    {
        id: 7,
        surname: "Sharma",
        firstname: "Sita",
        age: "21",
        gender: "Female",
        level: "200 level",
        province: "Koshi"
    },
    {
        id: 8,
        surname: "Thapa",
        firstname: "Ram",
        age: "20",
        gender: "Male",
        level: "100 level",
        province: "Lumbini"
    },
    {
        id: 9,
        surname: "Karki",
        firstname: "Gita",
        age: "22",
        gender: "Female",
        level: "300 level",
        province: "Karnali"
    },
    {
        id: 10,
        surname: "Rai",
        firstname: "Suman",
        age: "24",
        gender: "Male",
        level: "400 level",
        province: "Bagmati"
    }
    
];

const tbody= document.querySelector("#userTable tbody");
const searchBtn = document.getElementById("search-btn");

function displayUsers(data){
  tbody.innerHTML ="";

  if(data.length == 0){
    tbody.innerHTML=`
         <tr>
            <td colspan="8"> No student Record.</td>
         </tr>
    `;
    return;
  }
  data.forEach(user =>{

    const row=document.createElement("tr");

             row.innerHTML=`
             <td>${user.id}</td>
              <td>${user.surname}</td>
              <td>${user.firstname}</td>
              <td>${user.age}</td>
              <td>${user.gender}</td>
              <td>${user.level}</td>
              <td>${user.province}</td>
              <td>
                 <button class="result-btn"> Download Result </button>
              </td>
              `;

      tbody.appendChild(row);

  });
}

displayUsers(users);

searchBtn.addEventListener("click", () => {
  const age = document.getElementById('age').value;
  const  province = document.getElementById('province').value;
  const level = document.getElementById('level').value;
  const gender = document.getElementById('gender').value;

  const filteredUsers = users.filter(user => {
    const ageMatch = age ==="" || user.age === age;

    const provinceMatch = province ==="" || user.province === province;

    const levelMatch = level === "" || user.level === level;

    const genderMatch = gender === "" || user.gender.toLowerCase() === gender.toLowerCase();

    return (
      ageMatch && provinceMatch && levelMatch && genderMatch
    );

  
  });
  displayUsers(filteredUsers);
});