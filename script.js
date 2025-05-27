// my student created script.js 
// COMPLETED: remove <script>....</script> from index.html
console.log('script.js loaded');



// grab the form element
let form = document.querySelector('form');

// In this method we manipulate a DOM element, perform a calculation whose result we 
// can then use to practice our catching ;)
// try-catch block will be in this method
// get the entries into the form: first number, second number and the operator (+,-,*,/)
form.addEventListener('submit', (e) => {
  // added this line to stop losing the result of calculation
  e.preventDefault();

  // get users inputs
  let first_num = document.querySelector('#first-num').value;
  let second_num = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  // returns DOM element that will hold the result of the calulation
  let output = document.querySelector('output');
  // COMPLETED: Add basic try/catch around this block to handle bad input
  try {
    // COMPLETED: Demonstrate the use of throw with your custom error
    if (operator == '/' && second_num == 0) { throw new CustomError('CANNOT DIVIDE BY ZERO'); }
    // here eval does the math and our innerHTML method casts a number to a string
    // set output to result of calculation
    output.innerHTML = eval(`${first_num} ${operator} ${second_num}`);
  }
  //catch eval error
  catch (error) {
    //this will be displayed in UI
    output.innerHTML = 'bad input into calculator: please use only numbers'
    //this will have console print the ERROR
    console.error('ERROR', error);
  }
  
});

// Cycle through all the error_buttons  
// and give them click event handlers
// error_btns is just a name — nothing is wrong or causing an error

let error_btns = document.querySelectorAll('#error-btns > button');

// each button in here should have its own function
error_btns.forEach(function handle_buttons(btn) {
  btn.addEventListener('click', function on_click() {
    let text = btn.textContent;
    console.log('Button clicked:', text);
    // error
    if (text == 'Console Error') {
      console.error('This is a console error');
    }

    // log
    if (text == 'Console Log') {
      console.log('Console Log button was clicked');
    }

    // Console Clear
    if (text == 'Console Clear') {
      console.clear();
    }

    // count
    if (text == 'Console Count') {
      console.count('Console Count button');
    }

    // Console Warn
    if (text == 'Console Warn') {
      console.warn('This is a warning');
    }

    // Console Assert
    if (text == 'Console Assert') {
      let condition = false; 
      console.assert(condition, 'Assertion failed: condition is false');
    }
   
    // Console Dir
    if (text == 'Console Dir') {
      console.dir(document.body);
    }

    // dirxml
    if (text == 'Console dirxml') {
      console.dirxml(document);
    }

    // group start
    if (text == 'Console Group Start') {
      console.group('Grouped Logs');
      console.log('Inside group');
      console.log('Still in group');
    }

    // group end
    if (text == 'Console Group End') {
      console.groupEnd();
    }

    // console table
    if (text == 'Console Table') {
      let data = [
        { day: 'wed', year: 25 },
        { day: 'tues', year: 10 },
      ];
      console.table(data);
    }

    // start time
    if (text == 'Start Timer') {
      console.time('myTimer');
    }

    // end time
    if (text == 'End Timer') {
      console.timeEnd('myTimer');
    }

    // trace
    if (text == 'Console Trace') {
      function trace_function() {
        console.trace('Trace button clicked');
      }
      trace_function();
    }

    // global error
    if (text == 'Trigger a Global Error') {
      undefined_function();
    }


  });
});

// COMPLETED: Create and use a custom error class extending Error
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ERROR';
  }
}


// COMPLETED: Add a global error handler using window.onerror
// window.onerror = function(message, source, lineno, colno, error) { ... }
window.onerror = function () {
  console.log('Global error handler triggered');
  if (window.TrackJS){
  TrackJS.track('Test TrackingJS!');
  }
};

