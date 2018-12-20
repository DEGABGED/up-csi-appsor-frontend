export default function preventDefaultEnter(event) {
  if (event.target.type !== 'textarea' && event.which === 13 /* Enter */) {
    event.preventDefault();
  }
}
