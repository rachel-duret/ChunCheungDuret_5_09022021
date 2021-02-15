let panierArray = new Array//
function init(){
    panierArray = JSON.parse(localStorage.getItem('panierLists'));
}
init();
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let url =fetch('http://localhost:3000/api/teddies');
url.then(function(data){
    return data.json();
   
}).then(function(dataArray){
    //console.log(dataArray);
    for (let key of dataArray){
       
        if (id===key._id){
            // create dom objets
            let box = document.getElementById('teddy');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h2')
            let description = document.createElement('p')
            let price = document.createElement('p')
            let i = document.createElement('i')
            let select = document.createElement('select');
            let btn = document.createElement('button');
            
            img.src = key.imageUrl;
            name.innerText = key.name;
            description.innerText = key.description;
            price.innerText = key.price ;
            i.className ="fas fa-euro-sign"
            btn.innerText = 'Add to panier'
            btn.id = 'addBtn'

            box.appendChild(div);
            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(description); 
            div.appendChild(price);      
            price.appendChild(i)
            div.appendChild(select);
            div.appendChild(btn);
            for(let i =0; i<key.colors.length; i++){
                let option = document.createElement('option');
                option.innerText =key.colors[i];
                select.appendChild(option);

            }

             //add event listener add products to localstorage
            /* let productData =JSON.stringify(key) ;
            let productId = JSON.stringify(id); */
           
            let addGoodBtn = document.getElementById('addBtn');
            addGoodBtn.addEventListener('click', function(){
                panierArray.push(key)
                localStorage.setItem('panierLists', JSON.stringify(panierArray));
               //panierArry.push(JSON.parse(localStorage.getItem(productId)));
               console.log(panierArray);
                
                
            })

           
        }
        
             
            
             
    }
})
