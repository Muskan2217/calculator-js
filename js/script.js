





  function valueButton(e) {
    calculator.screen.value += e.value;
  }

  function Clear() {
    calculator.screen.value = null;
  }


    function Backspace() {
      calculator.screen.value = calculator.screen.value.slice(0, -1);
    }

    
  function Calculate() {
    calculator.screen.value = eval(calculator.screen.value);
  }



 