function whenInit () {
  var template = window.dynamicContent.parent[0].template;

  var head = document.querySelector('head');

  var script = document.createElement('script');
  script.src = template + '.js';
  head.appendChild(script);

  var styles = document.createElement('link');
  styles.rel = 'stylesheet';
  styles.href = template + '.css';
  head.appendChild(styles);
}

if (Enabler.isInitialized()) {
  whenInit();
}
else {
  Enabler.addEventListener(studio.events.StudioEvent.INIT, whenInit);
}
