import { PossibleStyle } from "./dom/styles";
export interface CSSStyles {
    /**
  * Specifies the alignment for items inside a flexible container
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **21.0**  | **20.0**  |   **9.07.0 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_align-items.asp
  */
    alignItems?: PossibleStyle;
    /**
  * Specifies the alignment for selected items inside a flexible container
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **21.0**  | **20.0**  |   **9.07.0 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_align-self.asp
  */
    alignSelf?: PossibleStyle;
    /**
  * Resets all properties (except unicode-bidi and direction)
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **37.0**  | **27.0**  |   **9.1**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_all.asp
  */
    all?: PossibleStyle;
    /**
  * A shorthand property for all the animation-* properties
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation.asp
  */
    animation?: PossibleStyle;
    /**
  * Specifies a delay for the start of an animation
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-delay.asp
  */
    animationDelay?: PossibleStyle;
    /**
  * Specifies whether an animation should be played forwards, backwards or
      in alternate cycles
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-direction.asp
  */
    animationDirection?: PossibleStyle;
    /**
  * Specifies how long an animation should take to complete one cycle
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.03.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-duration.asp
  */
    animationDuration?: PossibleStyle;
    /**
  * Specifies a style for the element when the animation is not playing (before
      it starts, after it ends, or both)
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp
  */
    animationFillMode?: PossibleStyle;
    /**
  * Specifies the number of times an animation should be played
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp
  */
    animationIterationCount?: PossibleStyle;
    /**
  * Specifies a name for the @keyframes animation
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-name.asp
  */
    animationName?: PossibleStyle;
    /**
  * Specifies whether the animation is running or paused
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp
  */
    animationPlayState?: PossibleStyle;
    /**
  * Specifies the speed curve of an animation
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **43.04.0 -webkit-**  | **16.05.0 -moz-**  |   **9.04.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp
  */
    animationTimingFunction?: PossibleStyle;
    /**
  * A shorthand property for all the background-* properties
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **1.0**  | **1.0**  |   **1.0**   | **4.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_background.asp
  */
    background?: PossibleStyle;
    /**
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
  * Defines how far the background (color or image) should extend within an
      element
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **4.0**  |   **3.0**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-clip.asp
  */
    backgroundClip?: PossibleStyle;
    /**
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
  * Specifies the origin position of a background image
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **4.0**  |   **3.0**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-origin.asp
  */
    backgroundOrigin?: PossibleStyle;
    /**
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
  * Specifies the size of the background images
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.01.0 -webkit-**  | **4.03.6 -moz-**  |   **4.13.0 -webkit-**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-size.asp
  */
    backgroundSize?: PossibleStyle;
    /**
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
  * Defines the radius of the border of the bottom-left corner
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom-left-radius.asp
  */
    borderBottomLeftRadius?: PossibleStyle;
    /**
  * Defines the radius of the border of the bottom-right corner
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp
  */
    borderBottomRightRadius?: PossibleStyle;
    /**
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
  * A shorthand property for all the border-image-* properties
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **16.04.0 -webkit-**  | **15.03.5 -moz-**  |   **6.03.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image.asp
  */
    borderImage?: PossibleStyle;
    /**
  * Specifies the amount by which the border image area extends beyond the border box
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-outset.asp
  */
    borderImageOutset?: PossibleStyle;
    /**
  * Specifies whether the border image should be repeated, rounded or stretched
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-repeat.asp
  */
    borderImageRepeat?: PossibleStyle;
    /**
  * Specifies how to slice the border image
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-slice.asp
  */
    borderImageSlice?: PossibleStyle;
    /**
  * Specifies the path to the image to be used as a border
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **15.0**  | **15.0**  |   **6.0**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-source.asp
  */
    borderImageSource?: PossibleStyle;
    /**
  * Specifies the width of the border image
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **15.0**  | **13.0**  |   **6.0**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-width.asp
  */
    borderImageWidth?: PossibleStyle;
    /**
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
  * A shorthand property for the four border-*-radius properties
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-radius.asp
  */
    borderRadius?: PossibleStyle;
    /**
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
  * Defines the radius of the border of the top-left corner
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top-left-radius.asp
  */
    borderTopLeftRadius?: PossibleStyle;
    /**
  * Defines the radius of the border of the top-right corner
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **5.04.0 -webkit-**  | **4.03.0 -moz-**  |   **5.03.1 -webkit-**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top-right-radius.asp
  */
    borderTopRightRadius?: PossibleStyle;
    /**
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
  * Sets the behavior of the background and border of an element at page-break, or, for  in-line elements, at line-break.
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **22.0 -webkit-**  | **32.0**  |   **6.1 -webkit-**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_box-decoration-break.asp
  */
    boxDecorationBreak?: PossibleStyle;
    /**
  * Attaches one or more shadows to an element
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **10.04.0 -webkit-**  | **4.03.5 -moz-**  |   **5.13.1 -webkit-**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_box-shadow.asp
  */
    boxShadow?: PossibleStyle;
    /**
  * Defines how the width and height of an element are calculated: should
      they include padding and borders, or not
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **10.04.0 -webkit-**  | **29.02.0 -moz-**  |   **5.13.2 -webkit-**   | **8.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_box-sizing.asp
  */
    boxSizing?: PossibleStyle;
    /**
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
  * Specifies the color of the cursor (caret) in inputs, textareas, or any
      element that is editable
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **57.0**  | **53.0**  |   **11.1**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_caret-color.asp
  */
    caretColor?: PossibleStyle;
    /**
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
  * Specifies the number of columns an element should be divided into
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-count.asp
  */
    columnCount?: PossibleStyle;
    /**
  * Specifies how to fill columns, balanced or not
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.0**  | **52.013.0 -moz-**  |   **10.07.0 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-fill.asp
  */
    columnFill?: PossibleStyle;
    /**
  * Specifies the gap between the columns
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50**  | **52**  |   **10**   | **10** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-gap.asp
  */
    columnGap?: PossibleStyle;
    /**
  * A shorthand property for all the column-rule-* properties
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule.asp
  */
    columnRule?: PossibleStyle;
    /**
  * Specifies the color of the rule between columns
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp
  */
    columnRuleColor?: PossibleStyle;
    /**
  * Specifies the style of the rule between columns
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp
  */
    columnRuleStyle?: PossibleStyle;
    /**
  * Specifies the width of the rule between columns
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp
  */
    columnRuleWidth?: PossibleStyle;
    /**
  * Specifies how many columns an element should span across
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **71.0**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-span.asp
  */
    columnSpan?: PossibleStyle;
    /**
  * Specifies the column width
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **52.02.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-width.asp
  */
    columnWidth?: PossibleStyle;
    /**
  * A shorthand property for column-width and column-count
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **50.04.0 -webkit-**  | **52.09.0 -moz-**  |   **9.03.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_columns.asp
  */
    columns?: PossibleStyle;
    /**
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
    flex?: PossibleStyle;
    /**
  * Specifies the initial length of a flexible item
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-basis.asp
  */
    flexBasis?: PossibleStyle;
    /**
  * Specifies the direction of the flexible items
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-direction.asp
  */
    flexDirection?: PossibleStyle;
    /**
  * A shorthand property for the flex-direction and the flex-wrap properties
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-flow.asp
  */
    flexFlow?: PossibleStyle;
    /**
  * Specifies how much the item will grow relative to the rest
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-grow.asp
  */
    flexGrow?: PossibleStyle;
    /**
  * Specifies how the item will shrink relative to the rest
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp
  */
    flexShrink?: PossibleStyle;
    /**
  * Specifies whether the flexible items should wrap or not
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp
  */
    flexWrap?: PossibleStyle;
    /**
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
  * Allows control over advanced typographic features in OpenType fonts
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **48.016.0 -webkit-**  | **34.015.0 -moz-**  |   **9.1**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-feature-settings.asp
  */
    fontFeatureSettings?: PossibleStyle;
    /**
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
  * Controls the usage of the kerning information (how letters are spaced)
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **33.029.0 -webkit-**  | **34.0**  |   **9.17.0 -webkit-**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-kerning.asp
  */
    fontKerning?: PossibleStyle;
    /**
  * Controls the usage of language-specific glyphs in a typeface
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **Not supported**  | **34.0**  |   **Not supported**   | **Not supported** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-language-override.asp
  */
    fontLanguageOverride?: PossibleStyle;
    /**
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
  * Preserves the readability of text when font fallback occurs
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **Not supported**  | **3.0**  |   **Not supported**   | **Not supported** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-size-adjust.asp
  */
    fontSizeAdjust?: PossibleStyle;
    /**
  * Selects a normal, condensed, or expanded face from a font family
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **48.0**  | **9.0**  |   **11.0**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-stretch.asp
  */
    fontStretch?: PossibleStyle;
    /**
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
  * Controls the usage of alternate glyphs for capital letters
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **52.0**  | **34.0**  |   **Not supported**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-caps.asp
  */
    fontVariantCaps?: PossibleStyle;
    /**
  * Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **63.0**  | **34.0**  |   **Not supported**   | **Not supported** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-east-asian.asp
  */
    fontVariantEastAsian?: PossibleStyle;
    /**
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
  * Sets how to split words to improve the layout of paragraphs
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **55.0**  | **43.0**  |   **5.1 -webkit-**   | **79.010.0 -ms-** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_hyphens.asp
  */
    hyphens?: PossibleStyle;
    /**
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
  * Defines whether an element must create a new stacking content
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **41.0**  | **36.0**  |   **Yes**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_isolation.asp
  */
    isolation?: PossibleStyle;
    /**
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
  * Specifies the alignment of the replaced element inside its box
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **31.0**  | **36.0**  |   **10.0**   | **16.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_object-position.asp
  */
    objectPosition?: PossibleStyle;
    /**
  * Sets the opacity level for an element
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **2.0**  |   **3.1**   | **9.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_opacity.asp
  */
    opacity?: PossibleStyle;
    /**
  * Sets the order of the flexible item, relative to the rest
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **29.021.0 -webkit-**  | **28.018.0 -moz-**  |   **9.06.1 -webkit-**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_order.asp
  */
    order?: PossibleStyle;
    /**
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
  * Offsets an outline, and draws it beyond the border edge
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **3.5**  |   **3.1**   | **15.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_outline-offset.asp
  */
    outlineOffset?: PossibleStyle;
    /**
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
  * Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **3.5**  |   **3.0**   | **9.08.0 -ms-** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_overflow-x.asp
  */
    overflowX?: PossibleStyle;
    /**
  * Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **1.5**  |   **3.0**   | **9.08.0 -ms-** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_overflow-y.asp
  */
    overflowY?: PossibleStyle;
    /**
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
  * Specifies the gap between the grid rows
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **66**  | **61**  |   **12.1**   | **16** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_row-gap.asp
  */
    rowGap?: PossibleStyle;
    /**
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
  * Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **47.0**  | **49.012.0 -moz-**  |   **Not supported**   | **5.5*** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-align-last.asp
  */
    textAlignLast?: PossibleStyle;
    /**
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
  * Specifies the color of the text-decoration
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **57.0**  | **36.06.0 -moz-**  |   **7.1 -webkit-**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-decoration-color.asp
  */
    textDecorationColor?: PossibleStyle;
    /**
  * Specifies the type of line in a text-decoration
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **57.0**  | **36.06.0 -moz-**  |   **7.1 -webkit-**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-decoration-line.asp
  */
    textDecorationLine?: PossibleStyle;
    /**
  * Specifies the style of the line in a text decoration
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **57.0**  | **36.06.0 -moz-**  |   **12.1**   | **79.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-decoration-style.asp
  */
    textDecorationStyle?: PossibleStyle;
    /**
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
  * Specifies the justification method used when text-align is "justify"
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **Yes***  | **55.0**  |   **10.0.3**   | **11.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-justify.asp
  */
    textJustify?: PossibleStyle;
    /**
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
  * Specifies what should happen when text overflows the containing element
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **7.0**  |   **3.1**   | **6.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-overflow.asp
  */
    textOverflow?: PossibleStyle;
    /**
  * Adds shadow to text
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **3.5**  |   **4.0**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-shadow.asp
  */
    textShadow?: PossibleStyle;
    /**
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
  * Applies a 2D or 3D transformation to an element
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **36.04.0 -webkit-**  | **16.03.5 -moz-**  |   **9.03.2 -webkit-**   | **10.09.0 -ms-** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_transform.asp
  */
    transform?: PossibleStyle;
    /**
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
  * A shorthand property for all the transition-* properties
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition.asp
  */
    transition?: PossibleStyle;
    /**
  * Specifies when the transition effect will start
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-delay.asp
  */
    transitionDelay?: PossibleStyle;
    /**
  * Specifies how many seconds or milliseconds a transition effect takes to complete
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-duration.asp
  */
    transitionDuration?: PossibleStyle;
    /**
  * Specifies the name of the CSS property the transition effect is for
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-property.asp
  */
    transitionProperty?: PossibleStyle;
    /**
  * Specifies the speed curve of the transition effect
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **26.04.0 -webkit-**  | **16.04.0 -moz-**  |   **6.13.1 -webkit-**   | **10.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp
  */
    transitionTimingFunction?: PossibleStyle;
    /**
  * Specifies whether the text of an element can be selected
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **54.06.0 -webkit-**  | **69.02.0 -moz-**  |   **3.1 -webkit-**   | **79.010.0 -ms-** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_user-select.asp
  */
    userSelect?: PossibleStyle;
    /**
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
  * Specifies how words should break when reaching the end of a line
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **15.0**  |   **3.1**   | **5.5** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_word-break.asp
  */
    wordBreak?: PossibleStyle;
    /**
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
  * Allows long, unbreakable words to be broken and wrap to the next line
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **4.0**  | **3.5**  |   **3.1**   | **5.5** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_word-wrap.asp
  */
    wordWrap?: PossibleStyle;
    /**
  * Specifies whether lines of text are laid out horizontally or vertically
  *
  * |  Chrome  | Firefox |  Safari   |  Edge  |
  * | :------: | :-----: | :-------: | :----: |
  * |  **48.0**  | **41.0**  |   **11.0**   | **12.0** |
  *
  @see https://www.w3schools.com/cssref/css3_pr_writing-mode.asp
  */
    writingMode?: PossibleStyle;
    [key: string]: PossibleStyle | undefined;
}
