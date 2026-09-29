// VOCAB: DATA[lang][level][category] = {i:icon, w:[[word, pronunciation, english, icon, [[sentence, english] x3]]]}
// In sentences, put *stars* around the word to show it in bold. Thai sentences: separate words with spaces.
// To add words: copy a line, edit it. To use an image instead of an emoji: put "apple.png" as icon (file in the img/ folder).
const DATA={
de:{A1:{
'Food & drink':{i:'🍎',w:[
['der Apfel','AP-fel','apple','🍎',[['Ich esse einen *Apfel*.','I eat an apple.'],['Der *Apfel* ist rot.','The apple is red.'],['Möchtest du einen *Apfel*?','Would you like an apple?']]],
['das Brot','broht','bread','🍞',[['Ich kaufe *Brot*.','I buy bread.'],['Das *Brot* ist frisch.','The bread is fresh.'],['Er isst *Brot* mit Butter.','He eats bread with butter.']]],
['das Wasser','VAH-ser','water','💧',[['Ich trinke *Wasser*.','I drink water.'],['Das *Wasser* ist kalt.','The water is cold.'],['Ein *Wasser*, bitte!','A water, please!']]],
['essen','ESS-en','to eat','🍽️',[['Wir *essen* Brot.','We eat bread.'],['Ich möchte jetzt *essen*.','I want to eat now.'],['Was *esst* ihr?','What do you (pl.) eat?']]],
['trinken','TRINK-en','to drink','🥤',[['Ich *trinke* Kaffee.','I drink coffee.'],['Du *trinkst* Wasser.','You drink water.'],['Wir möchten *trinken*.','We want to drink.']]]]},
'Travel':{i:'🚆',w:[
['der Zug','tsook','train','🚆',[['Der *Zug* ist schnell.','The train is fast.'],['Ich nehme den *Zug*.','I take the train.'],['Wo ist der *Zug*?','Where is the train?']]],
['der Bahnhof','BAHN-hohf','train station','🚉',[['Der *Bahnhof* ist groß.','The station is big.'],['Ich bin am *Bahnhof*.','I am at the station.'],['Wo ist der *Bahnhof*?','Where is the station?']]],
['die Fahrkarte','FAR-kar-tuh','ticket','🎫',[['Ich brauche eine *Fahrkarte*.','I need a ticket.'],['Die *Fahrkarte* kostet zehn Euro.','The ticket costs ten euros.'],['Hast du die *Fahrkarte*?','Do you have the ticket?']]],
['fahren','FAH-ren','to go (by vehicle)','🚗',[['Wir *fahren* nach Berlin.','We are going to Berlin.'],['Ich *fahre* mit dem Zug.','I go by train.'],['Wann *fährst* du?','When are you leaving?']]]]}}},
th:{A1:{
'Food & drink':{i:'🍚',w:[
['ข้าว','kâao','rice','🍚',[['ฉัน กิน *ข้าว*','I eat rice.'],['*ข้าว* อร่อย','The rice is tasty.'],['ขอ *ข้าว* ค่ะ','Rice, please. (female)']]],
['น้ำ','náam','water','💧',[['ฉัน ดื่ม *น้ำ*','I drink water.'],['*น้ำ* เย็น','The water is cold.'],['ขอ *น้ำ* ครับ','Water, please. (male)']]],
['กิน','gin','to eat','🍽️',[['ฉัน *กิน* ข้าว','I eat rice.'],['คุณ *กิน* อะไร','What do you eat?'],['เรา *กิน* ผลไม้','We eat fruit.']]],
['ผลไม้','pǒn-la-máai','fruit','🍎',[['ฉัน ชอบ *ผลไม้*','I like fruit.'],['*ผลไม้* หวาน','The fruit is sweet.'],['ขอ *ผลไม้* ค่ะ','Fruit, please. (female)']]]]},
'Travel':{i:'🚆',w:[
['รถไฟ','rót-fai','train','🚆',[['*รถไฟ* เร็ว','The train is fast.'],['ฉัน นั่ง *รถไฟ*','I ride the train.'],['*รถไฟ* อยู่ ที่ไหน','Where is the train?']]],
['ตั๋ว','dtǔa','ticket','🎫',[['ฉัน ซื้อ *ตั๋ว*','I buy a ticket.'],['*ตั๋ว* ราคา เท่าไหร่','How much is the ticket?'],['ขอ *ตั๋ว* ครับ','A ticket, please. (male)']]],
['ไป','bpai','to go','🚗',[['ฉัน *ไป* กรุงเทพ','I go to Bangkok.'],['คุณ *ไป* ไหน','Where are you going?'],['เรา *ไป* สถานี','We go to the station.']]]]}}}};
