    input = document.getElementById('savedata');
    rawData = document.getElementById('decoded');
    dataList = document.getElementById('datalist');
    boldTitles = document.getElementById('boldtitles');
    compactMode = document.getElementById('compactmode');
    subbtn = document.getElementById('process');
    input.addEventListener('change', listData);
    boldTitles.addEventListener('change', listData);
    compactMode.addEventListener('change', listData);
    subbtn.addEventListener('click', listData);
        
	function listData(event) {
        event.preventDefault();
        dataList.value = '';
        
        decodeSave();
        rawData.value = atob(mstring);
        
        listAncients();
        listGildedheroes();
        listRelics();
        listMisc();
	}
	
	function listAncients() {
	var ancientsList = [];
	var maxList = [];
        var obj = data.ancients.ancients;
		
		 for (i in obj) {
		 var ancient = obj[i];
		 var level = ancient.level;
		 var id = ancient.id;
		 if (compactMode.checked){
		 	var ancientinfo = getAncientinfo(id,true);
		 }else{
		 	var ancientinfo = getAncientinfo(id,false);
		 }
		 var name = ancientinfo[0];
		 var maxlvl = ancientinfo[1];
		 if (maxlvl == 0){
		 ancientsList.push(name + '(' + level + ')');
		 }else{
		 if (maxlvl == level){
		 maxList.push(name);
		 }else{
		 ancientsList.push(name + '(' + level + ')');
		 }
		 }
		 
		 }
		 if (maxlvl.length > 0){
		 	if (boldTitles.checked){
		 		dataList.value += '**Ancients:**\r\n' + ancientsList + '\n\n';
		 	}else{
		 		dataList.value += 'Ancients:\r\n' + ancientsList + '\n\n';
		 	}
		 }else{
		 	if (boldTitles.checked){
		 		dataList.value += '**Ancients:**\r\n' + ancientsList.join(', ') + ';\r\nMaxed: ' + maxList.join(', ') + '\n\n';
		 	}else{
		 		dataList.value += 'Ancients:\r\n' + ancientsList.join(', ') + ';\r\nMaxed: ' + maxList.join(', ') + '\n\n';
		 	}
		 }
	}
	
	function listGildedheroes() {
        var gildedList = [];
        var obj = data.heroCollection.heroes;
		
		 for (i in obj) {
		 var hero = obj[i];
		 if (hero.epicLevel != '0') {
		 var level = hero.epicLevel;
		 var id = hero.id;
		 var name = getHeroname(id);
		 gildedList.push(name + '(' + level + ')');
		 }
		 }
		 
		 if (gildedList == '') {
		 dataList.value += 'None';
		 }else{
		 	if (boldTitles.checked){
		 		dataList.value += '**Gilded Heroes:**\r\n' + gildedList.join(', ') + '\n\n';
		 	}else{
		 		dataList.value += 'Gilded Heroes:\r\n' + gildedList.join(', ') + '\n\n';
		 	}
		 }
	}

    function listRelics() {
        var relicsList =[];
        var junkList = [];
        var obj = data.items.items;

        for (var i=1;i<=7;i++) {
            var relic = obj[data.items.slots[i]];
            if (relic){
            var rarity = getRarity(relic.rarity);
            var abilitesList = [];
            for(var j=1; j <= 4; j++)	{
            	var bonusType = relic['bonusType'+j.toString()];
            	var bonusLevel = relic['bonus'+j.toString()+'Level'];
            	if (bonusType !=0 && bonusType !=null){
            	abilityStat = getAbilityinfo(bonusType, bonusLevel);
            	abilitesList.push(abilityStat);
            	}
            }
            if (compactMode.checked){
            	if (i!=5){
            		relicsList.push(abilitesList.join(', '));
            	}else{
            		junkList.push(abilitesList.join(', '));
            	}
            }else{
            	if (i!=5){
            		relicsList.push(relic.name + ' (' + rarity + ' lvl ' + relic.level + ') : ' + abilitesList.join(', '));
            	}else{
            		junkList.push(relic.name + ' (' + rarity + ' lvl ' + relic.level + ') : ' + abilitesList.join(', '));
            	}
            }
        }
        }
		if (boldTitles.checked){
			dataList.value += '**Relics:**\r\n' + relicsList.join(';\r\n') + ';\r\nJunk Pile:\r\n' + junkList.join(';\r\n') + '\n\n';
		}else{
			dataList.value += 'Relics:\r\n' + relicsList.join(';\r\n') + ';\r\nJunk Pile:\r\n' + junkList.join(';\r\n') + '\n\n';
		}
    }
	
	function listMisc(){
	var relics = data.totalRelicsReceived;
	var rubies = data.rubies;
	var curzone = data.currentZoneHeight;
	var hze = data.highestFinishedZonePersist;
	var imdmg = data.titanDamage;
	var ascensions = data.numWorldResets;
	var therolvls = data.totalHeroLevels;
	var forgecores = data.items.salvagePoints;
	
	if (boldTitles.checked){
		var miscList = '**Misc:**\r\nRelics Received: ' + relics + ', Rubies Bal: ' + rubies + ', Forge Cores: ' + forgecores + ', Total Hero Levels: ' + therolvls + ', CZ: ' + curzone + ', HZE: ' + hze + ', Imm Dmg: ' + imdmg + ', Ascesions: ' + ascensions;
	}else{
		var miscList = 'Misc:\r\nRelics Received: ' + relics + ', Rubies Bal: ' + rubies + ', Forge Cores: ' + forgecores +  ', Total Hero Levels: ' + therolvls + ', CZ: ' + curzone + ', HZE: ' + hze + ', Imm Dmg: ' + imdmg + ', Ascesions: ' + ascensions;
	}
	dataList.value += miscList;
	}
