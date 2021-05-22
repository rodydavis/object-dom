import { PossibleStyle } from "./dom/styles";

export interface CSSStyles {
  /**
* align-items
* 
* Specifies the alignment for items inside a flexible container
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **21.0**  | **20.0**  |   **9.07.0 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_align-items.asp
*/
  alignItems?: /**
   * Default. Items are stretched to fit the container
   *
   */
  | "stretch"

    /**
     * Items are positioned at the center of the container
     *
     */
    | "center"

    /**
     * Items are positioned at the beginning of the container
     *
     */
    | "flex-start"

    /**
     * Items are positioned at the end of the container
     *
     */
    | "flex-end"

    /**
     * Items are positioned at the baseline of the container
     *
     */
    | "baseline"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* align-self
* 
* Specifies the alignment for selected items inside a flexible container
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **21.0**  | **20.0**  |   **9.07.0 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_align-self.asp
*/
  alignSelf?: /**
   * Default. The element inherits its parent container's align-items property, or "stretch" if it has no parent container
   *
   */
  | "auto"

    /**
     * The element is positioned to fit the container
     *
     */
    | "stretch"

    /**
     * The element is positioned at the center of the container
     *
     */
    | "center"

    /**
     * The element is positioned at the beginning of the container
     *
     */
    | "flex-start"

    /**
     * The element is positioned at the end of the container
     *
     */
    | "flex-end"

    /**
     * The element is positioned at the baseline of the container
     *
     */
    | "baseline"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* all
* 
* Resets all properties (except unicode-bidi and direction)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **37.0**  | **27.0**  |   **9.1**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_all.asp
*/
  all?: /**
   * Changes all the properties applied to the element or the element's parent to their initial value
   *
   */
  | "initial"

    /**
     * Changes all the properties applied to the element or the element's parent to their parent value
     *
     */
    | "inherit"

    /**
     * Changes all the properties applied to the element or the element's parent to their parent value if they are inheritable or to their initial value if not
     *
     */
    | "unset";

  /**
* animation
* 
* A shorthand property for all the animation-* properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation.asp
*/
  animation?: /**
   * Specifies the name of the keyframe you want to bind to the selector
   *
   */
  | "animation-name"

    /**
     * Specifies how many seconds or milliseconds an animation takes to complete
     *
     */
    | "animation-duration"

    /**
     * Specifies the speed curve of the animation
     *
     */
    | "animation-timing-function"

    /**
     * Specifies a delay before the animation will start
     *
     */
    | "animation-delay"

    /**
     * Specifies how many times an animation should be played
     *
     */
    | "animation-iteration-count"

    /**
     * Specifies whether or not the animation should play in reverse on alternate cycles
     *
     */
    | "animation-direction"

    /**
     * Specifies what values are applied by the animation outside the time it is executing
     *
     */
    | "animation-fill-mode"

    /**
     * Specifies whether the animation is running or paused
     *
     */
    | "animation-play-state"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-delay
* 
* Specifies a delay for the start of an animation
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-delay.asp
*/
  animationDelay?: /**
* Optional. Defines the number of seconds (s) or milliseconds (ms) to wait before the animation will start. Default value is 0. Negative values are allowed. 
    If you use negative values, the animation will start as if it had already 
    been playing for N seconds/milliseconds.
* 
*/
  | "time"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-direction
* 
* Specifies whether an animation should be played forwards, backwards or 
    in alternate cycles
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-direction.asp
*/
  animationDirection?: /**
   * Default value. The animation is played as normal (forwards)
   *
   */
  | "normal"

    /**
     * The animation is played in reverse direction (backwards)
     *
     */
    | "reverse"

    /**
     * The animation is played forwards first, then backwards
     *
     */
    | "alternate"

    /**
     * The animation is played backwards first, then forwards
     *
     */
    | "alternate-reverse"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-duration
* 
* Specifies how long an animation should take to complete one cycle
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.03.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-duration.asp
*/
  animationDuration?: /**
* Specifies the length of time an 
animation should take to complete one cycle. This can be specified in seconds or 
    milliseconds. Default value is 0, which means that no animation will occur
* 
*/
  | "time"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-fill-mode
* 
* Specifies a style for the element when the animation is not playing (before 
    it starts, after it ends, or both)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp
*/
  animationFillMode?: /**
   * Default value. Animation will not apply any styles to the element before or after it is executing
   *
   */
  | "none"

    /**
     * The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
     *
     */
    | "forwards"

    /**
* The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during 
    the 
    animation-delay period
* 
*/
    | "backwards"

    /**
     * The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
     *
     */
    | "both"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-iteration-count
* 
* Specifies the number of times an animation should be played
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp
*/
  animationIterationCount?: /**
   * A number that defines how many times an animation should be played. Default value is 1
   *
   */
  | "number"

    /**
     * Specifies that the animation should be played infinite times (for ever)
     *
     */
    | "infinite"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-name
* 
* Specifies a name for the @keyframes animation
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-name.asp
*/
  animationName?: /**
   * Specifies the name of the keyframe you want to bind to the selector
   *
   */
  | "keyframename"

    /**
     * Default value. Specifies that there will be no animation (can be used to override animations coming from the cascade)
     *
     */
    | "none"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-play-state
* 
* Specifies whether the animation is running or paused
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp
*/
  animationPlayState?: /**
   * Specifies that the animation is paused
   *
   */
  | "paused"

    /**
     * Default value. Specifies that the animation is running
     *
     */
    | "running"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* animation-timing-function
* 
* Specifies the speed curve of an animation
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp
*/
  animationTimingFunction?: /**
   * The animation has the same speed from start to end
   *
   */
  | "linear"

    /**
     * Default value. The animation has a slow start, then fast, before it ends slowly
     *
     */
    | "ease"

    /**
     * The animation has a slow start
     *
     */
    | "ease-in"

    /**
     * The animation has a slow end
     *
     */
    | "ease-out"

    /**
     * The animation has both a slow start and a slow end
     *
     */
    | "ease-in-out"

    /**
     * Equivalent to steps(1, start)
     *
     */
    | "step-start"

    /**
     * Equivalent to steps(1, end)
     *
     */
    | "step-end"

    /**
* Specifies a stepping function, with two parameters. The first parameter specifies the number of intervals in the function. It must be a positive integer (greater than 0). The second parameter, which is optional, is either the value "start" or "end", and specifies the point at which the change of values occur within the interval. If the second parameter is omitted, it is given the value "end"
* 
Example: `steps(int,start|end)`
* 
*/
    | "steps"

    /**
* Define your own values in the cubic-bezier function
 Possible values are numeric values from 0 to 1
* 
Example: `cubic-bezier(n,n,n,n)`
* 
*/
    | "cubic-bezier"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit"
    | PossibleStyle;

  /**
* background
* 
* A shorthand property for all the background-* properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **1.0**  | **1.0**  |   **1.0**   | **4.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background.asp
*/
  background?: /**
   * Specifies the background color to be used
   *
   */
  | "background-color"

    /**
     * Specifies ONE or MORE background images to be used
     *
     */
    | "background-image"

    /**
     * Specifies the position of the background images
     *
     */
    | "background-position"

    /**
     * Specifies the size of the background images
     *
     */
    | "background-size"

    /**
     * Specifies how to repeat the background images
     *
     */
    | "background-repeat"

    /**
     * Specifies the positioning area of the background images
     *
     */
    | "background-origin"

    /**
     * Specifies the painting area of the background images
     *
     */
    | "background-clip"

    /**
     * Specifies whether the background images are fixed or scrolls with the rest of the page
     *
     */
    | "background-attachment"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* background-attachment
* 
* Sets whether a background image scrolls with the rest of the page, or is fixed
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-attachment.asp
*/
  backgroundAttachment?: PossibleStyle;

  /**
* background-blend-mode
* 
* Specifies the blending mode of each background layer (color/image)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-blend-mode.asp
*/
  backgroundBlendMode?: PossibleStyle;

  /**
* background-clip
* 
* Defines how far the background (color or image) should extend within an 
    element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **4.0**  |   **3.0**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-clip.asp
*/
  backgroundClip?: /**
   * Default value. The background extends behind the border
   *
   */
  | "border-box"

    /**
     * The background extends to the inside edge of the border
     *
     */
    | "padding-box"

    /**
     * The background extends to the edge of the content box
     *
     */
    | "content-box"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* background-color
* 
* Specifies the background color of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-color.asp
*/
  backgroundColor?: PossibleStyle;

  /**
* background-image
* 
* Specifies one or more background images for an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-image.asp
*/
  backgroundImage?: PossibleStyle;

  /**
* background-origin
* 
* Specifies the origin position of a background image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **4.0**  |   **3.0**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-origin.asp
*/
  backgroundOrigin?: /**
   * Default value. The background image starts from the upper left corner of the padding edge
   *
   */
  | "padding-box"

    /**
     * The background image starts from the upper left corner of the border
     *
     */
    | "border-box"

    /**
     * The background image starts from the upper left corner of the content
     *
     */
    | "content-box"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* background-position
* 
* Specifies the position of a background image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-position.asp
*/
  backgroundPosition?: PossibleStyle;

  /**
* background-repeat
* 
* Sets if/how a background image will be repeated
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-repeat.asp
*/
  backgroundRepeat?: PossibleStyle;

  /**
* background-size
* 
* Specifies the size of the background images
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.01.0 -webkit-**  | **4.03.6 -moz-**  |   **4.13.0 -webkit-**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_background-size.asp
*/
  backgroundSize?: /**
   * Default value. The background image is displayed in its original size
   *
   */
  | "auto"

    /**
     * Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto". Read about length units
     *
     */
    | "length"

    /**
     * Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto"
     *
     */
    | "percentage"

    /**
* Resize the background image to cover the entire container, even if it 
    has to stretch the image or cut a little bit off one of the edges
* 
*/
    | "cover"

    /**
     * Resize the background image to make sure the image is fully visible
     *
     */
    | "contain"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border
* 
* A shorthand property for border-width, border-style and border-color
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border.asp
*/
  border?: PossibleStyle;

  /**
* border-bottom
* 
* A shorthand property for border-bottom-width, border-bottom-style 
    and border-bottom-color
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-bottom.asp
*/
  borderBottom?: PossibleStyle;

  /**
* border-bottom-color
* 
* Sets the color of the bottom border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-bottom-color.asp
*/
  borderBottomColor?: PossibleStyle;

  /**
* border-bottom-left-radius
* 
* Defines the radius of the border of the bottom-left corner
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-bottom-left-radius.asp
*/
  borderBottomLeftRadius?: /**
   * Defines the shape of the bottom-left corner. Default value is 0. Read about length units
   *
   */
  | "length"

    /**
     * Defines the shape of the bottom-left corner in %
     *
     */
    | "%"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-bottom-right-radius
* 
* Defines the radius of the border of the bottom-right corner
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp
*/
  borderBottomRightRadius?: /**
   * Defines the shape of the bottom-right corner. Default value is 0. Read about length units
   *
   */
  | "length"

    /**
     * Defines the shape of the bottom-right corner in %
     *
     */
    | "%"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-bottom-style
* 
* Sets the style of the bottom border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-bottom-style.asp
*/
  borderBottomStyle?: PossibleStyle;

  /**
* border-bottom-width
* 
* Sets the width of the bottom border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-bottom-width.asp
*/
  borderBottomWidth?: PossibleStyle;

  /**
* border-collapse
* 
* Sets whether table borders should collapse into a single border or be separated
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-collapse.asp
*/
  borderCollapse?: PossibleStyle;

  /**
* border-color
* 
* Sets the color of the four borders
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-color.asp
*/
  borderColor?: PossibleStyle;

  /**
* border-image
* 
* A shorthand property for all the border-image-* properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **16.04.0 -webkit-**  | **15.03.5 -moz-**  |   **6.03.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-image.asp
*/
  borderImage?: /**
   * The path to the image to be used as a border
   *
   */
  | "border-image-source"

    /**
     * How to slice the border image
     *
     */
    | "border-image-slice"

    /**
     * The width of the border image
     *
     */
    | "border-image-width"

    /**
     * The amount by which the border image area extends beyond the border box
     *
     */
    | "border-image-outset"

    /**
     * Whether the border image should be repeated, rounded or stretched
     *
     */
    | "border-image-repeat"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-image-outset
* 
* Specifies the amount by which the border image area extends beyond the border box
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-image-outset.asp
*/
  borderImageOutset?: /**
   * A length unit specifying how far from the edges the border-image will appear. Default value is 0
   *
   */
  | "length"

    /**
     * Represent multiples of the corresponding border-width
     *
     */
    | "number"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-image-repeat
* 
* Specifies whether the border image should be repeated, rounded or stretched
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-image-repeat.asp
*/
  borderImageRepeat?: /**
   * Default value. The image is stretched to fill the area
   *
   */
  | "stretch"

    /**
     * The image is tiled (repeated) to fill the area
     *
     */
    | "repeat"

    /**
     * The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so it fits
     *
     */
    | "round"

    /**
     * The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles
     *
     */
    | "space"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-image-slice
* 
* Specifies how to slice the border image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-image-slice.asp
*/
  borderImageSlice?: /**
   * The number(s) represent pixels for raster images or coordinates for vector images
   *
   */
  | "number"

    /**
     * Percentages are relative to the height or width of the image
     *
     */
    | "%"

    /**
     * Causes the middle part of the image to be displayed
     *
     */
    | "fill"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-image-source
* 
* Specifies the path to the image to be used as a border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-image-source.asp
*/
  borderImageSource?: /**
   * No image will be used
   *
   */
  | "none"

    /**
     * The path to the image to be used as a border
     *
     */
    | "image"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-image-width
* 
* Specifies the width of the border image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **15.0**  | **13.0**  |   **6.0**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-image-width.asp
*/
  borderImageWidth?: /**
   * A length unit (px) specifying the size of the border-width
   *
   */
  | "length"

    /**
     * Default value 1. Represents multiples of the corresponding border-width
     *
     */
    | "number"

    /**
     * Refers to the size of the border image area: the width of the area for horizontal offsets, the height for vertical offsets
     *
     */
    | "%"

    /**
     * If specified, the width is the intrinsic width or height of the corresponding image slice
     *
     */
    | "auto"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-left
* 
* A shorthand property for all the border-left-* properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-left.asp
*/
  borderLeft?: PossibleStyle;

  /**
* border-left-color
* 
* Sets the color of the left border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-left-color.asp
*/
  borderLeftColor?: PossibleStyle;

  /**
* border-left-style
* 
* Sets the style of the left border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-left-style.asp
*/
  borderLeftStyle?: PossibleStyle;

  /**
* border-left-width
* 
* Sets the width of the left border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-left-width.asp
*/
  borderLeftWidth?: PossibleStyle;

  /**
* border-radius
* 
* A shorthand property for the four border-*-radius properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-radius.asp
*/
  borderRadius?: /**
   * Defines the shape of the corners. Default value is 0. Read about length units
   *
   */
  | "length"

    /**
     * Defines the shape of the corners in %
     *
     */
    | "%"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-right
* 
* A shorthand property for all the border-right-* properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-right.asp
*/
  borderRight?: PossibleStyle;

  /**
* border-right-color
* 
* Sets the color of the right border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-right-color.asp
*/
  borderRightColor?: PossibleStyle;

  /**
* border-right-style
* 
* Sets the style of the right border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-right-style.asp
*/
  borderRightStyle?: PossibleStyle;

  /**
* border-right-width
* 
* Sets the width of the right border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-right-width.asp
*/
  borderRightWidth?: PossibleStyle;

  /**
* border-spacing
* 
* Sets the distance between the borders of adjacent cells
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-spacing.asp
*/
  borderSpacing?: PossibleStyle;

  /**
* border-style
* 
* Sets the style of the four borders
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-style.asp
*/
  borderStyle?: PossibleStyle;

  /**
* border-top
* 
* A shorthand property for border-top-width, border-top-style and
    border-top-color
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-top.asp
*/
  borderTop?: PossibleStyle;

  /**
* border-top-color
* 
* Sets the color of the top border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-top-color.asp
*/
  borderTopColor?: PossibleStyle;

  /**
* border-top-left-radius
* 
* Defines the radius of the border of the top-left corner
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-top-left-radius.asp
*/
  borderTopLeftRadius?: /**
   * Defines the shape of the top-left corner. Read about length units
   *
   */
  | "length"

    /**
     * Defines the shape of the top-left corner in %
     *
     */
    | "%"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-top-right-radius
* 
* Defines the radius of the border of the top-right corner
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-top-right-radius.asp
*/
  borderTopRightRadius?: /**
   * Defines the shape of the top-right corner. Read about length units
   *
   */
  | "length"

    /**
     * Defines the shape of the top-right corner in %
     *
     */
    | "%"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* border-top-style
* 
* Sets the style of the top border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-top-style.asp
*/
  borderTopStyle?: PossibleStyle;

  /**
* border-top-width
* 
* Sets the width of the top border
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-top-width.asp
*/
  borderTopWidth?: PossibleStyle;

  /**
* border-width
* 
* Sets the width of the four borders
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_border-width.asp
*/
  borderWidth?: PossibleStyle;

  /**
* bottom
* 
* Sets the elements position, from the bottom of its parent element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_bottom.asp
*/
  bottom?: PossibleStyle;

  /**
* box-decoration-break
* 
* Sets the behavior of the background and border of an element at page-break, or, for  in-line elements, at line-break.
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **22.0 -webkit-**  | **32.0**  |   **6.1 -webkit-**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_box-decoration-break.asp
*/
  boxDecorationBreak?: /**
* Default. Box decorations are applied to the element as a whole and break at 
    the edges of the element fragments
* 
*/
  | "slice"

    /**
* Box decorations apply to each fragment of the element as if the 
    fragments were individual elements. Borders wrap the four edges of 
    each fragment of the element, and backgrounds are redrawn in full for each 
    fragment
* 
*/
    | "clone"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* box-shadow
* 
* Attaches one or more shadows to an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **10.04.0 -webkit-**  | **4.03.5 -moz-**  |   **5.13.1 -webkit-**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_box-shadow.asp
*/
  boxShadow?: /**
   * Default value. No shadow is displayed
   *
   */
  | "none"

    /**
* Required. The horizontal offset of the shadow. A positive value puts the 
    shadow on the right side of the box, a negative value puts the shadow on the 
    left side of the box
* 
*/
    | "h-offset"

    /**
* Required. The vertical offset of the shadow. A positive value puts the 
    shadow below the box, a negative value puts the shadow above the box
* 
*/
    | "v-offset"

    /**
* Optional. The blur radius. The higher the number, the more blurred the 
    shadow will be
* 
*/
    | "blur"

    /**
* Optional. The spread radius. A positive value increases the size of the 
    shadow, a negative value decreases the size of the shadow
* 
*/
    | "spread"

    /**
     * Optional. The color of the shadow. The default value is the text color. Look at CSS Color Values for a complete list of possible color values.Note: In Safari (on PC) the color parameter is required. If you do not specify the color, the shadow is not displayed at all.
     *
     */
    | "color"

    /**
     * Optional. Changes the shadow from an outer shadow (outset) to an inner shadow
     *
     */
    | "inset"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* box-sizing
* 
* Defines how the width and height of an element are calculated: should 
    they include padding and borders, or not
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **10.04.0 -webkit-**  | **29.02.0 -moz-**  |   **5.13.2 -webkit-**   | **8.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_box-sizing.asp
*/
  boxSizing?: /**
* Default. The width and height properties (and min/max properties) includes only the content. Border 
    and padding are not included
* 
*/
  | "content-box"

    /**
* The width and height properties (and min/max properties) includes 
    content, padding and border
* 
*/
    | "border-box"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* break-after
* 
* Specifies whether or not a page-, column-, or region-break should occur 
    after the specified element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_break-after.asp
*/
  breakAfter?: PossibleStyle;

  /**
* break-before
* 
* Specifies whether or not a page-, column-, or region-break should occur 
    before the specified element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_break-before.asp
*/
  breakBefore?: PossibleStyle;

  /**
* break-inside
* 
* Specifies whether or not a page-, column-, or region-break should occur 
    inside the specified element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_break-inside.asp
*/
  breakInside?: PossibleStyle;

  /**
* caret-color
* 
* Specifies the color of the cursor (caret) in inputs, textareas, or any 
    element that is editable
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **57.0**  | **53.0**  |   **11.1**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_caret-color.asp
*/
  caretColor?: /**
   * Default. Browsers uses the currentColor for the caret
   *
   */
  | "auto"

    /**
* Specifies a color to use for the caret. All legal color values can be used (rgb, 
    hex, named-color, etc). For more information on legal values, read our CSS 
    Colors Tutorial
* 
*/
    | "color"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* @charset
* 
* Specifies the character encoding used in the style sheet
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_@charset.asp
*/
  charset?: PossibleStyle;

  /**
* clear
* 
* Specifies on which sides of an element floating elements are not allowed to float
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_clear.asp
*/
  clear?: PossibleStyle;

  /**
* clip
* 
* Clips an absolutely positioned element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_clip.asp
*/
  clip?: PossibleStyle;

  /**
* color
* 
* Sets the color of text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_color.asp
*/
  color?: PossibleStyle;

  /**
* column-count
* 
* Specifies the number of columns an element should be divided into
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-count.asp
*/
  columnCount?: /**
   * The optimal number of columns into which the content of the element will be flowed
   *
   */
  | "number"

    /**
     * Default value. The number of columns will be determined by other properties, like e.g. "column-width"
     *
     */
    | "auto"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-fill
* 
* Specifies how to fill columns, balanced or not
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.0**  | **52.013.0 -moz-**  |   **10.07.0 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-fill.asp
*/
  columnFill?: /**
* Default value. Fills each column with about the same amount of content, 
    but will not allow the columns to be taller than the height (so, columns 
    might be shorter than the height as the browser distributes the content 
    evenly horizontally)
* 
*/
  | "balance"

    /**
* Fills each column until it reaches the height, and do this until it runs 
    out of content (so, this value will not necessarily fill all the columns nor 
    fill them evenly)
* 
*/
    | "auto"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-gap
* 
* Specifies the gap between the columns
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50**  | **52**  |   **10**   | **10** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-gap.asp
*/
  columnGap?: /**
   * A specified length that will set the gap between the columns
   *
   */
  | "length"

    /**
     * Default value. Specifies a normal gap between the columns. W3C suggests a value of 1em
     *
     */
    | "normal"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-rule
* 
* A shorthand property for all the column-rule-* properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-rule.asp
*/
  columnRule?: /**
   * Sets the width of the rule between columns. Default value is medium
   *
   */
  | "column-rule-width"

    /**
     * Sets the style of the rule between columns. Default value is none
     *
     */
    | "column-rule-style"

    /**
     * Sets the color of the rule between columns. Default value is the color of the element
     *
     */
    | "column-rule-color"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-rule-color
* 
* Specifies the color of the rule between columns
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp
*/
  columnRuleColor?: /**
   * Specifies the color of the rule. Look at CSS Color Values for a complete list of possible color values
   *
   */
  | "color"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-rule-style
* 
* Specifies the style of the rule between columns
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp
*/
  columnRuleStyle?: /**
   * Default value. Defines no rule
   *
   */
  | "none"

    /**
     * Defines a hidden rule
     *
     */
    | "hidden"

    /**
     * Defines a dotted rule
     *
     */
    | "dotted"

    /**
     * Defines a dashed rule
     *
     */
    | "dashed"

    /**
     * Defines a solid rule
     *
     */
    | "solid"

    /**
     * Defines a double rule
     *
     */
    | "double"

    /**
     * Specifies a 3D grooved rule. The effect depends on the width and color values
     *
     */
    | "groove"

    /**
     * Specifies a 3D ridged rule. The effect depends on the width and color values
     *
     */
    | "ridge"

    /**
     * Specifies a 3D inset rule. The effect depends on the width and color values
     *
     */
    | "inset"

    /**
     * Specifies a 3D outset rule. The effect depends on the width and color values
     *
     */
    | "outset"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-rule-width
* 
* Specifies the width of the rule between columns
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp
*/
  columnRuleWidth?: /**
   * Default value. Defines a medium rule
   *
   */
  | "medium"

    /**
     * Defines a thin rule
     *
     */
    | "thin"

    /**
     * Defines a thick rule
     *
     */
    | "thick"

    /**
     * Specifies the width of the rule
     *
     */
    | "length"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-span
* 
* Specifies how many columns an element should span across
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **71.0**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-span.asp
*/
  columnSpan?: /**
   * Default value. The element should span across one column
   *
   */
  | "none"

    /**
     * The element should span across all columns
     *
     */
    | "all"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* column-width
* 
* Specifies the column width
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_column-width.asp
*/
  columnWidth?: /**
   * Default value. The column width will be determined by the browser
   *
   */
  | "auto"

    /**
* A length that specifies the width of the columns. The number of columns 
    will be the minimum number of columns needed to show all the content across 
    the element. Read about length units
* 
*/
    | "length"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* columns
* 
* A shorthand property for column-width and column-count
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **50.04.0 -webkit-**  | **52.09.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_columns.asp
*/
  columns?: /**
   * Default value. Sets both the column-width and column-count to "auto"
   *
   */
  | "auto"

    /**
     * Defines the minimum width for each column
     *
     */
    | "column-width"

    /**
     * Defines the maximum number of columns
     *
     */
    | "column-count"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* content
* 
* Used with the :before and :after pseudo-elements, to insert generated content
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_content.asp
*/
  content?: PossibleStyle;

  /**
* counter-increment
* 
* Increases or decreases the value of one or more CSS counters
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_counter-increment.asp
*/
  counterIncrement?: PossibleStyle;

  /**
* counter-reset
* 
* Creates or resets one or more CSS counters
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_counter-reset.asp
*/
  counterReset?: PossibleStyle;

  /**
* cursor
* 
* Specifies the mouse cursor to be displayed when pointing over an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_cursor.asp
*/
  cursor?: PossibleStyle;

  /**
* display
* 
* Specifies how a certain HTML element should be displayed
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_display.asp
*/
  display?: PossibleStyle;

  /**
* flex
* 
* A shorthand property for the flex-grow, flex-shrink, and the 
    flex-basis 
    properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.010.0 -ms-** |
* 
@see https://www.w3schools.com/cssref/css3_pr_flex.asp
*/
  flex?: /**
   * A number specifying how much the item will grow relative to the rest of the flexible items
   *
   */
  | "flex-grow"

    /**
     * A number specifying how much the item will shrink relative to the rest of the flexible items
     *
     */
    | "flex-shrink"

    /**
     * The length of the item. Legal values: "auto", "inherit", or a number followed by "%", "px", "em" or any other length unit
     *
     */
    | "flex-basis"

    /**
     * Same as 1 1 auto.
     *
     */
    | "auto"

    /**
     * Same as 0 1 auto. Read about initial
     *
     */
    | "initial"

    /**
     * Same as 0 0 auto.
     *
     */
    | "none"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* flex-basis
* 
* Specifies the initial length of a flexible item
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_flex-basis.asp
*/
  flexBasis?: /**
   * A length unit, or percentage, specifying the initial length of the flexible item(s)
   *
   */
  | "number"

    /**
     * Default value. The length is equal to the length of the flexible item. If the item has no length specified, the length will be according to its content
     *
     */
    | "auto"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* flex-direction
* 
* Specifies the direction of the flexible items
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_flex-direction.asp
*/
  flexDirection?: /**
   * Default value. The flexible items are displayed horizontally, as a row
   *
   */
  | "row"

    /**
     * Same as row, but in reverse order
     *
     */
    | "row-reverse"

    /**
     * The flexible items are displayed vertically, as a column
     *
     */
    | "column"

    /**
     * Same as column, but in reverse order
     *
     */
    | "column-reverse"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* flex-flow
* 
* A shorthand property for the flex-direction and the flex-wrap properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_flex-flow.asp
*/
  flexFlow?: /**
* Possible values:rowrow-reversecolumncolumn-reverseinitialinherit
  Default value is "row".
  Specifying the direction of the flexible items
* 
*/
  | "flex-direction"

    /**
* Possible values:nowrapwrapwrap-reverseinitialinherit
  Default value is "nowrap".

  Specifying whether the flexible items should wrap or not
* 
*/
    | "flex-wrap"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* flex-grow
* 
* Specifies how much the item will grow relative to the rest
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_flex-grow.asp
*/
  flexGrow?: /**
   * A number specifying how much the item will grow relative to the rest of the flexible items. Default value is 0
   *
   */
  | "number"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* flex-shrink
* 
* Specifies how the item will shrink relative to the rest
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp
*/
  flexShrink?: /**
   * A number specifying how much the item will shrink relative to the rest of the flexible items. Default value is 1
   *
   */
  | "number"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* flex-wrap
* 
* Specifies whether the flexible items should wrap or not
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp
*/
  flexWrap?: /**
   * Default value. Specifies that the flexible items will not wrap
   *
   */
  | "nowrap"

    /**
     * Specifies that the flexible items will wrap if necessary
     *
     */
    | "wrap"

    /**
     * Specifies that the flexible items will wrap, if necessary, in reverse order
     *
     */
    | "wrap-reverse"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* float
* 
* Specifies whether or not a box should float
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_float.asp
*/
  float?: PossibleStyle;

  /**
* font
* 
* A shorthand property for the font-style, font-variant, font-weight, 
    font-size/line-height, and the font-family properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font.asp
*/
  font?: PossibleStyle;

  /**
* @font-face
* 
* A rule that allows websites to download and use fonts other than the "web-safe" fonts
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_@font-face.asp
*/
  fontFace?: PossibleStyle;

  /**
* font-family
* 
* Specifies the font family for text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-family.asp
*/
  fontFamily?: PossibleStyle;

  /**
* font-feature-settings
* 
* Allows control over advanced typographic features in OpenType fonts
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **48.016.0 -webkit-**  | **34.015.0 -moz-**  |   **9.1**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-feature-settings.asp
*/
  fontFeatureSettings?: /**
   * Default. Use the default settings to lay out text
   *
   */
  | "normal"

    /**
     * Format: string [1|0|on|off] Always a string of 4 ASCII characters.
     *
     */
    | "feature-value";

  /**
* @font-feature-values
* 
* Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_@font-feature-values.asp
*/
  fontFeatureValues?: PossibleStyle;

  /**
* font-kerning
* 
* Controls the usage of the kerning information (how letters are spaced)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **33.029.0 -webkit-**  | **34.0**  |   **9.17.0 -webkit-**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-kerning.asp
*/
  fontKerning?: /**
* Default. The browser determines whether font kerning should be applied or 
    not
* 
*/
  | "auto"

    /**
     * Specifies that font kerning is applied
     *
     */
    | "normal"

    /**
     * Specifies that font kerning is not applied
     *
     */
    | "none";

  /**
* font-language-override
* 
* Controls the usage of language-specific glyphs in a typeface
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Not supported**  | **34.0**  |   **Not supported**   | **Not supported** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-language-override.asp
*/
  fontLanguageOverride?: /**
* Default. The browser will use font glyphs that are appropriate for the 
    language defined with the lang attribute
* 
*/
  | "normal"

    /**
* The browser will use font glyphs that are appropriate for the language 
    defined by string
* 
*/
    | "string";

  /**
* font-size
* 
* Specifies the font size of text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-size.asp
*/
  fontSize?: PossibleStyle;

  /**
* font-size-adjust
* 
* Preserves the readability of text when font fallback occurs
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Not supported**  | **3.0**  |   **Not supported**   | **Not supported** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-size-adjust.asp
*/
  fontSizeAdjust?: /**
   * Defines the aspect value to use
   *
   */
  | "number"

    /**
     * Default value. No font size adjustment
     *
     */
    | "none"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* font-stretch
* 
* Selects a normal, condensed, or expanded face from a font family
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **48.0**  | **9.0**  |   **11.0**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-stretch.asp
*/
  fontStretch?: /**
   * Makes the text as narrow as it gets
   *
   */
  | "ultra-condensed"

    /**
     * Makes the text narrower than condensed, but not as narrow as ultra-condensed
     *
     */
    | "extra-condensed"

    /**
     * Makes the text narrower than semi-condensed, but not as narrow as extra-condensed
     *
     */
    | "condensed"

    /**
     * Makes the text narrower than normal, but not as narrow as condensed
     *
     */
    | "semi-condensed"

    /**
     * Default value. No font stretching
     *
     */
    | "normal"

    /**
     * Makes the text wider than normal, but not as wide as expanded
     *
     */
    | "semi-expanded"

    /**
     * Makes the text wider than semi-expanded, but not as wide as extra-expanded
     *
     */
    | "expanded"

    /**
     * Makes the text wider than expanded, but not as wide as ultra-expanded
     *
     */
    | "extra-expanded"

    /**
     * Makes the text as wide as it gets
     *
     */
    | "ultra-expanded"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* font-style
* 
* Specifies the font style for text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-style.asp
*/
  fontStyle?: PossibleStyle;

  /**
* font-synthesis
* 
* Controls which missing typefaces (bold or italic) may be synthesized by the browser
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-synthesis.asp
*/
  fontSynthesis?: PossibleStyle;

  /**
* font-variant
* 
* Specifies whether or not a text should be displayed in a small-caps font
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-variant.asp
*/
  fontVariant?: PossibleStyle;

  /**
* font-variant-alternates
* 
* Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-variant-alternates.asp
*/
  fontVariantAlternates?: PossibleStyle;

  /**
* font-variant-caps
* 
* Controls the usage of alternate glyphs for capital letters
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **52.0**  | **34.0**  |   **Not supported**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-variant-caps.asp
*/
  fontVariantCaps?: /**
   * Deactivates the use of alternate glyphs
   *
   */
  | "normal"

    /**
     * Displays small capitals
     *
     */
    | "small-caps"

    /**
     * Displays small capitals for both upper and lowercase letters
     *
     */
    | "all-small-caps"

    /**
     * Displays petite capitals
     *
     */
    | "petite-caps"

    /**
     * Displays petite capitals for both upper and lowercase letters
     *
     */
    | "all-petite-caps"

    /**
* Displays a mix of small capitals for uppercase letters with normal 
    lowercase letters
* 
*/
    | "unicase"

    /**
     * Displays titling capitals
     *
     */
    | "titling-caps"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit"

    /**
     */
    | "unset";

  /**
* font-variant-east-asian
* 
* Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **63.0**  | **34.0**  |   **Not supported**   | **Not supported** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-variant-east-asian.asp
*/
  fontVariantEastAsian?: /**
   * Deactivates of the use of alternate glyphs
   *
   */
  | "normal"

    /**
     */
    | "ruby"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit"

    /**
     */
    | "unset";

  /**
* font-variant-ligatures
* 
* Controls which ligatures and contextual forms are used in textual content of the elements it applies to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-variant-ligatures.asp
*/
  fontVariantLigatures?: PossibleStyle;

  /**
* font-variant-numeric
* 
* Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-variant-numeric.asp
*/
  fontVariantNumeric?: PossibleStyle;

  /**
* font-variant-position
* 
* Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-variant-position.asp
*/
  fontVariantPosition?: PossibleStyle;

  /**
* font-weight
* 
* Specifies the weight of a font
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_font-weight.asp
*/
  fontWeight?: PossibleStyle;

  /**
* grid
* 
* A shorthand property for the grid-template-rows, 
    grid-template-columns, grid-template-areas, grid-auto-rows, 
    grid-auto-columns, and the grid-auto-flow properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid.asp
*/
  grid?: PossibleStyle;

  /**
* grid-area
* 
* Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-area.asp
*/
  gridArea?: PossibleStyle;

  /**
* grid-auto-columns
* 
* Specifies a default column size
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-auto-columns.asp
*/
  gridAutoColumns?: PossibleStyle;

  /**
* grid-auto-flow
* 
* Specifies how auto-placed items are inserted in the grid
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-auto-flow.asp
*/
  gridAutoFlow?: PossibleStyle;

  /**
* grid-auto-rows
* 
* Specifies a default row size
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-auto-rows.asp
*/
  gridAutoRows?: PossibleStyle;

  /**
* grid-column
* 
* A shorthand property for the grid-column-start and the grid-column-end properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-column.asp
*/
  gridColumn?: PossibleStyle;

  /**
* grid-column-end
* 
* Specifies where to end the grid item
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-column-end.asp
*/
  gridColumnEnd?: PossibleStyle;

  /**
* grid-column-gap
* 
* Specifies the size of the gap between columns
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-column-gap.asp
*/
  gridColumnGap?: PossibleStyle;

  /**
* grid-column-start
* 
* Specifies where to start the grid item
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-column-start.asp
*/
  gridColumnStart?: PossibleStyle;

  /**
* grid-gap
* 
* A shorthand property for the grid-row-gap and grid-column-gap properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-gap.asp
*/
  gridGap?: PossibleStyle;

  /**
* grid-row
* 
* A shorthand property for the grid-row-start and the grid-row-end properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-row.asp
*/
  gridRow?: PossibleStyle;

  /**
* grid-row-end
* 
* Specifies where to end the grid item
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-row-end.asp
*/
  gridRowEnd?: PossibleStyle;

  /**
* grid-row-gap
* 
* Specifies the size of the gap between rows
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-row-gap.asp
*/
  gridRowGap?: PossibleStyle;

  /**
* grid-row-start
* 
* Specifies where to start the grid item
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-row-start.asp
*/
  gridRowStart?: PossibleStyle;

  /**
* grid-template
* 
* A shorthand property for the grid-template-rows, grid-template-columns 
    and grid-areas properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-template.asp
*/
  gridTemplate?: PossibleStyle;

  /**
* grid-template-areas
* 
* Specifies how to display columns and rows, using named grid items
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-template-areas.asp
*/
  gridTemplateAreas?: PossibleStyle;

  /**
* grid-template-columns
* 
* Specifies the size of the columns, and how many columns in a grid layout
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-template-columns.asp
*/
  gridTemplateColumns?: PossibleStyle;

  /**
* grid-template-rows
* 
* Specifies the size of the rows in a grid layout
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_grid-template-rows.asp
*/
  gridTemplateRows?: PossibleStyle;

  /**
* height
* 
* Sets the height of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_height.asp
*/
  height?: PossibleStyle;

  /**
* hyphens
* 
* Sets how to split words to improve the layout of paragraphs
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **55.0**  | **43.0**  |   **5.1 -webkit-**   | **79.010.0 -ms-** |
* 
@see https://www.w3schools.com/cssref/css3_pr_hyphens.asp
*/
  hyphens?: /**
   * Words are not hyphenated
   *
   */
  | "none"

    /**
     * Default. Words are only hyphenated at &hyphen; or &shy; (if needed)
     *
     */
    | "manual"

    /**
     * Words are hyphenated where the algorithm is deciding (if needed)
     *
     */
    | "auto"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* @import
* 
* Allows you to import a style sheet into another style sheet
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_@import.asp
*/
  import?: PossibleStyle;

  /**
* isolation
* 
* Defines whether an element must create a new stacking content
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **41.0**  | **36.0**  |   **Yes**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_isolation.asp
*/
  isolation?: /**
   * Default. A new stacking context is created only if one of the properties applied to the element requires it
   *
   */
  | "auto"

    /**
     * A new stacking context must be created
     *
     */
    | "isolate"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* letter-spacing
* 
* Increases or decreases the space between characters in a text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_letter-spacing.asp
*/
  letterSpacing?: PossibleStyle;

  /**
* line-break
* 
* Specifies how/if to break lines
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_line-break.asp
*/
  lineBreak?: PossibleStyle;

  /**
* line-height
* 
* Sets the line height
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_line-height.asp
*/
  lineHeight?: PossibleStyle;

  /**
* list-style
* 
* Sets all the properties for a list in one declaration
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_list-style.asp
*/
  listStyle?: PossibleStyle;

  /**
* list-style-image
* 
* Specifies an image as the list-item marker
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_list-style-image.asp
*/
  listStyleImage?: PossibleStyle;

  /**
* list-style-position
* 
* Specifies the position of the list-item markers (bullet points)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_list-style-position.asp
*/
  listStylePosition?: PossibleStyle;

  /**
* list-style-type
* 
* Specifies the type of list-item marker
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_list-style-type.asp
*/
  listStyleType?: PossibleStyle;

  /**
* margin-bottom
* 
* Sets the bottom margin of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_margin-bottom.asp
*/
  marginBottom?: PossibleStyle;

  /**
* margin-left
* 
* Sets the left margin of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_margin-left.asp
*/
  marginLeft?: PossibleStyle;

  /**
* margin-right
* 
* Sets the right margin of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_margin-right.asp
*/
  marginRight?: PossibleStyle;

  /**
* margin-top
* 
* Sets the top margin of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_margin-top.asp
*/
  marginTop?: PossibleStyle;

  /**
* mask
* 
* Hides an element by masking or clipping the image at specific places
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_mask.asp
*/
  mask?: PossibleStyle;

  /**
* mask-type
* 
* Specifies whether a mask element is used as a luminance or an alpha mask
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_mask-type.asp
*/
  maskType?: PossibleStyle;

  /**
* max-height
* 
* Sets the maximum height of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_max-height.asp
*/
  maxHeight?: PossibleStyle;

  /**
* max-width
* 
* Sets the maximum width of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_max-width.asp
*/
  maxWidth?: PossibleStyle;

  /**
* @media
* 
* Sets the style rules for different media types/devices/sizes
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_@media.asp
*/
  media?: PossibleStyle;

  /**
* min-height
* 
* Sets the minimum height of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_min-height.asp
*/
  minHeight?: PossibleStyle;

  /**
* min-width
* 
* Sets the minimum width of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_min-width.asp
*/
  minWidth?: PossibleStyle;

  /**
* mix-blend-mode
* 
* Specifies how an element's content should blend with its direct parent background
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_mix-blend-mode.asp
*/
  mixBlendMode?: PossibleStyle;

  /**
* object-position
* 
* Specifies the alignment of the replaced element inside its box
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **31.0**  | **36.0**  |   **10.0**   | **16.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_object-position.asp
*/
  objectPosition?: /**
* Specifies the position of the image or video inside its content box. First value controls the 
    x-axis and the second value controls the y-axis. Can be a string (left, 
    center or right), or a number (in px or %). Negative values are allowed
* 
*/
  | "position"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* opacity
* 
* Sets the opacity level for an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **2.0**  |   **3.1**   | **9.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_opacity.asp
*/
  opacity?: /**
   * Specifies the opacity. From 0.0 (fully transparent) to 1.0 (fully opaque)
   *
   */
  | "number"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* order
* 
* Sets the order of the flexible item, relative to the rest
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_order.asp
*/
  order?: /**
   * Default value 0. Specifies the order for the flexible item
   *
   */
  | "number"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* orphans
* 
* Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_orphans.asp
*/
  orphans?: PossibleStyle;

  /**
* outline
* 
* A shorthand property for the outline-width, outline-style, and 
    the outline-color properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_outline.asp
*/
  outline?: PossibleStyle;

  /**
* outline-color
* 
* Sets the color of an outline
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_outline-color.asp
*/
  outlineColor?: PossibleStyle;

  /**
* outline-offset
* 
* Offsets an outline, and draws it beyond the border edge
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **3.1**   | **15.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_outline-offset.asp
*/
  outlineOffset?: /**
   * The distance the outline is outset from the border edge. Default value is 0
   *
   */
  | "length"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* outline-style
* 
* Sets the style of an outline
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_outline-style.asp
*/
  outlineStyle?: PossibleStyle;

  /**
* outline-width
* 
* Sets the width of an outline
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_outline-width.asp
*/
  outlineWidth?: PossibleStyle;

  /**
* overflow
* 
* Specifies what happens if content overflows an element's box
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_overflow.asp
*/
  overflow?: PossibleStyle;

  /**
* overflow-wrap
* 
* Specifies whether or not the browser may break lines within words in order to prevent overflow (when a string is too long to fit its containing box)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_overflow-wrap.asp
*/
  overflowWrap?: PossibleStyle;

  /**
* overflow-x
* 
* Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **3.0**   | **9.08.0 -ms-** |
* 
@see https://www.w3schools.com/cssref/css3_pr_overflow-x.asp
*/
  overflowX?: /**
* The content is not clipped, and it may be rendered outside the left and 
    right edges. This is default
* 
*/
  | "visible"

    /**
     * The content is clipped - and no scrolling mechanism is provided
     *
     */
    | "hidden"

    /**
     * The content is clipped and a scrolling mechanism is provided
     *
     */
    | "scroll"

    /**
     * Should cause a scrolling mechanism to be provided for overflowing boxes
     *
     */
    | "auto"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* overflow-y
* 
* Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **1.5**  |   **3.0**   | **9.08.0 -ms-** |
* 
@see https://www.w3schools.com/cssref/css3_pr_overflow-y.asp
*/
  overflowY?: /**
* The content is not clipped, and it may be rendered outside the content box. 
    This is default
* 
*/
  | "visible"

    /**
     * The content is clipped - and no scrolling mechanism is provided
     *
     */
    | "hidden"

    /**
     * The content is clipped and a scrolling mechanism is provided
     *
     */
    | "scroll"

    /**
     * Should cause a scrolling mechanism to be provided for overflowing boxes
     *
     */
    | "auto"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* padding-bottom
* 
* Sets the bottom padding of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_padding-bottom.asp
*/
  paddingBottom?: PossibleStyle;

  /**
* padding-left
* 
* Sets the left padding of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_padding-left.asp
*/
  paddingLeft?: PossibleStyle;

  /**
* padding-right
* 
* Sets the right padding of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_padding-right.asp
*/
  paddingRight?: PossibleStyle;

  /**
* padding-top
* 
* Sets the top padding of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_padding-top.asp
*/
  paddingTop?: PossibleStyle;

  /**
* page-break-after
* 
* Sets the page-break behavior after an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_page-break-after.asp
*/
  pageBreakAfter?: PossibleStyle;

  /**
* page-break-before
* 
* Sets the page-break behavior before an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_page-break-before.asp
*/
  pageBreakBefore?: PossibleStyle;

  /**
* page-break-inside
* 
* Sets the page-break behavior inside an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_page-break-inside.asp
*/
  pageBreakInside?: PossibleStyle;

  /**
* perspective
* 
* Gives a 3D-positioned element some perspective
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **36.012.0 -webkit-**  | **16.010.0 -moz-**  |   **9.04.0.3 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_perspective.asp
*/
  perspective?: PossibleStyle;

  /**
* perspective-origin
* 
* Defines at which position the user is looking at the 3D-positioned element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **36.012.0 -webkit-**  | **16.010.0 -moz-**  |   **9.04.0.3 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_perspective-origin.asp
*/
  perspectiveOrigin?: PossibleStyle;

  /**
* pointer-events
* 
* Defines whether or not an element reacts to pointer events
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **2.0**  | **3.6**  |   **4.0**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_pointer-events.asp
*/
  pointerEvents?: PossibleStyle;

  /**
* position
* 
* Specifies the type of positioning method used for an element (static, relative, absolute or fixed)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_position.asp
*/
  position?: PossibleStyle;

  /**
* right
* 
* Specifies the right position of a positioned element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_right.asp
*/
  right?: PossibleStyle;

  /**
* row-gap
* 
* Specifies the gap between the grid rows
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **66**  | **61**  |   **12.1**   | **16** |
* 
@see https://www.w3schools.com/cssref/css3_pr_row-gap.asp
*/
  rowGap?: /**
   * A specified length or % that will set the gap between the rows
   *
   */
  | "length"

    /**
     * Default value. Specifies a normal gap between the rows
     *
     */
    | "normal"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* table-layout
* 
* Defines the algorithm used to lay out table cells, rows, and columns
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_table-layout.asp
*/
  tableLayout?: PossibleStyle;

  /**
* text-align
* 
* Specifies the horizontal alignment of text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-align.asp
*/
  textAlign?: PossibleStyle;

  /**
* text-align-last
* 
* Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **47.0**  | **49.012.0 -moz-**  |   **Not supported**   | **5.5*** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-align-last.asp
*/
  textAlignLast?: /**
   * Default value. The last line is justified and aligned left
   *
   */
  | "auto"

    /**
     * The last line is aligned to the left
     *
     */
    | "left"

    /**
     * The last line is aligned to the right
     *
     */
    | "right"

    /**
     * The last line is center-aligned
     *
     */
    | "center"

    /**
     * The last line is justified as the rest of the lines
     *
     */
    | "justify"

    /**
     * The last line is aligned at the beginning of the line (left if the text-direction is left-to-right, and right is the text-direction is right-to-left)
     *
     */
    | "start"

    /**
     * The last line is aligned at the end of the line (right if the text-direction is left-to-right, and left is the text-direction is right-to-left)
     *
     */
    | "end"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* text-combine-upright
* 
* Specifies the combination of multiple characters into the space of a single character
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-combine-upright.asp
*/
  textCombineUpright?: PossibleStyle;

  /**
* text-decoration
* 
* Specifies the decoration added to text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-decoration.asp
*/
  textDecoration?: PossibleStyle;

  /**
* text-decoration-color
* 
* Specifies the color of the text-decoration
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **57.0**  | **36.06.0 -moz-**  |   **7.1 -webkit-**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-decoration-color.asp
*/
  textDecorationColor?: /**
   * Specifies the color of the text-decoration
   *
   */
  | "color"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* text-decoration-line
* 
* Specifies the type of line in a text-decoration
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **57.0**  | **36.06.0 -moz-**  |   **7.1 -webkit-**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-decoration-line.asp
*/
  textDecorationLine?: /**
   * Default value. Specifies no line for the text-decoration
   *
   */
  | "none"

    /**
     * Specifies that a line will be displayed under the text
     *
     */
    | "underline"

    /**
     * Specifies that a line will be displayed over the text
     *
     */
    | "overline"

    /**
     * Specifies that a line will be displayed through the text
     *
     */
    | "line-through"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* text-decoration-style
* 
* Specifies the style of the line in a text decoration
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **57.0**  | **36.06.0 -moz-**  |   **12.1**   | **79.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-decoration-style.asp
*/
  textDecorationStyle?: /**
   * Default value. The line will display as a single line
   *
   */
  | "solid"

    /**
     * The line will display as a double line
     *
     */
    | "double"

    /**
     * The line will display as a dotted line
     *
     */
    | "dotted"

    /**
     * The line will display as a dashed line
     *
     */
    | "dashed"

    /**
     * The line will display as a wavy line
     *
     */
    | "wavy"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* text-indent
* 
* Specifies the indentation of the first line in a text-block
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-indent.asp
*/
  textIndent?: PossibleStyle;

  /**
* text-justify
* 
* Specifies the justification method used when text-align is "justify"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes***  | **55.0**  |   **10.0.3**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-justify.asp
*/
  textJustify?: /**
   * The browser determines the justification algorithm
   *
   */
  | "auto"

    /**
     * Increases/Decreases the space between words
     *
     */
    | "inter-word"

    /**
     * Increases/Decreases the space between characters
     *
     */
    | "inter-character"

    /**
     * Disables justification methods
     *
     */
    | "none"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* text-orientation
* 
* Defines the orientation of the text in a line
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-orientation.asp
*/
  textOrientation?: PossibleStyle;

  /**
* text-overflow
* 
* Specifies what should happen when text overflows the containing element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **7.0**  |   **3.1**   | **6.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-overflow.asp
*/
  textOverflow?: /**
   * Default value. The text is clipped and not accessible
   *
   */
  | "clip"

    /**
     * Render an ellipsis ("...") to represent the clipped text
     *
     */
    | "ellipsis"

    /**
     * Render the given string to represent the clipped text
     *
     */
    | "string"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* text-shadow
* 
* Adds shadow to text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **4.0**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-shadow.asp
*/
  textShadow?: /**
   * Required. The position of the horizontal shadow. Negative values are allowed
   *
   */
  | "h-shadow"

    /**
     * Required. The position of the vertical shadow. Negative values are allowed
     *
     */
    | "v-shadow"

    /**
     * Optional. The blur radius. Default value is 0
     *
     */
    | "blur-radius"

    /**
     * Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values
     *
     */
    | "color"

    /**
     * Default value. No shadow
     *
     */
    | "none"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* text-transform
* 
* Controls the capitalization of text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-transform.asp
*/
  textTransform?: PossibleStyle;

  /**
* text-underline-position
* 
* Specifies the position of the underline which is set using the text-decoration property
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_text-underline-position.asp
*/
  textUnderlinePosition?: PossibleStyle;

  /**
* top
* 
* Specifies the top position of a positioned element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_top.asp
*/
  top?: PossibleStyle;

  /**
* transform
* 
* Applies a 2D or 3D transformation to an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **36.04.0 -webkit-**  | **16.03.5 -moz-**  |   **9.03.2 -webkit-**   | **10.09.0 -ms-** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transform.asp
*/
  transform?: /**
   * Defines that there should be no transformation
   *
   */
  | "none"

    /**
* Defines a 2D transformation, using a matrix of six values
* 
Example: `matrix(n,n,n,n,n,n)`
* 
*/
    | "matrix"

    /**
* Defines a 3D transformation, using a 4x4 matrix of 16 values
* 
Example: `matrix3d (n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)`
* 
*/
    | "matrix3d "

    /**
* Defines a 2D translation
* 
Example: `translate(x,y)`
* 
*/
    | "translate"

    /**
* Defines a 3D translation
* 
Example: `translate3d(x,y,z)`
* 
*/
    | "translate3d"

    /**
* Defines a translation, using only the value for the X-axis
* 
Example: `translateX(x)`
* 
*/
    | "translateX"

    /**
* Defines a translation, using only the value for the Y-axis
* 
Example: `translateY(y)`
* 
*/
    | "translateY"

    /**
* Defines a 3D translation, using only the value for the Z-axis
* 
Example: `translateZ(z)`
* 
*/
    | "translateZ"

    /**
* Defines a 2D scale transformation
* 
Example: `scale(x,y)`
* 
*/
    | "scale"

    /**
* Defines a 3D scale transformation
* 
Example: `scale3d(x,y,z)`
* 
*/
    | "scale3d"

    /**
* Defines a scale transformation by giving a value for the X-axis
* 
Example: `scaleX(x)`
* 
*/
    | "scaleX"

    /**
* Defines a scale transformation by giving a value for the Y-axis
* 
Example: `scaleY(y)`
* 
*/
    | "scaleY"

    /**
* Defines a 3D scale transformation by giving a value for the Z-axis
* 
Example: `scaleZ(z)`
* 
*/
    | "scaleZ"

    /**
* Defines a 2D rotation, the angle is specified in the  parameter
* 
Example: `rotate(angle)`
* 
*/
    | "rotate"

    /**
* Defines a 3D rotation
* 
Example: `rotate3d(x,y,z,angle)`
* 
*/
    | "rotate3d"

    /**
* Defines a 3D rotation along the X-axis
* 
Example: `rotateX(angle)`
* 
*/
    | "rotateX"

    /**
* Defines a 3D rotation along the Y-axis
* 
Example: `rotateY(angle)`
* 
*/
    | "rotateY"

    /**
* Defines a 3D rotation along the Z-axis
* 
Example: `rotateZ(angle)`
* 
*/
    | "rotateZ"

    /**
* Defines a 2D skew transformation along the X- and the Y-axis
* 
Example: `skew(x-angle,y-angle)`
* 
*/
    | "skew"

    /**
* Defines a 2D skew transformation along the X-axis
* 
Example: `skewX(angle)`
* 
*/
    | "skewX"

    /**
* Defines a 2D skew transformation along the Y-axis
* 
Example: `skewY(angle)`
* 
*/
    | "skewY"

    /**
* Defines a perspective view for a 3D transformed element
* 
Example: `perspective(n)`
* 
*/
    | "perspective"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit"
    | PossibleStyle;

  /**
* transform-origin
* 
* Allows you to change the position on transformed elements
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **36.04.0 -webkit-**  | **16.03.5 -moz-**  |   **9.03.2 -webkit-**   | **10.09.0 -ms-** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transform-origin.asp
*/
  transformOrigin?: PossibleStyle;

  /**
* transform-style
* 
* Specifies how nested elements are rendered in 3D space
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **36.012.0 -webkit-**  | **16.010.0 -moz-**  |   **9.04.0 -webkit-**   | **11.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transform-style.asp
*/
  transformStyle?: PossibleStyle;

  /**
* transition
* 
* A shorthand property for all the transition-* properties
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transition.asp
*/
  transition?: /**
   * Specifies the name of the CSS property the transition effect is for
   *
   */
  | "transition-property"

    /**
     * Specifies how many seconds or milliseconds the transition effect takes to complete
     *
     */
    | "transition-duration"

    /**
     * Specifies the speed curve of the transition effect
     *
     */
    | "transition-timing-function"

    /**
     * Defines when the transition effect will start
     *
     */
    | "transition-delay"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* transition-delay
* 
* Specifies when the transition effect will start
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transition-delay.asp
*/
  transitionDelay?: /**
   * Specifies the number of seconds or milliseconds to wait before the transition effect will start
   *
   */
  | "time"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* transition-duration
* 
* Specifies how many seconds or milliseconds a transition effect takes to complete
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transition-duration.asp
*/
  transitionDuration?: /**
   * Specifies how many seconds or milliseconds a transition effect takes to complete. Default value is 0s, meaning there will be no effect
   *
   */
  | "time"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* transition-property
* 
* Specifies the name of the CSS property the transition effect is for
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transition-property.asp
*/
  transitionProperty?: /**
   * No property will get a transition effect
   *
   */
  | "none"

    /**
     * Default value. All properties will get a transition effect
     *
     */
    | "all"

    /**
     * Defines a comma separated list of CSS property names the transition effect is for
     *
     */
    | "property"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* transition-timing-function
* 
* Specifies the speed curve of the transition effect
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp
*/
  transitionTimingFunction?: /**
   * Default value. Specifies a transition effect with a slow start, then fast, then end slowly (equivalent to cubic-bezier(0.25,0.1,0.25,1))
   *
   */
  | "ease"

    /**
     * Specifies a transition effect with the same speed from start to end (equivalent to cubic-bezier(0,0,1,1))
     *
     */
    | "linear"

    /**
     * Specifies a transition effect with a slow start (equivalent to cubic-bezier(0.42,0,1,1))
     *
     */
    | "ease-in"

    /**
     * Specifies a transition effect with a slow end (equivalent to cubic-bezier(0,0,0.58,1))
     *
     */
    | "ease-out"

    /**
     * Specifies a transition effect with a slow start and end (equivalent to cubic-bezier(0.42,0,0.58,1))
     *
     */
    | "ease-in-out"

    /**
     * Equivalent to steps(1, start)
     *
     */
    | "step-start"

    /**
     * Equivalent to steps(1, end)
     *
     */
    | "step-end"

    /**
* Specifies a stepping function, with two parameters. The first parameter specifies the number of intervals in the function. It must be a positive integer (greater than 0). The second parameter, which is optional, is either the value "start" or "end", and specifies the point at which the change of values occur within the interval. If the second parameter is omitted, it is given the value "end"
* 
Example: `steps(int,start|end)`
* 
*/
    | "steps"

    /**
* Define your own values in the cubic-bezier function.
 Possible values are numeric values from 0 to 1
* 
Example: `cubic-bezier(n,n,n,n)`
* 
*/
    | "cubic-bezier"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit"
    | PossibleStyle;

  /**
* user-select
* 
* Specifies whether the text of an element can be selected
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **54.06.0 -webkit-**  | **69.02.0 -moz-**  |   **3.1 -webkit-**   | **79.010.0 -ms-** |
* 
@see https://www.w3schools.com/cssref/css3_pr_user-select.asp
*/
  userSelect?: /**
   * Default. Text can be selected if the browser allows it
   *
   */
  | "auto"

    /**
     * Prevent text selection
     *
     */
    | "none"

    /**
     * The text can be selected by the user
     *
     */
    | "text"

    /**
     * Text selection is made with one click instead of a double-click
     *
     */
    | "all";

  /**
* visibility
* 
* Specifies whether or not an element is visible
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_visibility.asp
*/
  visibility?: PossibleStyle;

  /**
* widows
* 
* Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_widows.asp
*/
  widows?: PossibleStyle;

  /**
* width
* 
* Sets the width of an element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_width.asp
*/
  width?: PossibleStyle;

  /**
* word-break
* 
* Specifies how words should break when reaching the end of a line
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **15.0**  |   **3.1**   | **5.5** |
* 
@see https://www.w3schools.com/cssref/css3_pr_word-break.asp
*/
  wordBreak?: /**
   * Default value. Uses default line break rules
   *
   */
  | "normal"

    /**
     * To prevent overflow, word may be broken at any character
     *
     */
    | "break-all"

    /**
* Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. 
    Non-CJK text behavior is the same as value "normal"
* 
*/
    | "keep-all"

    /**
     * To prevent overflow, word may be broken at arbitrary points
     *
     */
    | "break-word"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* word-spacing
* 
* Increases or decreases the space between words in a text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/cssref/css3_pr_word-spacing.asp
*/
  wordSpacing?: PossibleStyle;

  /**
* word-wrap
* 
* Allows long, unbreakable words to be broken and wrap to the next line
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **3.1**   | **5.5** |
* 
@see https://www.w3schools.com/cssref/css3_pr_word-wrap.asp
*/
  wordWrap?: /**
   * Break words only at allowed break points
   *
   */
  | "normal"

    /**
     * Allows unbreakable words to be broken
     *
     */
    | "break-word"

    /**
     * Sets this property to its default value. Read about initial
     *
     */
    | "initial"

    /**
     * Inherits this property from its parent element. Read about inherit
     *
     */
    | "inherit";

  /**
* writing-mode
* 
* Specifies whether lines of text are laid out horizontally or vertically
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **48.0**  | **41.0**  |   **11.0**   | **12.0** |
* 
@see https://www.w3schools.com/cssref/css3_pr_writing-mode.asp
*/
  writingMode?: /**
* Let the content flow horizontally from left to right, vertically from 
    top to bottom
* 
*/
  | "horizontal-tb"

    /**
* Let the content flow vertically from top to bottom, horizontally from 
    right to left
* 
*/
    | "vertical-rl"

    /**
* Let the content flow vertically from top to bottom, horizontally from 
    left to right
* 
*/
    | "vertical-lr";

  [key: string]: PossibleStyle | undefined;
}
