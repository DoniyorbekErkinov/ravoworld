<script setup>
import { ref, onMounted, watch } from 'vue'
const { locale, t } = useI18n()
import handGlobe from './components/handGlobe.vue';
import logo from './components/logo.vue';
import burger from './components/burger.vue';

const currentItem = ref(1)
const cData = ref([
  {
    img: '/img/c-img-1.jpg',
    title: t('carousel.title1'),
    text: t('carousel.text1'),    
  },
  {
    img: '/img/c-img-2.jpg',
    title: t('carousel.title2'),
    text: t('carousel.text2'),    
  },
  {
    img: '/img/c-img-2.jpg',
    title: t('carousel.title3'),
    text: t('carousel.text3'),    
  },
  {
    img: '/img/c-img-2.jpg',
    title: t('carousel.title4'),
    text: t('carousel.text4'),  
  },
  {
    img: '/img/c-img-2.jpg',
    title: t('carousel.title5'),
    text: t('carousel.text5'),   
  }
])
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)
const count4 = ref(0)
function changeCurrentItem(side) {
  if (side == 'left') {
    if (currentItem.value == 1) {
      currentItem.value = 5
    } else {
      currentItem.value = currentItem.value - 1
    }
  } else {
    if (currentItem.value == 5) {
      currentItem.value = 1
    } else {
      currentItem.value = currentItem.value + 1
    }
  }
}
watch(locale, (newVal, oldVal) => {
  localStorage.setItem('locale', newVal)
})
onMounted(() => {
  let carouselInterval = setInterval(() => {
    if (window.pageYOffset > 200 && window.pageYOffset < 2500) {        
      changeCurrentItem('right')
    } else {
      clearInterval(carouselInterval)      
    }
  }, 2500)

  document.addEventListener('scroll', (event) => {
    if (window.pageYOffset > 2200) {
      let numberCount1 = setInterval(() => {
                if (count1.value < 30) count1.value++
                if (count1.value === 30) {
                    clearInterval(numberCount1)
                }
            }, 100)      
      let numberCount2 = setInterval(() => {
                if (count2.value < 2020) count2.value++
                if (count2.value === 2020) {
                    clearInterval(numberCount2)
                }
            }, 100)      
      let numberCount3 = setInterval(() => {
                if (count3.value < 440) count3.value++
                if (count3.value === 440) {
                    clearInterval(numberCount3)
                }
            }, 100)      
      let numberCount4 = setInterval(() => {
                if (count4.value < 500) count4.value++
                if (count4.value === 500) {
                    clearInterval(numberCount4)
                }
            }, 100)      
    }   
  })
})
</script>
<!-- xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col -->
<!-- xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full -->
<!-- xxl:px-0 xl:px-0 lg:px-0 px-8 -->
<template>
  <div class="h-full flex flex-col scrollbarActive overflow-y-hidden">
    <div id="main" class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] mx-auto">
      <!-- Navbar Start -->
      <div class="w-full py-8 xxl:px-0 xl:px-0 lg:px-0 px-8 flex justify-between items-center">
        <div class="w-[30%] text-[36px] flex items-center">
          <logo class="scale-125 xxlscale-100 xlscale-100 lgscale-100"/>            
        </div>
        <div class="w-[70%] flex justify-end items-center">
          <ul class="xxl:flex xl:flex lg:flex hidden justify-between w-[60%]">
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer"><a class="text-mGray hover:text-mRed text-lg" href="#main">{{$t('menu.main')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer"><a class="text-mGray hover:text-mRed text-lg" href="#service">{{$t('menu.service')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer"><a class="text-mGray hover:text-mRed text-lg" href="#advantages">{{$t('menu.advantages')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer"><a class="text-mGray hover:text-mRed text-lg" href="#about">{{$t('menu.about')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer"><a class="text-mGray hover:text-mRed text-lg" href="#contacts">{{$t('menu.contacts')}}</a></li>
          </ul>
          <div class="flex justify-end items-center w-[40%]">
            <div class="text-xl font-light font-mono mr-4">
              <select class="text-mGray hover:text-mRed border-none" v-model="locale">
                <option class="border-none text-mGray hover:text-mRed" value="ru">{{$t('lang.ru')}}</option>
                <option class="border-none text-mGray hover:text-mRed" value="en">{{$t('lang.en')}}</option>
                <option class="border-none text-mGray hover:text-mRed" value="uz">{{$t('lang.uz')}}</option>
              </select>
            </div>
            <div>

            </div>
            <div class="xxl:flex xl:flex lg:flex hidden text-mWhite text-2xl justify-between items-center">
              <svg class="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4741 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4018C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.945 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3146 6.72527 15.2661 5.18993 12.85C3.49991 10.2412 2.44818 7.27097 2.11993 4.17997C2.09494 3.90344 2.12781 3.62474 2.21643 3.3616C2.30506 3.09846 2.4475 2.85666 2.6347 2.6516C2.82189 2.44653 3.04974 2.28268 3.30372 2.1705C3.55771 2.05831 3.83227 2.00024 4.10993 1.99997H7.10993C7.59524 1.9952 8.06572 2.16705 8.43369 2.48351C8.80166 2.79996 9.04201 3.23942 9.10993 3.71997C9.23656 4.68004 9.47138 5.6227 9.80993 6.52997C9.94448 6.8879 9.9736 7.27689 9.89384 7.65086C9.81408 8.02482 9.6288 8.36809 9.35993 8.63998L8.08993 9.90997C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0554 17.4699 14.19C18.3772 14.5285 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>                
              <span>+998 90 123 45 67</span>
            </div>
            <burger class="xxl:hidden xl:hidden flex"></burger>
          </div>
        </div>
      </div>
      <!-- Navbar End -->
      <!-- Under Navbar Start -->
      <!-- Мгновенная доставка без границ -->
      <!-- Chegarasiz tezkor yetkazib berish -->
      <!-- Instant delivery without borders -->
      <div class="w-full py-14 mt-14 xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col flex justify-between items-center relative">
        <div class="flex flex-col xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 px-4 text-[32px] xxl:text-[56px] xl:text-[56px] lg:text-[56px] md:text-[56px] slg:text-[56px]">
          <span class="text-mWhite font-semibold">{{$t('header.title_1')}}</span>
          <div>
            <span class="text-mRed font-semibold">{{$t('header.title_2')}} </span><span class="text-mWhite font-semibold">{{$t('header.title_3')}}</span>
          </div>
        </div>
        <div class="flex justify-center items-center pt-6 xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 px-4">
          <div class="text-2Gray xxl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 slg:w-4/5 w-full flex justify-end text-lg font-normal leading-6">{{$t('header.text')}}</div>
        </div>
        <div class="xxl:h-[152px] xl:h-[152px] lg:h-[152px] md:h-[152px] slg:h-[152px] h-[112px] xxl:w-[152px] xl:w-[152px] lg:w-[152px] md:w-[152px] slg:w-[152px] w-[112px]  rounded-full bg-mRed absolute top-[80%] right-[50px] flex justify-center items-center text-mWhite text-base font-normal tracking-wider">{{$t('header.circle')}}</div>
      </div>
      <!-- Under Navbar End -->
    </div>
    <!-- Banner Image -->
    <div class="w-full xxl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[700px] slg:h-[700px] h-[285px]">
      <img class="w-full max-w-full xxl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[700px] slg:h-[700px] h-[285px]" src="public/img/banner.jpg"/>      
    </div>
    <!-- Banner Image -->
    <!-- Carausel Start -->
    <div id="service" class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full mx-auto mt-24">
      <!-- Header Start -->
      <div class="w-full flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col justify-between">
        <div class="flex flex-col xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 px-4">
          <span class="text-mWhite text-[40px] font-semibold tracking-wider">{{$t('carousel.title_1')}} </span> 
          <div class="text-mWhite text-[40px] font-semibold tracking-wider">{{$t('carousel.title_2')}} <span class="text-mRed text-[40px] font-semibold tracking-wider">{{$t('carousel.title_3')}}</span>
          </div>
        </div>
        <div class="flex justify-end items-center xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 px-4 text-2Gray">
          <div class="xxl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] slg:w-[60%] w-full text-base font-normal xxl:ml-14 xl:ml-14 lg:ml-14 ml-0 xxl:mt-0 xl:mt-0 lg:mt-0 mt-4">{{$t('carousel.text')}}</div>
        </div>  
      </div>
      <!-- Header End -->
      <!-- Body Start -->
      <div v-for="(item, i) in cData" :class="currentItem == (i+1) ? 'flex justify-between transition duration-[4000ms] ease-in-out' : 'hidden transition duration-[4000ms] ease-in-out'" :key="i" class="w-full xxl:h-[570] xl:h-[570] lg:h-[570] md:h-[570] slg:h-[570] h-[650px] mt-20">
        <div class="w-[85%] xxl:flex xl:flex lg:flex md:flex slg:flex h-full hidden justify-between">
          <div class="w-1/2 h-full flex flex-col py-14 mt-14">
            <div class="text-mWhite w-4/5 text-2xl font-medium transition duration-[4000ms] ease-in-out">
              {{ item.title }}
            </div>
            <div class="w-9/12 mt-8 text-mGray transition duration-[4000ms] ease-in-out">
              {{ item.text }}
            </div>
            <div class="w-full flex items-center flex-1">
              <div  @click="changeCurrentItem('left')" class="w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed rotate-180 opacity-60 hover:opacity-100">
                <svg class="stroke-mRed group-hover:stroke-mWhite" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </div>
              <div class="text-mWhite ml-4">
                <span class="text-2xl">{{ i + 1 }}</span> / {{ cData.length }}
              </div>
              <div @click="changeCurrentItem('right')"  class=" w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed ml-4">
                <svg class="stroke-mRed group-hover:stroke-mWhite" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6"  stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-1/2 h-full">
            <img class="rounded-3xl transition duration-[4000ms] ease-in-out" :src="item.img"/>
          </div>
        </div>
        <div class="w-full xxl:hidden xl:hidden lg:hidden md:hidden slg:hidden h-full flex justify-between mb-8">
          <div class="w-full h-full flex flex-col items-center px-4">
            <div class="w-full h-full">
              <img class="rounded-3xl transition duration-[4000ms] ease-in-out" :src="item.img"/>
            </div>
            <div class="text-mWhite w-full mt-8 text-2xl font-medium transition duration-[4000ms] ease-in-out">
              {{ item.title }}
            </div>
            <div class="w-full mt-8 text-mGray transition duration-[4000ms] ease-in-out">
              {{ item.text }}
            </div>
            <div class="w-full flex justify-center items-center mt-8">
              <div  @click="changeCurrentItem('left')" class="w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed rotate-180 opacity-60 hover:opacity-100">
                <svg class="stroke-mRed group-hover:stroke-mWhite" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </div>
              <div class="text-mWhite ml-4">
                <span class="text-2xl">{{ i + 1 }}</span> / {{ cData.length }}
              </div>
              <div @click="changeCurrentItem('right')"  class=" w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed ml-4">
                <svg class="stroke-mRed group-hover:stroke-mWhite" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6"  stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[15%] xxl:flex xl:flex lg:flex md:flex slg:flex h-full hidden"></div>
      </div>
      <!-- Body End -->
    </div>
    <!-- Carausel End -->
    <!-- Result Start -->
    <div id="advantages" class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full mx-auto my-24">
      <div class="xxl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] slg:w-[70%] w-full mx-auto flex flex-col items-center">
        <div class="flex justify-end items-center w-full">
          <div class="xxl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] slg:w-[65%] w-full flex xxl:justify-end xl:justify-end lg:justify-end md:justify-end slg:justify-end justify-center mx-auto">
            <span class="text-mWhite xxl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] slg:text-[36px] text-[24px] tracking-wider">{{$t('underCarousel.title_1_1')}} </span> <span class="text-mRed xxl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] slg:text-[36px] text-[24px] tracking-wider ml-4"> {{$t('underCarousel.title_1_2')}}</span>
          </div>
        </div>
        <div class="flex justify-start items-center w-full">
          <div class="xxl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] slg:w-[65%] w-full flex xxl:justify-end xl:justify-end lg:justify-end md:justify-end slg:justify-end justify-center mx-auto">
            <span class="text-mWhite xxl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] slg:text-[36px] text-[24px] tracking-wider">{{$t('underCarousel.title_2_1')}} </span> <span class="text-mRed xxl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] slg:text-[36px] text-[24px] tracking-wider ml-4"> {{$t('underCarousel.title_2_2')}}</span>
          </div>
        </div>
      </div>
      <div class="w-full xxl:grid xl:grid lg:grid slg:grid flex flex-col grid-cols-3 gap-14 mt-20 xxl:px-0 xl:px-0 lg:px-0 px-8">
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">{{$t('underCarousel.card.title1')}}</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">{{$t('underCarousel.card.text1')}}</div>
        </div>
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">{{$t('underCarousel.card.title2')}}</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">{{$t('underCarousel.card.text2')}}</div>
        </div>
        <div class="h-[300px] rounded-2xl xxl:flex xl:flex lg:flex hidden"></div>
        <div class="h-[300px] rounded-2xl xxl:flex xl:flex lg:flex hidden"></div>
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">{{$t('underCarousel.card.title3')}}</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">{{$t('underCarousel.card.text3')}}</div>
        </div>
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">{{$t('underCarousel.card.title4')}}</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">{{$t('underCarousel.card.text4')}}</div>
        </div>
      </div>
    </div>
    <!-- Result End -->
    <!-- Counts Start -->
    <div id="about" class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full xxl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[700px] slg:h-[700px] h-[1550px] mx-auto xxl:mt-24 xl:mt-24 lg:mt-24 mt-0 flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col justify-between xxl:px-0 xl:px-0 lg:px-0 px-8">
      <div class="xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full flex flex-col justify-between">
        <div class="text-mWhite flex flex-col tracking-wider font-semibold xxl:text-[40px] xl:text-[40px] lg:text-[40px] text-[24px] w-full xxl:pr-8 xl:pr-8 lg:pr-8 p-0">
          <div>
            <span class="text-mRed">{{$t('associate.title_1_1')}}</span><span> {{$t('associate.title_1_2')}} </span>
          </div>
          <div>
            <span>{{$t('associate.title_2_1')}}</span><span class="text-mRed"> {{$t('associate.title_2_2')}} </span>
          </div>
        </div>
        <div class="text-mWhite w-4/5 pr-8">
          <span v-html='$t("associate.text", {RavoWorld: `<span class="text-mRed">RavoWorld</span>`})' class="text-base font-normal">            
          </span>
        </div>
      </div>
      <div class="xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 slg:grid-cols-2 grid-cols-1 gap-10 xxl:pl-10 xl:pl-10 lg:pl-10 pl-0 xxl:mt-0 xl:mt-0 lg:mt-0 mt-8">
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[320px]">
          <div class="text-[48px] font-bold">{{count1}}</div>
          <div class="tracking-wider">{{$t('associate.card1')}}</div>
        </div>
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[320px]">
          <div class="text-[48px] font-bold">{{count2}}</div>
          <div class="tracking-wider">{{$t('associate.card2')}}</div>
        </div>
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[320px]">
          <div class="text-[48px] font-bold">{{count3}}</div>
          <div class="tracking-wider">{{$t('associate.card3')}}</div>
        </div>
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[320px]">
          <div class="text-[48px] font-bold">{{count4}}+</div>
          <div class="tracking-wider">{{$t('associate.card4')}}</div>
        </div>
      </div>
    </div>
    <!-- Counts End -->
    <!-- Contact Start -->
    <div id="contacts" class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full xxl:px-0 xl:px-0 lg:px-0 px-8 h-auto mx-auto mt-24 flex flex-col">
      <div class="w-full xxl:mt-14 xl:mt-14 lg:mt-14 mt-24">
        <div class="text-mWhite xxl:text-[40px] xl:text-[40px] lg:text-[40px] text-[24px] font-medium flex flex-col tracking-wider">
          <span>Сделайте шаг к нам:</span> 
          <span>ваше будущее в наших руках</span>
        </div>
      </div>
      <div class="w-full xxl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[500px] slg:h-[500px] h-[1050px] xxl:grid xl:grid lg:grid md:grid slg:grid flex flex-col grid-cols-3 gap-8 mt-14 py-8">
        <div class="border border-2Gray col-span-1 py-[72px] px-[64px] bg-3Black rounded-xl">
          <h2 class="text-4xl text-mWhite">{{$t('contact.contacts')}}</h2>
          <div class="flex justify-start text-mWhite mt-8" >
            <svg class="mt-1" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="flex flex-col ml-4">
              <span class="text-[20px] font-semibold">{{$t('contact.address')}}</span>
              <div class="w-4/5 text-sm font-normal mt-2">{{$t('contact.address_map')}}</div>
            </div>
          </div>
          <div class="flex justify-start text-mWhite mt-8" >
            <svg class="mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>              
            <div class="flex flex-col ml-4">
              <span class="text-[20px] font-semibold">{{$t('contact.elefon')}}</span>
              <span class="text-sm font-normal mt-2">+998 (90) 123 45 67</span>
            </div>
          </div>
          <div class="flex justify-start text-mWhite mt-8" >
            <svg class="mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4.00098H20C21.1 4.00098 22 4.90098 22 6.00098V18.001C22 19.101 21.1 20.001 20 20.001H4C2.9 20.001 2 19.101 2 18.001V6.00098C2 4.90098 2.9 4.00098 4 4.00098Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6.00098L12 13.001L2 6.00098" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                         
            <div class="flex flex-col ml-4">
              <span class="text-[20px] font-semibold">{{$t('contact.email')}}</span>
              <span class="text-sm font-normal mt-2">info@ravoworld.com</span>
            </div>
          </div>
        </div>
        <div class="h-full col-span-2">
          <img class="h-[500px] w-full rounded-xl" src="/public/img/map.jpg"/>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
    <div class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full mx-auto mt-14">
      <!-- Navbar Start -->
      <div class="w-full py-8 flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col justify-between items-center">
        <div class="w-[30%] text-[36px] flex items-center">
          <logo class="xxl:scale-100 xl:scale-100 lg:scale-100 md:scale-100 slg:scale-100 scale-125"/>           
        </div>
        <div class="xxl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] slg:w-[70%] w-full flex justify-end items-center">
          <ul class="flex justify-between xxl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] slg:w-[70%] w-full xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col items-center">
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"><a class="text-mGray hover:text-mRed text-lg" href="#main">{{$t('menu.main')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"><a class="text-mGray hover:text-mRed text-lg" href="#service">{{$t('menu.service')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"><a class="text-mGray hover:text-mRed text-lg" href="#advantages">{{$t('menu.advantages')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"><a class="text-mGray hover:text-mRed text-lg" href="#about">{{$t('menu.about')}}</a></li>
            <li class="text-mGray text-lg hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"><a class="text-mGray hover:text-mRed text-lg" href="#contacts">{{$t('menu.contacts')}}</a></li>
          </ul>
        </div>
      </div>
      <!-- Navbar End -->
    </div>
    <div style="border: 1px solid rgba(255, 255, 255, 0.10);"></div>
    <div class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col mx-auto flex justify-between items-center text-mWhite opacity-20 my-4">
      <span class="xxl:w-full xl:w-full lg:w-full w-[46%] text-center">©2020-2023 RavoWorld. {{$t('contact.copy_right')}}</span>
      <span class="xxl:mt-0 xl:mt-0 lg:mt-0 mt-8">designed by Nextmark</span>
    </div>
  </div>
</template>
<style>
body {
  background-color: #0b1117;
}
.underline-hover {
  position: relative;
  display: inline-block;
}

.underline-hover::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px; /* Adjust the thickness of the underline as needed */
  background-color: transparent; /* Set the initial color of the underline */  
}

.underline-hover:hover::before {
  background-color: #D11011; /* Change the color on hover */
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0b1117;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #101922;
}

select {
  color: #ababab;
  margin-left: 10px;
  padding: 10px 0px;
  font-size: 20px;
  border: none;
  background: transparent;
  transition: border 0.3s;
}

select:focus {
  border: none;
  outline: none;
}

/* Customize the appearance of the options within the dropdown */
select option {
  background-color: #0B1117;
  color: #ababab;
  border: 0px solid;
  margin-top: 6px;
}

/* Adjust the hover effect for better visibility */
select option:hover {
  background-color: #1a1f27;
  color: #D11011;
}
select option:focus {
  border: none;
  outline: none;
}
</style>