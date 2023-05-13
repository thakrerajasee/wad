window.onload = ()=>{
    
    if(localStorage){
        document.getElementById('sample-form').addEventListener('submit',()=>{

            var name  = document.getElementById('name');
            localStorage.setItem('name',name.value);

            var mail = document.getElementById('email');
            localStorage.setItem('email',mail.value);

            var password = document.getElementById('password');
            localStorage.setItem('password',password.value);

            var check = document.getElementById('terms')
        
            
            
           
            localStorage.setItem('check',check.value);
        });
    }
}