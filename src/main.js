// import { obj1 } from './js/someExport'
// console.log(obj1)

async function importSomething() {
  await setTimeout(() => {
    const { obj1 } = import('./js/someExport');
  }, 1000)
}

importSomething()


// import pic from './assets/img/pic.jpg'