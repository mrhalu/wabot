  case 'tebakin': case 'tebakgambar':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://apibtf.herokuapp.com/api/kuis/tebakGambar?apikey=${btfkey}`)
    
    tebak = anu.image
    jawaban = anu.jawaban
    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
    console.log(`Jawaban ${command} = ${jawaban}`)
    tebakya = await getBuffer(tebak)
    btf.sendMessage(from, tebakya, image, { quoted: mek, caption: "πππππ πππ πππππ ππππ  ππππππ" })
    await sleep(120000)
    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli}) // ur c
  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
    }
    gameAdd(sender,glimit)
    break
case 'caklontong':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/caklontong?apikey=BETA`)
    tebakya = anu.soal
    tebak = `π πΏππππππ’πππ : ${tebakya}\nβ° : 1 πΌππππ`
    jawaban = anu.jawaban
    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
    console.log(`Jawaban ${command} = ${jawaban}`)
    btf.sendMessage(from, tebak ,text, { quoted: troli })
    await sleep(120000)
    if (cakbtf.hasOwnProperty(sender.split('@')[0])) {
    btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli}) // ur cods
  			delete cakbtf[sender.split('@')[0]]
  fs.writeFileSync("./database/game/cakbtf.json", JSON.stringify(cakbtf))
    }
    gameAdd(sender,glimit)
    break
case 'family100':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (family.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/family100?apikey=BETA`)
    tebakya = anu.soal
    tebak = `π πΏππππππ’πππ : ${tebakya}\nβ° : 1 πΌππππ`
    jawaban = anu.jawaban
    family[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/family100.json", JSON.stringify(family))
    console.log(`Jawaban ${command} = ${jawaban}`)
    btf.sendMessage(from, tebak ,text, { quoted: troli })
     await sleep(120000)
    if (family.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli})
  delete family[sender.split('@')[0]]
  fs.writeFileSync("./database/game/family100.json", JSON.stringify(family))
    }
    gameAdd(sender,glimit)
    break
case 'tebakanime':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
    tebak = anu.soal
    jawaban = anu.jawaban
    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
    console.log(`Jawaban ${command} = ${jawaban}`)
    tebakya = await getBuffer(tebak)
   
    btf.sendMessage(from, tebakya, image, { quoted: mek, caption: "πΉππ ππππ πππππ π°πππ ππππ ππππππ" })
    await sleep(120000)
    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli})
  delete tebakanime[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
    }
    gameAdd(sender,glimit)
    break
case 'cakbtf':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (cakbtf.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://apibtf.herokuapp.com/api/kuis/caklontong?apikey=${btfkey}`)
    tebakya = anu.result.soal
    tebak = `π πΏππππππ’πππ : ${tebakya}\nβ° : 1 πΌππππ`
    jawaban = anu.result.jawaban
    elak =  anu.result.deskripsi
    
    cakbtf[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/cakbtf.json", JSON.stringify(cakbtf))
    console.log(`Jawaban ${command} = ${jawaban}`)
    btf.sendMessage(from, tebak ,text, { quoted: troli })
    
    await sleep(120000)
    if (cakbtf.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\n π³πππ :' + elak +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli}) // 
  delete cakbtf[sender.split('@')[0]]
  fs.writeFileSync("./database/game/cakbtf.json", JSON.stringify(cakbtf))
    }
    gameAdd(sender,glimit)
    break
    
case 'asahotak':
   if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
   if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://apidhani.herokuapp.com/api/game/asahotak?apikey=${dhakey}`)
    tebakya = anu.result.soal
    tebak = `π πΏππππππ’πππ : ${tebakya}\nβ° : 1 πΌππππ`
    jawaban = anu.result.jawaban    
    asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(asahotak))
    console.log(`Jawaban ${command} = ${jawaban}`)
    btf.sendMessage(from, tebak ,text, { quoted: troli })
    await sleep(120000)
    if (asahotak.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli})
  delete asahotak[sender.split('@')[0]]
  fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(asahotak))
    }
    gameAdd(sender,glimit)
    break

case 'siapaaku':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (siapaaku.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://apidhani.herokuapp.com/api/game/siapakahaku?apikey=${dhakey}`)
    tebakya = anu.result.soal
    tebak = `π πΏππππππ’πππ : ${tebakya}\nβ° : 1 πΌππππ`
    jawaban = anu.result.jawaban
    siapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/siapaaku.json", JSON.stringify(siapaaku))
    console.log(`Jawaban ${command} = ${jawaban}`)
    btf.sendMessage(from, tebak ,text, { quoted: troli })
   await sleep(120000)
    if (siapaaku.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli})
  delete siapaaku[sender.split('@')[0]]
  fs.writeFileSync("./database/game/siapaaku.json", JSON.stringify(siapaaku))
    }
    gameAdd(sender,glimit)
    break
    
    
    
case 'susunkata':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (susun.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://apidhani.herokuapp.com/api/game/susunkata?apikey=${dhakey}`)
    tebakya = anu.result.soal
    tipe = anu.result.tipe
    tebak = `π πΏππππππ’πππ :  ${tebakya}\nβ»οΈ ππππ : ${tipe}\nβ° πππππ : 1 πππππ`
    jawaban = anu.result.jawaban
    susun[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/susun.json", JSON.stringify(susun))
    console.log(`Jawaban ${command} = ${jawaban}`)
    btf.sendMessage(from, tebak ,text, { quoted: troli })
   await sleep(120000)
    if (susun.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli})
  delete susun[sender.split('@')[0]]
  fs.writeFileSync("./database/game/susun.json", JSON.stringify(susun))
    }
    gameAdd(sender,glimit)
    break  
    
    
case 'tekateki':
  if(isGame(sender,isOwner,gcount,glimit)) return reply(mess.glimit)
  if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("*πΌππππ π°ππ πππππππππ π’πππ πππππππππππ*")
    anu = await fetchJson(`https://apidhani.herokuapp.com/api/game/tekateki?apikey=${dhakey}`)
    tebakya = anu.result.soal
  
    tebak = `π πΏππππππ’πππ :  ${tebakya}\nβ° πππππ : 1 πππππ`
    jawaban = anu.result.jawaban
    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
    fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(tekateki))
    console.log(`Jawaban ${command} = ${jawaban}`)
    btf.sendMessage(from, tebak ,text, { quoted: troli })
   await sleep(120000)
    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
  btf.sendMessage(from, "β° πππππ πππππππππ πππππ πππππ β°" + '\n\n' +"*π₯ πΉππ ππππ :*"  + '' + '_'+ jawaban +'_' +' \n\nπΆπππ πππ ππ ππππ', text, {quoted: troli})
  delete tekateki[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(tekateki))
    }
    gameAdd(sender,glimit)
    break    
    
    
    
    
    

    

 //π΅πΈπππ ππ½πππΊ π½ππ΄ππ°π· πΆπ°πΌπ΄
 case 'cakbtfnyerah':
  if (cakbtf.hasOwnProperty(sender.split('@')[0]) && isCmd) {
  jawaban = cakbtf[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
  delete cakbtf[sender.split('@')[0]]
  fs.writeFileSync("./database/game/cakbtf.json", JSON.stringify(cakbtf))
    }
    break
   
    
case 'gambarnyerah':
  if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && isCmd) {
  jawaban = tebakgambar[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
    }
    break   
     
case 'lontongnyerah':
  if (caklontong.hasOwnProperty(sender.split('@')[0]) && isCmd) {
  jawaban = caklontong[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
  delete caklontong[sender.split('@')[0]]
  fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
    }
    break   
  
case 'animenyerah':
  if (tebakanime.hasOwnProperty(sender.split('@')[0]) && isCmd) {
  jawaban = tebakanime[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
  delete tebakanime[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
    }
    break   
     
case 'siapaakunyerah':
if (siapaaku.hasOwnProperty(sender.split('@')[0])) {
     jawaban = siapaaku[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
     delete siapaaku[sender.split('@')[0]]
     fs.writeFileSync("./database/game/siapaaku.json", JSON.stringify(siapaaku))
     }
  break   
  

case 'asahnyerah':    
 if (asahotak.hasOwnProperty(sender.split('@')[0])) {
jawaban = asahotak[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
delete asahotak[sender.split('@')[0]]
fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(asahotak))
  }
   break     

case'familynyerah':   
if (family.hasOwnProperty(sender.split('@')[0])) {
jawaban = family[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
  delete family[sender.split('@')[0]]
  fs.writeFileSync("./database/game/family100.json", JSON.stringify(family))
    }
    break  
    
  
case  'susunnyerah':
if (susun.hasOwnProperty(sender.split('@')[0])) {
jawaban = susun[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
  delete susun[sender.split('@')[0]]
  fs.writeFileSync("./database/game/susun.json", JSON.stringify(susun))
    }
    break   
  
    
case  'tekatekinyerah':
if (tekateki.hasOwnProperty(sender.split('@')[0])) {
jawaban = tekateki[sender.split('@')[0]]
  reply("πΊπππππ  ππππ  ππππ ππππ  ππππ πππ  ππ πππ \n\nπΉππ ππππ: " + jawaban)
  delete tekateki[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(tekateki))
    }
    break  
  