module.exports = {
  presets: [
    // Esse aqui é um preset
    // O trabalho dele é compilar código javascript
    "@babel/preset-env",
    // Já esse outro preset compila código react
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
