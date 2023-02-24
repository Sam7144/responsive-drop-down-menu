let fet=document.querySelector('.header__features');
let fet2=document.querySelector('.features2');
let list1=document.querySelector('.list1');
let list2=document.querySelector('.list2')
let arrow=document.querySelector('.arrow');
let togglee=document.querySelector('.spanlist');
let arrow2=document.querySelector(".arrow2");
let mobile1=document.querySelector('.mobile__list1');
let mobileFet=document.querySelector('.mobile__features1');
let arrowMobile=document.querySelector('.arrowMobile');
let mobile2=document.querySelector('.mobile__list2');//g
let mobileFet2=document.querySelector('.mobile__features2');//g
let arrowMobile2=document.querySelector('.arrowMobile2');
let side=document.querySelector('.side__js');
fet.addEventListener('mouseover',()=>{
    list1.classList.remove('header__features__test1')
    list1.classList.add('header__features__sublist1');
   arrow.src="./images/icon-arrow-up.svg"

})
fet.addEventListener('mouseleave',()=>{
    list1.classList.remove('header__features__sublist1');
    list1.classList.add('header__features__test1')
    arrow.src='./images/icon-arrow-down.svg'
})
fet2.addEventListener('mouseover',()=>{
    list2.classList.remove('header__features__test2');
    list2.classList.add('header__features__sublist2');
    arrow2.src='./images/icon-arrow-up.svg'
})
fet2.addEventListener("mouseleave",()=>{
    list2.classList.remove('header__features__sublist2');
    list2.classList.add('header__features__test2');
    arrow2.src='./images/icon-arrow-down.svg'
})
togglee.addEventListener("click",()=>{
    if(togglee.classList.contains('herburger')){
        togglee.classList.remove('herburger');
        togglee.classList.add('toggle');
        side.classList.remove('side__test')
    }
    else if(togglee.classList.contains('toggle')){
        togglee.classList.remove('toggle');
        togglee.classList.add('herburger')
        side.classList.add('side__test');
    }
}
)
mobileFet.addEventListener('click',()=>{
    if(mobile1.classList.contains('mobile__test1')){
        mobile1.classList.remove('mobile__test1');
        mobile1.classList.add("mobile__features__test1");
        arrowMobile.src='./images/icon-arrow-up.svg';
    }
    else if(mobile1.classList.contains('mobile__features__test1')){
        mobile1.classList.remove("mobile__features__test1");
        mobile1.classList.add('mobile__test1');
        arrowMobile.src='./images/icon-arrow-down.svg';
    }
})
mobileFet2.addEventListener('click',()=>{
    if(mobile2.classList.contains('mobile__test2')){
        mobile2.classList.remove('mobile__test2');
        mobile2.classList.add("mobile__features__test2");
       arrowMobile2.src='./images/icon-arrow-up.svg';
    }
    else if(mobile2.classList.contains('mobile__features__test2')){
        mobile2.classList.remove("mobile__features__test2");
        mobile2.classList.add('mobile__test2');
        arrowMobile2.src='./images/icon-arrow-down.svg';
    }
})
