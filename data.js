const appData = {
  de: {
    name: "German",
    levels: {
      A1: {
        Food: [
          // Anciens mots
         {
    id: "de_a1_1",
    word: "der Apfel",
    phonetic: "ap-fel",
    translation: "the apple",
    image: "./asset/apple.jpeg",
    examples: [
      { target: "Ich esse <b>den Apfel</b>.", english: "I eat the apple." }
    ]
  },
          {
            id: "de_a1_2",
            word: "das Wasser",
            translation: "the water",
            icon: "💧",
            phonetic: "das ˈvasɐ",
            examples: [
              { target: "Ich trinke <b>das Wasser</b>.", english: "I drink the water." },
              { target: "<b>Das Wasser</b> ist kalt.", english: "The water is cold." },
              { target: "Brauchst du <b>Wasser</b>?", english: "Do you need water?" }
            ]
          },
          // Fruits & Légumes A1
          {
            id: "de_a1_3",
            word: "die Banane",
            translation: "the banana",
            icon: "🍌",
            phonetic: "diː baˈnaːnə",
            examples: [
              { target: "Ich esse gern <b>die Banane</b>.", english: "I like eating the banana." },
              { target: "<b>Die Banane</b> ist gelb.", english: "The banana is yellow." },
              { target: "Kaufe <b>eine Banane</b>!", english: "Buy a banana!" }
            ]
          },
          {
            id: "de_a1_4",
            word: "die Kartoffel",
            translation: "the potato",
            icon: "🥔",
            phonetic: "diː kaʁˈtɔfəl",
            examples: [
              { target: "Ich koche <b>die Kartoffel</b>.", english: "I cook the potato." },
              { target: "<b>Die Kartoffel</b> schmeckt gut.", english: "The potato tastes good." },
              { target: "Wir haben keine <b>Kartoffeln</b>.", english: "We have no potatoes." }
            ]
          },
          {
            id: "de_a1_5",
            word: "die Tomate",
            translation: "the tomato",
            icon: "🍅",
            phonetic: "diː toˈmaːtə",
            examples: [
              { target: "<b>Die Tomate</b> ist frisch.", english: "The tomato is fresh." },
              { target: "Er schneidet <b>die Tomate</b>.", english: "He cuts the tomato." },
              { target: "Ich mag keine <b>Tomaten</b>.", english: "I don't like tomatoes." }
            ]
          },
          {
            id: "de_a1_6",
            word: "die Zitrone",
            translation: "the lemon",
            icon: "🍋",
            phonetic: "diː t͡siˈtʁoːnə",
            examples: [
              { target: "<b>Die Zitrone</b> ist sehr sauer.", english: "The lemon is very sour." },
              { target: "Ich nehme <b>eine Zitrone</b>.", english: "I take a lemon." },
              { target: "Der Saft der <b>Zitrone</b> ist gelb.", english: "The lemon juice is yellow." }
            ]
          },
          {
            id: "de_a1_7",
            word: "der Salat",
            translation: "the salad / lettuce",
            icon: "🥗",
            phonetic: "dɛːɐ̯ zaˈlaːt",
            examples: [
              { target: "Ich wasche <b>den Salat</b>.", english: "I wash the lettuce." },
              { target: "<b>Der Salat</b> ist sehr gesund.", english: "The salad is very healthy." },
              { target: "Möchtest du <b>Salat</b> essen?", english: "Would you like to eat salad?" }
            ]
          },
          {
            id: "de_a1_8",
            word: "die Karotte",
            translation: "the carrot",
            icon: "🥕",
            phonetic: "diː kaˈʁɔtə",
            examples: [
              { target: "<b>Die Karotte</b> ist orange.", english: "The carrot is orange." },
              { target: "Das Kaninchen frisst <b>die Karotte</b>.", english: "The rabbit eats the carrot." },
              { target: "Ich kaufte <b>eine Karotte</b>.", english: "I bought a carrot." }
            ]
          },
          {
            id: "de_a1_9",
            word: "die Erdbeere",
            translation: "the strawberry",
            icon: "🍓",
            phonetic: "diː ˈɛːɐ̯tˌbeːʁə",
            examples: [
              { target: "<b>Die Erdbeere</b> ist süß.", english: "The strawberry is sweet." },
              { target: "Ich mag <b>Erdbeeren</b> sehr.", english: "I like strawberries a lot." },
              { target: "Sie pflückt <b>eine Erdbeere</b>.", english: "She picks a strawberry." }
            ]
          },
          {
            id: "de_a1_10",
            word: "die Zwiebel",
            translation: "the onion",
            icon: "🧅",
            phonetic: "diː ˈt͡sviːbəl",
            examples: [
              { target: "Ich schneide <b>die Zwiebel</b>.", english: "I cut the onion." },
              { target: "<b>Die Zwiebel</b> brennt in den Augen.", english: "The onion burns the eyes." },
              { target: "Brauchen wir <b>eine Zwiebel</b>?", english: "Do we need an onion?" }
            ]
          },
          {
            id: "de_a1_11",
            word: "die Knoblauchzehe",
            translation: "the garlic clove",
            icon: "🧄",
            phonetic: "diː ˈknoːpˌlaʊ̯x.t͡seːə",
            examples: [
              { target: "Ich benutze <b>Knoblauch</b>.", english: "I use garlic." },
              { target: "<b>Der Knoblauch</b> riecht stark.", english: "The garlic smells strong." },
              { target: "Gib mir <b>eine Knoblauchzehe</b>.", english: "Give me a garlic clove." }
            ]
          },
          {
            id: "de_a1_12",
            word: "die Gurke",
            translation: "the cucumber",
            icon: "🥒",
            phonetic: "diː ˈɡʊʁkə",
            examples: [
              { target: "<b>Die Gurke</b> ist grün.", english: "The cucumber is green." },
              { target: "Ich schäle <b>die Gurke</b>.", english: "I peel the cucumber." },
              { target: "Er isst <b>eine Gurke</b>.", english: "He eats a cucumber." }
            ]
          },
          {
            id: "de_a1_13",
            word: "die Orange",
            translation: "the orange",
            icon: "🍊",
            phonetic: "diː oˈʁɑ̃ːʒə",
            examples: [
              { target: "<b>Die Orange</b> schmeckt süß.", english: "The orange tastes sweet." },
              { target: "Ich presse <b>eine Orange</b>.", english: "I squeeze an orange." },
              { target: "Er schält <b>die Orange</b>.", english: "He peels the orange." }
            ]
          },
          {
            id: "de_a1_14",
            word: "die Traube",
            translation: "the grape",
            icon: "🍇",
            phonetic: "diː ˈtʁaʊ̯bə",
            examples: [
              { target: "<b>Die Traube</b> ist süß.", english: "The grape is sweet." },
              { target: "Ich esse süße <b>Trauben</b>.", english: "I eat sweet grapes." },
              { target: "Er kauft blau <b>Trauben</b>.", english: "He buys blue grapes." }
            ]
          },
          {
            id: "de_a1_15",
            word: "die Wassermelone",
            translation: "the watermelon",
            icon: "🍉",
            phonetic: "diː ˈvasɐmɛˌloːnə",
            examples: [
              { target: "Im Sommer esse ich <b>Wassermelone</b>.", english: "In summer I eat watermelon." },
              { target: "<b>Die Wassermelone</b> ist kalt.", english: "The watermelon is cold." },
              { target: "Sie kauft <b>eine Wassermelone</b>.", english: "She buys a watermelon." }
            ]
          }
        ],
        Travel: [
          {
            id: "de_a1_travel_1",
            word: "der Bahnhof",
            translation: "the train station",
            icon: "🚉",
            phonetic: "dɛːɐ̯ ˈbaːnˌhoːf",
            examples: [
              { target: "Wo ist <b>der Bahnhof</b>?", english: "Where is the train station?" },
              { target: "Ich gehe zum <b>Bahnhof</b>.", english: "I am going to the train station." },
              { target: "<b>Der Bahnhof</b> ist groß.", english: "The train station is big." }
            ]
          }
        ]
      },
      A2: {
        Food: [
          {
            id: "de_a2_1",
            word: "die Verpflegung",
            translation: "the catering / meals",
            icon: "🍱",
            phonetic: "diː fɛɐ̯ˈp͡fleːɡʊŋ",
            examples: [
              { target: "<b>Die Verpflegung</b> ist inklusive.", english: "Catering is included." },
              { target: "Wir sorgen für <b>die Verpflegung</b>.", english: "We take care of the food." },
              { target: "Wie ist <b>die Verpflegung</b> dort?", english: "How are the meals there?" }
            ]
          },
          {
            id: "de_a2_2",
            word: "die Ananas",
            translation: "the pineapple",
            icon: "🍍",
            phonetic: "diː ˈananas",
            examples: [
              { target: "<b>Die Ananas</b> ist sehr süß.", english: "The pineapple is very sweet." },
              { target: "Ich schneide <b>die Ananas</b>.", english: "I cut the pineapple." },
              { target: "Magst du <b>Ananas</b> auf Pizza?", english: "Do you like pineapple on pizza?" }
            ]
          },
          {
            id: "de_a2_3",
            word: "die Pilze",
            translation: "the mushrooms",
            icon: "🍄",
            phonetic: "diː ˈpɪlt͡sə",
            examples: [
              { target: "Wir sammeln <b>Pilze</b> im Wald.", english: "We collect mushrooms in the forest." },
              { target: "<b>Die Pilze</b> schmecken gut.", english: "The mushrooms taste good." },
              { target: "Er brät <b>die Pilze</b>.", english: "He fries the mushrooms." }
            ]
          },
          {
            id: "de_a2_4",
            word: "die Avocado",
            translation: "the avocado",
            icon: "🥑",
            phonetic: "diː avoˈkaːdo",
            examples: [
              { target: "<b>Die Avocado</b> ist reif.", english: "The avocado is ripe." },
              { target: "Ich esse Brot mit <b>Avocado</b>.", english: "I eat bread with avocado." },
              { target: "Kaufe <b>eine Avocado</b>!", english: "Buy an avocado!" }
            ]
          }
        ]
      }
    },
    sentences: [
      {
        id: 101,
        english: "I drink the water.",
        correctOrder: ["Ich", "trinke", "das Wasser."],
        words: ["das Wasser.", "Ich", "trinke", "den Apfel", "esse"]
      },
      {
        id: 102,
        english: "I eat a banana.",
        correctOrder: ["Ich", "esse", "eine Banane."],
        words: ["eine Banane.", "trinke", "Ich", "esse", "das Wasser"]
      }
    ]
  },
  th: {
    name: "Thai",
    levels: {
      A1: {
        Food: [
          // Anciens mots
          {
            id: "th_a1_1",
            word: "กาแฟ",
            translation: "coffee",
            icon: "☕",
            phonetic: "gaa-faæ",
            examples: [
              { target: "ดิฉันดื่ม<b>กาแฟ</b>", english: "I drink coffee." },
              { target: "<b>กาแฟ</b>อร่อยมาก", english: "The coffee is very delicious." },
              { target: "ขอ<b>กาแฟ</b>หนึ่งแก้ว", english: "One cup of coffee, please." }
            ]
          },
          {
            id: "th_a1_2",
            word: "ข้าว",
            translation: "rice / food",
            icon: "🍚",
            phonetic: "kâaw",
            examples: [
              { target: "กิน<b>ข้าว</b>หรือยัง", english: "Have you eaten yet?" },
              { target: "ดิฉันชอบกิน<b>ข้าว</b>", english: "I like eating rice." },
              { target: "<b>ข้าว</b>นี้ร้อนมาก", english: "This rice is very hot." }
            ]
          },
          // Fruits & Légumes A1
          {
            id: "th_a1_3",
            word: "กล้วย",
            translation: "banana",
            icon: "🍌",
            phonetic: "glûay",
            examples: [
              { target: "ดิฉันชอบกิน<b>กล้วย</b>", english: "I like eating bananas." },
              { target: "<b>กล้วย</b>นี้หวานมาก", english: "This banana is very sweet." },
              { target: "ขอกล้วย<b>หอม</b>หนึ่งลูก", english: "One banana, please." }
            ]
          },
          {
            id: "th_a1_4",
            word: "แอปเปิ้ล",
            translation: "apple",
            icon: "🍎",
            phonetic: "æp-pə̂n",
            examples: [
              { target: "ดิฉันกิน<b>แอปเปิ้ล</b>สีแดง", english: "I eat a red apple." },
              { target: "<b>แอปเปิ้ล</b>นี้กรอบมาก", english: "This apple is very crunchy." },
              { target: "ซื้อ<b>แอปเปิ้ล</b>สามลูก", english: "Buy three apples." }
            ]
          },
          {
            id: "th_a1_5",
            word: "มะเขือเทศ",
            translation: "tomato",
            icon: "🍅",
            phonetic: "má-k͡hʉa-t͡hêet",
            examples: [
              { target: "<b>มะเขือเทศ</b>สีแดงสด", english: "The tomato is bright red." },
              { target: "ใส่<b>มะเขือเทศ</b>ในสลัด", english: "Put tomatoes in the salad." },
              { target: "ดิฉันชอบกิน<b>มะเขือเทศ</b>", english: "I like eating tomatoes." }
            ]
          },
          {
            id: "th_a1_6",
            word: "มะนาว",
            translation: "lime / lemon",
            icon: "🍋",
            phonetic: "má-naaw",
            examples: [
              { target: "<b>มะนาว</b>มีรสเปรี้ยว", english: "Limes have a sour taste." },
              { target: "ขอน้ำ<b>มะนาว</b>หนึ่งแก้ว", english: "One lime juice, please." },
              { target: "ใส่<b>มะนาว</b>ในต้มยำ", english: "Put lime in Tom Yum." }
            ]
          },
          {
            id: "th_a1_7",
            word: "แตงโม",
            translation: "watermelon",
            icon: "🍉",
            phonetic: "dtææng-moo",
            examples: [
              { target: "<b>แตงโม</b>หวานและเย็น", english: "Watermelon is sweet and cold." },
              { target: "ดิฉันชอบดื่มน้ำ<b>แตงโม</b>ปั่น", english: "I like drinking watermelon smoothies." },
              { target: "ซื้อ<b>แตงโม</b>หนึ่งลูก", english: "Buy one watermelon." }
            ]
          },
          {
            id: "th_a1_8",
            word: "มะม่วง",
            translation: "mango",
            icon: "🥭",
            phonetic: "má-mûang",
            examples: [
              { target: "<b>มะม่วง</b>สุกมีสีเหลือง", english: "Ripe mangoes are yellow." },
              { target: "ดิฉันชอบกินข้าวเหนียว<b>มะม่วง</b>", english: "I like eating mango sticky rice." },
              { target: "<b>มะม่วง</b>นี้หวานมาก", english: "This mango is very sweet." }
            ]
          },
          {
            id: "th_a1_9",
            word: "สับปะรด",
            translation: "pineapple",
            icon: "🍍",
            phonetic: "sàp-bpà-rót",
            examples: [
              { target: "<b>สับปะรด</b>นี้อร่อยมาก", english: "This pineapple is very delicious." },
              { target: "ดิฉันชอบกิน<b>สับปะรด</b>", english: "I like eating pineapple." },
              { target: "หั่น<b>สับปะรด</b>เป็นชิ้นๆ", english: "Cut the pineapple into pieces." }
            ]
          },
          {
            id: "th_a1_10",
            word: "ส้ม",
            translation: "orange",
            icon: "🍊",
            phonetic: "sôm",
            examples: [
              { target: "น้ำ<b>ส้ม</b>คั้นสดอร่อยมาก", english: "Fresh squeezed orange juice is delicious." },
              { target: "<b>ส้ม</b>นี้รสหวานเจี๊ยบ", english: "This orange is extremely sweet." },
              { target: "ซื้อ<b>ส้ม</b>หนึ่งกิโล", english: "Buy one kilo of oranges." }
            ]
          },
          {
            id: "th_a1_11",
            word: "กระเทียม",
            translation: "garlic",
            icon: "🧄",
            phonetic: "grà-t͡hīam",
            examples: [
              { target: "ใส่<b>กระเทียม</b>ในผัดผัก", english: "Put garlic in the stir-fried vegetables." },
              { target: "<b>กระเทียม</b>มีกลิ่นหอม", english: "Garlic smells good." },
              { target: "สับ<b>กระเทียม</b>ให้ละเอียด", english: "Mince the garlic finely." }
            ]
          },
          {
            id: "th_a1_12",
            word: "หอมหัวใหญ่",
            translation: "onion",
            icon: "🧅",
            phonetic: "hǒom-hǔa-yài",
            examples: [
              { target: "หั่น<b>หอมหัวใหญ่</b>แสบตา", english: "Cutting onions stings the eyes." },
              { target: "ใส่<b>หอมหัวใหญ่</b>ในซุป", english: "Put onion in the soup." },
              { target: "ดิฉันซื้อ<b>หอมหัวใหญ่</b>", english: "I buy onions." }
            ]
          },
          {
            id: "th_a1_13",
            word: "แครอท",
            translation: "carrot",
            icon: "🥕",
            phonetic: "kææ-rɔ́t",
            examples: [
              { target: "<b>แครอท</b>มีสีส้ม", english: "Carrots are orange." },
              { target: "กระต่ายชอบกิน<b>แครอท</b>", english: "Rabbits like eating carrots." },
              { target: "ใส่<b>แครอท</b>ในต้มจืด", english: "Put carrots in clear soup." }
            ]
          },
          {
            id: "th_a1_14",
            word: "แตงกวา",
            translation: "cucumber",
            icon: "🥒",
            phonetic: "dtææng-gwaa",
            examples: [
              { target: "กิน<b>แตงกวา</b>กับข้าวผัด", english: "Eat cucumbers with fried rice." },
              { target: "<b>แตงกวา</b>สดและกรอบ", english: "Cucumbers are fresh and crunchy." },
              { target: "หั่น<b>แตงกวา</b>เป็นแว่นๆ", english: "Slice the cucumber into rings." }
            ]
          },
          {
            id: "th_a1_15",
            word: "สตอเบอร์รี่",
            translation: "strawberry",
            icon: "🍓",
            phonetic: "sà-dtɔɔ-bəə-rîi",
            examples: [
              { target: "<b>สตอเบอร์รี่</b>ลูกนี้หวานมาก", english: "This strawberry is very sweet." },
              { target: "ดิฉันชอบไอศกรีม<b>สตอเบอร์รี่</b>", english: "I like strawberry ice cream." },
              { target: "ซื้อ<b>สตอเบอร์รี่</b>หนึ่งกล่อง", english: "Buy one box of strawberries." }
            ]
          }
        ]
      }
    },
    sentences: [
      {
        id: 201,
        english: "I eat rice.",
        correctOrder: ["ดิฉัน", "กิน", "ข้าว"],
        words: ["ข้าว", "ดื่ม", "ดิฉัน", "กิน", "กาแฟ"]
      },
      {
        id: 202,
        english: "I eat a banana.",
        correctOrder: ["ดิฉัน", "กิน", "กล้วย"],
        words: ["กล้วย", "ดื่ม", "ดิฉัน", "กิน", "น้ำ"]
      }
    ]
  }
};
