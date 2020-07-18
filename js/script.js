function addClass(selList, selBurger){
    const list = document.querySelector(selList),
          burger = document.querySelector(selBurger)

    burger.addEventListener('click', function(){
        this.classList.toggle('active')
        list.classList.toggle('active')

    })
}
addClass('.main-page__list', '.main-page__burger')
;