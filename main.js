/**ここからメニュースクロール**/
const sectionLink = document.querySelectorAll('a[href^="#section"]');
sectionLink.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        
        for (let i = 0; i < humbergerMenu.length; i++) {
            humbergerMenu[i].classList.remove('active');
        }
       
        const target = document.querySelector(link.hash);
        const offsetTop = window.pageYOffset + target.getBoundingClientRect().top

        window.scrollTo({
            top:offsetTop,
            behavior:'smooth'
        })
    })
});

/**ここからハンバーガーメニュー**/
const humberger = document.querySelector('.humberger');
const humbergerHum = document.querySelector('.hum');
const humbergerMenu = document.querySelectorAll('.humberger > div')
humberger.addEventListener('click',function(){
            for (let i = 0; i < humbergerMenu.length; i++) {
                if(humbergerMenu[i].classList.contains('active')){
                    humbergerMenu[i].classList.remove('active');
                }else
                    humbergerMenu[i].classList.add('active');
            }
        });

/**ここからハンバーガーメニューを開いたときのプログラム**/
const headerMenu = document.querySelector('.header-menu');

humberger.addEventListener('click',function(){
    if(headerMenu.classList.contains('active')){
        headerMenu.classList.remove('active');
    }else{
        headerMenu.classList.add('active');
    }
})

/**ここからハンバーガーメニューの位置で色を変える**/
window.addEventListener('scroll',function(){   
    if(window.pageYOffset > 550){
        for (let i = 0; i < humbergerMenu.length; i++) {
            humbergerMenu[i].classList.add('activehum');
        }
    }else{
            for (let i = 0; i < humbergerMenu.length; i++) {
                humbergerMenu[i].classList.remove('activehum');
        }
    }
})

/**メニューをクリックしたらメニュー閉じる**/
const menuList = document.getElementsByName('menu');
for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('click',function(){
        headerMenu.classList.remove('active');
    })
}