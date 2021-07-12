//枚举

enum Status {
  OFF,
  ON,
  DE,
}

function getResult(status) {
  if (status === Status.OFF) {
    return 'off';
  } else if (status === Status.ON) {
    return 'on';
  } else if (status === Status.DE) {
    return 'de';
  }
}

console.log(getResult(1));
