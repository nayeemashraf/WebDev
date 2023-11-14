//💡 Synchronous programming
// Synchronous programming simply means the execution of code in the order, that is the next execution doesn't start if the previous task isn't completed.
console.log("x"); // 'x' will not be printed until the below tasks are finished.
console.log("y"); // 'y' will be printed after the execution of below task.
console.log("z"); // 'z' will be printed at first.

//💡 Asynchronous Programming
// As we know synchronous behaviour executes code sequentially, ensuring that each task is completed before moving on to the next one. What if a client is fetching a huge amount of data from backend that takes some time. Lets imagine the user has started the fetching, until the data isn't completely loaded the client won't be able to do anything. The elements on the website would seem freezed until the task isn't completed. But We don't want that to happen, we want to make sure nothing freezes and everything runs parallelly, for that reason asynchronous behaviour comes to the rescue. We achieve Asynchronous programming using Web APIs such as callbacks, promises, async/await, event listeners, and timers.

console.log(1);

setTimeout(() => {
  console.log(2);
}, 2000);

console.log(3);

// SetTimeOut is a function that allows us to create a timeout. It is the part of the Web API. It will make sure the first parameter (callback function) runs after a certain interval of time. Here it will run after 2 seconds as specified. That means '2' will be printed after 1 and 3. Remember SetTimeOut() is one of the methods. There exists many methods in JavaScript that can be used to do asynchronous programming.

//💡 Working of Call Stack, Web API, Callback Queue, and Event Loop.
// Taking the above code as an example. This is how it would appear in the call stack.
/*
     console.log(2);

     callback();

     console.log(3);

     setTimeout(() => {
       console.log(2);
     }, 2000);

     console.log(1);                       setTimeout(), 2000;
🔥___CALL STACK___🔥                       🔥___WEB API___🔥
                    
                  🔥🔄___EVENT LOOP___🔄🔥

                        callback();
                  🔥___CALLBACK QUEUE___🔥

*/
// First we have console.log(1) that goes into the call stack. And that gets run. So, we log '1' to the console. We then get 'setTimeout()' into our call stack. And with 'setTimeout', what's going to happen is, well the call stack is going to say, OK, I have 'setTimeout'. And because setTimeout is not part of javascript but part of the web API. What's going to happen is, it triggers the web API. And says, hey! 'setTimeout' has just been called. And because we notified web API, we can pop it out of the call stack. Now, the web API starts with a timer, here a timer of two seconds. It's going to know that in two seconds, you have to do something. And because the call stack is empty, the javascript engine now goes to console.log(3) and executes this.

// Now we've done '1' and '3' but we still have 'setTimeout' 2 seconds in the web API. Now after two seconds when our time limit is up, the web API is going to say, okay, 'setTimeout' should be run. Let's see what's inside of it. Well we have a console.log(2). So what's going to happen is, it's going to say, hey! set time is done. We have a callback, and this callback of 'setTimeout' is added to the callback Queue, saying that, hey! we have to run something we're ready to run it.

// Now, the last part, the Event Loop checks and says, hey! is the call stack empty? and it keeps checking all the time if the stack is empty and if the call stack is empty and there's nothing running right now on the javascript engine, it's going to say, hey! do we have any callbacks? It's going to check the callback Queue and say, hmm! is anything in there? because the call stack is empty, we can throw something in there and make it do some work. In our case we say, oh yeah! I do. Let me put this (callback()) into the call stack. So now we move the callback() into the call stack and then the callback() we run it and by running we see that we have console.log(2). So it's going say console.log(2), it's going to run this function and once it's done it's going to pop it out of the call stack. And again we're done with the callback(), so remove it, and there you go. We're done. Everything is empty and we've just run '1', '3', '2'.

// Understand the whole process visually with the help of this article on dev.to
let articleLink =
  "https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif";
