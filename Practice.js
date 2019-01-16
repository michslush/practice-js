function getGreeter()
{
  function greetMe()
  {
    console.log('Hi!');
  }
  return greetMe;
}

let greeter = getGreeter();
greeter();

// this a test line because Jon made me write one but he's the best