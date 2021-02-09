window.onload = function request(url, callback){
    let request = new XMLHttpRequest();
              request.onreadystatechange = function(){
                  if (request.readyState == 4 && request.status ==200){
                      let data = JSON.parse(this.responseText);
                      console.log(data[0].imageUrl);
                      let gustav = document.getElementById('gustav');
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
                      let btn = document.createElement('button');

                      img.src = data[3].imageUrl;
                      h2.innerText = data[3].name;
                      p.innerText = data[3].price;
                      description.innerText = data[3].description;
                      option.innerText =data[3].colors[0];
                      option1.innerText =data[3].colors[1];
                      option2.innerText =data[3].colors[2];
                      btn.innerText = 'Add to panier';

                      gustav.appendChild(img);
                      gustav.appendChild(h2);
                      gustav.appendChild(p);
                      p.appendChild(i);
                      gustav.appendChild(description);
                      gustav.appendChild(select);
                      select.appendChild(option);
                      select.appendChild(option1);
                      select.appendChild(option2);
                      gustav.appendChild(btn);
                    

                        
                  }
              }
              request.open("get", "http://localhost:3000/api/teddies");
              request.send();

}