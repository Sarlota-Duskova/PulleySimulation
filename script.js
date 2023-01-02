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
var button2 = document.getElementById("buttonPlus"); // Button plus for slider

var rangeSlider = document.getElementById("weightSlider"); // Slider

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

var hiddenTextPulley57 = document.querySelector("p.frictionShow57"); // Label for friction for 5:1 pulley system
var hiddenTextPulley5_1 = document.querySelector("p.frictionShow5_1"); // Label for friction for 5:1 pulley system

var hiddenTextPulleyDistance = document.getElementById("pullingDistance"); // Label for pulling distance

var step = parseInt(rangeSlider.step);

var friction1 = document.getElementById("frictionName1");
var friction2 = document.getElementById("frictionName2");
var friction3 = document.getElementById("frictionName3");
var friction4 = document.getElementById("frictionName4");

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
    } else if (input > 100) {
      val.value = 100;
    }
    recalculate();
  }
/*--------------------------------------------*/
/*--Max number for required pulling distance--*/
/*--------------------------------------------*/
  function changeHandlerDistance(val)
  {
    var input = Number(val.value);
    if (input < 0) {
      val.value = 0;
    } else if (input > 60) {
      val.value = 60;
    }
    recalculate();
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
function pulleySetupChanged(checkbox) {
  // uncheck all other boxes
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false
  });

  // reset all frictions
  friction1.value = "100";
  friction2.value = "100";
  friction3.value = "100";
  friction4.value = "100";

  // If the checkbox is checked, display the output svg
  if (checkBox1.checked) {
    // SVG content
    svgFile1.style.visibility = "visible"; //Visible SVG picture 3:1
    run_3_1(); //Start animation for SVG picture 3:1
    hiddenText1.style.visibility = "visible";
    svgFile2.style.visibility = "hidden"; //Hide SVG picture 5:1
    hiddenText2.style.visibility = "hidden"; //Hide animation for SVG picture 5:1
    svgFile3.style.visibility = "hidden"; //Hide SVG picture 7:1
    hiddenText3.style.visibility = "hidden"; //Hide animation for SVG picture 7:1

    // Pulley efficiency content
    hiddenTextPulley57.style.visibility = "hidden";
    hiddenTextPulley5_1.style.visibility = "hidden";
  } else if (checkBox2.checked) {
    // SVG content
    svgFile1.style.visibility = "hidden";
    hiddenText1.style.visibility = "hidden";
    svgFile2.style.visibility = "visible";
    run_5_1();
    hiddenText2.style.visibility = "visible";
    svgFile3.style.visibility = "hidden";
    hiddenText3.style.visibility = "hidden";

    // Pulley efficiency content
    hiddenTextPulley57.style.visibility = "visible";
    hiddenTextPulley5_1.style.visibility = "visible";
  } else if (checkBox3.checked) {
    // SVG content
    svgFile1.style.visibility = "hidden";
    hiddenText1.style.visibility = "hidden";
    svgFile2.style.visibility = "hidden";
    hiddenText2.style.visibility = "hidden";
    svgFile3.style.visibility = "visible";
    run_7_1();
    hiddenText3.style.visibility = "visible";

    // Pulley efficiency content
    hiddenTextPulley57.style.visibility = "visible";
    hiddenTextPulley5_1.style.visibility = "hidden";
  }
  recalculate();
}

function recalculate() {
  const f1 = Number(friction1.value)/100;
  const f2 = Number(friction2.value)/100;
  const f3 = Number(friction3.value)/100;
  const f4 = Number(friction4.value)/100;

  if (checkBox1.checked) {
    const f = 1+f2*(1+f1);

    outputSpan1.textContent = (rangeSlider.value / f).toFixed(2);
    outputSpanDist.textContent = requiredPullOutLength.value*3;
  } else if (checkBox2.checked) {
    const f = 1+f4*(1+f3*(1+f2*(1+f1)));

    outputSpan2.textContent = (rangeSlider.value / f).toFixed(2);
    outputSpanDist.textContent = requiredPullOutLength.value*5;
  } else if (checkBox3.checked) {
    const a = 1;
    const b = f3 * a;
    const c = a + b;
    const d = f2 * c;
    const e = f1 * (b + d);
    const f = c + d + e;

    outputSpan3.textContent = (rangeSlider.value / f).toFixed(2);
    outputSpanDist.textContent = requiredPullOutLength.value*7;
  }

  output1.value = rangeSlider.value; // Change weight of climber in 3:1 pulley system
  output2.value = rangeSlider.value; // Change weight of climber in 5:1 pulley system
  output3.value = rangeSlider.value; // Change weight of climber in 7:1 pulley system
}

function btnsFnc(evt){
  // Variables must be inside
  var currentSliderValue = parseInt(rangeSlider.value);
  var target = evt.target;

  if(target.id == 'buttonMinus') {
    var newStepValue = currentSliderValue - step; // Change slider when button minus is clicked
    rangeSlider.value = newStepValue; // Set new value to rangeSlider
  }
  else if (target.id == 'buttonPlus') {
    var newStepValue = currentSliderValue + step; // Change slider when button plus is clicked
    rangeSlider.value = newStepValue; // Set new value to rangeSlider
  }
  recalculate();
};

document.addEventListener('DOMContentLoaded', function() {
  // add event listeners
  document.getElementById("slideContainer").addEventListener('click', btnsFnc);
  rangeSlider.addEventListener('input', recalculate);

  // set the default pulley system and recalculate
  checkBox1.checked = true;
  pulleySetupChanged(checkBox1);
});
