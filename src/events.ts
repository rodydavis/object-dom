export interface NodeEvents {
  /**
   * The event occurs when the loading of a media is aborted
   *
   */
  abort?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a page has started printing, or if the print dialogue box has been closed
   *
   */
  afterprint?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a CSS animation has completed
   *
   */
  animationend?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a CSS animation is repeated
   *
   */
  animationiteration?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a CSS animation has started
   *
   */
  animationstart?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a page is about to be printed
   *
   */
  beforeprint?: EventListenerOrEventListenerObject;

  /**
   * The event occurs before the document is about to be unloaded
   *
   */
  beforeunload?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element loses focus
   *
   */
  blur?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the browser can start playing the media (when it has buffered 
enough to begin)
* 
*/
  canplay?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the browser can play through the media without 
stopping for buffering
* 
*/
  canplaythrough?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
   *
   */
  change?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user clicks on an element
   *
   */
  click?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user right-clicks on an element to open a context menu
   *
   */
  contextmenu?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user copies the content of an element
   *
   */
  copy?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user cuts the content of an element
   *
   */
  cut?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user double-clicks on an element
   *
   */
  dblclick?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element is being dragged
   *
   */
  drag?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user has finished dragging an element
   *
   */
  dragend?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the dragged element enters the drop target
   *
   */
  dragenter?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the dragged element leaves the drop target
   *
   */
  dragleave?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the dragged element is over the drop target
   *
   */
  dragover?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user starts to drag an element
   *
   */
  dragstart?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the dragged element is dropped on the drop target
   *
   */
  drop?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the duration of the media is changed
   *
   */
  durationchange?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the media has reach the end (useful for messages like "thanks for listening")
   *
   */
  ended?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an error occurs while loading an external file
   *
   */
  error?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element gets focus
   *
   */
  focus?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element is about to get focus
   *
   */
  focusin?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element is about to lose focus
   *
   */
  focusout?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element is displayed in fullscreen mode
   *
   */
  fullscreenchange?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element can not be displayed in fullscreen mode
   *
   */
  fullscreenerror?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when there has been changes to the anchor part of a URL
   *
   */
  hashchange?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element gets user input
   *
   */
  input?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element is invalid
   *
   */
  invalid?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user is pressing a key
   *
   */
  keydown?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user presses a key
   *
   */
  keypress?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user releases a key
   *
   */
  keyup?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an object has loaded
   *
   */
  load?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when media data is loaded
   *
   */
  loadeddata?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when meta data (like dimensions and duration) are loaded
   *
   */
  loadedmetadata?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the browser starts looking for the specified media
   *
   */
  loadstart?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a message is received through the event source
   *
   */
  message?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user presses a mouse button over an element
   *
   */
  mousedown?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the pointer is moved onto an element
   *
   */
  mouseenter?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the pointer is moved out of an element
   *
   */
  mouseleave?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the pointer is moving while it is over an element
   *
   */
  mousemove?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the pointer is moved onto an element, or onto one of its children
   *
   */
  mouseover?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a user moves the mouse pointer out of an element, or out of one of its children
   *
   */
  mouseout?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a user releases a mouse button over an element
   *
   */
  mouseup?: EventListenerOrEventListenerObject;

  /**
* Deprecated. Use the 
  wheel event instead
* 
*/
  mousewheel?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the browser starts to work offline
   *
   */
  offline?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the browser starts to work online
   *
   */
  online?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a connection with the event source is opened
   *
   */
  open?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user navigates away from a webpage
   *
   */
  pagehide?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user navigates to a webpage
   *
   */
  pageshow?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user pastes some content in an element
   *
   */
  paste?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the media is paused either by the user or 
programmatically
* 
*/
  pause?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the media has been started or is no longer paused
   *
   */
  play?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the media is playing after having been paused or stopped for buffering
   *
   */
  playing?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the window's history changes
   *
   */
  popstate?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the browser is in the process of getting the media 
data (downloading the media)
* 
*/
  progress?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the playing speed of the media is changed
   *
   */
  ratechange?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the document view is resized
   *
   */
  resize?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a form is reset
   *
   */
  reset?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when an element's scrollbar is being scrolled
   *
   */
  scroll?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user writes something in a search field (for <input="search">)
   *
   */
  search?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the user is finished moving/skipping to a new position 
in the media
* 
*/
  seeked?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the user starts moving/skipping to a new position in 
the media
* 
*/
  seeking?: EventListenerOrEventListenerObject;

  /**
   * The event occurs after the user selects some text (for <input> and <textarea>)
   *
   */
  select?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a <menu> element is shown as a context menu
   *
   */
  show?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the browser is trying to get media data, but data is not available
   *
   */
  stalled?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a Web Storage area is updated
   *
   */
  storage?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a form is submitted
   *
   */
  submit?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the browser is intentionally not getting media data
   *
   */
  suspend?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the playing position has changed (like when the user 
fast forwards to a different point in the media)
* 
*/
  timeupdate?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the user opens or closes the <details> element
   *
   */
  toggle?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the touch is interrupted
   *
   */
  touchcancel?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a finger is removed from a touch screen
   *
   */
  touchend?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a finger is dragged across the screen
   *
   */
  touchmove?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a finger is placed on a touch screen
   *
   */
  touchstart?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when a CSS transition has completed
   *
   */
  transitionend?: EventListenerOrEventListenerObject;

  /**
   * The event occurs once a page has unloaded (for <body>)
   *
   */
  unload?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the volume of the media has changed (includes setting the 
volume to "mute")
* 
*/
  volumechange?: EventListenerOrEventListenerObject;

  /**
* The event occurs when the media has paused but is expected to resume (like 
when the media pauses to buffer more data)
* 
*/
  waiting?: EventListenerOrEventListenerObject;

  /**
   * The event occurs when the mouse wheel rolls up or down over an element
   *
   */
  wheel?: EventListenerOrEventListenerObject;

  [key: string]: EventListenerOrEventListenerObject | undefined;
}
