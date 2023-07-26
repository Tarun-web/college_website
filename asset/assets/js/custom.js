const toggleBtn = document.querySelector('.toggler-js')
const logoContainer = document.querySelector('.logo-container')
const logoImg = document.querySelectorAll('.logo-container .logo')

toggleBtn.addEventListener('click', ()=>{

    logoContainer.classList.toggle('column')
    toggleBtn.style.marginRight = '20px'
    
    logoImg.forEach(logo=>{
        logo.style.width = '60%'
    })

})
