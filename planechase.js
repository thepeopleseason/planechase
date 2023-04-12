/* Copyright 2014-2023 James Hsiao */

var eternity = {
  "names": {
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
    "opca-22-the-eon-fog.png": { "name": "The Eon Fog", "type": "plane",
                                 "edh": false, },
    "opca-23-feeding-grounds.png": { "name": "Feeding Grounds", "type": "plane", },
    "opca-24-fields-of-summer.png": { "name": "Fields of Summer", "type": "plane", },
    "opca-25-the-fourth-sphere.png": { "name": "The Fourth Sphere", "type": "plane", },
    "opca-26-furnace-layer.png": { "name": "Furnace Layer", "type": "plane", },
    "opca-27-gavony.png": { "name": "Gavony", "type": "plane", },
    "opca-28-glen-elendra.png": { "name": "Glen Elendra", "type": "plane",
                                  "remote": false, },
    "opca-29-glimmervoid-basin.png": { "name": "Glimmervoid Basin", "type": "plane",
                                       "remote": false, },
    "opca-30-goldmeadow.png": { "name": "Goldmeadow", "type": "plane", },
    "opca-31-grand-ossuary.png": { "name": "Grand Ossuary", "type": "plane",
                                   "edh": false, },
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
    "opca-56-nephalia.png": { "name": "Nephalia", "type": "plane",
                              "edh": false, },
    "opca-57-norn-s-dominion.png": { "name": "Norn's Dominion", "type": "plane", },
    "opca-58-onakke-catacomb.png": { "name": "Onakke Catacomb", "type": "plane", },
    "opca-59-orochi-colony.png": { "name": "Orochi Colony", "type": "plane", },
    "opca-60-orzhova.png": { "name": "Orzhova", "type": "plane", },
    "opca-61-otaria.png": { "name": "Otaria", "type": "plane",
                            "remote": false, },
    "opca-62-panopticon.png": { "name": "Panopticon", "type": "plane", },
    "opca-63-pools-of-becoming.png": { "name": "Pools of Becoming", "type": "plane", },
    "opca-64-prahv.png": { "name": "Prahv", "type": "plane", },
    "opca-65-quicksilver-sea.png": { "name": "Quicksilver Sea", "type": "plane", },
    "opca-66-raven-s-run.png": { "name": "Raven's Run", "type": "plane", },
    "opca-67-sanctum-of-serra.png": { "name": "Sanctum of Serra", "type": "plane",
                                      "edh": false, },
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
    "moc-48-enigma-rides.png": { "name": "Enigma Rides", "type": "plane", },
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
  },
  "planes": [
    "opca-9-academy-at-tolaria-west.png",
    "opca-10-the-aether-flues.png", "opca-11-agyrem.png",
    "opca-12-akoum.png", "opca-13-aretopolis.png",
    "opca-14-astral-arena.png", "opca-15-bant.png",
    "opca-16-bloodhill-bastion.png", "opca-17-celestine-reef.png",
    "opca-18-cliffside-market.png", "opca-19-the-dark-barony.png",
    "opca-20-edge-of-malacol.png", "opca-21-eloren-wilds.png",
    "opca-22-the-eon-fog.png", "opca-23-feeding-grounds.png",
    "opca-24-fields-of-summer.png", "opca-25-the-fourth-sphere.png",
    "opca-26-furnace-layer.png", "opca-27-gavony.png",
    "opca-28-glen-elendra.png", "opca-29-glimmervoid-basin.png",
    "opca-30-goldmeadow.png", "opca-31-grand-ossuary.png",
    "opca-32-the-great-forest.png", "opca-33-grixis.png",
    "opca-34-grove-of-the-dreampods.png",
    "opca-35-hedron-fields-of-agadeem.png",
    "opca-36-the-hippodrome.png", "opca-37-horizon-boughs.png",
    "opca-38-immersturm.png", "opca-39-isle-of-vesuva.png",
    "opca-40-izzet-steam-maze.png", "opca-41-jund.png",
    "opca-42-kessig.png", "opca-43-kharasha-foothills.png",
    "opca-44-kilnspire-district.png", "opca-45-krosa.png",
    "opca-46-lair-of-the-ashen-idol.png", "opca-47-lethe-lake.png",
    "opca-48-llanowar.png", "opca-49-the-maelstrom.png",
    "opca-50-minamo.png", "opca-51-mirrored-depths.png",
    "opca-52-mount-keralia.png", "opca-53-murasa.png",
    "opca-54-naar-isle.png", "opca-55-naya.png",
    "opca-56-nephalia.png", "opca-57-norn-s-dominion.png",
    "opca-58-onakke-catacomb.png", "opca-59-orochi-colony.png",
    "opca-60-orzhova.png", "opca-61-otaria.png",
    "opca-62-panopticon.png", "opca-63-pools-of-becoming.png",
    "opca-64-prahv.png", "opca-65-quicksilver-sea.png",
    "opca-66-raven-s-run.png", "opca-67-sanctum-of-serra.png",
    "opca-68-sea-of-sand.png", "opca-69-selesnya-loft-gardens.png",
    "opca-70-shiv.png", "opca-71-skybreen.png",
    "opca-72-sokenzan.png", "opca-73-stairs-to-infinity.png",
    "opca-74-stensia.png", "opca-75-stronghold-furnace.png",
    "opca-76-takenuma.png", "opca-77-talon-gates.png",
    "opca-78-tazeem.png", "opca-79-tember-city.png",
    "opca-80-trail-of-the-mage-rings.png", "opca-81-truga-jungle.png",
    "opca-82-turri-island.png", "opca-83-undercity-reaches.png",
    "opca-84-velis-vel.png", "opca-85-windriddle-palaces.png",
    "opca-86-the-zephyr-maze.png", "moc-47-the-caldaia.png",
    "moc-48-enigma-ridges.png", "moc-49-esper.png",
    "moc-50-the-fertile-lands-of-saulvinia.png", "moc-51-ghirapur.png",
    "moc-52-the-golden-city-of-orazca.png", "moc-53-the-great-aerie.png",
    "moc-54-inys-haen.png", "moc-55-ketria.png", "moc-56-littiara.png",
    "moc-57-megaflora-jungle.png", "moc-58-naktamun.png",
    "moc-59-new-argive.png", "moc-60-norn-s-seedcore.png",
    "moc-61-nyx.png", "moc-62-paliano.png", "moc-63-the-pit.png",
    "moc-64-riptide-island.png", "moc-65-strixhaven.png",
    "moc-66-ten-wizards-mountain.png", "moc-67-towashi.png",
    "moc-68-unyaro.png", "moc-69-valor-s-reach.png",
    "moc-70-the-western-cloud.png", "moc-71-the-wilds.png",
  ],
  "phenomena": [
    "opca-1-chaotic-aether.png", "opca-2-interplanar-tunnel.png",
    "opca-3-morphic-tide.png", "opca-4-mutual-epiphany.png",
    "opca-5-planewide-disaster.png", "opca-6-reality-shaping.png",
    "opca-7-spatial-merging.png", "opca-8-time-distortion.png",
  ],
  "cells": [
    "0_3", "-1_2", "0_2", "1_2", "-2_1", "-1_1", "0_1", "1_1", "2_1",
    "-3_0", "-2_0", "-1_0", "0_0", "1_0", "2_0", "3_0", "-2_-1", "-1_-1",
    "0_-1", "1_-1", "2_-1", "-1_-2", "0_-2", "1_-2", "0_-3"
  ],
  "map": {},
  "deck": [],
  "chaotic_aether": 0,
  "current": [],
  "counters": {},
  "urlParams": {},
};

function div_toggle(div="#chaos") {
  $(div).toggle();
  $('#plane_div').toggle();
}

function roll() {
  // Planeswalk on button re-press. Skip if you're mapping
  if ($('#dice_button')[0].value == 'Planeswalk' && !Object.keys(eternity.map).length) {
    walk();
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
      reset_cost();
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
          }
          eternity.deck = eternity.deck.concat(next_planes);
          $("#chaos").html(output);
          div_toggle("#chaos");
        }
        if (eternity.current.includes('opca-73-stairs-to-infinity.png')) {
          let scry = get_next_planes();
          output += get_html(scry, 60, 'scry');
          $("#chaos").html(output);
          div_toggle("#chaos");
        }
      }
    }
  }
}

function scry() {
  if (confirm("Move this plane to the bottom of the planar deck?")) {
    eternity.deck.push(eternity.deck.shift());
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
      eternity.current_planar_count = eternity.names[walkto[pl]].counter;
    }
    else {
      eternity.current_planar_count = '---';
    }
    $('#count_button')[0].value = eternity.current_planar_count;
  }
  eternity.current = walkto;
  $("#plane_div").html(output);
}

function get_next_planes(count=1) {
  var planes = eternity.deck.filter(function(pl) {
    return eternity.names[pl].type === 'plane';
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
  $('#count_button')[0].value = Object.keys(eternity.map).length
    ? ++eternity.counters[plane]
    : ++eternity.current_planar_count;
}

function reset_cost() {
  $('#cost_button')[0].value = 0;
}

function reset_plane(aether=false) {
  $('#dice_button')[0].value = 'Roll Planar Die';
  reset_cost();
  eternity.current_planar_count = 0;
  if (!aether && eternity.chaotic_aether) {
    eternity.chaotic_aether = 0;
  }
}

function help() {
  $("#help").html(get_help());
  $("#help").dialog();
}

function init_deck(filter=deck_filter) {
  eternity.deck = Array.from(Object.keys(eternity.names));
  if (filter) {
    eternity.deck = eternity.deck.filter(filter);
  }
  shuffle_deck();
}

function deck_filter(e) {
  let filter = true;
  if (eternity.urlParams.get('edh')) {
    filter = typeof eternity.names[e].edh == 'undefined' || eternity.names[e].edh;
  }
  if (!filter) {
    return filter;
  }
  else if (eternity.urlParams.get('remote')) {
    filter = typeof eternity.names[e].remote == 'undefined' || eternity.names[e].remote;
  }
  return filter;
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
  var images = Object.keys(eternity.names);
  if (document.images) {
    for (let i in images) {
      var img = new Image();
      img.src = `images/${ images[i] }`;
      images[i] = img;
    }
  }
}

function get_html(plane, size, func=null, arg='') {
  let output = '';
  let img = `<img src="images/${ plane }" height="${ size }%">`;
  if (func === null) {
    output += `<a href="#"${ get_link(plane) }>${ img }</a>`;
  }
  else {
    output += `<a href="#" onclick="${ func }('${ arg }');">${ img }</a>`;
  }
  return output;
}

function pc_keybindings(event) {
  switch(event.which) {
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
    if (eternity.urlParams.get('debug')) {
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

