
let panierLists = JSON.parse(localStorage.getItem('panierLists'));
function displayPanier( src, title, colors, quantité, price){
    let panier = document.getElementById('panier');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2')
    let color = document.createElement('p')
    let totalQte = document.createElement('p')
    let prix = document.createElement('p')
    let i = document.createElement('i')
    let btnDel = document.createElement('button');
   
    div.className = "teddy";
    img.src = src;
    name.innerText = title;
    color.innerText = colors;
    totalQte.innerText = quantité;
    prix.innerText = price;
    i.className = "fas fa-euro-sign"
    btnDel.className = 'delBtn'
    btnDel.innerText = 'Supprimer'
   
    panier.appendChild(div);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(color)
    div.appendChild(totalQte);
    div.appendChild(prix);      
    prix.appendChild(i)
    div.appendChild(btnDel);                             
}
for(let i in panierLists){
    displayPanier( panierLists[i].img, panierLists[i].name,panierLists[i].color,panierLists[i].quantité,panierLists[i].price);
}

 // count total price and create productsId
 let products= new Array;
 let sum = 0;
 if (panierLists !==null){
    for( let i=0; i<panierLists.length; i++){
        sum += panierLists[i].price 
        products.push(panierLists[i].id);
    }
    localStorage.setItem('priceteddies', sum);
 }
 
 let totalPrix = document.createElement('h3');
 let i = document.createElement('i');
 i.className = "  fas fa-euro-sign"
 totalPrix.innerText = 'Total Prix:   ' + sum ;
 totalPrix.appendChild(i);
 panier.appendChild(totalPrix);

 //delete goods function
function deletGood(){
    let btns = document.querySelectorAll('.delBtn');
    for(let i=0; i<btns.length; i++){
        btns[i].addEventListener('click', function(e){
            
            let delDiv = btns[i].parentElement;
            let parent = delDiv.parentElement;
            let removed = parent.removeChild(delDiv);
            removed===removed;
             panierLists.splice(i,1);
             //console.log(panierLists)
           // console.log(JSON.stringify(panierLists));
            localStorage.removeItem('panierLists')
            localStorage.setItem('panierLists',JSON.stringify(panierLists));
            location.reload();
                       
        })
    }
   
}
deletGood();

let submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
    // stop auto submit of the form
    e.preventDefault();
    let lastName = document.getElementById('nom');
    let firstName = document.getElementById('prenom');
    let address = document.getElementById('addresse');
    let city = document.getElementById('ville');
    let email = document.getElementById('email')
    let contact = {
        firstName: lastName.value,
        lastName: firstName.value,
        address: address.value,
        city: city.value,
        email: email.value
    }  

   let reqUrl = 'http://localhost:3000/api/teddies/order';
   fetch(reqUrl, {
       method: "POST",
       headers:{
           "Content-Type": "application/json"
        },
       body: JSON.stringify({contact, products})   
   })
   .then(function(response){
       return response.json()
   })
   .then(function(data){
       let panierLists = null;
       localStorage.removeItem('panierLists')
       localStorage.setItem('panierLists',JSON.stringify(panierLists))      
       localStorage.setItem('orderData', JSON.stringify(data));
       //display page comfirmation
       location.href='confirmation.html?'+data.orderId;     
   })
   .catch(function(err){
    alert('error');
   })

})