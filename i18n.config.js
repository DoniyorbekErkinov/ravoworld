
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
                title1: 'Международные грузоперевозки',
                text1: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title2: 'Международные грузоперевозки',
                text2: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title3: 'Международные грузоперевозки',
                text3: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title4: 'Международные грузоперевозки',
                text4: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
                title5: 'Международные грузоперевозки',
                text5: 'Это не просто перемещение товаров через границы, это создание надежных путей для вашего бизнеса на мировой арене. Мы предлагаем комплексные логистические решения, обеспечивающие эффективную и безопасную доставку грузов в любую точку планеты',
            },
            underCarousel: {
                title_1_1: 'Персональный',
                title_1_2: ' подход',
                title_2_1: 'Глобальные',
                title_2_2: ' результаты',
                card: {
                    title1: 'Интегрированный сервис',
                    text1: 'Полный цикл услуг от  грузоперевозки до таможенного оформления',
                    title2: 'Интегрированный сервис',
                    text2: 'Полный цикл услуг от  грузоперевозки до таможенного оформления',
                    title3: 'Интегрированный сервис',
                    text3: 'Полный цикл услуг от  грузоперевозки до таможенного оформления',
                    title4: 'Интегрированный сервис',
                    text4: 'Полный цикл услуг от  грузоперевозки до таможенного оформления',
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
                title: 'Сделайте шаг к нам: ваше будущее в наших руках',
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
                title_2: 'chegarasiz',
                title_3: 'yetkazib berish',
                text: 'Tez, samarali, keraksiz muammosiz. Kompaniyamiz ekspress yuk tashishni taklif qiladi',
                circle: 'Aloqa'                
            },
            carousel: {
                title_1: 'Yuk tashish bo\'yicha',
                title_2: ' yechimlar',
                title_3: ' eng yuqori darajada',                
                text: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir',
                title1: 'Xalqaro yuk tashish',
                text1: 'Biz bojxona tartib-qoidalari labirintida professional yo\'l-yo\'riq ko\'rsatamiz, bu esa mijozlarning stresssiz va samarali chegaradan o\'tishini ta\'minlaydi. Tajribali mutaxassislar diqqat bilan kuzatib turadigan bojxona rasmiyatchiligi dunyosida biz sizning ishonchli yo\'lboshchingizmiz.',
                title2: 'Xalqaro yuk tashish',
                text2: 'Bu nafaqat tovarlarni chegaralar orqali olib o\'tish, balki global miqyosda biznesingiz uchun xavfsiz yo\'llarni yaratishdir. Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz',
                title3: 'Xalqaro yuk tashish',
                text3: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir.Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz.',
                title4: 'Xalqaro yuk tashish',
                text4: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir.Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz.',
                title5: 'Xalqaro yuk tashish',
                text5: 'Bu nafaqat tovarlarni chegaradan o\'tkazish, balki sizning biznesingiz uchun xavfsiz yo\'llarni yaratish hamdir.Biz dunyoning istalgan nuqtasiga yuklarni samarali va xavfsiz yetkazib berishni ta\'minlaydigan keng qamrovli logistika yechimlarini taklif qilamiz.',
            },
            underCarousel: {
                title_1_1: 'Shaxsiy',
                title_1_2: ' yondashuv',
                title_2_1: 'Global',
                title_2_2: ' natijalar',
                card: {
                    title1: 'Integratsiyalashgan xizmat',
                    text1: 'Yuk tashishdan bojxona rasmiylashtiruviga qadar xizmatlarning to\'liq tsikli',
                    title2: 'Integratsiyalashgan xizmat',
                    text2: 'Yuk tashishdan bojxona rasmiylashtiruviga qadar xizmatlarning to\'liq tsikli',
                    title3: 'Integratsiyalashgan xizmat',
                    text3: 'Yuk tashishdan bojxona rasmiylashtiruviga qadar xizmatlarning to\'liq tsikli',
                    title4: 'Integratsiyalashgan xizmat',
                    text4: 'Yuk tashishdan bojxona rasmiylashtiruviga qadar xizmatlarning to\'liq tsikli',
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
                title: 'Biz tomon qadam tashlang: kelajagingiz bizning qo\'limizda',
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
                title1: 'International cargo transportation',
                text1: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title2: 'International cargo transportation',
                text2: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title3: 'International cargo transportation',
                text3: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title4: 'International cargo transportation',
                text4: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
                title5: 'International cargo transportation',
                text5: 'It\'s not just about moving goods across borders, it\'s about creating secure pathways for your business on the global stage. We offer comprehensive logistics solutions that ensure efficient and safe delivery of goods anywhere in the world',
            },
            underCarousel: {
                title_1_1: 'Personal',
                title_1_2: ' approach',
                title_2_1: 'Global',
                title_2_2: ' results',
                card: {
                    title1: 'Integrated service',
                    text1: 'Full cycle of services from cargo transportation to customs clearance',
                    title2: 'Integrated service',
                    text2: 'Full cycle of services from cargo transportation to customs clearance',
                    title3: 'Integrated service',
                    text3: 'Full cycle of services from cargo transportation to customs clearance',
                    title4: 'Integrated service',
                    text4: 'Full cycle of services from cargo transportation to customs clearance',
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
                title: 'Take a step towards us: your future is in our hands',
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
  