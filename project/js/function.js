let mobileBtn = document.querySelector('.mobile-btn');
mobileBtn.addEventListener('click', function(){
  let gnb = document.querySelector('.gnb');

  //gnb.classList.add('on'); //클래스리스트는 .같은거 넣을필요가없다 클래스만나와서
  //gnb.classList.remove('on');

  gnb.classList.toggle('on');
});
  

let current = 0;
let next = 1;
let prev = 2;

window.setInterval(function(){

  let visualItem = document.querySelectorAll('.visual-item');
  // 인덱스 넘버는 바뀌지 않음!!

  if(next>=3){
    next=0;
  }

  visualItem[current].classList.remove('current', 'next');
  visualItem[current].classList.add('prev');

  visualItem[next].classList.remove('prev', 'next');
  visualItem[next].classList.add('current');

  visualItem[prev].classList.remove('prev', 'current');
  visualItem[prev].classList.add('next');

  prev = current;
  current = next;
  next++;
},3000);

let tabItem=document.querySelectorAll('.tab-item');
let group=document.querySelectorAll('.group');

console.log(tabItem);
console.log(group);

  //class를 바꾸는것보다 인덱스넘버를 바꿔서 작성하는게 편하다~(근데난아닌듯..?)
  // visualItem[1].classList.add('prev');
  // visualItem[2].classList.add('current');
  // visualItem[0].classList.add('next');

  // visualItem[2].classList.add('prev');
  // visualItem[0].classList.add('current');
  // visualItem[1].classList.add('next');

let activeIndex = 0;
for(let i=0; i<4; i++){
  tabItem[i].addEventListener('click', function(){
    activeIndex=i;

    for (let j=0; j<4; j++){ //전체를 지우는 역할
      tabItem[j].classList.remove('active');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }

    for(let k=0; k<3; k++){
      group[k].classList.remove('active');
    }

  
    this.classList.add('active');

    //All 탭 클릭 구분
    if(activeIndex ===3){
      for(let j=0; j<3; j++){
        group[j].classList.add('active');
      }
    }else{
      group[activeIndex].classList.add('active');
    }    
  });
}
