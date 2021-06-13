const $bottom = document.getElementById('bottom_line');
const $middle = document.getElementById('middle_line');
const $top = document.getElementById('top_line');
const $con = document.getElementById('sandwich_con');
const $menu = document.getElementById('menu');
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');
const list4 = document.getElementById('list4');
$con.addEventListener('click',function(){
    $bottom.classList.toggle('change');
    $middle.classList.toggle('change');
    $top.classList.toggle('change');
    $menu.classList.toggle('active')

});
list1.addEventListener('click',function(){
    $menu.classList.remove('active');
    $bottom.classList.remove('change');
    $middle.classList.remove('change');
    $top.classList.remove('change');
})
list2.addEventListener('click',function(){
    $menu.classList.remove('active');
    $bottom.classList.remove('change');
    $middle.classList.remove('change');
    $top.classList.remove('change');
})
list3.addEventListener('click',function(){
    $menu.classList.remove('active');
    $bottom.classList.remove('change');
    $middle.classList.remove('change');
    $top.classList.remove('change');
})
list4.addEventListener('click',function(){
    $menu.classList.remove('active');
    $bottom.classList.remove('change');
    $middle.classList.remove('change');
    $top.classList.remove('change');
})









const animItems = document.querySelectorAll('._anim-item');
if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll)
    function animOnScroll(){
        for(i=0;i<animItems.length;i++){
            const animItem = animItems[i];
            const animItemHeight =animItem.offsetHeight;
            const animItemOffset=offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight >window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset >animItemOffset-animItemPoint)  && pageYOffset <(animItemOffset +animItemHeight)) {
                animItem.classList.add('_dynamic')
            } else{
                if (animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_dynamic')
                }
               
            }
        }
    }
    function offset(el){
        const rect =el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top:rect.top+scrollTop,left:rect.left+scrollLeft}
    }
    setTimeout(function(){
        animOnScroll()
    },400)
}





