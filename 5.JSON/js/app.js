/*JSON to Object*/


const response = [
{
   "id": "1",
  "name": "Ion",
  "semestrul": 1,
  "notele":{
    "Web 1": 5.32,
    "POO 2": 9.99
  },
  "Date":"15.08.1996",
  "grupa":"Mi41Z",
  "isStudent": true,
	toString() {
  	return `{id: "${this.id}"name :"${this.name}", Date of birth: "${this.Date}", Grupa: "${this.grupa}", Notele: "${this.notele}"}`;
	}
},

{
   "id": "2",
  "name": "Ion Baklajan",
  "semestrul": 1,
  "notele":{
    "Web 1": 5.32,
    "POO 2": 9.99
  },
  "Date":"15.08.1996",
  "grupa":"Mi41Z",
  "isStudent": true,
  toString() {
    return `{id: "${this.id}"name :"${this.name}", Date of birth: "${this.Date}", Grupa: "${this.grupa}", Notele: "${this.notele}"}`;
  }
},
   ];
// alert(response);
// var min = response.name;
// document.getElementById("min").innerHTML = min;

function studentTemplate(response) {
    return `
    <div class="student">
     <h2 class="student-name">${response.name}</h2> 
     <p><strong>Date of birth:</strong> ${response.Date}</p>
     <p><strong>Grupa:</strong> ${response.grupa}</p>
     <p><strong>Notele:</strong> ${response.notele}</p>

    `;
}

document.getElementById("app").innerHTML = `
<h1 class="app-title-students">Student (${response.length} results)<h1>
${response.map(studentTemplate).join("")}
`;

/*Object to JSON*/

const carObject = {
	brand: "Merceder",
	model: "G class",
	parameters: {
		width: 1500,
		length: 4000
	}
};


const carJSON = JSON.stringify(carObject);
console.log(carJSON);