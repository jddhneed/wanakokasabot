let arrRecords = JSON.parse(localStorage.getItem("arrRecords")) || [];
const tblTHsLabels = ["First Name", "Middle Name", "Last Name", "Age", "Action"];


if(arrRecords.length == 0) {
    document.getElementById("status").style.display = "inline";
    document.getElementById("status").innerHTML = "No Records...";
} else {
    document.getElementById("status").style.display = "none";
}
iterateRecords();

btnInsertUpdate.addEventListener("click", () => {