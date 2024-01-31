import obj2 from './someExport'

const testDiv = document.getElementById('test_div')
if (testDiv) {
  testDiv.innerHTML = obj2.someString
}
