//枚举
var Status;
(function (Status) {
    Status[Status["OFF"] = 0] = "OFF";
    Status[Status["ON"] = 1] = "ON";
    Status[Status["DE"] = 2] = "DE";
})(Status || (Status = {}));
function getResult(status) {
    if (status === Status.OFF) {
        return 'off';
    }
    else if (status === Status.ON) {
        return 'on';
    }
    else if (status === Status.DE) {
        return 'de';
    }
}
console.log(getResult(1));
