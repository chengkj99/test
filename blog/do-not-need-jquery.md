jQuery and its cousins are great, and by all means use them if it makes it easier to develop your application.

If you're developing a library on the other hand, please take a moment to consider if you actually need jQuery as a dependency. Maybe you can include a few lines of utility code, and forgo the requirement. If you're only targeting more modern browsers, you might not need anything more than what the browser ships with.

At the very least, make sure you know what jQuery is doing for you, and what it's not. Some developers believe that jQuery is protecting us from a great demon of browser incompatibility when, in truth, post-IE8, browsers are pretty easy to deal with on their own.

## 1 AJAX

### JSON

##### JQUERY
```
$.getJson('/my/url', function () {

  });
```

##### IE9+
```
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function () {
  if(request.status > 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText)
  } else {
    // We reached our target server, but it returned an error
  }
}

request.onerror = function () {
  // There was a connection error of some sort
}
request.send();

```

### Post

##### JQUERY
```
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});
```

##### IE8+
```
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);
```

### Request

##### JQUERY
```
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {

  },
  error: function() {

  }
});
```

##### IE8+

```
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```



## 2 EFFECTS


### Fade In

##### JQUERY
```
$(el).fadeIn();
```

##### IE9+
```
function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

fadeIn(el);
```


### Hide

##### JQUERY

```
$(el).hide();
```

##### IE8+
```
el.style.display = 'none';
```


### Show

##### JQUERY
```
 $(el).show();
```
##### IE8+
```
el.style.display = '';
```


## 3 ELEMENTS

### Add Class

##### JQUERY
```
$(el).addClass(className);
```

##### IE8+

```
if (el.classList)
  el.classList.add(className);
else
  el.className += ' ' + className;
```



### After

##### JQUERY

```
$(el).after(htmlString);
```

##### IE8+
```
el.insertAdjacentHTML('afterend', htmlString);
```




### Append

##### JQUERY

```
$(parent).append(el);
```
##### IE8+
```
 parent.appendChild(el);
```


### Before

##### JQUERY
```
$(el).before(htmlString);
```

##### IE8+

```
 el.insertAdjacentHTML('beforebegin', htmlString);
```


### Children

##### JQUERY
```
$(el).children();
```

##### IE9+

```
el.children
```


### Clone

##### JQUERY

```
$(el).clone();
```

##### IE8+
```
el.cloneNode(true);
```


### Contains

##### JQUERY
```
$.contains(el, child);
```

##### IE8+
```
el !== child && el.contains(child);
```

### Contains Selector

##### JQUERY

```
$(el).find(selector).length;
```

##### IE8+
```
el.querySelector(selector) !== null
```

### Each

##### JQUERY

```
$(selector).each(function(i, el){

});
```

##### IE9+
```
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements, function(el, i){

});
```


### Empty

##### JQUERY
```
$(el).empty();
```

##### IE9+

```
el.innerHTML = '';
```



### Filter

##### JQUERY
```
$(selector).filter(filterFn);
```

##### IE9+
```
Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);
```


### Find Children

##### JQUERY
```
$(el).find(selector);
```

##### IE8+

```
el.querySelectorAll(selector);
```

### Find Elements

##### JQUERY

```
$('.my #awesome selector');
```

##### IE8+

```
document.querySelectorAll('.my #awesome selector');
```



### Get Attributes

##### JQUERY

```
$(el).attr('tabindex');
```

##### IE8+
```
el.getAttribute('tabindex');
```


### Get Html

##### JQUERY
```
$(el).html();
```

##### IE8+
```
el.innerHTML
```


### Get Outer Html

##### JQUERY
```
$('<div>').append($(el).clone()).html();
```

##### IE8+
```
el.outerHTML
```


### Get Style

##### JQUERY
```
$(el).css(ruleName);
```

##### IE9+
```
getComputedStyle(el)[ruleName];
```



### Get Text

##### JQUERY
```
$(el).text();
```

##### IE9+
```
el.textContent
```



### Has Class

##### JQUERY
```
$(el).hasClass(className);
```

##### IE8+
```
if (el.classList)
  el.classList.contains(className);
else
  new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
```


### Matches

##### JQUERY
```
$(el).is($(otherEl));
```

##### IE8+
```
el === otherEl
```



### Matches Selector

##### JQUERY
```
$(el).is('.my-class');
```
##### IE9+
```
var matches = function(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

matches(el, '.my-class');
```



### Next

##### JQUERY
```
$(el).next();
```
##### IE9+
```
el.nextElementSibling
```


### Offset

##### JQUERY
```
$(el).offset();
```
##### IE8+

```
var rect = el.getBoundingClientRect();

{
  top: rect.top + document.body.scrollTop,
  left: rect.left + document.body.scrollLeft
}
```



### Offset Parent

##### JQUERY
```
$(el).offsetParent();
```

##### IE8+
```
el.offsetParent || el
```



### Outer Height

##### JQUERY
```
$(el).outerHeight();
```
##### IE8+
```
el.offsetHeight
```

### Outer Height With Margin

##### JQUERY
```
$(el).outerHeight(true);
```
##### IE9+
```
function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

outerHeight(el);
```


### Outer Width

##### JQUERY
```
$(el).outerWidth();

```
##### IE8+
```
el.offsetWidth
```


### Outer Width With Margin

##### JQUERY
```
$(el).outerWidth(true);
```
##### IE9+
```
function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}

outerWidth(el);
```


### Parent

##### JQUERY
```
$(el).parent();
```
##### IE8+
```
el.parentNode
```


### Position

##### JQUERY
```
$(el).position();
```
##### IE8+
```
{left: el.offsetLeft, top: el.offsetTop}
```


### Position Relative To Viewport

##### JQUERY
```
var offset = el.offset();

{
  top: offset.top - document.body.scrollTop,
  left: offset.left - document.body.scrollLeft
}
```
##### IE8+
```
el.getBoundingClientRect()
```


### Prepend

##### JQUERY
```
$(parent).prepend(el);
```
##### IE8+
```
parent.insertBefore(el, parent.firstChild);
```


### Prev

##### JQUERY
```
$(el).prev();
```
##### IE9+
```
el.previousElementSibling
```


### Remove

##### JQUERY
```
$(el).remove();
```
##### IE8+
```
el.parentNode.removeChild(el);
```


### Remove Class

##### JQUERY
```
$(el).removeClass(className);
```
##### IE8+
```
if (el.classList)
  el.classList.remove(className);
else
  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
```


### Replace From Html

##### JQUERY
```
$(el).replaceWith(string);
```
##### IE8+
```
el.outerHTML = string;
```


### Set Attributes

##### JQUERY
```
$(el).attr('tabindex', 3);
```
##### IE8+
```
el.setAttribute('tabindex', 3);
```


### Set Html

##### JQUERY
```
$(el).html(string);

```
##### IE8+
```
el.innerHTML = string;
```


### Set Style

##### JQUERY
```
$(el).css('border-width', '20px');
```
##### IE8+
```
// Use a class if possible
el.style.borderWidth = '20px';
```


### Set Text

##### JQUERY
```
$(el).text(string);
```
##### IE9+
```
el.textContent = string;
```


### Siblings

##### JQUERY
```
$(el).siblings();
```
##### IE8+
```
Array.prototype.filter.call(el.parentNode.children, function(child){
  return child !== el;
});
```



### Toggle Class

##### JQUERY
```
$(el).toggleClass(className);
```
##### IE9+
```
if (el.classList) {
  el.classList.toggle(className);
} else {
  var classes = el.className.split(' ');
  var existingIndex = classes.indexOf(className);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  el.className = classes.join(' ');
}
```

## 4 EVENTS

### Off

##### JQUERY
```
$(el).off(eventName, eventHandler);
```
##### IE9+
```
el.removeEventListener(eventName, eventHandler);
```



### On

##### JQUERY
```
$(el).on(eventName, eventHandler);
```
##### IE9+
```
el.addEventListener(eventName, eventHandler);
```



### Ready

##### JQUERY
```
$(document).ready(function(){

});
```
##### IE9+
```
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

```

### Trigger Custom

##### JQUERY
```
$(el).trigger('my-event', {some: 'data'});
```
##### IE9+
```
if (window.CustomEvent) {
  var event = new CustomEvent('my-event', {detail: {some: 'data'}});
} else {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent('my-event', true, true, {some: 'data'});
}

el.dispatchEvent(event);
```



### Trigger Native

##### JQUERY
```
$(el).trigger('change');
```
##### IE9+
```
// For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
el.dispatchEvent(event);
```



## 5 UTILS

### Bind

##### JQUERY
```
$.proxy(fn, context);
```
##### IE9+
```
fn.bind(context);

```



### Array Each

##### JQUERY
```
$.each(array, function(i, item){

});
```
##### IE9+
```
array.forEach(function(item, i){

});
```



### Deep Extend

##### JQUERY
```
$.extend(true, {}, objA, objB);
```
##### IE8+
```
var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          out[key] = deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

deepExtend({}, objA, objB);
```


### Extend

##### JQUERY
```
$.extend({}, objA, objB);
```
##### IE8+
```
var extend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }

  return out;
};

extend({}, objA, objB);
```



### Index Of

##### JQUERY
```
$.inArray(item, array);
```
##### IE9+
```
array.indexOf(item);
```



### Is Array

##### JQUERY
```
$.isArray(arr);
```
##### IE9+
```
Array.isArray(arr);
```



### Map

##### JQUERY
```
$.map(array, function(value, index){

});
```
##### IE8+
```
array.map(function(value, index){

});
```



### Now

##### JQUERY
```
$.now();
```
##### IE9+
```
Date.now();
```

### Parse Html

##### JQUERY
```
$.parseHTML(htmlString);
```
##### IE9+
```
var parseHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children;
};

parseHTML(htmlString);
```



### Parse Json

##### JQUERY
```
$.parseJSON(string);
```
##### IE8+
```
JSON.parse(string);
```



### Trim

##### JQUERY
```
$.trim(string);
```
##### IE9+
```
string.trim();

```



### Type

##### JQUERY
```
$.type(obj);
```
##### IE8+
```
Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
```
