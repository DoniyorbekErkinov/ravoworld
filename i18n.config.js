
export default defineI18nConfig(() => ({
    legacy: false,
    locale: typeof window !== 'undefined' ? window.localStorage.getItem('locale') || 'ru' : 'ru',
    messages: {       
        ru: {
            lang: {
                en: 'En',
                ru: 'Ру',
                uz: "O'z"
            },
            menu: {
                main: 'Главная',
                service: 'Услуги',
                advantages: 'Преимущества',
                about: 'О компании',
                contacts: 'Контакты'
            },
            header: {
                title_1: 'Мгновенная',
                title_2: 'доставка',
                title_3: ' без границ',
                text: 'Быстро, эффективно, без лишних хлопот. Наша компания предлагает экспресс-грузоперевозки',
                circle: 'Связаться'                
            },
            carousel: {
                title_1: 'Грузовые решения',
                title_2: 'на',
                title_3: ' высшем уровне',
                text: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса',
                title1: 'Авиаперевозка по всему миру',
                text1: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title2: 'Автоперевозка',
                text2: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title3: 'Ж/Д перевозка грузов',
                text3: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title4: 'Услуга таможенного брокера',
                text4: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title5: 'Подготовка и переподготовка ВЭД специалистов',
                text5: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title6: 'Международная торговля',
                text6: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
            },
            underCarousel: {
                title_1_1: 'Персональный',
                title_1_2: ' подход',
                title_2_1: 'Глобальные',
                title_2_2: ' результаты',
                card: {
                    title1: 'Организуем всю поставку под ключ',
                    text1: 'Предоставляем клиентам полный комплекс услуг, сопутствующих грузоперевозкам. Обеспечиваем также  консультирование, страхование, сопровождение, таможенное сопровождение',
                    title2: 'Предлагаем гибкие условия',
                    text2: 'Предоставляем заказчику выгодные индивидуальные условия оплаты грузовых перевозок. Рассмотрим каждый маршрут доставки и внесем корректировки в систему расчетов в соответствии с объемами и сроками перевозки груза',
                    title3: 'Минимизируем ваши риски',
                    text3: 'Мы используем транспортные средства, допущенные к работе в соответствии с требованиями нормативно-правовых актов. У нас работают люди, имеющие соответствующее навыки и стаж работы в сфере грузовых перевозок',
                    title4: 'Поддерживаем связь на всех этапах сделки',
                    text4: 'Каждому нашему клиенту назначается персональный менеджер, который будет координировать весь процесс перевозки и быть в постоянном контакте для оперативного решения любых вопросов',
                }
            },
            //партнер
            associate: {
                title_1_1: 'Надежный ',
                title_1_2: 'партнер',
                title_2_1: 'в мировых ',
                title_2_2: 'поставках',
                text: 'В {RavoWorld} мы стремимся не просто к доставке грузов — мы создаем путеводитель для вашего успеха. Прошагайте за границы обыденности вместе с нами, где каждая доставка становится историей.',
                card1: 'стран-партнеров',
                card2: 'год основания',
                card3: 'довольных клиентов',
                card4: 'осуществленных перевозок',
            },
            contact: {
                title: 'Сделайте шаг к нам: ',
                title_1: 'ваше будущее в наших руках',
                contacts: 'Контакты',
                address: 'Адрес',
                address_map: '100200, Республика Узбекистан г. Ташкент, ул. Махтумкули',
                telefon: 'Телефон',
                email: 'Эл. почта',
                copy_right: 'Все права защищены'
            }
        },
        uz: {
            lang: {
                en: 'En',
                ru: 'Ру',
                uz: "O'z"
            },
            menu: {
                main: 'Bosh sahifa',
                service: 'Xizmatlar',
                advantages: 'Afzalliklar',
                about: 'Biz haqida',
                contacts: 'A\'loqa'
            },
            header: {
                title_1: 'Tezkor',
                title_2: 'chegarasiz ',
                title_3: 'yetkazib berish',
                text: 'Tez, samarali, keraksiz muammosiz. Kompaniyamiz ekspress yuk tashishni taklif qiladi',
                circle: 'Aloqa'                
            },
            carousel: {
                title_1: 'Yuk tashish bo\'yicha',
                title_2: ' yechimlar',
                title_3: ' eng yuqori darajada',                
                text: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir',
                title1: 'Xolaqaro avia yuk yetkazish',
                text1: 'Biz bojxona tartib-qoidalari labirintida professional yo\'l-yo\'riq ko\'rsatamiz, bu esa mijozlarning stresssiz va samarali chegaradan o\'tishini ta\'minlaydi. Tajribali mutaxassislar diqqat bilan kuzatib turadigan bojxona rasmiyatchiligi dunyosida biz sizning ishonchli yo\'lboshchingizmiz.',
                title2: 'Avtomobil transporti',
                text2: 'Bu nafaqat tovarlarni chegaralar orqali olib o\'tish, balki global miqyosda biznesingiz uchun xavfsiz yo\'llarni yaratishdir. Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz',
                title3: 'Temir yo\'l orqali yuklarni tashish',
                text3: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir.Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz.',
                title4: 'Bojxona brokeri xizmati',
                text4: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir.Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz.',
                title5: 'Tashqi savdo mutaxassislarini tayyorlash va qayta tayyorlash',
                text5: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir.Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz.',
                title6: 'Xalqaro savdo',
                text6: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir.Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz.',
            },
            underCarousel: {
                title_1_1: 'Shaxsiy',
                title_1_2: ' yondashuv',
                title_2_1: 'Global',
                title_2_2: ' natijalar',
                card: {
                    title1: 'Biz barcha etkazib berishlarni maxsus kalit asosida tashkil qilamiz',
                    text1: 'Biz mijozlarga yuk tashish bilan bog\'liq to\'liq xizmatlarni taqdim etamiz. Shuningdek, biz konsalting, sug\'urta, qo\'llab-quvvatlash, bojxona yordamini taqdim etamiz',
                    title2: 'Biz moslashuvchan shartlarni taklif qilamiz',
                    text2: 'Biz mijozga yuk tashish uchun qulay individual to\'lov shartlarini taqdim etamiz. Biz har bir etkazib berish yo\'nalishini ko\'rib chiqamiz va yuk tashish hajmi va vaqtiga muvofiq to\'lov tizimiga tuzatishlar kiritamiz.',
                    title3: 'Biz sizning xavflaringizni minimallashtiramiz',
                    text3: 'Biz normativ-huquqiy hujjatlar talablariga muvofiq foydalanish uchun tasdiqlangan transport vositalaridan foydalanamiz. Biz yuk tashish sohasida tegishli ko\'nikma va tajribaga ega odamlarni ishga olamiz',
                    title4: 'Biz tranzaksiyaning barcha bosqichlarida aloqadamiz',
                    text4: 'Bizning har bir mijozimizga shaxsiy menejer tayinlangan, u butun tashish jarayonini muvofiqlashtiradi va har qanday muammolarni tezda hal qilish uchun doimiy aloqada bo\'ladi.',
                }
            },
            //партнер
            associate: {
                title_1_1: 'Ichonchli ',
                title_1_2: 'hamkor',
                title_2_1: 'global ',
                title_2_2: 'ta\'minotda',
                text: '{RavoWorld}\'da biz faqat yuklarni yetkazib berish bilan cheklanmaymiz, balki muvaffaqiyatingiz uchun qo\'llanma yaratamiz. Har bir yetkazib berish tarixga aylanadigan biz bilan kundalik hayot chegaralaridan tashqariga qadam qo\'ying.',
                card1: 'hamkor davlatlar',
                card2: 'tashkil topgan yili',
                card3: 'mamnun mijozlar',
                card4: 'tashishlar amalga oshirildi',
            },
            contact: {
                title: 'Biz tomon qadam tashlang: ',
                title_1: 'kelajagingiz bizning qo\'limizda',
                contacts: 'Kontaktlar',
                address: 'Manzil',
                address_map: '100200, O\'zbekiston respublikasi sh. Ташкент, k. Maxtumquli',
                telefon: 'Telefon',
                email: 'El. pochta',
                copy_right: 'Barcha huquqlar himoyalangan.'
            }
        },
        en: {
            lang: {
                en: 'En',
                ru: 'Ру',
                uz: "O'z"
            },
            menu: {
                main: 'Home',
                service: 'Service',
                advantages: 'Advantages',
                about: 'About',
                contacts: 'Contacts'
            },
            header: {
                title_1: 'Instant',
                title_2: 'delivery ',
                title_3: 'without borders',
                text: 'Fast, efficient, without unnecessary hassle. Our company offers express cargo transportation',
                circle: 'Contact'                
            },
            carousel: {
                title_1: 'Cargo solutions ',
                title_2: 'at',
                title_3: ' the highest level',
                text: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business',
                title1: 'Airfreight worldwide',
                text1: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title2: 'Road transportation',
                text2: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title3: 'Railway transportation of goods',
                text3: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title4: 'Customs broker service',
                text4: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title5: 'Training and retraining of foreign trade specialists',
                text5: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title6: 'international trade',
                text6: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
            },
            underCarousel: {
                title_1_1: 'Personal',
                title_1_2: ' approach',
                title_2_1: 'Global',
                title_2_2: ' results',
                card: {
                    title1: 'We organize all deliveries on a turnkey basis',
                    text1: 'We provide clients with a full range of services related to cargo transportation. We also provide consulting, insurance, support, customs support',
                    title2: 'We offer flexible terms',
                    text2: 'We provide the customer with favorable individual terms of payment for freight transportation. We will consider each delivery route and make adjustments to the payment system in accordance with the volumes and timing of cargo transportation',
                    title3: 'We minimize your risks',
                    text3: 'We use vehicles approved for operation in accordance with the requirements of regulatory legal acts. We employ people who have the appropriate skills and experience in the field of freight transportation',
                    title4: 'We keep in touch at all stages of the transaction',
                    text4: 'Each of our clients is assigned a personal manager who will coordinate the entire transportation process and be in constant contact to promptly resolve any issues',
                }
            },
            //партнер
            associate: {
                title_1_1: 'Reliable ',
                title_1_2: 'partner',
                title_2_1: 'in global ',
                title_2_2: 'supplies',
                text: 'At {RavoWorld}, we\'re not just about delivering freight—we\'re creating a guide to your success. Step beyond the boundaries of everyday life with us, where every delivery becomes history.',
                card1: 'partner countries',
                card2: 'year of foundation',
                card3: 'satisfied clients',
                card4: 'transportations carried out',
            },
            contact: {
                title: 'Take a step towards us: ',
                title_1: 'your future is in our hands',
                contacts: 'Contacts',
                address: 'Address',
                address_map: '100200, Republic of Uzbekistan, Tashkent, st. Magtymguly',
                telefon: 'Phone',
                email: 'E-mail',
                copy_right: 'All rights reserved'
            }
        }
    }
  }))
  