Blockly.Blocks['1749286455753'] = {
  init: function() {
    this.jsonInit({
      "type": "1749286455753",
      "message0": "NewBoxForward1s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749286455753'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,169,40,40,40,40,40,40,40,30,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 99, 83, 54, 122, 90, 140, 190, 30, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 30, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 30, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 30, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 30, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 30, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 30, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 100, 93, 55, 124, 100, 120, 190, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749286455753'] = function(block) {
  let code = "base_action.action('NewBoxForward1s')\n";
  return code;
}

