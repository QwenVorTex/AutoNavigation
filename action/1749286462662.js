Blockly.Blocks['1749286462662'] = {
  init: function() {
    this.jsonInit({
      "type": "1749286462662",
      "message0": "NewPutCubeDown",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749286462662'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(80, 30, 185, 100, 76, 27, 142, 100, 120, 170, 15, 100, 124, 173, 58, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(28)\nMOTOmove19(50, 20, 140, 100, 88, 55, 123, 100, 150, 180, 60, 100, 114, 145, 77, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(35)\nMOTOmove19(50, 20, 140, 100, 76, 27, 141, 100, 150, 180, 60, 100, 124, 173, 60, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(130, 170, 60, 100, 76, 27, 142, 100, 70, 30, 140, 100, 124, 173, 61, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(42)\nMOTOmove19(130, 170, 60, 100, 86, 55, 124, 100, 70, 30, 140, 100, 114, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(90, 30, 130, 100, 90, 55, 124, 100, 110, 170, 70, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749286462662'] = function(block) {
  let code = "base_action.action('NewPutCubeDown')\n";
  return code;
}

