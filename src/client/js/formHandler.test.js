import { postData } from './formHandler'

jest.mock('./formHandler');

postData.mockResolvedValue("answer");


test('check if post is working', () => {
    postData('/', "http://google.com/")
        .then(response => {
            //console.log(response)
            expect(response == "answer").toBe(true);
        })

});