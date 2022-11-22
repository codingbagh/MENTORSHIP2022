const container = document.getElementById("container")
const changeTheme = document.getElementById("changeTheme")
let isChange = true;
const themeChanger = ()=>{

    if(isChange){
        container.style.backgroundColor="black";
        container.style.color="white";
        changeTheme.textContent = "Light Theme"
        isChange = !isChange
     
        return 
    }
container.style.backgroundColor="white";
container.style.color="black";
changeTheme.textContent = "Dark Theme"
isChange = !isChange

}


changeTheme.addEventListener('click',themeChanger)
