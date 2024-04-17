// TODO: What will the following line of code log?
console.log(window);// logs window object to the console
//  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    //  it will display information about the entire browser window, including its properties and methods3.

// TODO: What will the following line of code log?
console.log(window.document); // logs the HTML document object that contains
// (https://127.0....) web link to the document
    // Returns a reference to the Document object associated with the window. This object represents the DOM (Document Object Model) loaded in that window.


// TODO: What will the following line of code log?
console.log(document.documentElement); // 
//   logs the entire html document
    // This refers to the root element of the HTML document, which is the <html> tag. It represents the entire HTML structure and contains other elements 
    // like <head> and <body>. By logging document.documentElement, you’ll see information about the entire HTML document, including its attributes and child elements. */

// TODO: What will the following line of code log?
console.log(document.head); 
//  logs- the <head> element of the html code
    // The document.head property is part of the Document Object Model (DOM) and provides programmatic access to the <head> element.
    // It returns the actual <head> element of the current document.

    

/* 
Certainly! Let's delve into the fascinating world of the **Window object** in web development. 🌐

1. **What is the Window Object?**
   - The **Window object** represents an open window in a web browser. It encapsulates the entire browser window or tab where your web page is displayed.
   - Each HTML document has one main window object, and if the document contains frames (created using `<iframe>` tags), additional window objects are created for each frame¹².

2. **Key Properties and Methods of the Window Object:**
   - **`window.document`**: Returns a reference to the **Document object** associated with the window. This object represents the DOM (Document Object Model) loaded in that window.
   - **`window.history`**: Provides access to the **History object**, allowing you to manipulate the browser's history (e.g., navigate backward or forward).
   - **`window.console`**: Returns a reference to the **Console object**, which provides access to the browser's debugging console.
   - **`window.frames`**: Returns an array-like collection of all window objects running within the current window.
   - **`window.devicePixelRatio`**: Gives you the ratio between physical pixels and device-independent pixels (DIP) on the display.
   - **`window.caches`**: Provides access to the **CacheStorage object**, enabling features like offline asset storage and custom response generation.
   - **`window.customElements`**: Returns a reference to the **CustomElementRegistry object**, used for registering and managing custom elements.
   - **`window.crypto`**: Accesses the browser's cryptographic functions.
   - **`window.closed`**: Indicates whether the current window is closed or not.
   - And many more!

3. **Global Availability:**
   - The `window` object is globally available in JavaScript. You can access it directly in scripts without any additional references.
   - Additionally, it's available as `this` in the root scope of a script (outside of any function).

4. **Tabbed Browsers:**
   - In a tabbed browser, each tab corresponds to its own **Window object**.
   - Properties and methods that pertain to the overall window (not just a specific tab) are accessible via the global `window`.

Remember, the **Window object** is a powerful gateway to various functionalities and information within the browser. Explore its properties and methods to enhance your web development skills! 🚀👓

For detailed documentation, check out the [MDN Web APIs reference](^1^) or [W3Schools](^2^). Happy coding! 🌟

Source: Conversation with Bing, 4/15/2024
(1) Window - Web APIs | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Window.
(2) Window Object - W3Schools. https://www.w3schools.com/jsref/obj_window.asp.
(3) Window - Web APIs | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Window.
(4) Window Object - W3Schools. https://www.w3schools.com/jsref/obj_window.asp.
(5) Window JavaScript API. https://www.javascripture.com/Window.
(6) Window - Web APIs | MDN. http://devdoc.net/web/developer.mozilla.org/en-US/docs/DOM/window.html.
*/