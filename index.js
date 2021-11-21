// ✨ You got this!

let toggleBtn = document.getElementById("toggle")

toggleBtn.addEventListener('click',toggleTheme)

let buttons = document.getElementsByTagName('button')
// console.log(buttons)
let btnLinks = ['https://www.space.com/beaver-moon-lunar-eclipse-photos-november-2021','https://www.space.com/nasa-james-webb-space-telescope-launch-one-month','https://www.space.com/wormholes-may-be-stable-after-all']

buttons[0].addEventListener('click',()=>{window.open(btnLinks[0],'_blank')})

buttons[1].addEventListener('click',()=>{window.open(btnLinks[1],'_blank')})

buttons[2].addEventListener('click',()=>{window.open(btnLinks[2],'_blank')})

function toggleTheme() {
            
            let currentTheme = document.getElementById('styleeee');
            if(toggleBtn.checked == true){
                currentTheme.setAttribute('href', "../styles/dark.css");
            }
            else{
                currentTheme.setAttribute('href', "../styles/light.css");
            }
            
        
            
        }