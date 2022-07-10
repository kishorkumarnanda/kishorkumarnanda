const tabs = document.querySelectorAll('[nav-tab]'),
      tabContents = document.querySelectorAll('[nav-tabContent]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualificationactive')
        })

        target.classList.add('qualificationactive')
        tab.forEach(tab=>{
            tab.classList.remove('qualificationactive')
        })
        tab.classList.add('qualificationactive')
    })
})