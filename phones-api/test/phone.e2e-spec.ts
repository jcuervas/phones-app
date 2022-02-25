import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PhoneModule } from '../src/phones/phone.module';
import { PhoneService } from '../src/phones/phone.service';

describe('Phones', () => {
  let app: INestApplication;
  const phoneService = {
    findAll: () => [
      [
        {
          name: "'Samsung Galaxy S20 5G 128GB Azul'",
          slug: "'samsung-galaxy-s20-128gb'",
          manufacturer: "'SAMSUNG'",
          description:
            '\'Con el Samsung Galaxy S20 puedes sacudir los códigos estéticos y empujar los límites de las pantallas tal y como las conoces. Sumérgete en una nueva dimensión que combina potencia, conectividad, elegancia y comodidad en un solo smartphone. Con una impresionante pantalla AMOLED infinita de 6,2"" con una resolución HD cuádruple de 1440 x 3200 píxeles, ofrece una frecuencia de actualización de 120 Hz para una suavidad increíble. Además, con su procesador Exynos 990 que soporta 12GB de RAM y 128GB de espacio de almacenamiento, instala todas tus aplicaciones favoritas fácilmente y sin restricciones. En cuanto a la cámara principal con triple sensor 12+12+64, de alto rendimiento y con la posibilidad de grabar vídeos de 8K, no volverás a ver tu smartphone de la misma manera. Equipado con un procesador Exynos 990 y 12 GB de RAM, el Samsung Galaxy S20 te ofrece toda la potencia que necesitas para sacar el máximo provecho de tu smartphone, incluso los juegos más intensivos en gráficos funcionan sin problemas. En cuanto a su sublime pantalla Infinity de 6,2"" con una resolución Quad HD de 1440 x 3200 píxeles, realza la riqueza de las imágenes a la vez que le ofrece una espectacular inmersión. Y con una frecuencia de actualización de 120 Hz, usar tu smartphone nunca ha sido tan agradable. Además, el Samsung Galaxy S20 tiene una ranura para tarjetas microSD (hasta 1 TB) para soportar los 128 GB de memoria interna si es necesario. Dual SIM, el Samsung Galaxy S20 te permite gestionar eficazmente tu vida profesional y personal de la mejor manera posible.\'',
          color: "'Azul'",
          price: '1009.00',
          imageFileName:
            '\'["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_Kq08-IM8Ic5uUNhpPf9djXw2ML7-_K4sG0d5C6hWbgeFKlfyGmsxxdKAD9zyHyOuo6aukbbCX7cDhNbY2eRubYEUraC9xA&usqp=CAY","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4bYKVGrGEmW7GVVen0-YwpC07hZNoquMvig7gZK-r5DTKGJVk&usqp=CAY","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmHGlZSp7qYZufKjMKm-WS3PhpPVTXvPuqTrdT2z9iTDcka95s4X0Z9PJ7LXlP4nR0l0VT62NTSQx_QD-HKYAtLh5ayAhk&usqp=CAY","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvQmCPszzrT5Jp-L_7PgT1ydR3wjTDjjq2YUSgGhrkzJe4n1ZQc4eNgIGFa52kAOLKPqGhIB6mCdwSOkFb940_87T2LzrMtQ&usqp=CAY","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7SeG7-WYBtLG0HqMnYNrV0H86IDlvhumxDvby7OehzWC7Koip4M4EQ2Mx6y1FLpAIcJ5r21y0poYf6g8azOnzPe-GEV4ZzA&usqp=CAY"]\'',
          screen: "'6.2\"'",
          processor: "'Exynos 990 de 7nm'",
          ram: "'12GB'",
        },
        {
          name: "'Móvil - Samsung Galaxy A12 (2021), Negro, 64 GB, 4 GB RAM, 6.5\" HD+, QuadCam, Exynos 850, 5000 mAh, Android 11'",
          slug: "'samsung-galaxy-a12-64gb'",
          manufacturer: "'SAMSUNG'",
          description:
            "'Pantalla TFT LCD Infinity-V Display\nVive una experiencia audiovisual sin precedentes. Sus 6.5\" de pantalla HD+, harán que disfrutes a tope de todo tu contenido y juegues a una velocidad impresionante.\n\nQuad Cam para fotografías de nivel profesional\nEl Galaxy A12 (2021) de Samsung, cuenta con cuatro cámaras que te permitirán hacer fotos mucho más claras, nítidas y de calidad profesional. Una cámara de 2 MP Macro, otra de 2 MP Profundidad, continuada con 5 MP Ultra Gran Angular y 48 MP Principal. La cámara Ultra Gran Angular dará más amplitud a tu mundo. Además, tiene una cámara frontal de 8 MP.\n\nCarga rápida y una batería más que duradera\nSi eres de los que vive cada día al máximo, la batería de larga duración del Galaxy A12 (2021) es tu aliada perfecta. Con 5.000 mAh, tu teléfono móvil tendrá energía para todo el día y podrás disfrutar sin límite de tus contenidos de entretenimiento. Juega, comparte y visualiza tus vídeos y streamings como nunca desde tu smartphone Samsung. Y si se acaba, devuélvele toda la energía con su carga rápida de 15W.\n\nMemoria RAM y almacenamiento\nSus 64 GB de almacenamiento interno, unido a que puedes ampliarlos mediante tarjeta microSD hasta 1 TB, harán que en tu Galaxy A12 (2021) no sobre nada, seguido a 4 GB de memoria RAM. Almacena todo lo que te importa sin temor a agotar el espacio.'",
          color: "'Negro'",
          price: '179.00',
          imageFileName:
            '\'["https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86539433/fee_786_587_png","https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86539436/fee_786_587_png","https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86539440/fee_786_587_png"]\'',
          screen: "'6.5\"'",
          processor: "'Exynos 850'",
          ram: "'4GB'",
        },
        {
          name: "'Xiaomi Redmi 9C 64GB Gris 3GB'",
          slug: "'xiaomi-redmi-9c-64gb'",
          manufacturer: "'XIAOMI'",
          description:
            "'Doble cámara y más detalles Sus 2 cámaras traseras de 13 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Más para ver Con su pantalla IPS de 6.53\", disfruta de colores intensos y mayor nitidez en todos tus contenidos. Mayor rendimiento Su memoria RAM de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo facial y dactilar Máxima seguridad para que solo tú puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido. Batería de duración superior ¡Desenchúfate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas. Gran capacidad de almacenamiento Con su memoria interna de 64 GB siempre tendrás espacio para almacenar archivos y documentos importantes. Además, podrás guardar películas, series y videos para reproducirlos cuando quieras sin conexión.'",
          color: "'Gris'",
          price: '129.00',
          imageFileName:
            '\'["https://lh3.googleusercontent.com/spp/AARfHkxx6H7u5cEyqU8NxzdPm44wdZ6C-kbQWNszBzkUc3pcBzcm8fAJ3BKJCL-W-A-jv1IE231tZF5MDjRIGd1ucihef0EKTOwFpbZkUFb71yHwOqvVmGgDGftKUz2OVwu8rsTjnIWGIuTBGVO_22eMtd0MkLsbz-UMng91-KroNZxmXVDMarQv6a9VzqSR4DvPhsU7dWobtQ=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkyQvgDeD1rmiK58Adq3QPnfeBucUPMp66PFI7ETzKJL-Ns6n9juptWyQXOCZHjrx4xByuxgSZYCo90edUfgWvV0pM6auN3dNpFIQCNDkWNYtq0lRpwfyB8KGeCpcIWm7cKt7_J7YKi3osUmj0-cEIdqjTFAl-NhBKNiwrB-c1fiOag7h1sGVMonjG5a8H3-7LTJoNTT5g=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkz-kc5hywiiOyK5CN3gZCve9OkEkGXw_OniaWrCUE9NEL-5-77YkWbaT81s8EaDj_s-vDmjy9jOluT4eJhDAq4-kkNS_Wz5mL3mdxGbVINffoDrv75TiFAxoOXeAPHn463ccPFndpLlen1wVtrkaNYtSHxFrnZ1k011hkty8zTYgRV8o6_1xF0z71biI3EOsHD8a4hNAlA=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHky5qnAdUHehbBRqwVtt9rClIw-LzIEa-pUGwNVqKw4R_r_JDharYONbsDkZAI8v59a4om4qEzC6YJCK2eCM1b7OX1KYknFdaI14LkaD5y3Rrp_00CxXRM94WSKAJ1c3wdQVp5fxLYYaa7Z5dAhLh543UbUm_A6jvEu8imqTqL4YArB2SqX4-oU5JnAu3fJFC3iXpwoHig=s1024-rw-pd-pc0x00ffffff"]\'',
          screen: "'6.53\"'",
          processor: "'MediaTek Helio G35'",
          ram: "'3GB'",
        },
        {
          name: "'Xiaomi 11 Lite 5G NE 128 GB 8GB Azul'",
          slug: "'xiaomi-11-lite-128gb'",
          manufacturer: "'XIAOMI'",
          description:
            "'Septiembre de 2021SmartphoneAndroid5GGSMCDMACon pantalla OLEDReconocimiento facialSensor de huella dactilarCuatribanda\nFotografía profesional en tu bolsillo Descubre infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Pon a prueba tu creatividad y juega con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 20 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Experiencia visual increíble Mira tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.55\". Disfruta de colores brillantes y detalles precisos en todos tus contenidos. Capacidad y eficiencia Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Desbloqueo facial y dactilar Máxima seguridad para que solo tú puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido. Batería de duración superior ¡Desenchúfate! Con la súper batería de 4250 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.'",
          color: "'Azul'",
          price: '329.00',
          imageFileName:
            '\'["https://lh3.googleusercontent.com/spp/AARfHkyv2TZHwoJuXcOAUDZNlzMYW0bOWwO4N4u6v6euMdHbWrTxlaIx2meNke6c2g7sJcecMZRV8inH2vUCzRjcUVo7FHXa8GozjkbbS0KGPPeJ0ryi3GR7OtUkBy3siKwDiWu0f4Y6VsUF02cyzg0JhSc-6YkLPAb9WSglF9HfxqzVnDbCGJlEu_brtTl4dG3CvZ5hWSoWuA=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkya4cd6h1pt6W04-2ZrDx2U5QEMyW0gHuLdswASx694lnp-CW7VMDP4SPXBv3OegAGrJOMCasduG8tvTDTD-086sDu9rce4rnfxpa9J839ZKEH_XxRughHd57i7ABC9-jiJwIhhUaSeagJYfNKwbWWirE66CAUplTv71-acP9eJ7X0v3LZMaY5vVri0F_QUWiAefyQi6g=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkwcLOidLZDeddWpGfxOgKo-XYc0S4A3PLN9YvR6UHDfDdIIKcPEkMGfdTLEYuz8vXdA6LSYnlRE8DWjGKjG6JQJCGe4fej2RxYVBj46O7_Fb9otqmwxja-JZrPGTTt6TF8UzxW1RuZEDHLrLUpeNsmBBtqxhGnSFuRH-k15m8E3wOCt88FI2u08ZF62jbRTXZuQZupSeg=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkzKnz_7RbJ7DHj3W6tlJPqSGCzGlflWx0NUj7b7q1Js8v7QIduBQ8uAvERhxbd86qW-Jn_YxUelzZMLD50OUwRmhIXXctrHQnNhaNN7h94dnqWT5jRxuMQCbfT1VV9P8moxION1S5PnqZfEcAKQa9glFTYpSRgfaoWOsUIrdd6oLLe7vb8vBnYL66d85dwNYc4O-2kqYw=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHky_hTBVCK5VoiJVF77Pi1BkQeM87v_YOnmXKZhQVLdjp9GnHno30SdML0_m4VtyBaNXpFb-cFz5DrKmbSGlOTP7Ew3ViYl-W-rWwsSASU3ACNFjL546IHZ0LluTr7AW0y_b5dgQTtutQ0PxpU5L60SpJCQgmoHqUZr8PFDqNTsBHo6A9zOJYtzxnMYLRDlDuf08KKuzyw=s1024-rw-pd-pc0x00ffffff"]\'',
          screen: "'6.55\"'",
          processor: "'Qualcomm Snapdragon 778G 5G'",
          ram: "'8GB'",
        },
        {
          name: "'Apple iPhone 12 Verde 64GB'",
          slug: "'iphone-12-64gb'",
          manufacturer: "'APPLE'",
          description:
            "'Apple iPhone 12 Verde 64GB Llega el iPhone 12, uno de los móviles 5G más buscados y esperados. Lo tiene todo por fuera: un diseño cuatro veces más resistente a las caídas o arañazos, una pantalla de Super Retina XDR de 6,1 pulgadas, rodeada de aluminio aeroespacial porque este móvil es de otro planeta.Con el iPhone 12 con 5G podrás descargar pelis sin conectarte al WiFi, disfrutar de un concierto en streaming o hacer FaceTime sin notar ninguna latencia y con la mayor cobertura del mundo entero. ¿Te contamos más? Podemos decirte que lleva el chip A14 bionic, el más potente en un smartphone y tecnología OLED para que los colores tengan más color que nunca. No dejarás de usar su cámara dual, de día y también de noche gracias al gran angular y ultra gran angular. Y contarás con la ayuda de HDR Inteligente 3 para retocar automáticamente el color y la nitidez, entre otras cosas. Del modo retrato ya ni hablamos, no querrás que otra persona te haga fotos y te costara elegir uno solo de sus seis efectos de iluminación para sacar el mejor selfi. Graba todos tus vídeos en 4K HRD y proyéctalos en la tele. Te sorprenderás. Con la carga inalámbrica ultrarrápida y su sistema de privacidad te seguirá el ritmo allá donde vayas.'",
          color: "'Verde'",
          price: '689.00',
          imageFileName:
            '\'["https://lh3.googleusercontent.com/spp/AARfHkwOd9bc59jHLw8cLx9uD7wHxsyLuaBzHd9lycly-6KTmuls7IQhdV9fTDLq14lsZcoknE_IVgpFAONnBllQTI3xtRGVp1KHcTkzjxcdwEEjcufZZdmIuGkGeOzMkKikXdUUO8CIlaxNijM3U0Ij-id05Y5sTQM-nYDwDz9rkjzrP4GnqFjGR6EcEvK1nMNDMJ1XWa-GU7I=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkyY_itgQbDiuWjjAw5ZsNW2F3n0nCS7l0_0CPLhi0T00Z4M-f8LhA3O4n9TdbVQbgGZCOCd7W_CR-86E_4l5m9TPeQBwpAi0vTz8-2WENFBn6BIs3kMRLKE8oq3V__b0xQFACUmfMGORCsWLms7Vz_9VJuM2DWU17m6pPMoVbRDPR2LehNbBbbAi69DvEQX1qj16T9Z=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkzqLqNOSxVk-8dAPzg-C0Pb6-ypBob87FygaP0M1JmJgUqrxbWtYmw6-GQjpKgiMSIdPJ3UQZUCT4n0ndBrrG7EJTi36S4ZAC7q-zy8LpvQskrvxPt3W_m70k8nzsv2piZsrlnhGCse0OQsCC5wt66xCPAQjAa7g9Hd4rMibsUv_sQMD9oQdUa6eK-ybK1eudnhfAF9Yw=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkzup0BIXmReDDLkzHdIPq7RwyzGKZ2bGyPwtB1zA3WPnLfsAKWndn0W3DZCFCifZeAzJdlCPcqc50dnMKcWiBf-w6O-pySc1-9jmcciG9G6qJ1VMo_cqh7QkbgSqouHR6nqFvlCZuMPGn8_M3DU7ZypGyFu2PhyD2eN-ZICsmBbdm6zx4l26zbCtnKvyY_-de7REbha1Mg=s1024-rw-pd-pc0x00ffffff"]\'',
          screen: "'6.1\"'",
          processor: "'Apple A14 Bionic'",
          ram: "'4GB'",
        },
        {
          name: "'Oppo A15 Negro 3GB / 32GB'",
          slug: "'oppo-a15-32gb'",
          manufacturer: "'OPPO'",
          description:
            '\'Oppo A15 Pantalla 6,52" HD+ | Triple Cámara 13 MP | Batería 4230 mAh La pantalla ideal para tus ojos La marca de móviles chinos Oppo, sigue lanzando nuevos terminales con las últimas novedades del mercado, empezando por la pantalla. Seguro que en alguna ocasión te ha tocado trabajar con el móvil, o asistir a una clase online por videoconferencia, y has acabado con dolor de cabeza. Esto se debe principalmente al cansancio ocular, por eso, en esta ocasión Oppo ha euipado una pantalla Waterdrop Eye Protection de 6,52" en resolución HD+, que ajusta automáticamente el brillo según la iluminación de tu entorno. 3 cámaras, una para cada momento En el apartado fotográfico, este Oppo A15 equipa 3 cámaras traseras, para que fotografíes cada momento a tu gusto. Este cuadro de cámaras está formado por un objetivo principal de 13 MP Gran Angular, una lente Macro de 2 MP y un sensor de profundidad de 2 MP, para que pueda inmortalizar cualquier momento que imagines. Además, gracias a la IA (Inteligencia Artificial), obtendrás resultados brillantes. Batería de larga duración Sin duda la calidad batería es un aspecto fundamental en un teléfono móvil. En esta ocasión, Oppo ha optado por introducir una batería de 4230 mAh de larga duración, que hará que puedas llegar al final del día sin ningún problema. Podrás ver vídeos en alta resolución de forma online hasta 16 horas. Además, este smartphone Oppo aprende de tus hábitos de sueño y reduce de forma inteligante, el consumo de la batería mientras duermes.\'',
          color: "'Negro'",
          price: '127.00',
          imageFileName: '\'["","","","",""]\'',
          screen: "'6.52\"'",
          processor: "'MediaTek Helio P35'",
          ram: "'3GB'",
        },
        {
          name: "'Realme 8i 4GB/64GB Negro'",
          slug: "'realme-8i-64gb'",
          manufacturer: "'REALME'",
          description:
            "'Este teléfono de Realme está impulsado por el procesador Helio G96 de 8 núcleos con velociddad de hasta 2.05 GHz, 4GB de memoria RAM y 64Gb de almacenamiento interno. El Realme 8i dual sim 4GB RAM 64Gb negro tiene una pantalla de 6.6 pulgadas con tecnología IPS Lcd, frecuencia de refresco de 120 Hz y más de un 90% de relación pantalla-cuerpo. La cámara triple con IA tiene 50Mp + 2MP + 2MP de resolución, siendo estas lentes la principal, macro y Byamp;W, respectivamente. La batería de 5.000 mAh de capacidad te puede dar hasta 2 días de funcionamiento'",
          color: "'Negro'",
          price: '172.00',
          imageFileName:
            '\'["https://lh3.googleusercontent.com/spp/AARfHkwBBy0RdO8zL_YY7V8UaWuB_8hUyhSOxg9LZKVKJK-xuhlyEBvlXnY8flLFnkpRQUliBEPEAJVt8FLBMSO6Eu3_1iLBLmpdOib8shfgf55zT7ksHBw4TY2y-wqdJIqAkfPAArP7USVvfgNzjol1on_9lscSYmnDd5AUpShOv7IyOxQZ1A21H-PQEt_gtAnz5JhTYU3VqsY=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkxC9LqK3Fa1GR66xRczp0jiDMlfPp9HNnkrc0ZBn0Ic0BHyaYtc3GhCTXfgH2kpX6oWJ59r5Z9rKZmLBqZEwor0FRCTahjSioMw8W1884VX-P397Z6x-Wm0cvZZDyYcxW4f5knU_ESTUJeRVjgquZngxgvLrQpkHl30mi8WVOvasxiQ0imvRGr3eVdFRcCoh8BAhTFc=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkzxrlK27a83V2j6QDZxJiVZ2SWAdQIwfR8N8X2P-uM8v9cqjhkU8dUNfqJZ9RIRk6n8SBWUJJCFvHlDXeSr5HKDYiBZSLl76lduyTMWQUgIIu-3DNS8VAI1pGvJKB9Z206XTeGBwSoFWUlYdBCjqQX1GnyNCRYldRqMqJyOU8YuSOsHeyJIhFzAQDJPr_a1-8IXYEOpZg=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkw7fEDDoFlyFg7PxMDaonWU6fFKEwfW8yl3j26TazESfajMEEZjqQnu9eLqDpEuWTyjUKHDp-GPJG5xbbHomR5f3SvRINc8VnY_D6QbaA1RiE8f6HqaLgYN0ojY4OVSFenXNlOGv_wrDrYEDQCu0nu0rvkw53nSdlYTYWbY-x1v4IO53SCXPEpytsdYJzHk7MGnUgOUFA=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkyOXS5hBLbQIRuH7ZGt3_xvSI7LLkc9aNazjMObrI0-wRdp2f5e0nWkq6NiiKlGsIOhnu_GXp6N2SARtw-SqbNDOgJaST49U8N8uQqNTVWfI_Tzehs6a7UmsR5izihQIptosFczAOWH8PajbZqTOSm7GdVtLcVjrn-iwPWJVPUuyNcszaIXWh6h-ni7DrJSVhpj_G9j1kc=s1024-rw-pd-pc0x00ffffff"]\'',
          screen: "'6.6\"'",
          processor: "'Helio G96'",
          ram: "'4GB'",
        },
        {
          name: "'Samsung Galaxy S21 Ultra 5G Plata 256GB 12GB\n'",
          slug: "'samsumg-galaxy-s21-256gb'",
          manufacturer: "'SAMSUNG'",
          description:
            "'Samsung Samsung Galaxy S21 Ultra 5G 12GB/256GB móvil libre DescripciónHaz que cada día sea épico ¡Qué no se te escape la toma perfecta!. Galaxy S21 5G y S21+ 5G han sido Diseñados para revolucionar el vídeo y la fotografía, con una resolución 8K cinematográfica superior para que puedas extraer fotos impresionantes de tus grabaciones. Disponible en dos tamaños, 64 MP de cámara, nuestro chip más rápido incorporado y con batería para todo el día. ¡Haz de tu realidad algo épico! Haz fotos impresionantes de tus vídeos en 8K 8K Video es la mayor resolución existente en un smartphone, haciendo que tus grabaciones superen las imágenes que ves en el cine. Y con 8K a 24 fps, cada videoblog y cada recuerdo es un paso más hacia el estrellato. Graba, súbelo y míralo en YouTube. Utiliza 8K Video Snap para crear un álbum de alta calidad con imágenes fijas de 33 MP que puedes sacar de cada vídeo 8K. Grábalo primero con facilidad. Y luego, saca tus fotos. Dura más que todas tus noches La luz del paisaje urbano va del día a la noche para demostrar el uso del teléfono desde la mañana hasta la noche. La carga superrápida te da horas de energía en minutos de carga. La carga rápida inalámbrica 2.0 es una recarga rápida, sin cables. Wireless PowerShare te deja usar tu teléfono para cargar los auriculares, el reloj o incluso el teléfono de un amigo. Descubre el chip más rápido de Galaxy Con más velocidad, más potencia y más inteligencia, el procesador de 5 nm es lo suficientemente rápido como para seguir el ritmo de la acción, por lo que puede hacer más aún más rápido.'",
          color: "'Plata'",
          price: '999.00',
          imageFileName:
            '\'["https://lh3.googleusercontent.com/spp/AARfHkwn1PfZpSlRGxeVCih4jzHjIpXunYrM9Bzl7NpEqM68oSt9IVy7W3veVmBwUqTBvfFWnlGeS0nmcsDDenwZaY6qUpClmfJBpDDA5kiJF1WTuRccx4PnTLYwdtz6gTFTq7pcAMQFYkjt9SDLXnKvOcM5mE5QdLf5iYopsBf3zDze-OLh16bvXGjT-HbNYn0D1c01cifmDw=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkxrtSBf0JD0NBhSx8KlWRMSu7CFbWLjbJs1AK5NpQFtLbOUPQacITHpoJG1oh8b7gpmsIpErS2mXW8X_5k0X-yq-knpwuCazNV4D6xJ9pPqQaiFqvXLoLZ-ucQkW-GqXTBqJrHZd5Z7cXFC0v3r7LUcceDYqxV33MdUR55BKj1dCXjqXOcXWgPMJDXtx65ZtowQyBp2GQ=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkxyC541SsG09s1Pz8Z8h3p0e6GEoX5WWvuXOc2pDYKdbybqk51JOmnABYulciFHluv9xy4bweA35fXnlJqvyIJNMWOD03Q9UcheszBcclVQ-x-BooG-y9JubZPSKH0QaIEzz1Rg81ee__ezd44d1fC-ZLUtkvw0bl4Hd71BgzFsNMqtW4Mv0WrSJb6m9EH7h9VqdgAxSQ=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkw2LIQq6vd3-JOp49b9R7ZU2wJrD5aswJF-p_CmuUwEfd-37oef3YHYh1cPs8zDzGDXvR7y805x95tHkVayclx2NHx0K6zJ_LB_Uv2IwDSWUjDqwWPkGSPgDCSfnTwypzPAQrI5dSehw4XsrjBTbUiLpylVz0cKdb766bkeUE0eMfQN9SmqTIo6TxMYbwLd_tpZdQbEnyE=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkzkEE-u-QGXQBrgNpi4d9ngeCUmWtz5g2h3MLIlkwX8KgUAILKMegHSYl_HKkTqsgn-rIZxqx1TQCBeEr618OTIYw-J296_Pm40CrWJF95ElN_NQtQzRW07F1Gdpaen0jvW8NnOwqjWETx4SfgclRepZi7-RfCu1yst_K4E76KSWVrJXqpUz4xyNT052NFESd_-QANEDgQ=s1024-rw-pd-pc0x00ffffff"]\'',
          screen: "'6.8\"'",
          processor: "'Samsung Exynos 2100'",
          ram: "'12GB'",
        },
        {
          name: "'Samsung Galaxy Z Flip 256 GB'",
          slug: "'samsumg-galaxy-z-256gb'",
          manufacturer: "'SAMSUNG'",
          description:
            '\'Con el Asistente de Google sácale todo el partido a tu dispositivo estés donde estés. Galaxy Z Flip es la apuesta de Samsung para traer de vuelta aquellos dispositivos móviles más compactos, con apertura tipo "concha", pero manteniendo las cualidades de un smartphone de última generación. Todo ello, gracias al uso eficiente de una pantalla flexible Infinity Flex, AMOLED de 6,7" y biseles minimizados. Además, porta un cristal plegable denominado Samsung Ultra Thin Glass, que pondrá ante ti una pantalla plana y lisa capaz de repeler la suciedad y el polvo. En la cubierta exterior, dispone de una pantalla de notificaciones con "continuidad contextual", por lo que podrás tocar la notificación para pasar directamente a esa aplicación en cuanto despliegues el teléfono. En este punto, cabe destacar que el sistema de apertura está formado por una bisagra articulada Hideaway, que te permitirá ajustar el ángulo a tu gusto. Galaxy Z Flip también destaca por su potente procesador de 7 nm y sus 8 GB de RAM, que junto con la pantalla flexible, trabajarán a la perfección para ofrecer una multitarea más productiva gracias a su sistema "Multi Active Window", capaz de dividir la pantalla en dos y trabajar a la vez con apps distintas. También podrás sacar un mayor uso de este sistema de división de pantalla, por ejemplo, cuando vayas a realizar una foto (área de visualización en la parte superior y controles en la inferior). En este punto, destacar su cámara trasera Dual (12 MP + Gran Angular de 12 MP) y su frontal de 10 MP. Samsung Galaxy Z Flip integra una batería Dual de 3300 mAh y dispone de tecnología Powershare inalámbrico, para que así puedas cargar otros dispositivos desde el propio smartphone, sin cables\'',
          color: "'Negro'",
          price: '1500.00',
          imageFileName:
            '\'["https://lh3.googleusercontent.com/spp/AARfHkzDN5Y8MWywu3YBUWxba17-uG_y4TAEb68wnNvk9jte6BsQH0qb4iXOF6fsErBTwVAFhixUA0RuJrC1ohSxI9aM6JbfDA0gkvqHi-FhSUx1PjVMiTHEH4zApXljRKlHoRt6PHCsEFWJmRkwl_hPO6g_TW_8TaTuyzGgSqC6sCv1r0wnx-vEarDXZ83B7yeGQiqMe1y-=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkxvlELp5mlk3I3P2FYF7RZ1C195B20di1XRpR3c_w-SGjHwnFeBVZEeB3OxjUyZYERC8Dsah7L6JFWnGWBmxyBTB5P2ROfHfGwXjEdg_BC_4LcIYNuDQJaPBBdihpQ3nWCVJ-AxI98gkKNQsFNdtwLUJBa3wJEcKpNC91q0skyMTAI_SLfSU8gND7y0WAoy4F-pLz3pzg=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkxVfMSCUqDt7Ot4idQaoqmUTDjTIzZIr_85Ah0jX2mQS8uKBA3F5_OXHnx9BYpGqJNRNbm0aDt9ydws1ccCQH-5rUXsbqwb9J2aGnPRNbLa5CyCBJ1NVejbmrPjIw6UrjbDrYCUXVfumQOMqSLSFsAb2LCKCRPcwk1clwd2BNvOPkh__mg_vKxbA9QR8XecmokuTtYvGQ=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkzk5GNmhLL6FsQavnXIRVkETW3ZKP346O3_cNqSfobaRyipNItTXG1Kc9bRyOyD2hI0rc6b8dXDQlITS3138nzLjHub2vBdmFWtWlA1MqMFSKlyYFLd0iQD1DTP5OSdJVyMdR4qHNVt_mwlTnJkYs5JAAE9Ktwj8n1uHmA-ZU0v75QCSScijDKsOxgpA5Bzx_ITso_vXw=s1024-rw-pd-pc0x00ffffff","https://lh3.googleusercontent.com/spp/AARfHkzT1ANdSvpOFAkA5kd_eq8cngeboqMUsW3KnyYoBLz4eMCsvSQf9aMIv4OwY_Gp1nsqqXzS7R-YvrI7NtQk697bfN_ogmGJU2gz4kqvPyuD5aOZlaMP6JV10jH3uNDJlMblISzmLg2rS-Vyn6H_SySR8lT9BFj025CqdRke0BCtiLIlsTqhbVcco_kLThuVtd-s1AGy8Jw=s1024-rw-pd-pc0x00ffffff"]\'',
          screen: "'6.7\"'",
          processor: "'2.95 GHz'",
          ram: "'8GB'",
        },
        {
          name: "'Huawei P30'",
          slug: "'huawei-p30'",
          manufacturer: "'HUAWEI'",
          description:
            "'Huawei P30 llega cargado de novedades implementadas a partir de alguna de las mejoras que ya vimos en los modelos de la gama Mate 20. El exterior destaca por sus elegantes bordes redondeados en el que se integra una pantalla, con diseño notch, OLED FULL HD+ de 5,8 pulgadas, que goza de una resolución de 2880x1440 píxeles. Además, Huawei ha prescindido del lector de huellas digital de tipo capacitivo, para incorporar el sistema de detección integrado en pantalla. En su interior, reside una memoria de almacenamiento de 128 GB, un procesador Kirin 980 de ocho núcleos (2 x 2.6 Ghz + 2 x 1.92 Ghz + 4 x 1.8 GHz), una memoria RAM de 6 GB y una gráfica Mali G76, por lo que todas las aplicaciones y juegos más potentes del mercado actual se ejecutarán con total fluidez. Huawei P30 también llama la atención por su triple cámara trasera 40+16+8 MP (apertura focal F1.6+f2.2+f2.4) y su cámara Selfie de 32 MP. P30 cuenta con una batería de 3.650 mAh y sistema de carga rápida para que te mantengas siempre conectado a lo largo del día. Además, dispone de sistema de reconocimiento facial para realizar tareas de desbloqueo del smartphone. '",
          color: "'Negro'",
          price: '1500.00',
          imageFileName:
            '\'["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5ssS1-7HI4Ix4pg-r3u8kYKZpgK83X5WWct6By_zYTJkCAp82rBeBML1ix6vx3zpRvJRE1-9u-oHgNgqM7yk-2bobMoWYtA&usqp=CAY","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSc9Q22myd7ajaJAUQZ-C6VtFis0wXWaqPS7vNlvp4OYzKyY7UHX4r4VQ1nywvm7bLqTgemyNbKZx_rk6saNprfZZV6B6819Q&usqp=CAY","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5v5fM8k-z5t6J-d1sxCXVUMXiWuoHE1ycWR-ytV4KQxQBBKrsnZY4ZnGEOXOOWarCOhzXHTArNmdHTNHjIt-UNU1Xb-Zh&usqp=CAY","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9NXl5ozr2oMjO7AS7OPglU28xJyraHjy51wYra6RSpi3gA8fY_pAUAk-veM-kEINqmCX9RCvXAfpRwPZKlZb8ontql7rP&usqp=CAY"]\'',
          screen: "'5.8\"'",
          processor: "'Kirin 980'",
          ram: "'6GB'",
        },
      ],
      10,
    ],
    findBySlug: (slug: string) => {
      if (slug === 'samsung-galaxy-s20-128gb') {
        return {
          name: "'Samsung Galaxy S20 5G 128GB Azul'",
          slug: "'samsung-galaxy-s20-128gb'",
          manufacturer: "'SAMSUNG'",
          description:
            '\'Con el Samsung Galaxy S20 puedes sacudir los códigos estéticos y empujar los límites de las pantallas tal y como las conoces. Sumérgete en una nueva dimensión que combina potencia, conectividad, elegancia y comodidad en un solo smartphone. Con una impresionante pantalla AMOLED infinita de 6,2"" con una resolución HD cuádruple de 1440 x 3200 píxeles, ofrece una frecuencia de actualización de 120 Hz para una suavidad increíble. Además, con su procesador Exynos 990 que soporta 12GB de RAM y 128GB de espacio de almacenamiento, instala todas tus aplicaciones favoritas fácilmente y sin restricciones. En cuanto a la cámara principal con triple sensor 12+12+64, de alto rendimiento y con la posibilidad de grabar vídeos de 8K, no volverás a ver tu smartphone de la misma manera. Equipado con un procesador Exynos 990 y 12 GB de RAM, el Samsung Galaxy S20 te ofrece toda la potencia que necesitas para sacar el máximo provecho de tu smartphone, incluso los juegos más intensivos en gráficos funcionan sin problemas. En cuanto a su sublime pantalla Infinity de 6,2"" con una resolución Quad HD de 1440 x 3200 píxeles, realza la riqueza de las imágenes a la vez que le ofrece una espectacular inmersión. Y con una frecuencia de actualización de 120 Hz, usar tu smartphone nunca ha sido tan agradable. Además, el Samsung Galaxy S20 tiene una ranura para tarjetas microSD (hasta 1 TB) para soportar los 128 GB de memoria interna si es necesario. Dual SIM, el Samsung Galaxy S20 te permite gestionar eficazmente tu vida profesional y personal de la mejor manera posible.\'',
          color: "'Azul'",
          price: '1009.00',
          imageFileName:
            '\'["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_Kq08-IM8Ic5uUNhpPf9djXw2ML7-_K4sG0d5C6hWbgeFKlfyGmsxxdKAD9zyHyOuo6aukbbCX7cDhNbY2eRubYEUraC9xA&usqp=CAY","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4bYKVGrGEmW7GVVen0-YwpC07hZNoquMvig7gZK-r5DTKGJVk&usqp=CAY","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmHGlZSp7qYZufKjMKm-WS3PhpPVTXvPuqTrdT2z9iTDcka95s4X0Z9PJ7LXlP4nR0l0VT62NTSQx_QD-HKYAtLh5ayAhk&usqp=CAY","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvQmCPszzrT5Jp-L_7PgT1ydR3wjTDjjq2YUSgGhrkzJe4n1ZQc4eNgIGFa52kAOLKPqGhIB6mCdwSOkFb940_87T2LzrMtQ&usqp=CAY","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7SeG7-WYBtLG0HqMnYNrV0H86IDlvhumxDvby7OehzWC7Koip4M4EQ2Mx6y1FLpAIcJ5r21y0poYf6g8azOnzPe-GEV4ZzA&usqp=CAY"]\'',
          screen: "'6.2\"'",
          processor: "'Exynos 990 de 7nm'",
          ram: "'12GB'",
        };
      } else {
        return null;
      }
    },
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PhoneModule],
    })
      .overrideProvider(PhoneService)
      .useValue(phoneService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET phones`, () => {
    return request(app.getHttpServer())
      .get('/phone')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(phoneService.findAll());
      });
  });

  it(`/GET phone by existing slug`, () => {
    return request(app.getHttpServer())
      .get('/phone/samsung-galaxy-s20-128gb')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(
          phoneService.findBySlug('samsung-galaxy-s20-128gb'),
        );
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
