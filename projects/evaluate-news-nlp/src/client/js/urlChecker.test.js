import { urlChecker } from './urlChecker'

test('checks valid url', () => {
    expect(urlChecker("http://google.com/")).toBe(true);
});

test('checks wrong url', () => {
    expect(urlChecker("google.com/")).toBe(false);
});