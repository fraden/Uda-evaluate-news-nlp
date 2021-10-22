import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

// according to lesson 3-6
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

let agreementText = document.getElementById("agreement");
let subjectivityText = document.getElementById("subjectivity");
let confidenceText = document.getElementById("confidence");

agreementText.innerHTML = `empty`;
subjectivityText.innerHTML = `empty`;
confidenceText.innerHTML = `empty`;



export {
    checkForName,
    handleSubmit
}