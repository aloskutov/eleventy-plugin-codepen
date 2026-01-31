import parseParams from '../src/parseParams.js';

describe('Test #1. Parse empty params', () => {
  test.each([
    {result: {}},
    {param: '', result: {}},
    {param: null, result: {}},
  ])('parseParams($param)', ({param, result}) => {
    expect(parseParams(param)).toStrictEqual(result);
  });
});

describe('Test #2. Parse object params', () => {
  test.each([
    {param: {'height': 650, 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'}, result: {'height': 650, 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'}},
    {param: {'height': 450, 'theme': 'light', 'tab': 'js,result'}, result: {'height': 450, 'theme': 'light', 'tab': 'js,result'}},
    {param: {'height': 850, 'class': 'codepen-resizable', 'tab': 'js,result'}, result: {'height': 850, 'class': 'codepen-resizable', 'tab': 'js,result'}},
  ])('parseParams($param)', ({param, result}) => {
    expect(parseParams(param)).toStrictEqual(result);
  });
});

describe('Test #3. Parse JSON string', () => {
  test.each([
    {param: {'height': '650', 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'}, result: {'height': '650', 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'}},
    {param: {'height': '450', 'theme': 'light', 'tab': 'js,result'}, result: {'height': '450', 'theme': 'light', 'tab': 'js,result'}},
    {param: {'height': '850', 'class': 'codepen-resizable', 'tab': 'js,result'}, result: {'height': '850', 'class': 'codepen-resizable', 'tab': 'js,result'}},
  ])('parseParams($param)', ({param, result}) => {
    expect(parseParams(param)).toStrictEqual(result);
  });
});

describe('Test #4. Parse string', () => {
  test.each([
    {param: 'height:650;class:codepen-resizable;theme:light;tab:js,result', result: {'height': '650', 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'}},
    {param: 'height:450;theme:light;tab:js,result', result: {'height': '450', 'theme': 'light', 'tab': 'js,result'}},
    {param: 'height:850;class:codepen-resizable;tab:js,result', result: {'height': '850', 'class': 'codepen-resizable', 'tab': 'js,result'}},
  ])('parseParams($param)', ({param, result}) => {
    expect(parseParams(param)).toStrictEqual(result);
  });
});

describe('Test #5. Throw SyntaxError', () => {
  test('', () =>{
    const param = '{height: 650, class: codepen-resizable, theme: light, tab: js,result}';
    expect(() => parseParams(param)).toThrow(SyntaxError);
  });
});
