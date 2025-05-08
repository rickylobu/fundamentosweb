export default {
  testEnvironment: "jest-environment-jsdom", // esto habilita un DOM simulado para las pruebas en Node
  setupFiles: ['<rootDir>/jest.setup.js'],
  collectCoverage: true, // Esto habilita la generación de cobertura
  coverageDirectory: "coverage", // Carpeta donde se almacenará el informe de cobertura
  coverageReporters: ["text", "lcov"], // Formatos de reporte (en consola y en HTML)
  roots: ["<rootDir>/test/jest/"], // Solo mira este directorio correspondiente a Jest por tener jasmine en el mismo proyecto causa error spyOn
  transform: {
    "^.+\\.js$": "babel-jest"
  }  
  
};
