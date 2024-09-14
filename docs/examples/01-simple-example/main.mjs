import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";
import { input1, input2, result, result2, result3 } from './DOMElements.mjs';

const worker = new Worker("worker.mjs", { type: "module" });
const obj = Comlink.wrap(worker);

console.log('workerObj.mjs')
console.log(await obj.observableInput1.value)
input1.addEventListener('change', () => {
  obj.observableInput1.value = input1.value
})

// result.textContent = "Loading...";
// result.textContent = await obj.counter;
// await obj.inc();
// result.textContent = await obj.counter;


// import { obj } from './obj.mjs';

// console.log(obj.observableInput1.value);
// console.log(obj.observableInput2.value);
// console.log(obj.getTotal());
// console.log(obj.getTotalPlusOne());

// obj.incInput1(5);
// obj.incInput2(5);

// console.log(obj.getTotal());
// console.log('yes hello this is dog')