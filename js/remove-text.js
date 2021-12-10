function eraseText() {
    delay(1000).then(() => document.getElementById('output').value = "");
}

// waits a certain amount of time before doing something (1 second = 1000)
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }