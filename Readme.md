so do npm install first(it will also install node 10 and 12 for testing, requires sudo) . then run <br>
so below tests are for different versions of node and finally the latest one<br>
sometimes for the initial run, the difference between new and existing versions is very high<br>
like 34 ms for existing and just 9 ms for new. however running the tests again new(testNew.js) is usually 1.5 to 3 ms faster<br>
npm run testNew10<br>
npm run testExisting10<br>
Am running new first to give existing the benefit of caching, if any. but still new constantly is better than existing<br>
npm run testNew12<br>
npm run testExisting12<br>
npm run testNew<br>
npm run testExisting<br>