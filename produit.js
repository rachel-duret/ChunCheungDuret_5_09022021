const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);
let url =fetch('http://localhost:3000/api/teddies');
url.then(function(data){
    return data.json();
   
}).then(function(dataArray){
    console.log(dataArray);
    for (let key of dataArray){
       
        if (id===key._id){
            let box = document.getElementById('teddy');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h2')
            let description = document.createElement('p')
            let price = document.createElement('p')
            let i = document.createElement('i')
            let btn = document.createElement('button');
            
            img.src = key.imageUrl;
            name.innerText = key.name;
            description.innerText = key.description;
            price.innerText = key.price ;
            i.className ="fas fa-euro-sign"
            btn.innerText = 'Add to panier'
           
            
            box.appendChild(div);
            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(description); 
            div.appendChild(price);      
            price.appendChild(i)
            div.appendChild(btn);
            console.log(box)
            }
       
    }
})