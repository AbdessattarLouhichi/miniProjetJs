// Add New Products

var productName = document.getElementById('productName');
var description = document.getElementById('description');
var categorySelect = document.getElementById('category-select');
var image = document.getElementById('productImg');
var errorForm = true;

// Function to converte image to Base 64
    const toBase64 = file  => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });

//Create categories select options 
var Categories= JSON.parse(localStorage.getItem('category')) || [];
    Categories.map((category,index)=>{
        categorySelect.innerHTML+= `
        <option value="${category.categoryName}">${category.categoryName}</option>`
    })

// Create a Products array from localStoarge
var Products = JSON.parse(localStorage.getItem('product')) || [];

// Async-Await Function 
async function addProduct() {
    if (productName.value == "" || description.value == "") {
        productName.classList.add('is-invalid');
        productName.classList.remove('is-valid');
        description.classList.add('is-invalid');
        description.classList.remove('is-valid');
        errorForm = false;
    }

    let base64 = "";
    if(image.files.length>0){   
        base64 = await toBase64(image.files[0]);     
    }   
// generate object from input Data
    var data = {
        name: productName.value,
        description: description.value,
        category : categorySelect.value,
        productImg: base64
    }
    if (errorForm) {
        Products.push(data);
        localStorage.setItem('product', JSON.stringify(Products));
    
        window.location.href = "dashbord.html"
    }
   

}