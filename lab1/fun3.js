const f1 = () => {
    console.log("f1");
};
const f2 = () => {
  console.log("f2");
};
const f3 = () => {
  console.log("f3");
};
function main() {
  console.log("main 😄");
  setTimeout(f1, 50);
  setTimeout(f3, 30);
  setImmediate(f2);
  console.log("end ✈️");
}
main();
