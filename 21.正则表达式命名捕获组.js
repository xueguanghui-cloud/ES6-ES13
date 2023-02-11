let str = "今天是2022-11-21"
let reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

let res = reg.exec(str)
console.log(res)
console.log();