
var tbody = document.getElementById('tbody');


// create  Products array from localStorage
var Products = JSON.parse(localStorage.getItem('product')) || [];

// create an array by PRODUCT category from prodcuts array
const arrayByCategory = Object.values(
    Products.reduce((acc,curr)=>(
      (acc[curr.category] = acc[curr.category] || []).push(curr), acc
    ), {})
  );
 console.log(arrayByCategory);
// Window.onload (Create a List of products from Products array )
function ProductList() {
    Products.map((product,index)=>{
        tbody.innerHTML+= `
        <tr> 
            <td>${product.name}</td>
            <td>${product.category}</td>
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
    let name = document.getElementById('productName');
    let description = document.getElementById('description');
    let category = document.getElementById('productCategory');
    let image = document.getElementById('image')
   
    console.log(Products[i]);
   name.value = Products[i].name;
   category.value = Products[i].category
   description.value = Products[i].description;
   image.src = Products[i].productImg;
   
   saveIndex(i)
}

// Delete slected product from Product List
function Supprimer(i) {
    confirm("Êtes-vous sûr de vouloir supprimer?");
    Products.splice(i,1);
    localStorage.setItem('product', JSON.stringify(Products))
    window.location.reload()
}

// Function to converte image to Base 64
const toBase64 = file  => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });

// Click #update buton to save changes
var update = document.getElementById('update');
update.addEventListener('click', async function () {
    let name = document.getElementById('productName');
    let description = document.getElementById('description');
    let category = document.getElementById('productCategory');
    let image= document.getElementById('productImg');

    let base64 = "";
    if(image.files.length>0){   
        base64 = await toBase64(image.files[0]);     
    }else{
        base64 = Products[index].productImg;
    }
 
   let data = {
    name: name.value,
    description : description.value,
    category : category.value,
    productImg : base64
   }
   
   // replace selected item from Products array with data
   Products.splice(index,1,data);
localStorage.setItem('product', JSON.stringify(Products));
window.location.reload();

})