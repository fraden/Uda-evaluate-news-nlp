async function handleSubmit(event) {
    event.preventDefault()

    let agreementText = document.getElementById("agreement");
    let subjectivityText = document.getElementById("subjectivity");
    let confidenceText = document.getElementById("confidence");

    let resultsText = document.getElementById("results");


    // check what text was put into the form field
    let urlText = document.getElementById('url').value
    if (Client.urlChecker(urlText)) {
        resultsText.innerHTML = "Here are the results:"

        let sentiment = await postData('http://localhost:8081/api', urlText)
            .then(
                function(res) {
                    console.log("----")
                    console.log(res)
                    agreementText.innerHTML = `Agreement: ${res.agreement}`;
                    subjectivityText.innerHTML = `Subjectivity: ${res.subjectivity}`;
                    confidenceText.innerHTML = `Confidence: ${res.confidence}`;
                }
            )


    } else {
        resultsText.innerHTML = "Wrong url entered. Please try again."
    }
}

const postData = async(url = '', data = {}) => {
    // Default options are marked with *
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ urlText: data })
    });

    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}




export {
    handleSubmit,
    postData
}