// Load the file that exports the functionality to test
jest.dontMock('../app/assignment');  // Don't create mock functions
var ass = require('../app/assignment');

// checkWordCount function
describe('checkWordCount', function() {
  it('defines checkWordCount function', function() {
    expect(ass.checkWordCount).toBeDefined();
  });

  it('checks the text to make sure is less than 100 characters', function() {
    expect(ass.checkWordCount("Hello how are you today, I'm fine.")).toBe(true);
  });
});

// duplicateCheck function
describe('duplicateCheck', function() {
  it('defines duplicateCheck function', function() {
    expect(ass.duplicateCheck).toBeDefined();
  });

  it('checks the text to make sure no dupicate words', function() {
    expect(ass.duplicateCheck("Hello how how how are you today, I'm fine.")).toBe(false);
  });
});

// verifyAlphaNumeric function
describe('verifyAlphaNumeric', function() {
  it('defines verifyAlphaNumeric function', function() {
    expect(ass.verifyAlphaNumeric).toBeDefined();
  });

  it('checks the text to make sure non alphanumerics dont exits', function() {
    expect(ass.verifyAlphaNumeric("Hello how $%^&* are you today, I'm fine.")).toBe(false);
  });
});