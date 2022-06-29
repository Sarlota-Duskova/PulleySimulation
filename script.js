/*--------------------------------------*/
/*----------Defining variables----------*/
/*--------------------------------------*/
var checkboxes = document.getElementsByName('check'); // Defining for Only one checkbox

// Get the checkbox
var checkBox1 = document.getElementById("checkb-3"); // Checkbox 3:1
var checkBox2 = document.getElementById("checkb-5"); // Checkbox 5:1
var checkBox3 = document.getElementById("checkb-7"); // Checkbox 7:1

//Get the span elements
var outputSpan1 = document.getElementById('textInputForce1'); // Force of the required pulling force for 3:1 pulley system
var outputSpan2 = document.getElementById('textInputForce2'); // Force of the required pulling force for 5:1 pulley system
var outputSpan3 = document.getElementById('textInputForce3'); // Force of the required pulling force for 7:1 pulley system
var outputSpanDist = document.getElementById('textOutputPullingDistance'); // Needed length of pulled rope
var requiredPullOutLength = document.getElementById('pullOutDist'); // Required pulling distance
    
var button1= document.getElementById("buttonMinus"); // Button minus for slider
button1.disabled = true;
var button2 = document.getElementById("buttonPlus"); // Button plus for slider
button2.disabled = true;

var rangeSlider = document.getElementById("weightSlider"); // Slider
rangeSlider.disabled = true;

var output1 = document.getElementById('textInput1'); // Force of climber for 3:1 pulley system
var output2 = document.getElementById('textInput2'); // Force of climber for 5:1 pulley system
var output3 = document.getElementById('textInput3'); // Force of climber for 7:1 pulley system

var svgFile1 = document.getElementById("svg1"); // SVG picture for 3:1 pulley system
var svgFile2 = document.getElementById("svg2"); // SVG picture for 5:1 pulley system
var svgFile3 = document.getElementById("svg3"); // SVG picture for 7:1 pulley system

var hiddenText1 = document.getElementById("hideText1"); // div tag with hidden pulley system 3:1
var hiddenText2 = document.getElementById("hideText2"); // div tag with hidden pulley system 5:1
var hiddenText3 = document.getElementById("hideText3"); // div tag with hidden pulley system 7:1

var hideSlideContainer = document.getElementById("slideContainer");

var hiddenTextPulleyAll = document.querySelectorAll("p.frictionShowAll"); // Label for friction for 3:1 pulley system
var arrayOfElements = Array.from(hiddenTextPulleyAll);
var hiddenTextPulley57 = document.querySelector("p.frictionShow57"); // Label for friction for 5:1 pulley system
var hiddenTextPulley5_1 = document.querySelector("p.frictionShow5_1"); // Label for friction for 5:1 pulley system

var hiddenTextPulleyDistance = document.getElementById("pullingDistance"); // Label for pulling distance

var step = parseInt(rangeSlider.step);

var friction1 = document.getElementById("frictionName1");
var friction2 = document.getElementById("frictionName2");
var friction3 = document.getElementById("frictionName3");
var friction4 = document.getElementById("frictionName4");

/*--------------------------------------*/
/*-----Only one checkbox is checked-----*/
/*--------------------------------------*/
function onlyOne(checkbox) {
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false
  });
}
/*--------------------------------------*/
/*---------Define slider colors---------*/
/*--------------------------------------*/
document.getElementById("weightSlider").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #33cc33 0%, #ffcc66 50%, #ff6666 100%)'
};
/*--------------------------------------*/
/*----Max number for friction set up----*/
/*--------------------------------------*/
  function changeHandler(val)
  {
    var input = Number(val.value);
    if (input < 0) {
      val.value = 0;
      alert("Value should be min 0");
      return;
    } else if (input > 100) {
      val.value = 100;
      alert("Value should be max 100");
      return;
    } else {
      // do nothing
    }
  }
/*--------------------------------------------*/
/*--Max number for required pulling distance--*/
/*--------------------------------------------*/
  function changeHandlerDistance(val)
  {
    var input = Number(val.value);
    if (input < 0) {
      val.value = 0;
      alert("Value should be min 0");
      return;
    } else if (input > 60) {
      val.value = 60;
      alert("Value should be max 60");
      return;
    } else {
      // do nothing
    }
  }
/*--------------------------------------*/
/*----------Define function run---------*/
/*--------------------------------------*/
function run_3_1() {
  new Vivus("svg1", {
    start: "autostart",
    delay: 0,
    duration: 200
  });
}

function run_5_1() {
  new Vivus("svg2", {
    start: "autostart",
    delay: 0,
    duration: 200
  });
}

function run_7_1() {
  new Vivus("svg3", {
    start: "autostart",
    delay: 0,
    duration: 200
  });
}
/*--------------------------------------*/
/*--------Define checkbox change--------*/
/*--------------------------------------*/
function checkboxChanged() {
  // If the checkbox is checked, display the output svg
  if (checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false) {

    // SVG content
    svgFile1.style.visibility = "visible"; //Visible SVG picture 3:1
    run_3_1(); //Start animation for SVG picture 3:1
    hiddenText1.style.visibility = "visible";
    svgFile2.style.visibility = "hidden"; //Hide SVG picture 5:1
    hiddenText2.style.visibility = "hidden"; //Hide animation for SVG picture 5:1
    svgFile3.style.visibility = "hidden"; //Hide SVG picture 7:1
    hiddenText3.style.visibility = "hidden"; //Hide animation for SVG picture 7:1
    
    // Slider content
    hideSlideContainer.style.visibility = "visible";
    rangeSlider.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    rangeSlider.value = 0;
    output1.value = 40;
    outputSpan1.textContent = Math.round(rangeSlider.value/ 3);

    // Pulley efficiency content
    arrayOfElements.forEach(function (element) { element.style.visibility = 'visible';})
    hiddenTextPulley57.style.visibility = "hidden";
    hiddenTextPulley5_1.style.visibility = "hidden";
    friction1.value = "";
    friction2.value = "";
    friction3.value = "";
    friction4.value = "";

    // Required pulling distance
    hiddenTextPulleyDistance.style.visibility = "visible";
    outputSpanDist.textContent = "";
    requiredPullOutLength.value = "";

  } else if (checkBox2.checked == true && checkBox1.checked == false && checkBox3.checked == false) {

    // SVG content
    svgFile1.style.visibility = "hidden";
    hiddenText1.style.visibility = "hidden";
    svgFile2.style.visibility = "visible";
    run_5_1();
    hiddenText2.style.visibility = "visible";
    svgFile3.style.visibility = "hidden";
    hiddenText3.style.visibility = "hidden";

    // Slider content
    hideSlideContainer.style.visibility = "visible";
    rangeSlider.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    rangeSlider.value = 0;
    output2.value = 40;
    outputSpan2.textContent = Math.round(rangeSlider.value/ 5);
    
    // Pulley efficiency content
    arrayOfElements.forEach(function (element) { element.style.visibility = 'visible';})
    hiddenTextPulley57.style.visibility = "visible";
    hiddenTextPulley5_1.style.visibility = "visible";
    friction1.value = "";
    friction2.value = "";
    friction3.value = "";
    friction4.value = "";
    
    // Required pulling distance
    hiddenTextPulleyDistance.style.visibility = "visible";
    outputSpanDist.textContent = "";
    requiredPullOutLength.value = "";

  } else if (checkBox3.checked == true && checkBox1.checked == false && checkBox2.checked == false) {

    // SVG content
    svgFile1.style.visibility = "hidden";
    hiddenText1.style.visibility = "hidden";
    svgFile2.style.visibility = "hidden";
    hiddenText2.style.visibility = "hidden";
    svgFile3.style.visibility = "visible";
    run_7_1();
    hiddenText3.style.visibility = "visible";

    // Slider content
    hideSlideContainer.style.visibility = "visible";
    rangeSlider.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    rangeSlider.value = 0;
    output3.value = 40;
    outputSpan3.textContent = Math.round(rangeSlider.value/ 7);

    // Pulley efficiency content
    arrayOfElements.forEach(function (element) { element.style.visibility = 'visible';
  })
    hiddenTextPulley57.style.visibility = "visible";
    hiddenTextPulley5_1.style.visibility = "hidden";
    friction1.value = "";
    friction2.value = "";
    friction3.value = "";
    friction4.value = "";
    
    // Required pulling distance
    hiddenTextPulleyDistance.style.visibility = "visible";
    outputSpanDist.textContent = "";
    requiredPullOutLength.value = "";

  }
  else {

    // SVG content
    svgFile1.style.visibility = "hidden"; //Hide SVG picture 3:1
    svgFile2.style.visibility = "hidden"; //Hide SVG picture 5:1
    svgFile3.style.visibility = "hidden"; //Hide SVG picture 7:1
    hiddenText1.style.visibility = "hidden"; //Hide changing text of forces for 3:1 pulley
    hiddenText2.style.visibility = "hidden"; //Hide changing text of forces for 5:1
    hiddenText3.style.visibility = "hidden"; //Hide changing text of forces for 7:1

    // Slider content
    hideSlideContainer.style.visibility = "hidden";
    rangeSlider.value = 0; //Set slider to 0
    rangeSlider.disabled = true; //Disable slider
    button1.disabled = true; //Disable button minus
    button2.disabled = true; //Disable button plus

    // Pulley efficiency content
    arrayOfElements.forEach(function (element) { element.style.visibility = 'hidden';}) //Hide friction input text for 3:1 pulley
    hiddenTextPulley57.style.visibility = "hidden"; //Hide friction input text for 5:1 pulley
    hiddenTextPulley5_1.style.visibility = "hidden"; //Hide friction input text for 5:1 pulley
    friction1.value = "";
    friction2.value = "";
    friction3.value = "";
    friction4.value = "";
    
    // Required pulling distance
    hiddenTextPulleyDistance.style.visibility = "hidden"; //Hide pulley distance text
    outputSpanDist.textContent = "";
    requiredPullOutLength.value = "";

  }
}

/*--------------------------------------*/
/*------Slider and buttons action-------*/
/*--------------------------------------*/
//  onchange="updateTextInput(this.value)" => Must write in input tag
function updateTextInput(val) {
  output1.value=val; // Value from slider for pulley system 3:1
  output2.value=val; // Value from slider for pulley system 5:1
  output3.value=val; // Value from slider for pulley system 7:1
}

function calculatingEfficiency() {

  // Pulley system 3:1
  if(checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false) {
    if (friction1.value == "" && friction2.value == "") {
      outputSpan1.textContent = Math.round(rangeSlider.value/ 3);
    } else {
      calculatingFriction();
    }
  } else if (checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false) {
    if (friction1.value == "" && friction2.value == "" && friction3.value == "" && friction4.value == "") {
      outputSpan2.textContent = Math.round(rangeSlider.value/ 5);
    } else {
      calculatingFriction();
    }
  } else if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true) {
    if (friction1.value == "" && friction2.value == "" && friction3.value == "") {
      outputSpan3.textContent = Math.round(rangeSlider.value/ 7);
    } else {
      calculatingFriction();
    }
  } else {
    // do nohing
  }
}

function calculatingFriction(){
  // Variables must be inside of function
  var f1 = Number(friction1.value)/100;
  var f2 = Number(friction2.value)/100;
  var f3 = Number(friction3.value)/100;
  var f4 = Number(friction4.value)/100;

  if(friction1.value == "") {
    f1 = 1;
  } else {
    f1;
  }
  
  if(friction2.value == "") {
    f2 = 1;
  } else {
    f2;
  }
  
  if(friction3.value == "") {
    f3 = 1;
  } else {
    f3;
  }
  
  if(friction4.value == "") {
    f4 = 1;
  } else {
    f4;
  }
  
  if (checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false) {
    if(requiredPullOutLength.value == "") {
      outputSpan1.textContent = Math.round(rangeSlider.value/ (1+f1+(f1*f2)).toFixed(2));
    } else {
      outputSpan1.textContent = Math.round(rangeSlider.value/ (1+f1+(f1*f2)).toFixed(2));
      outputSpanDist.textContent = requiredPullOutLength.value*(1+f1+(f1*f2)).toFixed(2);
    }

  } else if (checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false) {
    if(requiredPullOutLength.value == "") {
      outputSpan2.textContent = Math.round(rangeSlider.value/ (4+f1-f4+(f2*f3)*(f4-1-f1+f1*f4)).toFixed(2));
    } else {
      outputSpan2.textContent = Math.round(rangeSlider.value/ (4+f1-f4+(f2*f3)*(f4-1-f1+f1*f4)).toFixed(2));
      outputSpanDist.textContent = requiredPullOutLength.value*(4+f1-f4+(f2*f3)*(f4-1-f1+f1*f4)).toFixed(2);
    }
    
  } else if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true) {
    if(requiredPullOutLength.value == ""){
      outputSpan3.textContent = Math.round(rangeSlider.value/ (4-f2-Math.pow(f3, 2)+3*f1-f1*Math.pow(f3, 2)-f2*f1).toFixed(2));
    } else {
      outputSpan3.textContent = Math.round(rangeSlider.value/ (4-f2-Math.pow(f3, 2)+3*f1-f1*Math.pow(f3, 2)-f2*f1).toFixed(2));
      outputSpanDist.textContent = requiredPullOutLength.value*(4-f2-Math.pow(f3, 2)+3*f1-f1*Math.pow(f3, 2)-f2*f1).toFixed(2);
    }
    
  } else {
    // do nohing
  }
}

function pullDistance(){
  // Variables must be inside of function
  var f1 = Number(friction1.value)/100;
  var f2 = Number(friction2.value)/100;
  var f3 = Number(friction3.value)/100;
  var f4 = Number(friction4.value)/100;

  if(friction1.value == "") {
    f1 = 1;
  } else {
    f1;
  }
  
  if(friction2.value == "") {
    f2 = 1;
  } else {
    f2;
  }
  
  if(friction3.value == "") {
    f3 = 1;
  } else {
    f3;
  }
  
  if(friction4.value == "") {
    f4 = 1;
  } else {
    f4;
  }
  
  if (checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false) {
    if(friction1.value != "" || friction2.value != "") {
      outputSpanDist.textContent = requiredPullOutLength.value*(1+f1+(f1*f2)).toFixed(2);
    } else {
      outputSpanDist.textContent = requiredPullOutLength.value*3;
    }
  } else if (checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false) {
    if(friction1.value != "" || friction2.value != "") {
      outputSpanDist.textContent = requiredPullOutLength.value*(4+f1-f4+(f2*f3)*(f4-1-f1+f1*f4)).toFixed(2);
    } else {
      outputSpanDist.textContent = requiredPullOutLength.value*5;
    }
  } else if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true) {
    if(friction1.value != "" || friction2.value != "") {
      outputSpanDist.textContent = requiredPullOutLength.value*(4-f2-Math.pow(f3, 2)+3*f1-f1*Math.pow(f3, 2)-f2*f1).toFixed(2);
    } else {
      outputSpanDist.textContent = requiredPullOutLength.value*7;
    }
  } else {
    //do nothing
  }
}
  
document.getElementById("slideContainer").addEventListener('click', btnsFnc);
rangeSlider.addEventListener('input', sliderFnc);

function sliderFnc(){
  output1.value = rangeSlider.value; // Change weight of climber in 3:1 pulley system
  output2.value = rangeSlider.value; // Change weight of climber in 5:1 pulley system
  output3.value = rangeSlider.value; // Change weight of climber in 7:1 pulley system
    
  calculatingEfficiency(); // Calculate the required pulling force
}

function btnsFnc(evt){
  // Variables must be inside
  var currentSliderValue = parseInt(rangeSlider.value);
  var target = evt.target;
  
  if(target.id == 'buttonMinus') {
    var newStepValue = currentSliderValue - step; // Change slider when button minus is clicked
    rangeSlider.value = newStepValue; // Set new value to rangeSlider
    output1.value = rangeSlider.value; // Change weight of climber in 3:1 pulley system
    output2.value = rangeSlider.value; // Change weight of climber in 5:1 pulley system
    output3.value = rangeSlider.value; // Change weight of climber in 7:1 pulley system
    
    calculatingEfficiency() // Calculate the required pulling force
  }
  else if (target.id == 'buttonPlus') {
    var newStepValue = currentSliderValue + step; // Change slider when button plus is clicked
    rangeSlider.value = newStepValue; // Set new value to rangeSlider
    output1.value = rangeSlider.value; // Change weight of climber in 3:1 pulley system
    output2.value = rangeSlider.value; // Change weight of climber in 5:1 pulley system
    output3.value = rangeSlider.value; // Change weight of climber in 7:1 pulley system
    
    calculatingEfficiency(); // Calculate the required pulling force
  } else {
    sliderFnc();
  }
};
                              
document.addEventListener('DOMContentLoaded', function() {
  updateTextInput();
});