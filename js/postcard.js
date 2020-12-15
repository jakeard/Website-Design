    /**
 * Fake send a form by changing the submit button to a button
 * with an on click event that calls this function.
 */
function fakeSend() {

    // Stop the form from actually submitting if you used a submit button.
    event.preventDefault();
    
    // Grab the button element the user clicked on.
    var elem = event.target || event.srcElement;
    
    /**
     * Create a new HTML div virtually, add our class
     * to it, and then add the message.
     */
    var msg  = document.createElement( 'DIV' );
    msg.classList.add( 'fake-send-msg' );
    msg.innerHTML = 'Your message was sent successfully.'
    
    /**
     * Climb up the DOM to the buttons parent and then
     * add our new div to this parent container.
     */
    elem.parentElement.appendChild( msg );
    
    /**
     * Starting from the button climb the DOM until you
     * reach the form and reset (wipe) it.
     */
    var form = elem.closest( 'form' );
    form.reset();
    }
    
    /**
    * This is what is known as a JavaScript polyfill. It is JavaScript code that
    * adds support to older web browsers for newer JavaScript features. Not every
    * new feature can be polyfilled and not every polyfill supports every browser.
    * This polyfill will only support web browsers that have full ES5 support;
    * the last generation of JavaScript, as of this writing ES6 is the latest
    * version of JavaScript.
    * 
    * The following code was copied from:
    * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    */
    if ( ! Element.prototype.matches ) {
    Element.prototype.matches =
    Element.prototype.msMatchesSelector || 
    Element.prototype.webkitMatchesSelector;
    }
    
    if ( ! Element.prototype.closest ) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if ( Element.prototype.matches.call(el, s) ) return el;
            el = el.parentElement || el.parentNode;
        } while ( el !== null && el.nodeType === 1 );
        return null;
    };
    }