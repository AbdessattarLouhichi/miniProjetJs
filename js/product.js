
// var template = document.getElementById('rowList').content;
var tbody = document.getElementById('tbody');


// create  Products array from localStorage
var Products = JSON.parse(localStorage.getItem('product')) || [];

// Create a List of products
function ProductList() {
    Products.map((product,index)=>{
        tbody.innerHTML+= `
        <tr>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td><img src='${product.productImg}'width ="50px"></td>

            <td class="align-middle">
                <button data-toggle='modal' class='btn btn-success' data-target='#edit' onClick='(showData(${index}))' data-mdb-toggle="tooltip" title="Done">
                    <i class="fas fa-pencil-alt text-white"></i></button>
                <button title="Remove" class='btn btn-danger' onClick='Supprimer(${index})'>
                    <i class="fas fa-trash-alt text-white"></i></button>
            </td>
        </tr>`
    })
}

// get index
var index = null

function saveIndex(i) {
   index = i
}
// Display data in Modal Popup
function showData(i) {
    var name = document.getElementById('productName')
   var description = document.getElementById('description')
   
    console.log(Products[i]);
   name.value = Products[i].name
   description.value = Products[i].description
  
   saveIndex(i)
}

// Delete slected product from Product List
function Supprimer(i) {
    Products.splice(i,1);
    localStorage.setItem('product', JSON.stringify(Products))
    window.location.reload()
}

// Click #update buton to save changes
var update = document.getElementById('update');
update.addEventListener('click', function () {
    var name = document.getElementById('productName');
    var description = document.getElementById('description');
 
   var data = {
    name: name.value,
    description : description.value,
    productImg : Products[index].productImg
   }
   
   // replace selected item from Products array with data
   Products.splice(index,1,data);
localStorage.setItem('product', JSON.stringify(Products));
window.location.reload();

})