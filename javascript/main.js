$('#item').keyup(function (e) {
         if(e.keyCode === 13){
             sonu();
         }
      });

function removeitem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}


function complete(){
    var sonu = document.getElementById('completed');
    sonu.style.display = 'block';
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    sonu.appendChild(item);  
    
}

function sonu(){
    var task = document.getElementById('item').value;
    if(task == ""){
        return false;
    }
    var box = document.getElementById('box');
    
    
    
    var user = "<i class='material-icons user'>account_circle</i>";
    var lists = document.createElement('div');
    lists.classList.add('lists');
    lists.innerHTML = user;
    box.appendChild(lists);
    
    
    
    var item = document.createElement('div');
    item.classList.add('list-1');
    item.innerHTML = task;
    lists.appendChild(item);
    
    
    var icon_1 = "<i class='material-icons'>delete</i>";
    var icon_2 = "<i class='material-icons sonu-2'>done</i>"
    var button = document.createElement('div');
    button.classList.add('buttons');
    
    
    
    var buttons_1 = document.createElement('button');
    buttons_1.classList.add('delete');
    buttons_1.innerHTML = icon_1;
    buttons_1.addEventListener('click', removeitem);
    
    
    
    var hr = document.createElement('div');
    hr.classList.add('hr');
    
    
    
    var buttons_2 = document.createElement('button');
    buttons_2.classList.add('complete');
    buttons_2.innerHTML = icon_2;
    buttons_2.addEventListener('click', complete);
    
    
    
    button.appendChild(buttons_1);
    button.appendChild(hr);
    button.appendChild(buttons_2);
    
    
    
    lists.appendChild(button);
    $('#item').val('');
}

