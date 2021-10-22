async function handleSubmit(event) {
    event.preventDefault()

    let agreementText = document.getElementById("agreement");
    let subjectivityText = document.getElementById("subjectivity");
    let confidenceText = document.getElementById("confidence");

    // check what text was put into the form field
    let urlText = document.getElementById('url').value
    Client.checkForName(urlText)

    const postData = async(url = '', data = {}) => {
        // Default options are marked with *
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: data })
        });

        try {
            const newData = await res.json();
            return newData;
        } catch (error) {
            console.log("error", error);
        }
    }

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

export { handleSubmit }