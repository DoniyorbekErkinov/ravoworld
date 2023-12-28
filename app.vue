<script>
import handGlobe from './components/handGlobe.vue';
import logo from './components/logo.vue';
</script>

<template>
  <div class="h-full flex flex-col scrollbarActive overflow-y-hidden">
    <div class="xxl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto">
      <!-- Navbar Start -->
      <div class="w-full py-8 flex justify-between items-center">
        <div class="w-[30%] text-[36px] flex items-center">
          <logo/>            
        </div>
        <div class="w-[70%] flex justify-end items-center">
          <ul class="flex justify-between w-[60%]">
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Главная</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Услуги</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Преимущества</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">О компании</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Контакты</li>
          </ul>
          <div class="flex justify-end w-[40%]">
            <div class="text-mGray text-2xl mr-20">Ru</div>
            <div class="text-mWhite text-2xl flex justify-between items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4741 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4018C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.945 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3146 6.72527 15.2661 5.18993 12.85C3.49991 10.2412 2.44818 7.27097 2.11993 4.17997C2.09494 3.90344 2.12781 3.62474 2.21643 3.3616C2.30506 3.09846 2.4475 2.85666 2.6347 2.6516C2.82189 2.44653 3.04974 2.28268 3.30372 2.1705C3.55771 2.05831 3.83227 2.00024 4.10993 1.99997H7.10993C7.59524 1.9952 8.06572 2.16705 8.43369 2.48351C8.80166 2.79996 9.04201 3.23942 9.10993 3.71997C9.23656 4.68004 9.47138 5.6227 9.80993 6.52997C9.94448 6.8879 9.9736 7.27689 9.89384 7.65086C9.81408 8.02482 9.6288 8.36809 9.35993 8.63998L8.08993 9.90997C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0554 17.4699 14.19C18.3772 14.5285 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>                
              <span>+998 90 123 45 67</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Navbar End -->
      <!-- Under Navbar Start -->
      <div class="w-full py-14 mt-14 flex justify-between items-center">
        <div class="flex flex-col w-1/2">
          <span class="text-mWhite text-[56px] font-semibold">Мгновенная</span>
          <div>
            <span class="text-mRed text-[56px] font-semibold">доставка </span><span class="text-mWhite text-[56px] font-semibold">без границ</span>
          </div>
        </div>
        <div class="flex justify-end items-center pt-6 w-1/2">
          <div class="text-2Gray w-1/2 flex justify-end text-lg font-normal leading-6">Быстро, эффективно, без лишних хлопот. Наша компания предлагает экспресс-грузоперевозки</div>
        </div>
      </div>
      <!-- Under Navbar End -->
    </div>
    <!-- Banner Image -->
    <div class="w-full h-[700px] relative">
      <img class="w-full max-w-full h-[700px] " src="public/img/banner.jpg"/>
      <div class="w-36 h-36 rounded-full bg-mRed absolute -top-[50px] right-[220px] flex justify-center items-center text-mWhite text-base font-normal tracking-wider">Связаться</div>
    </div>
    <!-- Banner Image -->
    <!-- Carausel Header Start -->
    <div class="xxl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto mt-24">
      <!-- Header Start -->
      <div class="w-full flex justify-between">
        <div class="flex flex-col w-1/2">
          <span class="text-mWhite text-[40px] font-semibold tracking-wider">Грузовые решения </span> 
          <div class="text-mWhite text-[40px] font-semibold tracking-wider">на <span class="text-mRed text-[40px] font-semibold tracking-wider">высшем уровне</span>
          </div>
        </div>
        <div class="flex justify-center items-center w-1/2 text-2Gray">
          <div class="w-[45%] text-base font-normal ml-14">Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса</div>
        </div>  
      </div>
      <!-- Header End -->
      <!-- Body Start -->
      <div class="w-full h-[570px]">
      </div>
      <!-- Body End -->
    </div>
    <!-- Carausel Header End -->
    <!-- Result Start -->
    <div class="xxl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto my-24">
      <div class="w-[70%] mx-auto flex flex-col items-center">
        <div class="flex justify-end items-center w-full">
          <div class="w-[40%] flex justify-end mx-auto">
            <span class="text-mWhite text-[36px] tracking-wider">Персональный </span> <span class="text-mRed text-[36px] tracking-wider ml-4"> подход</span>
          </div>
        </div>
        <div class="flex justify-start items-center w-full">
          <div class="w-[40%] flex justify-start mx-auto">
            <span class="text-mWhite text-[36px] tracking-wider">Глобальные </span> <span class="text-mRed text-[36px] tracking-wider ml-4"> результаты</span>
          </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-3 gap-14 mt-20">
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">Интегрированный сервис</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">Полный цикл услуг от  грузоперевозки до таможенного оформления</div>
        </div>
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">Интегрированный сервис</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">Полный цикл услуг от  грузоперевозки до таможенного оформления</div>
        </div>
        <div class="h-[300px] rounded-2xl">3</div>
        <div class="h-[300px] rounded-2xl">4</div>
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">Интегрированный сервис</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">Полный цикл услуг от  грузоперевозки до таможенного оформления</div>
        </div>
        <div class="border border-2Gray h-[300px] rounded-2xl p-10">
          <div>
            <handGlobe/>            
          </div>
          <div class="text-mWhite font-bold text-lg mt-8">Интегрированный сервис</div>
          <div class="text-mWhite font-light text-base mt-4 w-3/4">Полный цикл услуг от  грузоперевозки до таможенного оформления</div>
        </div>
      </div>
    </div>
    <!-- Result End -->
    <!-- Counts Start -->
    <div class="xxl:w-[1920px] xl:w-[1800px] lg:w-[1300px] h-[700px] mx-auto mt-24 flex justify-between">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="text-mWhite font-semibold text-[60px] w-2/3 pr-8">
          <span>Надежный партнер в мировых поставках</span>
        </div>
        <div class="text-mWhite w-2/3 pr-8">
          <span class="text-base font-normal">
            В RavoWorld мы стремимся не просто к доставке грузов — мы создаем путеводитель для вашего успеха. Прошагайте за границы обыденности вместе с нами, где каждая доставка становится историей.
          </span>
        </div>
      </div>
      <div class="w-1/2 grid grid-cols-2 gap-10 pl-10">
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite">
          <div>1230</div>
          <div class="tracking-wider">стран-партнеров</div>
        </div>
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite">
          <div>1230</div>
          <div class="tracking-wider">год основания</div>
        </div>
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite">
          <div>1230</div>
          <div class="tracking-wider">довольных клиентов</div>
        </div>
        <div class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite">
          <div>1230</div>
          <div class="tracking-wider">осуществленных перевозок</div>
        </div>
      </div>
    </div>
    <!-- Counts End -->
    <!-- Contact Start -->
    <div class="xxl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto mt-24 flex flex-col">
      <div class="w-full mt-14">
        <div class="text-mWhite text-[54px] font-medium w-1/2 flex flex-col tracking-wider">
          <span>Сделайте шаг к нам:</span> 
          <span>ваше будущее в наших руках</span>
        </div>
      </div>
      <div class="w-full h-[500px] grid grid-cols-3 gap-14 mt-14 py-8">
        <div class="border border-2Gray col-span-1 py-[72px] px-[64px] bg-3Black rounded-xl">
          <h2 class="text-4xl text-mWhite">Контакты</h2>
          <div class="flex justify-start text-mWhite mt-8" >
            <svg class="mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="flex flex-col ml-4">
              <span class="text-[20px] font-semibold">Адрес</span>
              <div class="w-3/5 text-sm font-normal mt-2">100200, Республика Узбекистан 
                г. Ташкент, ул. Махтумкули</div>
            </div>
          </div>
          <div class="flex justify-start text-mWhite mt-8" >
            <svg class="mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>              
            <div class="flex flex-col ml-4">
              <span class="text-[20px] font-semibold">Телефон</span>
              <span class="text-sm font-normal mt-2">+998 (90) 123 45 67</span>
            </div>
          </div>
          <div class="flex justify-start text-mWhite mt-8" >
            <svg class="mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4.00098H20C21.1 4.00098 22 4.90098 22 6.00098V18.001C22 19.101 21.1 20.001 20 20.001H4C2.9 20.001 2 19.101 2 18.001V6.00098C2 4.90098 2.9 4.00098 4 4.00098Z" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6.00098L12 13.001L2 6.00098" stroke="#D11011" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                         
            <div class="flex flex-col ml-4">
              <span class="text-[20px] font-semibold">Эл. почта</span>
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
    <div class="xxl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto mt-14">
      <!-- Navbar Start -->
      <div class="w-full py-8 flex justify-between items-center">
        <div class="w-[30%] text-[36px] flex items-center">
          <logo/>           
        </div>
        <div class="w-[70%] flex justify-end items-center">
          <ul class="flex justify-between w-[60%]">
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Главная</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Услуги</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Преимущества</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">О компании</li>
            <li class="text-mGray text-2xl hover:text-mRed underline-hover">Контакты</li>
          </ul>
        </div>
      </div>
      <!-- Navbar End -->
    </div>
    <div style="border: 1px solid rgba(255, 255, 255, 0.10);"></div>
    <div class="xxl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto flex justify-between items-center text-mWhite opacity-20 my-4">
      <span>©2020-2023 RavoWorld. Все права защищены</span>
      <span>designed by Nextmark</span>
    </div>
  </div>
</template>
<style >
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

</style>


