	function getAncientinfo(id,doCompact) {
	var name;
	var maxlvl = 0;
	if (id == '3') {
	name = 'Solomon';
	compname = 'Sol';
	}else if (id == '4') {
	name = 'Libertas';
	compname = 'Lib';
	}else if (id == '5') {
	name = 'Siyalatas';
	compname = 'Siya';
	}else if (id == '6') {
	name = 'Khrysos';
	compname = 'Khry';
	maxlvl = 10;
	}else if (id == '7') {
	name = 'Thusia';
	compname = 'Thus';
	}else if (id == '8') {
	name = 'Mammon';
	compname = 'Mamm';
	}else if (id == '9') {
	name = 'Mimzee';
	compname = 'Mimz';
	}else if (id == '10') {
	name = 'Pluto';
	compname = 'Plu';
	}else if (id == '11') {
	name = 'Dogcog';
	compname = 'Dog';
	maxlvl = 25;
	}else if (id == '12') {
	name = 'Fortuna';
	compname = 'Fort';
	maxlvl = 40;
	}else if (id == '13') {
	name = 'Atman';
	compname = 'Atm';
	maxlvl = 25;
	}else if (id == '14') {
	name = 'Dora';
	compname = name;
	maxlvl = 50;
	}else if (id == '15') {
	name = 'Bhaal';
	compname = 'Bha';
	}else if (id == '16') {
	name = 'Morgulis';
	compname = 'Morg';
	}else if (id == '17') {
	name = 'Chronos';
	compname = 'Chro';
	}else if (id == '18') {
	name = 'Bubos';
	compname = 'Bub';
	maxlvl = 25;
	}else if (id == '19') {
	name = 'Fragsworth';
	compname = 'Frag';
	}else if (id == '20') {
	name = 'Vaagur';
	compname = 'Vaag';
	maxlvl = 15;
	}else if (id == '21') {
	name = 'Kumawakamaru';
	compname = 'Kuma';
	maxlvl = 5;
	}else if (id == '22') {
	name = 'Chawedo';
	compname = 'Chaw';
	maxlvl = 30;
	}else if (id == '23') {
	name = 'Hecatoncheir';
	compname = 'Hec';
	maxlvl = 30;
	}else if (id == '24') {
	name = 'Berserker';
	compname = 'Bers';
	maxlvl = 30;
	}else if (id == '25') {
	name = 'Sniperino';
	compname = 'Snip';
	maxlvl = 30;
	}else if (id == '26') {
	name = 'Kleptos';
	compname = 'Klep';
	maxlvl = 30;
	}else if (id == '27') {
	name = 'Energon';
	compname = 'Ener';
	maxlvl = 30;
	}else if (id == '28') {
	name = 'Argaiv';
	compname = 'Arg';
	}else if (id == '29') {
	name = 'Juggernaut';
	compname = 'Jugg';
	}else if (id == '30') {
	name = 'Iris';
	compname = name;
	}else if (id == '31') {
	name = 'Revolc';
	compname = 'Rev';
	maxlvl = 15;
	}
	if (doCompact == true){
		return [compname,maxlvl];
	}else{
		return [name,maxlvl];
	}
	}
	
	function getHeroname(id) {
	var name;
	if (id == '1') {
	name = 'Cid';
	}else if (id == '2') {
	name = 'Treebeast';
	}else if (id == '3') {
	name = 'Ivan';
	}else if (id == '4') {
	name = 'Brittany';
	}else if (id == '5') {
	name = 'Fisherman';
	}else if (id == '6') {
	name = 'Betty';
	}else if (id == '7') {
	name = 'Samurai';
	}else if (id == '8') {
	name = 'Leon';
	}else if (id == '9') {
	name = 'Forest';
	}else if (id == '10') {
	name = 'Alexa';
	}else if (id == '11') {
	name = 'Natalia';
	}else if (id == '12') {
	name = 'Mercedes';
	}else if (id == '13') {
	name = 'Bobby';
	}else if (id == '14') {
	name = 'Broyle';
	}else if (id == '15') {
	name = 'George';
	}else if (id == '16') {
	name = 'Midas';
	}else if (id == '17') {
	name = 'Referi';
	}else if (id == '18') {
	name = 'Abaddon';
	}else if (id == '19') {
	name = 'Zhu';
	}else if (id == '20') {
	name = 'Amenhotep';
	}else if (id == '21') {
	name = 'Beastlord';
	}else if (id == '22') {
	name = 'Athena';
	}else if (id == '23') {
	name = 'Aphrodite';
	}else if (id == '24') {
	name = 'Shinatobe';
	}else if (id == '25') {
	name = 'Grant';
	}else if (id == '26') {
	name = 'Frostleaf';
	}else if (id == '27') {
	name = 'Dread';
	}else if (id == '28') {
	name = 'Atlas';
	}else if (id == '29') {
	name = 'Terra';
	}else if (id == '30') {
	name = 'Phthalo';
	}else if (id == '31') {
	name = 'Orntchya';
	}else if (id == '32') {
	name = 'Lilin';
	}else if (id == '33') {
	name = 'Cadmia';
	}else if (id == '34') {
	name = 'Alabaster';
	}else if (id == '35') {
	name = 'Astraea';
	}
	return(name);
	}
	
	function getRarity(id) {
	var rarity;
	if (id == '1') {
	rarity = 'common';
	} else if (id == '2') {
	rarity = 'Uncommon';
	} else if (id == '3') {
	rarity = 'Rare';
	} else if (id == '4') {
	rarity = 'Epic';
	} else if (id == '5') {
	rarity = 'Fabled';
	} else if (id == '6') {
	rarity = 'Mythical';
	} else if (id == '7') {
	rarity = 'Legendary';
	} else if (id == '8') {
	rarity = 'Transcendent';
	}
	return(rarity);
	}
	
	    function getAbilityinfo(type, level) {
        var abilityInfo = '';
        var abilityType = '';
        var abilityLevel;
        var symbol = '+';
        var multiplier = 1;
        var constval;
        var goldDroppedmutiplier = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 249, 273, 297, 321, 345, 369, 393, 417, 441, 465, 488, 511, 534, 557, 580, 603, 626, 649, 672, 695, 717, 739, 761, 783, 805, 827, 849, 871, 893, 915, 936, 957, 978, 999, 1020, 1041, 1062, 1083, 1104, 1125, 1145, 1165, 1185, 1205, 1225, 1245, 1265, 1285, 1305, 1325, 1344, 1363, 1382, 1401, 1420, 1439, 1458, 1477, 1496, 1515, 1533, 1551, 1569, 1587, 1605, 1623, 1641, 1659, 1677, 1695, 1712, 1729, 1746, 1763, 1780, 1797, 1814, 1831, 1848, 1865, 1881, 1897, 1913, 1929, 1945, 1961, 1977, 1993, 2009, 2025];
        if (type == '1') {
            multiplier = 10;
            abilityType = '% DPS when idle (no clicks for 60 seconds)';
        } else if (type == '2') {
            multiplier = 10;
            abilityType = '% click damage';
        } else if (type == '3') {
            multiplier = 5;
            abilityType = ' seconds to boss fight timers';
        } else if (type == '4') {
            abilityType = ' seconds to duration of clickstorm';
        } else if (type == '5') {
            abilityType = '% chance of double rubies from clickable treasures';
        } else if (type == '6') {
            abilityType = 'starting zone after ascension';
        } else if (type == '7') {
            abilityType = '% to gilded damage bonus';
        } else if (type == '8') {
            abilityType = ' seconds to duration of Metal Detector';
        } else if (type == '9') {
            multiplier = 15;
            abilityType = ' seconds to duration of Golden Clicks';
        } else if (type == '10') {
            abilityType = ' seconds to duration of Lucky Strikes';
        } else if (type == '11') {
            abilityType = ' seconds to duration of Powersurge';
        } else if (type == '12') {
            abilityType = ' seconds to duration of Superclicks';
        } else if (type == '13') {
            symbol = '-';
            abilityType = '% boss life';
        } else if (type == '14') {
            multiplier = '10';
            abilityType = '% to hero soul DPS (additive)';
        } else if (type == '15') {
            abilityType = '% DMG to Critical Clicks';
        } else if (type == '16') {
            multiplier = '25';
            abilityType = '% more treasure chests';
        } else if (type == '17') {
            abilityType = '% chance for primal bosses';
        } else if (type == '18') {
            multiplier = '0.25';
            abilityType = '% chance of 10*gold';
        } else if (type == '19') {
            symbol = '-';
            abilityType = '% hero hiring and level up cost';
        } else if (type == '20') {
            multiplier = '15';
            abilityType = '% gold from Golden Clicks';
        } else if (type == '21') {
            multiplier = '25';
            abilityType = '% gold from treasure chests';
        } else if (type == '22') {
            multiplier = '5';
            abilityType = '% gold dropped';
        } else if (type == '24') {
            multiplier = goldDroppedmutiplier[level];
            abilityType = '% gold gained from monsters when idle';
        } else if (type == '25') {
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
        }
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
