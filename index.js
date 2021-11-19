// ✨ You got this!

let toggleBtn = document.getElementById("toggle")

toggleBtn.addEventListener('click',toggleTheme)

 
function toggleTheme() {
            
            let currentTheme = document.getElementById('styleeee');
            if(toggleBtn.checked == true){
                currentTheme.setAttribute('href', "dark.css");
            }
            else{
                currentTheme.setAttribute('href', "light.css");
            }
            
        
            
        }