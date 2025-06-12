Blockly.Blocks['1680745722093'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745722093",
      "message0": "Left02move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745722093'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 94, 107, 146, 76, 94, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745722093'] = function(block) {
  let code = "base_action.action('Left02move')\n";
  return code;
}

Blockly.Blocks['1680753457326'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753457326",
      "message0": "LiftCubeUp",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753457326'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 98, 102, 77, 115, 100, 132, 187, 10, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753457326'] = function(block) {
  let code = "base_action.action('LiftCubeUp')\n";
  return code;
}

Blockly.Blocks['1680753447030'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753447030",
      "message0": "GrabCube",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753447030'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 56, 115, 65, 127, 150, 51, 66, 118, 141, 101, 142, 81, 50, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(88, 73, 116, 57, 142, 150, 48, 66, 119, 126, 83, 143, 60, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 49, 165, 47, 154, 142, 47, 62, 120, 160, 39, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 16, 163, 47, 154, 142, 47, 62, 122, 190, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 47, 154, 142, 47, 62, 136, 186, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 57, 140, 150, 69, 62, 136, 186, 40, 138, 85, 50, 152, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 95, 105, 150, 39, 99, 136, 186, 40, 98, 99, 50, 163, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 97, 96, 150, 39, 99, 136, 186, 40, 99, 107, 50, 163, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 98, 102, 77, 115, 100, 136, 186, 40, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753447030'] = function(block) {
  let code = "base_action.action('GrabCube')\n";
  return code;
}

Blockly.Blocks['1749286448297'] = {
  init: function() {
    this.jsonInit({
      "type": "1749286448297",
      "message0": "New2BoxForward3s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749286448297'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,169,40,40,40,40,40,40,40,30,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 99, 83, 54, 122, 90, 140, 190, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(50)\nMOTOmove19(65, 10, 169, 96, 85, 70, 110, 100, 140, 190, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 96, 81, 56, 123, 94, 140, 190, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\n";
  return code;
}

Blockly.Python['1749286448297'] = function(block) {
  let code = "base_action.action('New2BoxForward3s')\n";
  return code;
}

Blockly.Blocks['1749286460155'] = {
  init: function() {
    this.jsonInit({
      "type": "1749286460155",
      "message0": "NewBoxForward3s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749286460155'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,169,40,40,40,40,40,40,40,30,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 99, 83, 54, 122, 90, 140, 190, 30, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 30, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 30, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 30, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 30, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 30, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 30, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 30, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 30, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 30, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 30, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 30, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 30, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 30, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 30, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 30, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 30, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 30, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 30, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(50)\nMOTOmove19(65, 10, 169, 96, 85, 70, 110, 100, 140, 190, 30, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 96, 81, 56, 123, 94, 140, 190, 30, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\n";
  return code;
}

Blockly.Python['1749286460155'] = function(block) {
  let code = "base_action.action('NewBoxForward3s')\n";
  return code;
}

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

Blockly.Blocks['1749286458059'] = {
  init: function() {
    this.jsonInit({
      "type": "1749286458059",
      "message0": "NewBoxForward2s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749286458059'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,169,40,40,40,40,40,40,40,30,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 99, 83, 54, 122, 90, 140, 190, 30, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 30, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 30, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 30, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 30, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 30, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 30, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 105, 99, 103, 100, 140, 190, 30, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 74, 121, 100, 140, 190, 30, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 100, 61, 126, 104, 140, 190, 30, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 81, 66, 111, 102, 140, 190, 30, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 76, 63, 111, 100, 140, 190, 30, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65, 10, 169, 99, 90, 73, 106, 100, 140, 190, 30, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 169, 100, 93, 55, 124, 100, 120, 190, 30, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749286458059'] = function(block) {
  let code = "base_action.action('NewBoxForward2s')\n";
  return code;
}

Blockly.Blocks['1749299164942'] = {
  init: function() {
    this.jsonInit({
      "type": "1749299164942",
      "message0": "FixedBoxForward1s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749299164942'] = function(block) {
  let code = "MOTOrigid16(40,40,169,40,40,40,40,40,40,40,30,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,169,99,83,54,122,90,140,190,30,98,117,146,75,95,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,105,99,103,100,140,190,30,101,119,134,89,98,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,100,74,121,100,140,190,30,101,124,137,89,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,100,61,126,104,140,190,30,101,110,127,94,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,81,66,111,102,140,190,30,101,95,101,97,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,76,63,111,100,140,190,30,101,100,126,79,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,90,73,106,100,140,190,30,101,100,139,74,96,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(65,10,169,100,93,55,124,100,140,190,30,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749299164942'] = function(block) {
  let code = "base_action.action('FixedBoxForward1s')\n";
  return code;
}

Blockly.Blocks['1749299197769'] = {
  init: function() {
    this.jsonInit({
      "type": "1749299197769",
      "message0": "FixedBoxForward2s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749299197769'] = function(block) {
  let code = "MOTOrigid16(40,40,169,40,40,40,40,40,40,40,30,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,169,99,83,54,122,90,140,190,30,98,117,146,75,95,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,105,99,103,100,140,190,30,101,119,134,89,98,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,100,74,121,100,140,190,30,101,124,137,89,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,100,61,126,104,140,190,30,101,110,127,94,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,81,66,111,102,140,190,30,101,95,101,97,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,76,63,111,100,140,190,30,101,100,126,79,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,90,73,106,100,140,190,30,101,100,139,74,96,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,105,99,103,100,140,190,30,101,119,134,89,98,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,100,74,121,100,140,190,30,101,124,137,89,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,100,61,126,104,140,190,30,101,110,127,94,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,81,66,111,102,140,190,30,101,95,101,97,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,76,63,111,100,140,190,30,101,100,126,79,100,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(90)\nMOTOmove19(65,10,169,99,90,73,106,100,140,190,30,101,100,139,74,96,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(65,10,169,100,93,55,124,100,140,190,30,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749299197769'] = function(block) {
  let code = "base_action.action('FixedBoxForward2s')\n";
  return code;
}

