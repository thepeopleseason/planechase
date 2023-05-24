/* Copyright 2014-2023 James Hsiao */

var eternity = {
  "planes": {
    "opca-1-chaotic-aether.png": { "name": "Chaotic Aether", "type": "phenomenon", },
    "opca-2-interplanar-tunnel.png": { "name": "Interplanar Tunnel", "type": "phenomenon",
                                       "link": "load", },
    "opca-3-morphic-tide.png": { "name": "Morphic Tide", "type": "phenomenon", },
    "opca-4-mutual-epiphany.png": { "name": "Mutual Epiphany", "type": "phenomenon", },
    "opca-5-planewide-disaster.png": { "name": "Planewide Disaster", "type": "phenomenon", },
    "opca-6-reality-shaping.png": { "name": "Reality Shaping", "type": "phenomenon", },
    "opca-7-spatial-merging.png": { "name": "Spatial Merging", "type": "phenomenon",
                                    "link": "merged", },
    "opca-8-time-distortion.png": { "name": "Time Distortion", "type": "phenomenon", },
    "opca-9-academy-at-tolaria-west.png": { "name": "Academy At Tolaria West", "type": "plane", },
    "opca-10-the-aether-flues.png": { "name": "The Aether Flues", "type": "plane", },
    "opca-11-agyrem.png": { "name": "Agyrem", "type": "plane", },
    "opca-12-akoum.png": { "name": "Akoum", "type": "plane", },
    "opca-13-aretopolis.png": { "name": "Aretopolis", "counter": 1, "type": "plane", },
    "opca-14-astral-arena.png": { "name": "Astral Arena", "type": "plane", },
    "opca-15-bant.png": { "name": "Bant", "type": "plane", },
    "opca-16-bloodhill-bastion.png": { "name": "Bloodhill Bastion", "type": "plane", },
    "opca-17-celestine-reef.png": { "name": "Celestine Reef", "type": "plane", },
    "opca-18-cliffside-market.png": { "name": "Cliffside Market", "type": "plane", },
    "opca-19-the-dark-barony.png": { "name": "The Dark Barony", "type": "plane", },
    "opca-20-edge-of-malacol.png": { "name": "Edge of Malacol", "type": "plane", },
    "opca-21-eloren-wilds.png": { "name": "Eloren Wilds", "type": "plane", },
    "opca-22-the-eon-fog.png": { "name": "The Eon Fog", "type": "plane", },
    "opca-23-feeding-grounds.png": { "name": "Feeding Grounds", "type": "plane", },
    "opca-24-fields-of-summer.png": { "name": "Fields of Summer", "type": "plane", },
    "opca-25-the-fourth-sphere.png": { "name": "The Fourth Sphere", "type": "plane", },
    "opca-26-furnace-layer.png": { "name": "Furnace Layer", "type": "plane", },
    "opca-27-gavony.png": { "name": "Gavony", "type": "plane", },
    "opca-28-glen-elendra.png": { "name": "Glen Elendra", "type": "plane", },
    "opca-29-glimmervoid-basin.png": { "name": "Glimmervoid Basin", "type": "plane", },
    "opca-30-goldmeadow.png": { "name": "Goldmeadow", "type": "plane", },
    "opca-31-grand-ossuary.png": { "name": "Grand Ossuary", "type": "plane", },
    "opca-32-the-great-forest.png": { "name": "The Great Forest", "type": "plane", },
    "opca-33-grixis.png": { "name": "Grixis", "type": "plane", },
    "opca-34-grove-of-the-dreampods.png": { "name": "Grove of The Dreampods", "type": "plane", },
    "opca-35-hedron-fields-of-agadeem.png": { "name": "Hedron Fields of Agadeem",
                                              "type": "plane", },
    "opca-36-the-hippodrome.png": { "name": "The Hippodrome", "type": "plane", },
    "opca-37-horizon-boughs.png": { "name": "Horizon Boughs", "type": "plane", },
    "opca-38-immersturm.png": { "name": "Immersturm", "type": "plane", },
    "opca-39-isle-of-vesuva.png": { "name": "Isle of Vesuva", "type": "plane", },
    "opca-40-izzet-steam-maze.png": { "name": "Izzet Steam Maze", "type": "plane", },
    "opca-41-jund.png": { "name": "Jund", "type": "plane", },
    "opca-42-kessig.png": { "name": "Kessig", "type": "plane", },
    "opca-43-kharasha-foothills.png": { "name": "Kharasha Foothills", "type": "plane", },
    "opca-44-kilnspire-district.png": { "name": "Kilnspire District", "counter": 1,
                                        "type": "plane", },
    "opca-45-krosa.png": { "name": "Krosa", "type": "plane", },
    "opca-46-lair-of-the-ashen-idol.png": { "name": "Lair of The Ashen Idol", "type": "plane", },
    "opca-47-lethe-lake.png": { "name": "Lethe Lake", "type": "plane", },
    "opca-48-llanowar.png": { "name": "Llanowar", "type": "plane", },
    "opca-49-the-maelstrom.png": { "name": "The Maelstrom", "type": "plane", },
    "opca-50-minamo.png": { "name": "Minamo", "type": "plane", },
    "opca-51-mirrored-depths.png": { "name": "Mirrored Depths", "type": "plane", },
    "opca-52-mount-keralia.png": { "name": "Mount Keralia", "counter": 0, "type": "plane", },
    "opca-53-murasa.png": { "name": "Murasa", "type": "plane", },
    "opca-54-naar-isle.png": { "name": "Naar Isle", "counter": 0, "type": "plane", },
    "opca-55-naya.png": { "name": "Naya", "type": "plane", },
    "opca-56-nephalia.png": { "name": "Nephalia", "type": "plane", },
    "opca-57-norn-s-dominion.png": { "name": "Norn's Dominion", "type": "plane", },
    "opca-58-onakke-catacomb.png": { "name": "Onakke Catacomb", "type": "plane", },
    "opca-59-orochi-colony.png": { "name": "Orochi Colony", "type": "plane", },
    "opca-60-orzhova.png": { "name": "Orzhova", "type": "plane", },
    "opca-61-otaria.png": { "name": "Otaria", "type": "plane", },
    "opca-62-panopticon.png": { "name": "Panopticon", "type": "plane", },
    "opca-63-pools-of-becoming.png": { "name": "Pools of Becoming", "type": "plane", },
    "opca-64-prahv.png": { "name": "Prahv", "type": "plane", },
    "opca-65-quicksilver-sea.png": { "name": "Quicksilver Sea", "type": "plane", },
    "opca-66-raven-s-run.png": { "name": "Raven's Run", "type": "plane", },
    "opca-67-sanctum-of-serra.png": { "name": "Sanctum of Serra", "type": "plane", },
    "opca-68-sea-of-sand.png": { "name": "Sea of Sand", "type": "plane", },
    "opca-69-selesnya-loft-gardens.png": { "name": "Selesnya Loft Gardens", "type": "plane", },
    "opca-70-shiv.png": { "name": "Shiv", "type": "plane", },
    "opca-71-skybreen.png": { "name": "Skybreen", "type": "plane", },
    "opca-72-sokenzan.png": { "name": "Sokenzan", "type": "plane", },
    "opca-73-stairs-to-infinity.png": { "name": "Stairs To Infinity", "type": "plane", },
    "opca-74-stensia.png": { "name": "Stensia", "type": "plane", },
    "opca-75-stronghold-furnace.png": { "name": "Stronghold Furnace", "type": "plane", },
    "opca-76-takenuma.png": { "name": "Takenuma", "type": "plane", },
    "opca-77-talon-gates.png": { "name": "Talon Gates", "type": "plane", },
    "opca-78-tazeem.png": { "name": "Tazeem", "type": "plane", },
    "opca-79-tember-city.png": { "name": "Tember City", "type": "plane", },
    "opca-80-trail-of-the-mage-rings.png": { "name": "Trail of The Mage Rings", "type": "plane", },
    "opca-81-truga-jungle.png": { "name": "Truga Jungle", "type": "plane", },
    "opca-82-turri-island.png": { "name": "Turri Island", "type": "plane", },
    "opca-83-undercity-reaches.png": { "name": "Undercity Reaches", "type": "plane", },
    "opca-84-velis-vel.png": { "name": "Velis Vel", "type": "plane", },
    "opca-85-windriddle-palaces.png": { "name": "Windriddle Palaces", "type": "plane", },
    "opca-86-the-zephyr-maze.png": { "name": "The Zephyr Maze", "type": "plane", },
    "moc-47-the-caldaia.png": { "name": "The Caldaia", "type": "plane", },
    "moc-48-enigma-ridges.png": { "name": "Enigma Ridges", "type": "plane", },
    "moc-49-esper.png": { "name": "Esper", "type": "plane", },
    "moc-50-the-fertile-lands-of-saulvinia.png": { "name": "The Fertile Lands of Saulvinia", "type": "plane", },
    "moc-51-ghirapur.png": { "name": "Ghirapur", "type": "plane", },
    "moc-52-the-golden-city-of-orazca.png": { "name": "The Golden City of Orazca", "type": "plane", },
    "moc-53-the-great-aerie.png": { "name": "The Great Aerie", "type": "plane", },
    "moc-54-inys-haen.png": { "name": "Inys Haen", "type": "plane", },
    "moc-55-ketria.png": { "name": "Ketria", "type": "plane", },
    "moc-56-littiara.png": { "name": "Littjara", "type": "plane", },
    "moc-57-megaflora-jungle.png": { "name": "Megaflora Jungle", "type": "plane", },
    "moc-58-naktamun.png": { "name": "Naktamun", "type": "plane", },
    "moc-59-new-argive.png": { "name": "New Argive", "type": "plane", },
    "moc-60-norn-s-seedcore.png": { "name": "Norn's Seedcore", "type": "plane", },
    "moc-61-nyx.png": { "name": "Nyx", "type": "plane", },
    "moc-62-paliano.png": { "name": "Paliano", "type": "plane", },
    "moc-63-the-pit.png": { "name": "The Pit", "type": "plane", },
    "moc-64-riptide-island.png": { "name": "Riptide Island", "type": "plane", },
    "moc-65-strixhaven.png": { "name": "Strixhaven", "type": "plane", },
    "moc-66-ten-wizards-mountain.png": { "name": "Ten Wizards Mountain", "type": "plane", },
    "moc-67-towashi.png": { "name": "Towashi", "type": "plane", },
    "moc-68-unyaro.png": { "name": "Unyaro", "type": "plane", },
    "moc-69-valor-s-reach.png": { "name": "Valor's Reach", "type": "plane", },
    "moc-70-the-western-cloud.png": { "name": "The Western Cloud", "type": "plane", },
    "moc-71-the-wilds.png": { "name": "The Wilds", "type": "plane", },
    "who-588-the-lux-foundation-library.png": { "name": "The Lux Foundation Library", "type": "plane", }
  },
  "custom_planes": {
    "multiverse-01-the-academy-of-paliano.jpeg": { "name": "The Academy of Paliano (Multiverse)", "type": "plane", },
    "multiverse-02-accelerated-potentiality.jpeg": { "name": "Accelerated Potentiality (Multiverse)", "type": "phenomenon", },
    "multiverse-03-akros.jpeg": { "name": "Akros (Multiverse)", "type": "plane", },
    "multiverse-04-arashin.jpeg": { "name": "Arashin (Multiverse)", "type": "plane", },
    "multiverse-05-ayagor.jpeg": { "name": "Ayagor (Multiverse)", "type": "plane", },
    "multiverse-06-bala-ged.jpeg": { "name": "Bala Ged (Multiverse)", "type": "plane", },
    "multiverse-07-bunarat.jpeg": { "name": "Bunarat (Multiverse)", "type": "plane", },
    "multiverse-08-cori-mountain-stronghold.jpeg": { "name": "Cori Mountain Stronghold (Multiverse)", "type": "plane", },
    "multiverse-09-the-desert-lands.jpeg": { "name": "The Desert Lands (Multiverse)", "type": "plane", },
    "multiverse-10-the-dungeon-labyrinth.jpeg": { "name": "The Dungeon Labyrinth (Multiverse)", "type": "plane", },
    "multiverse-11-the-forgotten-district.jpeg": { "name": "The Forgotten District (Multiverse)", "type": "plane", },
    "multiverse-12-fracturing-echo.jpeg": { "name": "Fracturing Echo (Multiverse)", "type": "phenomenon", },
    "multiverse-13-gauntlet-of-naktamun.jpeg": { "name": "Gauntlet of Naktamun (Multiverse)", "type": "plane", },
    "multiverse-14-ghirapur.jpeg": { "name": "Ghirapur (Multiverse)", "type": "plane", },
    "multiverse-15-the-great-river.jpeg": { "name": "The Great River (Multiverse)", "type": "plane", },
    "multiverse-16-high-and-dry.jpeg": { "name": "High and Dry (Multiverse)", "type": "plane", },
    "multiverse-17-the-high-city-of-paliano.jpeg": { "name": "The High City of Paliano (Multiverse)", "type": "plane", },
    "multiverse-18-kapsho-seas.jpeg": { "name": "Kapsho Seas (Multiverse)", "type": "plane", },
    "multiverse-19-lathnu.jpeg": { "name": "Lathnu (Multiverse)", "type": "plane", },
    "multiverse-20-lesh.jpeg": { "name": "Lesh (Multiverse)", "type": "plane", },
    "multiverse-21-the-luxa-river.jpeg": { "name": "The Luxa River (Multiverse)", "type": "plane", },
    "multiverse-22-maelstrom-perfusion.jpeg": { "name": "Maelstrom Perfusion (Multiverse)", "type": "phenomenon", },
    "multiverse-23-marang-river-fortress.jpeg": { "name": "Marang River Fortress (Multiverse)", "type": "plane", },
    "multiverse-24-meletis.jpeg": { "name": "Meletis (Multiverse)", "type": "plane", },
    "multiverse-25-nyx.jpeg": { "name": "Nyx (Multiverse)", "type": "plane", },
    "multiverse-26-the-obelisk-path.jpeg": { "name": "The Obelisk Path (Multiverse)", "type": "plane", },
    "multiverse-27-orazca.jpeg": { "name": "Orazca (Multiverse)", "type": "plane", },
    "multiverse-28-pachatupa.jpeg": { "name": "Pachatupa (Multiverse)", "type": "plane", },
    "multiverse-29-peema.jpeg": { "name": "Peema (Multiverse)", "type": "plane", },
    "multiverse-30-queen-s-bay.jpeg": { "name": "Queen's-Bay (Multiverse)", "type": "plane", },
    "multiverse-31-screamreach.jpeg": { "name": "Screamreach (Multiverse)", "type": "plane", },
    "multiverse-32-setessa.jpeg": { "name": "Setessa (Multiverse)", "type": "plane", },
    "multiverse-33-the-silver-moon.jpeg": { "name": "The Silver Moon (Multiverse)", "type": "plane", },
    "multiverse-34-skep.jpeg": { "name": "Skep (Multiverse)", "type": "plane", },
    "multiverse-35-temporal-interruption.jpeg": { "name": "Temporal Interruption (Multiverse)", "type": "phenomenon", },
    "multiverse-36-thieves--quarter.jpeg": { "name": "Thieves' Quarter (Multiverse)", "type": "plane", },
    "multiverse-37-towabara.jpeg": { "name": "Towabara (Multiverse)", "type": "plane", },
    "multiverse-38-trest.jpeg": { "name": "Trest (Multiverse)", "type": "plane", },
    "multiverse-39-the-underworld.jpeg": { "name": "The Underworld (Multiverse)", "type": "plane", },
    "multiverse-40-vahd.jpeg": { "name": "Vahd (Multiverse)", "type": "plane", },
    "digitalmayhemx-ghirapur.jpeg": { "name": "Ghirapur (digitalmayhemx)", "type": "plane" },
    "digitalmayhemx-naktamun.jpeg": { "name": "Naktamun (digitalmayhemx)", "type": "plane" },
    "digitalmayhemx-orazca.jpeg": { "name": "Orazca (digitalmayhemx)", "type": "plane" },
    "digitalmayhemx-scorching-sands.jpeg": {"name": "Scorching Sands (digitalmayhemx)", "type": "plane" },
  },
  "cells": [
    "0_3", "-1_2", "0_2", "1_2", "-2_1", "-1_1", "0_1", "1_1", "2_1",
    "-3_0", "-2_0", "-1_0", "0_0", "1_0", "2_0", "3_0", "-2_-1", "-1_-1",
    "0_-1", "1_-1", "2_-1", "-1_-2", "0_-2", "1_-2", "0_-3"
  ],
  "chaotic_aether": 0,
  "counters": {},
  "custom": false,
  "current": [],
  "deck": [],
  "map": {},
  "names": {},
  "realmbreaker": [],
  "screenLock": null,
  "sorted": [],
  "selected_planes": [],
  "urlParams": {},
};

function get_sorted_planes() {
  if (eternity.custom || $('#options #custom')[0].checked) {
    eternity.names = { ...eternity.planes, ...eternity.custom_planes };
  }
  else {
    eternity.names = eternity.planes;
  }
  eternity.sorted = Object.keys(eternity.names).sort((a, b) => (eternity.names[a].name < eternity.names[b].name) ? -1 : (eternity.names[a].name > eternity.names[b].name) ? 1 : 0 );
}

function div_toggle(div="#chaos") {
  $(div).toggle();
  $('#plane_div').toggle();
}

function show_counters() {
  let output = '';
  $.each(eternity.counters, function(k, v) {
    if (k == undefined) { return; }
    output += eternity.names[k].name + ": " + eternity.counters[k] + "<br/>";
  });
  if (output.length) {
    help(output);
  }
}

function roll() {
  // Planeswalk on button re-press. Skip if you're mapping
  if ($('#dice_button')[0].value == 'Planeswalk' && !Object.keys(eternity.map).length) {
    $('#dice_button')[0].value = "Roll Planar Die";
    if (!eternity.urlParams.get('manual')) {
      walk();
    }
  }
  else {
    let result = 0;
    let diceroll = Math.round(Math.random()*5);

    // 0-3: blank roll / 4: chaos / 5: planeswalk
    result = (diceroll == 5) ? diceroll :
      (eternity.chaotic_aether) ? 4 : diceroll;

    let dice_result;
    switch (result) {
    case 4:
      dice_result = "Chaos";
      break;
    case 5:
      dice_result = "Planeswalk";
      break;
    default:
      dice_result = "Roll Planar Die";
      break;
    }
    $('#dice_button')[0].value = dice_result;
    if (dice_result === 'Planeswalk') {
      // reset_cost();
      console.log("planeswalk");
    }
    else {
      $('#cost_button')[0].value = parseInt($('#cost_button')[0].value) + 1;
      if (dice_result === 'Chaos') {
        let output = '';
        let img = '';
        if (eternity.current.includes('opca-63-pools-of-becoming.png')) {
          next_planes = eternity.deck.splice(0, 3);
          for (pl in next_planes) {
            output += get_html(next_planes[pl], 50, 'div_toggle', '#chaos');
            if (next_planes[pl] == 'moc-60-norn-s-seedcore.png' || next_planes[pl] == 'moc-50-the-fertile-lands-of-saulvinia.png') {
              let chaosplane = get_next_planes()
              output += get_html(chaosplane, 50, 'div_toggle', '#chaos');
            }
            // TODO: add handling for stairs to infinity
          }
          eternity.deck = eternity.deck.concat(next_planes);
          $("#chaos").html(output);
          div_toggle("#chaos");
        }
        if (eternity.current.includes('opca-73-stairs-to-infinity.png')) {
          let scry = eternity.deck[0];
          output += get_html(scry, 60, 'scry');
          $("#chaos").html(output);
          div_toggle("#chaos");
        }
        if (eternity.current.includes('moc-50-the-fertile-lands-of-saulvinia.png')) {
          let scry = get_next_planes();
          output += get_html(scry, 60, 'scry', 'false');
          $("#chaos").html(output);
          div_toggle("#chaos");
        }
        if (eternity.current.includes('moc-60-norn-s-seedcore.png')) {
          seedcore_chaos();
        }
      }
      if ($('#chaos').html().length) {
        $('#toggle_chaos').show();
      }
      else {
        $('#toggle_chaos').hide();
      }
    }
  }
}

function seedcore_chaos() {
  let output = '';
  let pl = get_next_planes();
  let div_output = '#plane_div';
  eternity.realmbreaker.push(pl);
  if (typeof eternity.names[pl].counter != 'undefined' && !eternity.counters[pl]) {
    eternity.counters[pl] = eternity.names[pl].counter;
  }
  $.each(eternity.realmbreaker, function(index) {
    output += get_html(eternity.realmbreaker[index], 40);
  });
  $(div_output).html(output);
  clean(pl);
}

function scry(confirm_move=true) {
  if (confirm_move == 'false') {
    eternity.deck.push(eternity.deck.shift());
  }
  else {
    if (confirm("Move this plane to the bottom of the planar deck?")) {
      eternity.deck.push(eternity.deck.shift());
    }
  }
  div_toggle("#chaos");
}

function clean(plane) {
  let index = eternity.deck.indexOf(plane);
  if (index !== -1) {
    return eternity.deck.splice(index, 1);  // remove plane from deck
  }
}

function walk(plane=null, aether=false) {
  var walkto = [];

  reset_plane(aether);
  if (plane) {
    walkto.push(plane);
    clean(plane);
  }
  else {
    if (eternity.deck.length == 0) {
      init_deck();
    }
    walkto.push(eternity.deck.shift());

    // encountered a phenomenon
    if (eternity.names[walkto[walkto.length-1]].type === "phenomenon") {
      if (walkto[walkto.length-1] == 'opca-2-interplanar-tunnel.png') {
        walkto = walkto.concat(get_next_planes(5));  // Interplanar Tunnel (choose from 5 planes)
        shuffle_deck();
      }
      else if (walkto[walkto.length-1] == 'opca-7-spatial-merging.png') {
        walkto = walkto.concat(get_next_planes(2));  // Spatial Merging (merge 2 planes)
        walkto.forEach(pl => clean(pl));
      }
      else if (walkto[walkto.length-1] == 'opca-1-chaotic-aether.png') { // Chaotic Aether
        eternity.chaotic_aether = 1;
      }
    }

    // Norn's seedcore
    if (walkto[walkto.length-1] == 'moc-60-norn-s-seedcore.png') {
      walkto = walkto.concat(get_next_planes());  // Norn's Seedcore (merge planes on chaos roll)
      eternity.realmbreaker = walkto;
      walkto.forEach(pl => clean(pl));
    }
    else {
      eternity.realmbreaker = [];
    }
  }

  let output = '';
  let size = (walkto.length > 1) ? 50 : 80;
  for (pl in walkto) {
    if (walkto.indexOf('opca-2-interplanar-tunnel.png') >= 0) {
      output += get_html(walkto[pl], size, 'walk', walkto[pl]);
    }
    else if (walkto[pl] === 'opca-1-chaotic-aether.png') {
      output += get_html(walkto[pl], size, 'walk', get_next_planes());
    }
    else {
      output += get_html(walkto[pl], size);
    }

    if (typeof eternity.names[walkto[pl]].counter != 'undefined') {
      eternity.counters[walkto[pl]] = eternity.names[walkto[pl]].counter;
      $('#count_button')[0].value = eternity.counters[walkto[pl]];
    }
    else {
      $('#count_button')[0].value = '---';
    }
  }
  eternity.current = walkto;
  $("#plane_div").html(output);
}

function get_next_planes(count=1, exclude=[]) {
  // BUG: should go through next planes
  var planes = eternity.deck.filter(function(pl) {
    return eternity.names[pl].type === 'plane' && !exclude.includes(pl);
  });
  if (count > 1) {
    return planes.slice(0, count);
  }
  else {
    return planes[0];
  }
}

function get_link(plane) {
  var link = ' onclick="walk();"';
  if (eternity.names[plane].type === "phenomenon") {
    switch (plane) {
    case 'opca-2-interplanar-tunnel.png':
    case 'opca-7-spatial-merging.png':
      link = '';
      break;
    }
  }
  else if (typeof eternity.names[plane].counter != 'undefined') {
    link = ` onclick="add_counter('${ plane }');"`;
  }
  else {
    link = ' onclick="walk();"';
  }
  return link;
}

function add_counter(plane) {
  $('#count_button')[0].value = ++eternity.counters[plane];
}

function reset_cost() {
  $('#cost_button')[0].value = 0;
}

function reset_plane(aether=false) {
  $('#dice_button')[0].value = 'Roll Planar Die';
  if (eternity.current[0] == 'moc-60-norn-s-seedcore.png') {
    $.each(eternity.realmbreaker, function(i) {
      if (eternity.counters[eternity.realmbreaker[i]] > -1) {
        eternity.counters[eternity.realmbreaker[i]] = 0;
      }
    });
  }
  if (!Object.keys(eternity.map).length && eternity.counters[eternity.current[0]] > -1) {
    eternity.counters[eternity.current[0]] = 0;
  }
  if (!aether && eternity.chaotic_aether) {
    eternity.chaotic_aether = 0;
  }
  $("#chaos").html('');
  $('#toggle_chaos').hide();
}

function help(text=get_help()) {
  $("#help").html(text);
  $("#help").dialog();
}

function init_deck() {
  get_selected_planes();
  eternity.deck = eternity.selected_planes;
  localStorage.setItem("pcPlanes", JSON.stringify(eternity.selected_planes));
  shuffle_deck();
}

function generate_chooser(key) {
  let output = '<form name="chooser_form" id="chooser_form">';
  get_sorted_planes();
  saved_planes = JSON.parse(localStorage.getItem(key));
  let scheck = '';
  if (saved_planes) {
    if (saved_planes.length == eternity.sorted.length || saved_planes.length == 0) {
      scheck = 'checked';
    }
  } else {
    scheck = 'checked';
  }
  output += `<input id="selectall" type="checkbox" name="select" onclick="select_toggle()" ${ scheck }><em><label for="selectall">Select All/None</a></em><br/>`;
  $.each(eternity.sorted, function(i) {
    let checked = scheck || saved_planes.includes(eternity.sorted[i]) ? 'checked' : '';
    output += `<input id="${ eternity.sorted[i]}" type="checkbox" name="chooser" value="${ eternity.sorted[i] }" ${ checked }>`;
    output += `<a onmouseover="preview('${ eternity.sorted[i] }');"><label for="${ eternity.sorted[i] }">${ eternity.names[eternity.sorted[i]].name }</label></a><br />`;
  });
  output += '</form>';
  $('#chooser').html(output);
}

function preview(pl) {
  $('#preview>img')[0].src = `images/${ pl }`;
}

function select_toggle() {
  $.each(document.chooser_form.chooser, function(i) {
    document.chooser_form.chooser[i].checked = document.chooser_form.select.checked;
  });
}

function get_selected_planes() {
  let selected = [];
  $('input[name="chooser"]:checked').each(function() {
    selected.push($(this).val());
  });
  eternity.selected_planes = selected;
}

function selected_filter(pl) {
  return eternity.selected_planes.includes(pl);
}

function shuffle_deck(deck=eternity.deck) {
  for (let i=deck.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

function preloader() {
  var images = eternity.sorted;
  images.forEach(function(i) { var img=new Image(); img.src=`images/${i}`; images[i] = img;});
}

async function start() {
  eternity.screenLock = await getScreenLock();
  init_deck();
  $('#chooser').hide();
  $('#preview').hide();
  $('#start').hide();
  $('#plane_div').show();
  $('#toolbar').show();
  walk();
}

function get_html(plane, size, func=null, arg='') {
  let output = '';
  let img = `<img src="images/${ plane }" height="${ size }%">`;
  if (func === null) {
    output += `<a ${ get_link(plane) }>${ img }</a>`;
  }
  else {
    output += `<a onclick="${ func }('${ arg }');">${ img }</a>`;
  }
  return output;
}

function write_footer() {
  let footer = `Unofficial Fan Content permitted under the Fan
Content Policy. Not approved/endorsed by Wizards. Portions of the
materials used are property of <a
href="https://magic.wizards.com/">Wizards of the Coast</a>. ©Wizards
of the Coast LLC.  <a href="#" onclick="help(custom_credits())">Custom Plane Credits</a> <a href="https://github.com/thepeopleseason/planechase/blob/master/Changelog.md">Changelog</a>  If you want to <a href="https://ko-fi.com/thepeopleseason">drop a tip for me</a>.`;
  $('#footer').html(footer);
}

function custom_credits() {
  return `Multiverse Planes created by <a href="https://twitter.com/Magical__Hacker">@Magical__Hacker</a><br/>digitalmayhemx Planes created by <a href="https://www.reddit.com/u/digitalmayhemx">digitalmayhemx</a>`;
}

function toggle_chroma() {
  document.bgColor = $('#options #chroma')[0].checked ? '#00b140' : '#ffffff';
}

async function getScreenLock() {
  if ('wakeLock' in navigator) {
    let screenLock;
    try {
      screenLock = await navigator.wakeLock.request('screen');
    } catch(err) {
      console.log(err.name, err.message);
    }
    return screenLock;
  }
}

function release() {
  if (typeof eternity.screenLock !== 'undefined' && eternity.screenLock != null) {
    eternity.screenLock.release().then(() => {
      console.log("screenLock released");
      eternity.screenLock = null;
    });
  }
}

function pc_keybindings(event) {
  switch(event.which) {
  case 27:
    // ESC - toggle phenomenon and planes
    div_toggle();
    break;
  case 13:
  case 82:
    // ENTER/R: Roll planar die
    roll();
    break;
  case 32:
    // SPACE: Reset planar die mana cost
    reset_cost();
    break;
  case 39:
    // R-ARROW: Just planeswalk
    if (eternity.urlParams.get('debug') || eternity.urlParams.get('manual')) {
      walk();
    }
    break;
  case 67:
  case 107:
  case 187:
    // C/=/+: Add counter
    var plane = $("#plane_div > a")
    if ((plane.size() == 1) && (/add_counter/.test(plane.prop('onclick').toString()))) {
      plane.prop('onclick')();
    }
    break;
  }
}

function em_keybindings(event) {
  switch (event.which) {
  case 27:
    // ESC - toggle phenomenon and planes
    div_toggle();
    break;
  case 38:
  case 75:
  case 78:
    // N/Up Arrow/K - move up
    move('0_1');
    break;
  case 57:
    // Numpad9 - hellride NE
    move('1_1');
    break;
  case 39:
  case 69:
  case 76:
    // E/Right Arrow/L - move right
    move('1_0');
    break;
  case 51:
    // Numpad3 - hellride SE
    move('1_-1');
    break;
  case 40:
  case 74:
  case 83:
    // S/Down Arrow/J - move down
    move('0_-1');
    break;
  case 49:
    // Numpad1 - hellride SW
    move('-1_-1');
    break;
  case 37:
  case 72:
  case 87:
    // W/Left Arrow/I - move left
    move('-1_0');
    break;
  case 55:
    // Numpad7 - hellride NW
    move('-1_1');
    break;
  case 32:
    // SPACE: Reset planar die mana cost
    reset_cost();
    break;
  case 13:
  case 82:
    // R/ENTER: Roll planar die
    roll();
    break;
  case 67:
  case 107:
  case 187:
    // C/=/+: Add counter
    var plane = $("#cell_0_0 > a")
    if ((plane.size() == 1) && (/add_counter/.test(plane.prop('onclick').toString()))) {
      plane.prop('onclick')();
    }
    break;
  }
}
