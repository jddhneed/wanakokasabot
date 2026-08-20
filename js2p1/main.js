const btnClear = document.getElementById("btnClear");
const tblRecords = document.getElementById("tblRecords");


let arrRecords = new Array();
const tblTHsLabels = ["First Name", "Middle Name", "Last Name", "Age", "Action"];

@@ -93,6 +94,7 @@ btnClearItems.addEventListener("click", () => {

    document.getElementById("status").style.display = "inline";
    document.getElementById("status").innerHTML = "No Records...";
    document.getElementById("bottomControls").style.display = "none";

    btnInsertUpdate.innerHTML = "Insert";
    btnInsertUpdate.value = "insert";
@@ -110,6 +112,7 @@ function iterateRecords() {
    if(!(arrRecords.length == 0)) {

        document.getElementById("status").style.display = "none";
        document.getElementById("bottomControls").style.display = "block";

        const tblHeaderRow = document.createElement("tr");
        const tblHeader = document.createElement("thead");
@@ -195,6 +198,7 @@ function iterateRecords() {
    } else {
        document.getElementById("status").style.display = "inline";
        document.getElementById("status").innerHTML = "No Records...";
        document.getElementById("bottomControls").style.display = "none";
    }
}

@@ -213,15 +217,41 @@ function updateData(i) {

    btnInsertUpdate.innerHTML = "Update";
    btnInsertUpdate.value = `${i}`;

    sortRecords();
}

sortSelect.addEventListener("change", () => {
const sortByName = document.getElementById("sortByName");
const sortByOrder = document.getElementById("sortByOrder");

    const mode = sortSelect.value;
    if (mode === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (mode === "desc") {
        numbers.sort((a, b) => b - a);
function sortRecords() {
    const name = sortByName.value;
    const order = sortByOrder.value;
    
    if (name == "" || order == "") {
        return;
    }
    render();
});
 
    arrRecords.sort((a, b) => {
        let valueA = a[name];
        let valueB = b[name];

        if (typeof valueA === "string") {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();

            if (valueA < valueB) return order === "asc" ? -1 : 1;
            if (valueA > valueB) return order === "asc" ? 1 : -1;
            return 0;
        } else {
            return order === "asc" ? valueA - valueB : valueB - valueA;
        }

    });

    iterateRecords();
    
}

sortByName.addEventListener("change", sortRecords);
sortByOrder.addEventListener("change", sortRecords);