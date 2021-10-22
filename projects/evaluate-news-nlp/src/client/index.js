import { checkForName } from './js/nameChecker'
//import { handleSubmit } from './js/formHandler'

// according to lesson 3-6
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//console.log(checkForName);


const postData = async(url = '', urlText = '') => {


    console.log("in postdata")
    console.log(JSON.stringify({ urlText }));
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urlText }), // body data type must match "Content-Type" header        
    });


    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

async function handleSubmit(event) {

    let agreementText = document.getElementById("agreement");
    let subjectivityText = document.getElementById("subjectivity");
    let confidenceText = document.getElementById("confidence");

    event.preventDefault();
    //console.log("handleSubmit");

    let urlText = document.getElementById('url').value;
    console.log(urlText);

    let sentiment = await postData('http://localhost:8081/api', urlText)
        .then(sentiment => sentiment.json())
        .then(
            function(res) {
                console.log("----")
                console.log(res)
                agreementText.innerHTML = `Agreement: ${res.agreement}`;
                subjectivityText.innerHTML = `Subjectivity: ${res.subjectivity}`;
                confidenceText.innerHTML = `Confidence: ${res.confidence}`;
            }
        )

}


export {
    checkForName,
    handleSubmit
}