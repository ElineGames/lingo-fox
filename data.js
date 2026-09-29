const appData = {
  de: {
    name: "German",
    levels: {
      A1: {
        Food: [
          {
            id: "de_a1_1",
            word: "der Apfel",
            translation: "the apple",
            icon: "🍎",
            phonetic: "dɛːɐ̯ ˈapfəl",
            examples: [
              { target: "Ich esse <b>den Apfel</b>.", english: "I eat the apple." },
              { target: "<b>Der Apfel</b> ist rot.", english: "The apple is red." },
              { target: "Er kauft <b>einen Apfel</b>.", english: "He buys an apple." }
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
          }
        ],
        Travel: [
          {
            id: "de_a1_3",
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
      }
    ]
  },
  th: {
    name: "Thai",
    levels: {
      A1: {
        Food: [
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
      }
    ]
  }
};
