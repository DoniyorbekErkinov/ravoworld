<script>
import handGlobe from './components/handGlobe.vue';
</script>

<template>
  <div class="bg-mBlack flex flex-col ">
    <div class="2xl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto">
      <!-- Navbar Start -->
      <div class="w-full py-8 flex justify-between items-center">
        <div class="w-[30%] text-[36px] flex items-center">
          <svg width="208" height="24" viewBox="0 0 208 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5703 23.615L10.7974 14.7594H4.04902V23.615H0V1.15508H15.1356C17.6422 1.15508 19.6667 1.75401 21.2091 2.95187C22.7516 4.12834 23.5229 5.82888 23.5229 8.05348C23.5229 10.2567 22.8052 11.9144 21.3698 13.0267C19.9345 14.1176 17.9742 14.6845 15.4891 14.7273L24.744 23.615H19.5703ZM4.04902 4.39572V11.6471H14.9428C16.3353 11.6471 17.4386 11.3369 18.2527 10.7166C19.0668 10.0963 19.4739 9.20856 19.4739 8.05348C19.4739 6.8984 19.0561 6 18.2206 5.35829C17.4065 4.71658 16.3139 4.39572 14.9428 4.39572H4.04902Z" fill="#D11011"/>
            <path d="M36.6177 6.41711C39.724 6.4385 42.0806 7.04813 43.6874 8.24599C45.3155 9.44385 46.1296 11.2086 46.1296 13.5401V23.615H42.5948V19.893C40.9023 22.631 37.8709 24 33.5006 24C30.9512 24 29.0445 23.5508 27.7805 22.6524C26.5165 21.754 25.8845 20.5668 25.8845 19.0909C25.8845 17.4866 26.6451 16.2781 28.1661 15.4652C29.7086 14.6524 32.0438 14.1497 35.1716 13.9572L42.2734 13.4759V12.7701C42.2734 11.6791 41.8021 10.7914 40.8595 10.107C39.9169 9.42246 38.5029 9.08021 36.6177 9.08021C33.2328 9.08021 31.2725 10 30.7369 11.8396H27.1057C27.3413 9.95722 28.3268 8.57754 30.0621 7.70053C31.7974 6.82353 33.9826 6.39572 36.6177 6.41711ZM34.4967 21.3369C36.8962 21.3369 38.7921 20.877 40.1847 19.9572C41.5772 19.0374 42.2734 17.893 42.2734 16.5241V15.754L35.6215 16.1711C31.6796 16.4278 29.7086 17.3369 29.7086 18.8984C29.7086 19.6257 30.1049 20.2139 30.8976 20.6631C31.6903 21.1123 32.89 21.3369 34.4967 21.3369Z" fill="#D11011"/>
            <path d="M66.6238 6.80214H70.8013L62.2213 23.615H56.6298L48.1461 6.80214H52.3879L59.4898 21.5936L66.6238 6.80214Z" fill="#D11011"/>
            <path d="M74.9724 21.6898C72.9586 20.1283 71.9517 17.9679 71.9517 15.2086C71.9517 12.4492 72.9586 10.2995 74.9724 8.75936C77.0076 7.19786 79.7176 6.41711 83.1025 6.41711C86.4874 6.41711 89.1868 7.19786 91.2006 8.75936C93.2358 10.2995 94.2534 12.4492 94.2534 15.2086C94.2534 17.9679 93.2358 20.1283 91.2006 21.6898C89.1868 23.2299 86.4874 24 83.1025 24C79.7176 24 77.0076 23.2299 74.9724 21.6898ZM77.736 10.9733C76.4292 12.0428 75.7757 13.4545 75.7757 15.2086C75.7757 16.9626 76.4292 18.3743 77.736 19.4438C79.0428 20.5134 80.8317 21.0481 83.1025 21.0481C85.352 21.0481 87.1301 20.5134 88.437 19.4438C89.7652 18.3529 90.4293 16.9412 90.4293 15.2086C90.4293 13.4759 89.7652 12.0749 88.437 11.0053C87.1301 9.91444 85.352 9.36898 83.1025 9.36898C80.8317 9.36898 79.0428 9.90374 77.736 10.9733Z" fill="#D11011"/>
            <path d="M131.174 1.15508H135.416L127.382 23.615H121.341L114.881 3.75401L108.294 23.615H102.22L94.3149 1.15508H98.6853L105.434 21.016L112.021 1.15508H117.806L124.329 21.0481L131.174 1.15508Z" fill="white"/>
            <path d="M138.489 21.6898C136.476 20.1283 135.469 17.9679 135.469 15.2086C135.469 12.4492 136.476 10.2995 138.489 8.75936C140.525 7.19786 143.235 6.41711 146.62 6.41711C150.004 6.41711 152.704 7.19786 154.718 8.75936C156.753 10.2995 157.77 12.4492 157.77 15.2086C157.77 17.9679 156.753 20.1283 154.718 21.6898C152.704 23.2299 150.004 24 146.62 24C143.235 24 140.525 23.2299 138.489 21.6898ZM141.253 10.9733C139.946 12.0428 139.293 13.4545 139.293 15.2086C139.293 16.9626 139.946 18.3743 141.253 19.4438C142.56 20.5134 144.349 21.0481 146.62 21.0481C148.869 21.0481 150.647 20.5134 151.954 19.4438C153.282 18.3529 153.946 16.9412 153.946 15.2086C153.946 13.4759 153.282 12.0749 151.954 11.0053C150.647 9.91444 148.869 9.36898 146.62 9.36898C144.349 9.36898 142.56 9.90374 141.253 10.9733Z" fill="white"/>
            <path d="M172.271 6.41711C173.106 6.41711 173.984 6.50267 174.906 6.6738V10.0749C173.599 9.92513 172.57 9.85027 171.821 9.85027C169.657 9.85027 168.061 10.4599 167.033 11.6791C166.004 12.877 165.49 14.7487 165.49 17.2941V23.615H161.634L161.666 6.80214H165.201V11.1979C165.822 9.63636 166.743 8.4492 167.964 7.63636C169.186 6.82353 170.621 6.41711 172.271 6.41711Z" fill="white"/>
            <path d="M178.549 0H182.405V23.615H178.549V0Z" fill="white"/>
            <path d="M204.144 0H208V23.615H204.465V19.9251C203.715 21.2513 202.601 22.2674 201.123 22.9733C199.666 23.6578 197.985 24 196.078 24C193.143 24 190.765 23.2192 188.944 21.6578C187.144 20.0963 186.245 17.9465 186.245 15.2086C186.245 12.4706 187.144 10.3209 188.944 8.75936C190.765 7.19786 193.154 6.41711 196.11 6.41711C199.881 6.41711 202.558 7.61497 204.144 10.0107V0ZM197.203 21.0481C199.388 21.0481 201.123 20.5134 202.408 19.4438C203.694 18.3743 204.337 16.9626 204.337 15.2086C204.337 13.4545 203.694 12.0428 202.408 10.9733C201.123 9.90374 199.388 9.36898 197.203 9.36898C194.996 9.36898 193.25 9.90374 191.965 10.9733C190.701 12.0428 190.069 13.4545 190.069 15.2086C190.069 16.9626 190.701 18.3743 191.965 19.4438C193.25 20.5134 194.996 21.0481 197.203 21.0481Z" fill="white"/>
          </svg>            
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
    <div class="2xl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto mt-24">
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
    <div class="2xl:w-[1920px] xl:w-[1800px] lg:w-[1300px] mx-auto my-24">
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
    <div class="2xl:w-[1920px] xl:w-[1800px] lg:w-[1300px] h-[700px] mx-auto mt-24 flex justify-between">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="text-mWhite">Надежный партнер в мировых поставках</div>
        <div class="text-mWhite">В RavoWorld мы стремимся не просто к доставке грузов — мы создаем путеводитель для вашего успеха. Прошагайте за границы обыденности вместе с нами, где каждая доставка становится историей.</div>
      </div>
      <div class="w-1/2 grid grid-cols-2 gap-10 pl-10">
        <div class="border border-mRed rounded-2xl">123</div>
        <div class="border border-mRed rounded-2xl">154</div>
        <div class="border border-mRed rounded-2xl">8788</div>
        <div class="border border-mRed rounded-2xl">933</div>
      </div>
    </div>
    <!-- Counts End -->
  </div>
</template>
<style>
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
</style>


