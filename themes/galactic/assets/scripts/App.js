window.addEventListener('load', ()=>{
    // NavLink highlight start
    const activePage = window.location.href
    const navLinks = document.querySelectorAll('header nav.right ul li a')
    console.log(activePage)
    navLinks.forEach((link)=>{
        if(activePage == link.href){
            link.classList.add('active')
        }
    })
    // NavLink highlight end


    // Toggle Menu Start
    const menu = document.querySelector('nav.right ul.menu')
    const menuButton = document.querySelector('#menu_btn')

    window.addEventListener('keydown', function(event) {
        if(event.keyCode === 27){
            menu.classList.remove('active')
        }
    })

    window.addEventListener('mouseup', function(event){
        menuButton.addEventListener('click', ()=>{
            menu.classList.toggle('active')
        })
        
        if(event.target != menu && event.target.parentNode != menu){
            menu.classList.remove('active')
        }
    })

    window.addEventListener('scroll', (event)=>{
        if(event.target != menu && event.target.parentNode != menu){
            menu.classList.remove('active')
        }
    })
    // Toggle Menu End


    // // Active Header on Scroll Start
    // const header = document.querySelector('header')

    // window.addEventListener('scroll', ()=>{
    //     if(window.scrollY > 150){
    //         header.classList.add('active')
    //     }else{
    //         header.classList.remove('active')
    //     }
    // })
    // // Active Header on Scroll End

    // Get current year Start
    const date = new Date()
    const jsYear = document.getElementById('js_year')
    jsYear.innerHTML = date.getFullYear()
    // Get current year End
})