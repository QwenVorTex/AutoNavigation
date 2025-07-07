Blockly.Blocks['1751876265663'] = {
  init: function() {
    this.jsonInit({
      "type": "1751876265663",
      "message0": "FixedGrabCube",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1751876265663'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(78,26,102,100,92,57,123,101,121,172,97,100,109,144,75,100,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(100,75,100,50,130,138,75,80,119,113,97,150,70,62,125,111,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(81,87,183,50,130,138,75,80,119,115,23,150,70,62,125,111,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(74,83,173,30,130,138,75,104,105,121,21,170,70,62,125,80,0,0,100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(30)\nMOTOmove19(95,77,179,20,59,138,74,122,106,111,22,180,138,61,125,79,0,0,100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(30)\nMOTOmove19(54,23,162,20,10,72,74,117,140,179,36,180,179,109,125,80,0,0,100)\nMOTOwait()\n\n\n-- 7\nMOTOsetspeed(20)\nMOTOmove19(54,22,172,21,128,139,76,122,150,179,32,180,71,61,124,78,0,0,100)\nMOTOwait()\n\n\n-- 7.2\nMOTOsetspeed(30)\nMOTOmove19(54,22,172,20,146,143,75,121,150,179,32,180,53,61,123,77,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,22,172,20,146,143,75,121,150,179,32,180,53,61,123,77,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,22,172,20,146,143,75,121,150,179,32,180,53,61,123,77,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,22,172,20,146,143,75,121,150,179,32,180,53,61,123,77,0,0,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(30)\nMOTOmove19(46,25,168,72,134,148,68,71,152,175,34,132,77,51,138,130,0,0,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(30)\nMOTOmove19(46,25,168,98,109,150,53,100,152,175,34,103,91,50,143,101,0,0,100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(20)\nMOTOmove19(60,17,163,101,103,79,113,101,136,186,40,101,95,115,87,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,23,162,100,93,55,130,100,140,179,36,100,107,145,66,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,162,100,93,55,130,100,140,190,36,100,107,145,66,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1751876265663'] = function(block) {
  let code = "base_action.action('FixedGrabCube')\n";
  return code;
}

