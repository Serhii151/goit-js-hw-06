

const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRangeRef.addEventListener('input', () => {
  const fontSize = inputRangeRef.value + 'px';
  textRef.style.fontSize = fontSize;
});

document.querySelector('body').style.backgroundColor = '#eaf1fad0';