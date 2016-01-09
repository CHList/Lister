    var input = document.getElementById('savedata');
    var dataList = document.getElementById('datalist');
    var boldTitles = document.getElementById('boldtitles');
    var compactMode = document.getElementById('compactmode');
    var subbtn = document.getElementById('process');
    input.addEventListener('change', listData);
    boldTitles.addEventListener('change', listData);
    compactMode.addEventListener('change', listData);
    subbtn.addEventListener('click', listData);

    function listData(event) {
    	event.preventDefault();
    	dataList.value = '';

    	decodeSave();

    	listAncients();
    	listGildedheroes();
    	listRelics();
    	listMisc();
    }

    function listAncients() {
    	var ancientsList = [];
    	var maxList = [];
    	var obj = data.ancients.ancients;

    	for (var i in obj) {
    		var ancient = obj[i];
    		var level = ancient.level;
    		var id = ancient.id;
    		if (compactMode.checked) {
    			ancientinfo = getInfo('ancient', id, 0, true);
    		} else {
    			ancientinfo = getInfo('ancient', id, 0, false);
    		}
    		var name = ancientinfo[0];
    		var maxlvl = ancientinfo[1];
    		if (maxlvl === 0) {
    			ancientsList.push(name + '(' + level + ')');
    		} else {
    			if (maxlvl == level) {
    				maxList.push(name);
    			} else {
    				ancientsList.push(name + '(' + level + ')');
    			}
    		}

    	}
    	if (boldTitles.checked) {
    		dataList.value += '**Ancients:** ';
    	} else {
    		dataList.value += 'Ancients: ';
    	}
    	if (ancientsList.length <= 0 && maxList.length <= 0) {
    		dataList.value += 'None\n\n';
    	} else {

    		if (maxList.length <= 0) {

    			dataList.value += (ancientsList.sort()).join(', ') + '\n\n';
    		} else {

    			dataList.value += (ancientsList.sort()).join(', ') + ';\n\nMaxed: ' + (maxList.sort()).join(', ') + '\n\n';

    		}
    	}
    }

    function listGildedheroes() {
    	var gildedList = [];
    	var obj = data.heroCollection.heroes;

    	for (var i in obj) {
    		var hero = obj[i];
    		if (hero.epicLevel != '0') {
    			var level = hero.epicLevel;
    			var id = hero.id;
    			if (compactMode.checked) {
    				name = getInfo('hero', id, 0, true);
    			} else {
    				name = getInfo('hero', id, 0, false);
    			}
    			gildedList.push(name + '(' + level + ')');
    		}
    	}
    	if (boldTitles.checked) {
    		dataList.value += '**Gilded Heroes:** ';
    	} else {
    		dataList.value += 'Gilded Heroes: ';
    	}
    	if (gildedList.length <= 0) {
    		dataList.value += 'None\n\n';
    	} else {
    		dataList.value += gildedList.join(', ') + '\n\n';
    	}
    }

    function listRelics() {
    	var relicsList = [];
    	var junkList = [];
    	var obj = data.items.items;

    	for (var i = 1; i <= 7; i += 1) {
    		var relic = obj[data.items.slots[i]];
    		if (relic) {
    			var rarity = getInfo('rarity', relic.rarity, 0, false);
    			var abilitesList = [];
    			for (var j = 1; j <= 4; j += 1) {
    				var bonusType = relic['bonusType' + j.toString()];
    				var bonusLevel = relic['bonus' + j.toString() + 'Level'];
    				if (bonusType !== 0 && bonusType !== null) {
    					var abilityStat = getInfo('ability', bonusType, bonusLevel, false);
    					abilitesList.push(abilityStat);
    				}
    			}
    			if (compactMode.checked) {
    				if (i != 5) {
    					relicsList.push(abilitesList.join(', '));
    				} else {
    					junkList.push(abilitesList.join(', '));
    				}
    			} else {
    				if (i != 5) {
    					relicsList.push(relic.name + ' (' + rarity + ' lvl ' + relic.level + ') : ' + abilitesList.join(', '));
    				} else {
    					junkList.push(relic.name + ' (' + rarity + ' lvl ' + relic.level + ') : ' + abilitesList.join(', '));
    				}
    			}
    		}
    	}
    	if (boldTitles.checked) {
    		dataList.value += '**Relics:**\n\n';
    	} else {
    		dataList.value += 'Relics:\n\n';
    	}
    	if (relicsList.length <= 0 && junkList.length <= 0) {
    		dataList.value += 'None\n\n';
    	} else {
    		if (junkList.length <= 0) {
    			dataList.value += relicsList.join(';\n\n') +'\n\n';
    		} else {
    			dataList.value += relicsList.join(';\n\n') + ';\n\nJunk Pile:\n\n' + junkList.join(';\n\n') + '\n\n';
    		}
    	}

    }

    function listMisc() {
    	var relics = data.totalRelicsReceived;
    	var rubies = data.rubies;
    	var curzone = data.currentZoneHeight;
    	var hze = data.highestFinishedZonePersist;
    	var imdmg = data.titanDamage;
    	var ascensions = data.numWorldResets;
    	var therolvls = data.totalHeroLevels;
    	var forgecores = data.items.salvagePoints;
    	var alltimeSouls = 0;
    	alltimeSouls += data.heroSouls+data.ancients.rerollSoulsSpent;
    	var obj = data.ancients.ancients;

    	for (var i in obj) {
    		var ancient = obj[i];
    		alltimeSouls += ancient.spentHeroSouls;
    	}
    	
    	var miscList ='';
    	if (boldTitles.checked) {
    		miscList = '**Misc:** All time hero souls: ' + alltimeSouls +', Relics Received: ' + relics + ', Rubies Bal: ' + rubies + ', Forge Cores: ' + forgecores + ', Total Hero Levels: ' + therolvls + ', CZ: ' + curzone + ', HZE: ' + hze + ', Imm Dmg: ' + imdmg + ', Ascesions: ' + ascensions;
    	} else {
    		miscList = 'Misc: All time hero souls: ' + alltimeSouls +', Relics Received: ' + relics + ', Rubies Bal: ' + rubies + ', Forge Cores: ' + forgecores + ', Total Hero Levels: ' + therolvls + ', CZ: ' + curzone + ', HZE: ' + hze + ', Imm Dmg: ' + imdmg + ', Ascesions: ' + ascensions;
    	}
    	dataList.value += miscList;
    }
