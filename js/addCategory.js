// Add New category

var categoryName = document.getElementById('categoryName');
var categDescription = document.getElementById('categDescription');
var errorForm = true;

// Create a category array from localStoarge
var Categories = JSON.parse(localStorage.getItem('category')) || [];

// button.addEventListener('click',function NewCategry) add new category
 function NewCategory() {
    if (categoryName.value == "" || categDescription.value == "") {
        categoryName.classList.add('is-invalid');
        categoryName.classList.remove('is-valid');
        categDescription.classList.add('is-invalid');
        categDescription.classList.remove('is-valid');
        errorForm = false;
    }

      
// generate object from input Data
    var data = {
        categoryName: categoryName.value,
        categDescription: categDescription.value,

    }
// if form is valid push data to Categories array
    if (errorForm) {
        Categories.push(data);
        localStorage.setItem('category', JSON.stringify(Categories));
    
        window.location.href = "categories.html"
    }
   

}