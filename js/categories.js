
var tbody = document.getElementById('tbody');


// create  Categories array from localStorage
var Categories= JSON.parse(localStorage.getItem('category')) || [];

console.log(Categories)

// Window.onload (Create a List of products from Products array )

window.addEventListener('load',function() {
    Categories.map((category,index)=>{
        tbody.innerHTML+= `
        <tr> 
            <td>${category.categoryName}</td>
            <td>${category.categDescription}</td>
            <td class="align-middle">
                <button data-toggle='modal' class='btn btn-success' data-target='#editCateg' onClick='(showData(${index}))' data-mdb-toggle="tooltip" title="Done">
                    <i class="fas fa-pencil-alt text-white"></i></button>
                <button title="Remove" class='btn btn-danger' onClick='Supprimer(${index})'>
                    <i class="fas fa-trash-alt text-white"></i></button>
            </td>
        </tr>`
    })
})


// get index
var index = null

function saveIndex(i) {
   index = i
}
// Display data in Modal Popup
function showData(i) {
    let categoryName = document.getElementById('categoryName');
    let categDescription = document.getElementById('categDescription');
   
    //console.log(Categories[i]);

   categoryName.value = Categories[i].categoryName
   categDescription.value = Categories[i].categDescription;
   
   
   saveIndex(i)
}

// Delete slected product from Product List
function Supprimer(i) {
    confirm("Êtes-vous sûr de vouloir supprimer?");
    Categories.splice(i,1);
    localStorage.setItem('category', JSON.stringify(Categories))
    window.location.reload()
}


// Click #update buton to save changes
var update = document.getElementById('update');
update.addEventListener('click',  function () {
    let categoryName = document.getElementById('categoryName');
    let categDescription = document.getElementById('categDescription');

 
   let data = {
    categoryName : categoryName.value,
    categDescription : categDescription.value
   }
   
   // replace selected item from Categories array with data
   Categories.splice(index,1,data);
localStorage.setItem('category', JSON.stringify(Categories));
window.location.reload();

})