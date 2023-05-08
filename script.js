
function save() {
  
  let fieldValue = document.getElementById('text').value;
  localStorage.setItem("todo",fieldValue);
}  

 function deleteItems() {
            // Clear local storage items.
            localStorage.clear();
        }
