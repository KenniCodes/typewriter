const sentence = "hello there from lighthouse labs";

const typewriter = function(string) {
  for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      process.stdout.write(string[i]);
    }, i * 50);
  };
  setTimeout(() => {
    process.stdout.write('\n');
  }, string.length * 50);
};

typewriter(sentence);