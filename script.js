 const themeChange = document.querySelector('input[type="checkbox"]');
 const toggleIcon  = document.getElementById("toggle-icon")


 function darkmode(){

    toggleIcon.children[0].innerHTML= "Dark Mode";

    toggleIcon.children[1].classList.replace("fa-sun","fa-moon");

    
 }
 function ligthmode(){

    toggleIcon.children[0].innerHTML= "Light Mode";

    toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
    
 }



 function themeDarklight(event){

    if(event.target.checked){

        document.documentElement.setAttribute('data-theme', 'dark');

        localStorage.setItem("theme","dark")
        
      darkmode()

    }else{

        document.documentElement.setAttribute("data-Theme","light")
        
        localStorage.setItem("theme","light")
        ligthmode();

        
    }
 }
 

//  Evenlistener 
themeChange.addEventListener("change", themeDarklight)
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    themeChange.checked = true;
    darkmode();
  }
}