const generator = require("generate-password");

function generateRandomPassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    excludeSimilarCharacters: true,
  });

  console.log(password);
  return password;
}

generateRandomPassword();
