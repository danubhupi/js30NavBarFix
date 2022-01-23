const nav=document.querySelector('#main');
let initialHeight=nav.offsetTop;


fixNavbar=()=>{
    console.log(window.scrollY>nav.offsetTop);

    if(window.scrollY>initialHeight){
        document.body.style.paddingTop=`${nav.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
    }
    else{
        document.body.style.paddingTop=`0px`;

        // console.log(window.scrollY);
        document.body.classList.remove('fixed-nav');
    }
}

document.addEventListener('scroll',fixNavbar);