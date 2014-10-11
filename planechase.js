var eternity = {
  'planes': [
    '198062.jpg', '198068.jpg', '198075.jpg', '198081.jpg',
    '198088.jpg', '198098.jpg', '198105.jpg', '226515.jpg',
    '226524.jpg', '226532.jpg', '226538.jpg', '226544.jpg',
    '226553.jpg', '198063.jpg', '198069.jpg', '198076.jpg',
    '198083.jpg', '198090.jpg', '198099.jpg', '198107.jpg',
    '226517.jpg', '226525.jpg', '226533.jpg', '226539.jpg',
    '226554.jpg', '198064.jpg', '198070.jpg', '198077.jpg',
    '198084.jpg', '198092.jpg', '198100.jpg', '198109.jpg',
    '226510.jpg', '226518.jpg', '226526.jpg', '226534.jpg',
    '226540.jpg', '226555.jpg', '198065.jpg', '198071.jpg',
    '198078.jpg', '198085.jpg', '198095.jpg', '198101.jpg',
    '198110.jpg', '226512.jpg', '226527.jpg', '226535.jpg',
    '226541.jpg', '198066.jpg', '198073.jpg', '198079.jpg',
    '198086.jpg', '198096.jpg', '198102.jpg', '198111.jpg',
    '226513.jpg', '226521.jpg', '226528.jpg', '226536.jpg',
    '226542.jpg', '226551.jpg', '198067.jpg', '198074.jpg',
    '198080.jpg', '198087.jpg', '198097.jpg', '198103.jpg',
    '226507.jpg', '226523.jpg', '226529.jpg', '226537.jpg',
    '226543.jpg', '226552.jpg'
  ],

  'phenomena': [
    '226509.jpg', '226549.jpg', '226514.jpg', '226520.jpg',
    '226545.jpg', '226508.jpg', '226546.jpg', '226556.jpg'
  ],

  'counter_planes': {
    '226523.jpg': 0,
    '226517.jpg': 0,
    '226515.jpg': 0,
    '198070.jpg': 0
  },

  'cells': [
    '0_3', '-1_2', '0_2', '1_2', '-2_1', '-1_1', '0_1', '1_1', '2_1',
    '-3_0', '-2_0', '-1_0', '0_0', '1_0', '2_0', '3_0', '-2_-1', '-1_-1',
    '0_-1', '1_-1', '2_-1', '-1_-2', '0_-2', '1_-2', '0_-3'
  ],

  'map': {},
  'chaotic_aether': 0
};

function pick(my_array) {
  index = Math.floor(Math.random() * my_array.length);
  return my_array.splice(index, 1)[0];
}

function roll() {
  var result = 0;
  var diceroll = Math.round(Math.random()*5);

  // clear current chaos
  $("#chaos").hide();

  // 0-3: blank roll
  // 4: chaos
  // 5: planeswalk
  result = (diceroll == 5) ? diceroll :
    (eternity.chaotic_aether) ? 4 : diceroll;

  if (result > 3) {
    if (result == 4) {
      // display chaos symbol
      $("#chaos").show();
    }
    else {
      walk();
    }
  }
}

function walk() {
  var walkto = [];

  // clear eternity.chaotic_aether on planeswalk
  if (eternity.chaotic_aether) {
    eternity.chaotic_aether = 0;
  }
  var all = eternity.planes.concat(eternity.phenomena);
  walkto.push(pick(all));

  // encountered a phenomenon
  while (eternity.phenomena.indexOf(walkto[walkto.length-1]) >= 0) {
    // Interplanar Tunnel (choose from 5 planes)
    if (walkto[walkto.length-1] == '226549.jpg') {
      var tmp_planes = eternity.planes.slice(0);

      // add 5 planes to choose from
      for (var x=0; x<5; x++) {
        walkto.push(pick(tmp_planes));
      }
    }
    // Spatial Merging (merge 2 planes)
    else if (walkto[walkto.length-1] == '226546.jpg') {
      walkto.push(pick(eternity.planes));
      walkto.push(pick(eternity.planes));
    }
    else {
      // Chaotic Aether
      if (walkto[walkto.length-1] == '226509.jpg') {
        eternity.chaotic_aether = 1;
      }

      // Subsequent plane
      walkto.push(pick(all));
    }
  }
  var output = '';
  for (pl in walkto) {
    height = (walkto.length > 1) ? 45 : 80
    var img = '<img src="images/' + walkto[pl] +
      '" height="' + height + '%">';
    if (walkto.indexOf('226549.jpg') >= 0) {
      output += '<a href="#" onclick="load(\'' +
        walkto[pl] + '\')">' + img + '</a>';
      clean('226549.jpg');
    }
    else {
      output += '<a href="#" onclick="roll();">' + img + '</a>';
      clean(walkto[pl]);
    }
  }
  $("#plane").html(output);
  update_count();
}
