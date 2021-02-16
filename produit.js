let panierArray = []//
function getPanierList(){
    panierArray = JSON.parse(localStorage.getItem('panierLists'));
}
getPanierList();
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
            let selectColor = document.createElement('select');
            let selectQte = document.createElement('select');
            let btn = document.createElement('button');
            
            img.src = key.imageUrl;
            name.innerText = key.name;
            description.innerText = key.description;
            price.innerText = key.price/100 ;
            i.className ="fas fa-euro-sign"
            selectQte.name = 'number';
            btn.innerText = 'Add to panier'
            btn.id = 'addBtn'
            

            box.appendChild(div);
            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(description); 
            div.appendChild(price);      
            price.appendChild(i)
            div.appendChild(selectColor);
            div.appendChild(selectQte);
            div.appendChild(btn);
            for(let i =0; i<key.colors.length; i++){
                let option = document.createElement('option');
                option.innerText =key.colors[i];
                selectColor.appendChild(option);
                console.log(selectColor.value)

            }
            for(let i =1; i<10; i++){
                let option = document.createElement('option');
                option.innerText =i;
                selectQte.appendChild(option);
                console.log(selectQte.value)

            }

             //add event listener add products to localstorage
             

           
            let addGoodBtn = document.getElementById('addBtn');
            addGoodBtn.addEventListener('click', function(){
            
                let PanierList = {
                    "img": img.src,
                    "name":name.innerText,
                    "color":selectColor.value,
                    "price":price.innerText*selectQte.value,
                    "id": id,
                    "quantité":selectQte.value
                }
                
                panierArray.push(PanierList)
                localStorage.setItem('panierLists', JSON.stringify(panierArray));        
               console.log(panierArray);
                
                
            })

           
        }
        
             
            
             
    }
})
