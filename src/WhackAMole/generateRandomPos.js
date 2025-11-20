export default function generateRandomPos(size) {
  return [
    Math.floor((Math.random() * 10) / size),
    Math.floor((Math.random() * 10) / size),
  ];
}
