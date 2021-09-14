function copyToClipboard() {
  var text = window.location.href
  const body = document.body;
  const el = document.createElement('textarea');
  body.appendChild(el);
  el.value = text;
  el.select();
  document.execCommand('Copy');
  document.body.removeChild(el);
}