	function getInfo(type,id,level,doCompact) {
	var maxlvl = 0;
	var multiplier = 1;
	var constval;
	var goldDroppedmutiplier = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 249, 273, 297, 321, 345, 369, 393, 417, 441, 465, 488, 511, 534, 557, 580, 603, 626, 649, 672, 695, 717, 739, 761, 783, 805, 827, 849, 871, 893, 915, 936, 957, 978, 999, 1020, 1041, 1062, 1083, 1104, 1125, 1145, 1165, 1185, 1205, 1225, 1245, 1265, 1285, 1305, 1325, 1344, 1363, 1382, 1401, 1420, 1439, 1458, 1477, 1496, 1515, 1533, 1551, 1569, 1587, 1605, 1623, 1641, 1659, 1677, 1695, 1712, 1729, 1746, 1763, 1780, 1797, 1814, 1831, 1848, 1865, 1881, 1897, 1913, 1929, 1945, 1961, 1977, 1993, 2009, 2025];
	var symbol = '+';
	var abilityType; var rarity; var heroname; var cheroname; var ancname; var cancname; var abilityLevel; var abilityInfo;
    
	if (id == '1'){
	multiplier = 10;
	abilityType = '% DPS when idle (no clicks for 60 seconds)';
	rarity = 'Common';
	heroname = 'Cid, the Helpful Adventurer';
	cheroname = 'Cid';
	}else if (id == '2'){
	multiplier = 10;
	abilityType = '% click damage';
	rarity = 'Uncommon';
	heroname = 'Treebeast';
	cheroname = 'TB';
	}else if (id == '3') {
	multiplier = 5;
	abilityType = ' seconds to boss fight timers';
	rarity = 'Rare';
	heroname = 'Ivan, the Drunken Brawler';
	cheroname = 'Ivan';
	ancname = 'Solomon';
	cancname = 'Sol';
	}else if (id == '4') {
	abilityType = ' seconds to duration of clickstorm';
	rarity = 'Epic';
	heroname = 'Brittany, Beach Princess';
	cheroname = 'Brit';
	ancname = 'Libertas';
	cancname = 'Lib';
	}else if (id == '5') {
	abilityType = '% chance of double rubies from clickable treasures';
	rarity = 'Fabled';
	heroname = 'The Wandering Fisherman';
	cheroname = 'Fisher';
	ancname = 'Siyalatas';
	cancname = 'Siya';
	}else if (id == '6') {
	abilityType = 'starting zone after ascension';
	rarity = 'Mythical';
	heroname = 'Betty Clicker';
	cheroname = 'Betty';
	ancname = 'Khrysos';
	cancname = 'Khry';
	maxlvl = 10;
	}else if (id == '7') {
	abilityType = '% to gilded damage bonus';
	rarity = 'Legendary';
	heroname = 'The Masked Samurai';
	cheroname = 'Sam';
	ancname = 'Thusia';
	cancname = 'Thus';
	}else if (id == '8') {
	abilityType = ' seconds to duration of Metal Detector';
	rarity = 'Transcendent';
	heroname = cheroname = 'Leon';
	ancname = 'Mammon';
	cancname = 'Mamm';
	}else if (id == '9') {
	abilityType = ' seconds to duration of Golden Clicks';
	heroname = 'The Great Forest Seer';
	cheroname = 'Seer';
	ancname = 'Mimzee';
	cancname = 'Mimz';
	}else if (id == '10') {
	abilityType = ' seconds to duration of Lucky Strikes';
	heroname = 'Alexa, Assassin';
	cheroname = 'Alex';
	ancname = 'Pluto';
	cancname = 'Plu';
	}else if (id == '11') {
	abilityType = ' seconds to duration of Powersurge';
	heroname = 'Natalia, Ice Apprentice';
	cheroname = 'Nat';
	ancname = 'Dogcog';
	cancname = 'Dog';
	maxlvl = 25;
	}else if (id == '12') {
	abilityType = ' seconds to duration of Superclicks';
	heroname = 'Mercedes, Duchess of Blades';
	cheroname = 'Merc';
	ancname = 'Fortuna';
	cancname = 'Fort';
	maxlvl = 40;
	}else if (id == '13') {
	symbol = '-';
	abilityType = '% boss life';
	heroname = 'Bobby, Bounty Hunter';
	cheroname = 'Bob';
	ancname = 'Atman';
	cancname = 'Atm';
	maxlvl = 25;
	}else if (id == '14') {
	multiplier = '10';
	abilityType = '% to hero soul DPS (additive)';
	heroname = 'Broyle Lindeoven, Fire Mage';
	cheroname = 'Broyle';
	ancname = cancname = 'Dora';
	maxlvl = 50;
	}else if (id == '15') {
	abilityType = '% DMG to Critical Clicks';
	heroname = 'Sir George II, King\'s Guard';
	cheroname = 'George';
	ancname = 'Bhaal';
	cancname = 'Bha';
	}else if (id == '16') {
	multiplier = '25';
	abilityType = '% more treasure chests';
	heroname = 'King Midas';
	cheroname = 'Midas';
	ancname = 'Morgulis';
	cancname = 'Morg';
	}else if (id == '17') {
	abilityType = '% chance for primal bosses';
	heroname = 'Referi Jerator, Ice Wizard';
	cheroname = 'Referi';
	ancname = 'Chronos';
	cancname = 'Chro';
	}else if (id == '18') {
	multiplier = '0.25';
	abilityType = '% chance of 10*gold';
	heroname = cheroname = 'Abaddon';
	ancname = 'Bubos';
	cancname = 'Bub';
	maxlvl = 25;
	}else if (id == '19') {
	symbol = '-';
	abilityType = '% hero hiring and level up cost';
	heroname = 'Ma Zhu';
	cheroname = 'Zhu';
	ancname = 'Fragsworth';
	cancname = 'Frag';
	}else if (id == '20') {
	multiplier = '15';
	abilityType = '% gold from Golden Clicks';
	heroname = 'Amenhotep';
	cheroname = 'Amen';
	ancname = 'Vaagur';
	cancname = 'Vaag';
	maxlvl = 15;
	}else if (id == '21') {
	multiplier = '25';
	abilityType = '% gold from treasure chests';
	heroname = 'Beastlord';
	cheroname = 'Beast';
	ancname = 'Kumawakamaru';
	cancname = 'Kuma';
	maxlvl = 5;
	}else if (id == '22') {
	multiplier = '5';
	abilityType = '% gold dropped';
	heroname = 'Athena, Goddess of War';
	cheroname = 'Athena';
	ancname = 'Chawedo';
	cancname = 'Chaw';
	maxlvl = 30;
	}else if (id == '23') {
	heroname = 'Aphrodite, Goddess of Love';
	cheroname = 'Aphro';
	ancname = 'Hecatoncheir';
	cancname = 'Hec';
	maxlvl = 30;
	}else if (id == '24') {
	multiplier = goldDroppedmutiplier[level];
	abilityType = '% gold gained from monsters when idle';
	heroname = 'Shinatobe, Wind Deity';
	cheroname = 'Shina';
	ancname = 'Berserker';
	cancname = 'Bers';
	maxlvl = 30;
	}else if (id == '25') {
	    if (level > 0 && level < 21) {
                multiplier = 5;
                constval = 0;
	    } else if (level > 20 && level < 41) {
                multiplier = 4;
                constval = 20;
	    } else if (level > 40 && level < 61) {
                multiplier = 3;
                constval = 60;
	    } else if (level > 60 && level < 81) {
                multiplier = 2;
                constval = 120;
	    } else if (level > 80) {
                multiplier = 1;
                constval = 200;
	    }
	abilityType = '% primal hero souls';
	heroname = 'Grant, The General';
	cheroname = 'Grant';
	ancname = 'Sniperino';
	cancname = 'Snip';
	maxlvl = 30;
	}else if (id == '26') {
	heroname = 'Frostleaf';
	cheroname = 'Frost';
	ancname = 'Kleptos';
	cancname = 'Klep';
	maxlvl = 30;
	}else if (id == '27') {
	heroname = 'Dread Knight';
	cheroname = 'DK';
	ancname = 'Energon';
	cancname = 'Ener';
	maxlvl = 30;
	}else if (id == '28') {
	heroname = cheroname = 'Atlas';
	ancname = 'Argaiv';
	cancname = 'Arg';
	}else if (id == '29') {
	heroname = cheroname = 'Terra';
	ancname = 'Juggernaut';
	cancname = 'Jugg';
	}else if (id == '30') {
	heroname = cheroname = 'Phthalo';
	ancname = cancname = 'Iris';
	}else if (id == '31') {
	heroname = 'Orntchya Gladeye, Didensy Banana';
	cheroname = 'Banana';
	ancname = 'Revolc';
	cancname = 'Rev';
	maxlvl = 15;
	}else if (id == '32') {
	heroname = cheroname = 'Lilin';
	}else if (id == '33') {
	heroname = cheroname = 'Cadmia';
	}else if (id == '34') {
	heroname = cheroname = 'Alabaster';
	}else if (id == '35') {
	heroname = cheroname = 'Astraea';
	}
		
	if (type == 'ancient'){
		if (doCompact === true){
		return [cancname,maxlvl];
		}else{
		return [ancname,maxlvl];
		}
	}else if (type == 'hero'){
		if (doCompact === true){
		return (cheroname);
		}else{
		return (heroname);
		}
	}else if (type == 'rarity'){
		return (rarity);
	}else if (type == 'ability'){
        if (type == '25') {
            abilityLevel = constval + (level * multiplier);
        } else if (type == '24') {
            abilityLevel = multiplier;
        } else {
            abilityLevel = level * multiplier;
        }
        abilityInfo = symbol + abilityLevel + abilityType;
        return (abilityInfo);
	}
	
	}
