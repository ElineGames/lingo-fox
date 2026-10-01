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
   image: "🍎",
    examples: [
  { target: "Ich esse den Apfel.", english: "I eat the apple." },
  { target: "Der Apfel ist rot.", english: "The apple is red." },
  { target: "Er kauft einen Apfel.", english: "He buys an apple." }
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
(function(){
  const R = `
Food & Groceries|🧀|Cheese|der Käse|ชีส|chîis
Food & Groceries|🥦|Vegetable|das Gemüse|ผัก|phàk
Food & Groceries|🥚|Egg|das Ei|ไข่|khài
Food & Groceries|🍚|Rice|der Reis|ข้าว|khâao
Questions to Ask|💶|How much does this cost?|Wie viel kostet das?|ราคาเท่าไหร่|raa-khaa thâo-ràai
Questions to Ask|🍏|Do you have organic apples?|Haben Sie Bio-Äpfel?|คุณมีแอปเปิ้ลออร์แกนิกไหม|khun mii âep-pîn ɔɔ-gà-nik măi
Questions to Ask|💳|Can I pay by card?|Kann ich mit Karte bezahlen?|จ่ายด้วยบัตรได้ไหม|jàai dûuy bàt dâai măi
Questions to Ask|🧾|Where is the checkout?|Wo ist die Kasse?|แคชเชียร์อยู่ไหน|kháet-chîia yùu năi
Common Phrases|🛍️|I would like a bag, please.|Ich hätte gerne eine Tasche, bitte.|ขอถุงหน่อยครับ/ค่ะ|khǒo thǔng nɔ̀y kráp/khâ
Common Phrases|🧾|Do you need a receipt?|Brauchen Sie einen Kassenbon?|รับใบเสร็จไหม|ráp bai-sèt măi
Common Phrases|🌿|Everything is fresh.|Alles ist frisch.|ทุกอย่างสดมาก|thúk yàang sòt mâak
Common Phrases|⏳|Just a moment, please.|Einen Moment, bitte.|รอสักครู่ครับ/ค่ะ|rɔɔ sàk-khrûu kráp/khâ
Verbs & Actions|💳|To pay|bezahlen|จ่ายเงิน|jàai ngern|I pay for the milk.~Ich bezahle die Milch.~ฉัน จ่าย ค่า นม~chǎn jàai khâa nom|Can I pay by card?~Kann ich mit Karte bezahlen?~จ่าย ด้วย บัตร ได้ ไหม~jàai dûuy bàt dâai măi|He pays at the checkout.~Er bezahlt an der Kasse.~เขา จ่ายเงิน ที่ แคชเชียร์~khao jàai ngern thîi kháet-chîia
Verbs & Actions|🔍|To look for|suchen|หา|hǎa|I am looking for cheese.~Ich suche Käse.~ฉัน หา ชีส~chǎn hǎa chîis|What are you looking for?~Was suchst du?~คุณ หา อะไร~khun hǎa à-rai|She is looking for the organic apples.~Sie sucht die Bio-Äpfel.~เธอ กำลัง หา แอปเปิ้ล ออร์แกนิก~thoe gam-lang hǎa âep-pîn ɔɔ-gà-nik
Verbs & Actions|🤲|To give|geben*|ให้|hâi|Give me a bag, please.~Gib mir bitte eine Tasche.~ขอ ถุง ให้ ฉัน หน่อย~khǒo thǔng hâi chǎn nɔ̀y|The cashier gives me the receipt.~Die Kasse gibt mir den Kassenbon.~แคชเชียร์ ให้ ใบเสร็จ ฉัน~kháet-chîia hâi bai-sèt chǎn|Do you give discounts?|Geben Sie Rabatte?|คุณให้ส่วนลดไหม|khun hâi sùan-lót măi
Verbs & Actions|🛒|To buy|kaufen|ซื้อ|súu|I buy fresh vegetables.~Ich kaufe frisches Gemüse.~ฉัน ซื้อ ผัก สด~chǎn súu phàk sòt|Where can I buy rice?~Wo kann ich Reis kaufen?|ฉัน จะ ซื้อ ข้าว ได้ ที่ไหน~chǎn jà-súu khâao dâai thîi năi|She buys an apple.~Sie kauft einen Apfel.~เธอ ซื้อ แอปเปิ้ล~thoe súu âep-pîn
Verbs & Actions|🍽️|To eat|essen*|กิน|gin|I eat an apple.~Ich esse einen Apfel.~ฉัน ทาน แอปเปิ้ล~chǎn thaan âep-pîn|Do you eat cheese?~Isst du Käse?~คุณ กิน ชีส ไหม~khun gin chîis măi|We eat bread for breakfast.~Wir essen Brot zum Frühstück.~พวกเรา กิน ขนมปัง เป็น มื้อเช้า~phûak-rao gin khà-nŏm-bpang bpen mûu cháao
Verbs & Actions|🥤|To drink|trinken*|ดื่ม|dùum|I drink water.~Ich trinke Wasser.~ฉัน ดื่ม น้ำ~chǎn dùum náam|Do you want to drink milk?~Möchtest du Milch trinken?|คุณ อยาก ดื่ม นม ไหม~khun yàak dùum nom măi|He drinks cold water.~Er trinkt kaltes Wasser.~เขา ดื่ม น้ำ เย็น~khao dùum náam yen
Verbs & Actions|🏷️|To cost|kosten|ราคา|raa-khaa|How much does this cost?~Wie viel kostet das?|ราคา เท่าไหร่~raa-khaa thâo-ràai|The apple costs one euro.~Der Apfel kostet einen Euro.~แอปเปิ้ล ราคา หนึ่ง ยูโร~âep-pîn raa-khaa nèung yuu-ro|Everything costs ten euros.~Alles kostet zehn Euro.~ทุกอย่าง ราคา สิบ ยูโร~thúk yàang raa-khaa sìp yuu-ro
Verbs & Actions|❗|To need|brauchen|ต้องการ|tông-kaan|I need a bag.~Ich brauche eine Tasche.~ฉัน ต้องการ ถุง~chǎn tông-kaan thǔng|Do you need a receipt?~Brauchen Sie einen Kassenbon?|คุณ ต้องการ ใบเสร็จ ไหม~khun tông-kaan bai-sèt măi|She needs fresh milk.~Sie braucht frische Milch.~เธอ ต้องการ นม สด~thoe tông-kaan nom sòt
Verbs & Actions|🧺|To have|haben*|มี|mii|Do you have organic apples?|Haben Sie Bio-Äpfel?|คุณมีแอปเปิ้ลออร์แกนิกไหม|khun mii âep-pîn ɔɔ-gà-nik măi|I have a card.~Ich habe eine Karte.~ฉัน มี บัตร~chǎn mii bàt|He has no money.~Er hat kein Geld.~เขา ไม่ มี เงิน~khao mâi mii ngern
Verbs & Actions|🔎|To find|finden*|หาเจอ|hǎa jur|Where can I find the milk?|Wo finde ich die Milch?|จะ หา นม ได้ ที่ไหน|jà hǎa nom dâai thîi năi|I found the rice.~Ich habe den Reis gefunden.~ฉัน เจอ ข้าว แล้ว~chǎn jur khâao lɛ́ɛo|Do you find the supermarket?~Findest du den Supermarkt?|คุณ หา ซุปเปอร์มาร์เก็ต เจอ ไหม~khun hǎa súp-pəə-mâa-gét jur măi
Verbs & Actions|✋|To take|nehmen*|เอา|ao|I will take this bag.~Ich nehme diese Tasche.~ฉัน เอา ถุง นี้~chǎn ao thǔng níi|Take your receipt, please.~Nehmen Sie bitte den Kassenbon.~กรุณา รับ ใบเสร็จ ด้วย~gà-rú-naa ráp bai-sèt dûuy|She takes an apple.~Sie nimmt einen Apfel.~เธอ หยิบ แอปเปิ้ล~thoe yìp âep-pîn
Verbs & Actions|🏪|To sell|verkaufen|ขาย|khǎai|Do you sell organic food?|Verkaufen Sie Bio-Produkte?|คุณ ขาย สินค้า ออร์แกนิก ไหม|khun khǎai sǐn-kháa ɔɔ-gà-nik măi|They sell fresh fish.~Sie verkaufen frischen Fisch.~พวกเขา ขาย ปลา สด~phûak-khao khǎai bplaa sòt|I want to sell this.~Ich möchte das verkaufen.~ฉัน อยาก ขาย สิ่ง นี้~chǎn yàak khǎai sìn níi
Verbs & Actions|🚪|To open|öffnen|เปิด|pèrt|The supermarket opens at 8 AM.~Der Supermarkt öffnet um 8 Uhr.~ซุปเปอร์มาร์เก็ต เปิด ตอน แปด โมง~súp-pəə-mâa-gét pèrt dɔɔn bpàet moong|Open the door, please.~Öffnen Sie bitte die Tür.~กรุณา เปิด ประตู ด้วย~gà-rú-naa pèrt bprà-tuu dûuy|When do you open?|Wann öffnen Sie?|คุณ เปิด กี่ โมง~khun pèrt gìi moong
Verbs & Actions|🔒|To close|schließen*|ปิด|bpìt|The shop closes soon.~Der Laden schließt bald.~ร้าน ใกล้ ปิด แล้ว~ráan glâi bpìt lɛ́ɛo|Close the bag, please.~Schließen Sie die Tasche, bitte.~กรุณา ปิด กระเป๋า ด้วย~gà-rú-naa bpìt grà-pǎo dûuy|We close at 10 PM.~Wir schließen um 22 Uhr.~พวกเรา ปิด ตอน สี่ ทุ่ม~phûak-rao bpìt dɔɔn sìi thûm
Verbs & Actions|🙋|To ask|fragen|ถาม|thǎam|May I ask a question?|Darf ich etwas fragen?|ขอ ถาม หน่อย ได้ ไหม|khǒo thǎam nɔ̀y dâai măi|The customer asks the cashier.~Der Kunde fragt die Kasse.~ลูกค้า ถาม แคชเชียร์~lûuk-kháa thǎam kháet-chîia|Ask for the price, please.~Fragen Sie nach dem Preis, bitte.~กรุณา ถาม ราคา~gà-rú-naa thǎam raa-khaa
Verbs & Actions|⏳|To wait|warten|รอ|rɔɔ|Wait a moment, please.~Warten Sie einen Moment, bitte.~รอ สัก ครู่ ครับ~rɔɔ sàk-khrûu kráp|I am waiting for the change.~Ich warte auf das Rückgeld.~ฉัน รอ เงิน ทอน~chǎn rɔɔ ngern thɔɔn|She waits at the checkout.~Sie wartet an der Kasse.~เธอ รอ ที่ แคชเชียร์~thoe rɔɔ thîi kháet-chîia
Verbs & Actions|👀|To look / watch|schauen|มอง / ดู|moong / duu|Look at this apple!|Schau dir diesen Apfel an!|ดู แอปเปิ้ล นี่ สิ~duu âep-pîn nîi sì|I am just looking around.~Ich schaue mich nur um.~ฉัน แค่ เดิน ดู รอบๆ~chǎn khɛ̂ɛ dəən duu rɔ̂ɔp-rɔ̂ɔp|Look at the prices.~Schauen Sie auf die Preise.~ดู ราคา สิ~duu raa-khaa sì
Verbs & Actions|👉|To choose|wählen|เลือก|lûaek|Choose your favorite fruit.~Wählen Sie Ihr Lieblingsobst.~เลือก ผลไม้ ที่ คุณ ชอบ~lûaek phŏn-lá-mái thîi khun chɔ̂ɔp|I choose the fresh bread.~Ich wähle das frische Brot.~ฉัน เลือก ขนมปัง สด~chǎn lûaek khà-nŏm-bpang sòt|Have you chosen?|Haben Sie gewählt?|คุณ เลือก หรือ ยัง~khun lûaek rʉ̌u yang
Verbs & Actions|😋|To try|probieren|ลอง|lɔɔng|May I try a piece?|Darf ich ein Stück probieren?|ขอ ชิม หน่อย ได้ ไหม|khǒo chim nɔ̀y dâai măi|Try this cheese.~Probieren Sie diesen Käse.~ลอง ชิม ชีส นี้ ดู~lɔɔng chim chîis níi duu|I want to try new food.~Ich möchte neues Essen probieren.~ฉัน อยาก ลอง อาหาร ใหม่~chǎn yàak lɔɔng aa-hǎan mài
Verbs & Actions|🆘|To help|helfen*|ช่วยเหลือ|chûuay lʉ̌a|Can you help me?|Können Sie mir helfen?|ช่วย ฉัน หน่อย ได้ ไหม~chûuay chǎn nɔ̀y dâai măi|I can help you.~Ich kann Ihnen helfen.~ฉัน ช่วย คุณ ได้~chǎn chûuay khun dâai|The employee helps the customer.~Der Mitarbeiter hilft dem Kunden.~พนักงาน ช่วย ลูกค้า~phá-nák-ngaan chûuay lûuk-kháa
  `.trim().split('\n');

  const have = l => new Set(Object.values(appData[l].levels).flatMap(c => Object.values(c).flat()).map(w => w.word));
  
  R.forEach((r, i) => {
    const [c, ic, en, de, th, rom, ...ex] = r.split('|');
    ['de', 'th'].forEach(l => {
      const L = appData[l].levels.A1;
      const word = l == 'de' ? de : th;
      if (!L[c]) L[c] = [];
      if (have(l).has(word)) return;
      L[c].push({
        id: 'sm' + i + l,
        word,
        phonetic: l == 'th' ? rom : '',
        translation: en,
        icon: ic,
        examples: ex.map(e => {
          const [ee, dd, tt, rr] = e.split('~');
          return l == 'de' ? { target: dd, english: ee } : { target: tt, english: ee + ' (' + rr + ')' };
        })
      });
    });
  });
})();
