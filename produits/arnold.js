window.onload = function request(url, callback){
    let request = new XMLHttpRequest();
              request.onreadystatechange = function(){
                  if (request.readyState == 4 && request.status ==200){
                      let data = JSON.parse(this.responseText);
                      let teddy = document.getElementById('arnold');
                      let img = document.createElement('img');
                      let h2 = document.createElement('h2');
                      let p = document.createElement('p');
                      let description = document.createElement('p')
                      let i = document.createElement('i');
                      i.className ="fas fa-euro-sign"
                      let select = document.createElement('select');
                      let option = document.createElement('option');
                      let option1 = document.createElement('option');
                      let option2 = document.createElement('option');
                      let option3 = document.createElement('option');
                      let btn = document.createElement('button');

                      img.src = data[1].imageUrl;
                      h2.innerText = data[1].name;
                      p.innerText = data[1].price;
                      description.innerText = data[1].description;
                      option.innerText =data[1].colors[0];
                      option1.innerText =data[1].colors[1];
                      option2.innerText =data[1].colors[2];
                      btn.innerText = 'Add to panier';

                      teddy.appendChild(img);
                      teddy.appendChild(h2);
                      teddy.appendChild(p);
                      p.appendChild(i);
                      teddy.appendChild(description);
                      teddy.appendChild(select);
                      select.appendChild(option);
                      select.appendChild(option1);
                      select.appendChild(option2);
                      teddy.appendChild(btn);
                      

                        
                  }
              }
              request.open("get", "http://localhost:3000/api/teddies");
              request.send();
}           
