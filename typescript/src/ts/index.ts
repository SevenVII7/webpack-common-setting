import { obj1 } from './someExport'

const testDiv = document.getElementById('test_div')
if(testDiv){
    testDiv.innerHTML = obj1.someString
}
