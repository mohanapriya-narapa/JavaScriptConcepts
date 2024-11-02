function throttle(func, wait=0)
{
    let shouldThreshold=false;
    return function(...args)
    {
        if(shouldThreshold)
            return;
        shouldThreshold=true;
        setTimeout(()=>{
            shouldThreshold=false;
        }, wait);
        func.apply(this, args)
    }
}

function logMessage(message) {
    console.log("Message:", message, "at", new Date().toLocaleTimeString());
  }

  const throttledLogMessage = throttle(logMessage, 2000);

  throttledLogMessage("Call 1"); 