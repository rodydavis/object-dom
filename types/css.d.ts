import { PossibleStyle } from "./dom/styles";
export interface CSSStyles {
    /**
  * Specifies the alignment for items inside a flexible container
  *
  @see https://www.w3schools.com/cssref/css3_pr_align-items.asp
  */
    alignItems?: PossibleStyle;
    /**
  * Specifies the alignment for selected items inside a flexible container
  *
  @see https://www.w3schools.com/cssref/css3_pr_align-self.asp
  */
    alignSelf?: PossibleStyle;
    /**
  * Resets all properties (except unicode-bidi and direction)
  *
  @see https://www.w3schools.com/cssref/css3_pr_all.asp
  */
    all?: PossibleStyle;
    /**
  * A shorthand property for all the animation-* properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation.asp
  */
    animation?: PossibleStyle;
    /**
  * Specifies a delay for the start of an animation
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-delay.asp
  */
    animationDelay?: PossibleStyle;
    /**
  * Specifies whether an animation should be played forwards, backwards or
      in alternate cycles
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-direction.asp
  */
    animationDirection?: PossibleStyle;
    /**
  * Specifies how long an animation should take to complete one cycle
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-duration.asp
  */
    animationDuration?: PossibleStyle;
    /**
  * Specifies a style for the element when the animation is not playing (before
      it starts, after it ends, or both)
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp
  */
    animationFillMode?: PossibleStyle;
    /**
  * Specifies the number of times an animation should be played
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp
  */
    animationIterationCount?: PossibleStyle;
    /**
  * Specifies a name for the @keyframes animation
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-name.asp
  */
    animationName?: PossibleStyle;
    /**
  * Specifies whether the animation is running or paused
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp
  */
    animationPlayState?: PossibleStyle;
    /**
  * Specifies the speed curve of an animation
  *
  @see https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp
  */
    animationTimingFunction?: PossibleStyle;
    /**
  * A shorthand property for all the background-* properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_background.asp
  */
    background?: PossibleStyle;
    /**
  * Sets whether a background image scrolls with the rest of the page, or is fixed
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-attachment.asp
  */
    backgroundAttachment?: PossibleStyle;
    /**
  * Specifies the blending mode of each background layer (color/image)
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-blend-mode.asp
  */
    backgroundBlendMode?: PossibleStyle;
    /**
  * Defines how far the background (color or image) should extend within an
      element
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-clip.asp
  */
    backgroundClip?: PossibleStyle;
    /**
  * Specifies the background color of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-color.asp
  */
    backgroundColor?: PossibleStyle;
    /**
  * Specifies one or more background images for an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-image.asp
  */
    backgroundImage?: PossibleStyle;
    /**
  * Specifies the origin position of a background image
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-origin.asp
  */
    backgroundOrigin?: PossibleStyle;
    /**
  * Specifies the position of a background image
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-position.asp
  */
    backgroundPosition?: PossibleStyle;
    /**
  * Sets if/how a background image will be repeated
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-repeat.asp
  */
    backgroundRepeat?: PossibleStyle;
    /**
  * Specifies the size of the background images
  *
  @see https://www.w3schools.com/cssref/css3_pr_background-size.asp
  */
    backgroundSize?: PossibleStyle;
    /**
  * A shorthand property for border-width, border-style and border-color
  *
  @see https://www.w3schools.com/cssref/css3_pr_border.asp
  */
    border?: PossibleStyle;
    /**
  * A shorthand property for border-bottom-width, border-bottom-style
      and border-bottom-color
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom.asp
  */
    borderBottom?: PossibleStyle;
    /**
  * Sets the color of the bottom border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom-color.asp
  */
    borderBottomColor?: PossibleStyle;
    /**
  * Defines the radius of the border of the bottom-left corner
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom-left-radius.asp
  */
    borderBottomLeftRadius?: PossibleStyle;
    /**
  * Defines the radius of the border of the bottom-right corner
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp
  */
    borderBottomRightRadius?: PossibleStyle;
    /**
  * Sets the style of the bottom border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom-style.asp
  */
    borderBottomStyle?: PossibleStyle;
    /**
  * Sets the width of the bottom border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-bottom-width.asp
  */
    borderBottomWidth?: PossibleStyle;
    /**
  * Sets whether table borders should collapse into a single border or be separated
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-collapse.asp
  */
    borderCollapse?: PossibleStyle;
    /**
  * Sets the color of the four borders
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-color.asp
  */
    borderColor?: PossibleStyle;
    /**
  * A shorthand property for all the border-image-* properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image.asp
  */
    borderImage?: PossibleStyle;
    /**
  * Specifies the amount by which the border image area extends beyond the border box
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-outset.asp
  */
    borderImageOutset?: PossibleStyle;
    /**
  * Specifies whether the border image should be repeated, rounded or stretched
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-repeat.asp
  */
    borderImageRepeat?: PossibleStyle;
    /**
  * Specifies how to slice the border image
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-slice.asp
  */
    borderImageSlice?: PossibleStyle;
    /**
  * Specifies the path to the image to be used as a border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-source.asp
  */
    borderImageSource?: PossibleStyle;
    /**
  * Specifies the width of the border image
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-image-width.asp
  */
    borderImageWidth?: PossibleStyle;
    /**
  * A shorthand property for all the border-left-* properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-left.asp
  */
    borderLeft?: PossibleStyle;
    /**
  * Sets the color of the left border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-left-color.asp
  */
    borderLeftColor?: PossibleStyle;
    /**
  * Sets the style of the left border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-left-style.asp
  */
    borderLeftStyle?: PossibleStyle;
    /**
  * Sets the width of the left border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-left-width.asp
  */
    borderLeftWidth?: PossibleStyle;
    /**
  * A shorthand property for the four border-*-radius properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-radius.asp
  */
    borderRadius?: PossibleStyle;
    /**
  * A shorthand property for all the border-right-* properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-right.asp
  */
    borderRight?: PossibleStyle;
    /**
  * Sets the color of the right border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-right-color.asp
  */
    borderRightColor?: PossibleStyle;
    /**
  * Sets the style of the right border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-right-style.asp
  */
    borderRightStyle?: PossibleStyle;
    /**
  * Sets the width of the right border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-right-width.asp
  */
    borderRightWidth?: PossibleStyle;
    /**
  * Sets the distance between the borders of adjacent cells
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-spacing.asp
  */
    borderSpacing?: PossibleStyle;
    /**
  * Sets the style of the four borders
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-style.asp
  */
    borderStyle?: PossibleStyle;
    /**
  * A shorthand property for border-top-width, border-top-style and
      border-top-color
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top.asp
  */
    borderTop?: PossibleStyle;
    /**
  * Sets the color of the top border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top-color.asp
  */
    borderTopColor?: PossibleStyle;
    /**
  * Defines the radius of the border of the top-left corner
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top-left-radius.asp
  */
    borderTopLeftRadius?: PossibleStyle;
    /**
  * Defines the radius of the border of the top-right corner
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top-right-radius.asp
  */
    borderTopRightRadius?: PossibleStyle;
    /**
  * Sets the style of the top border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top-style.asp
  */
    borderTopStyle?: PossibleStyle;
    /**
  * Sets the width of the top border
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-top-width.asp
  */
    borderTopWidth?: PossibleStyle;
    /**
  * Sets the width of the four borders
  *
  @see https://www.w3schools.com/cssref/css3_pr_border-width.asp
  */
    borderWidth?: PossibleStyle;
    /**
  * Sets the elements position, from the bottom of its parent element
  *
  @see https://www.w3schools.com/cssref/css3_pr_bottom.asp
  */
    bottom?: PossibleStyle;
    /**
  * Sets the behavior of the background and border of an element at page-break, or, for  in-line elements, at line-break.
  *
  @see https://www.w3schools.com/cssref/css3_pr_box-decoration-break.asp
  */
    boxDecorationBreak?: PossibleStyle;
    /**
  * Attaches one or more shadows to an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_box-shadow.asp
  */
    boxShadow?: PossibleStyle;
    /**
  * Defines how the width and height of an element are calculated: should
      they include padding and borders, or not
  *
  @see https://www.w3schools.com/cssref/css3_pr_box-sizing.asp
  */
    boxSizing?: PossibleStyle;
    /**
  * Specifies whether or not a page-, column-, or region-break should occur
      after the specified element
  *
  @see https://www.w3schools.com/cssref/css3_pr_break-after.asp
  */
    breakAfter?: PossibleStyle;
    /**
  * Specifies whether or not a page-, column-, or region-break should occur
      before the specified element
  *
  @see https://www.w3schools.com/cssref/css3_pr_break-before.asp
  */
    breakBefore?: PossibleStyle;
    /**
  * Specifies whether or not a page-, column-, or region-break should occur
      inside the specified element
  *
  @see https://www.w3schools.com/cssref/css3_pr_break-inside.asp
  */
    breakInside?: PossibleStyle;
    /**
  * Specifies the color of the cursor (caret) in inputs, textareas, or any
      element that is editable
  *
  @see https://www.w3schools.com/cssref/css3_pr_caret-color.asp
  */
    caretColor?: PossibleStyle;
    /**
  * Specifies the character encoding used in the style sheet
  *
  @see https://www.w3schools.com/cssref/css3_pr_@charset.asp
  */
    charset?: PossibleStyle;
    /**
  * Specifies on which sides of an element floating elements are not allowed to float
  *
  @see https://www.w3schools.com/cssref/css3_pr_clear.asp
  */
    clear?: PossibleStyle;
    /**
  * Clips an absolutely positioned element
  *
  @see https://www.w3schools.com/cssref/css3_pr_clip.asp
  */
    clip?: PossibleStyle;
    /**
  * Sets the color of text
  *
  @see https://www.w3schools.com/cssref/css3_pr_color.asp
  */
    color?: PossibleStyle;
    /**
  * Specifies the number of columns an element should be divided into
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-count.asp
  */
    columnCount?: PossibleStyle;
    /**
  * Specifies how to fill columns, balanced or not
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-fill.asp
  */
    columnFill?: PossibleStyle;
    /**
  * Specifies the gap between the columns
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-gap.asp
  */
    columnGap?: PossibleStyle;
    /**
  * A shorthand property for all the column-rule-* properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule.asp
  */
    columnRule?: PossibleStyle;
    /**
  * Specifies the color of the rule between columns
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp
  */
    columnRuleColor?: PossibleStyle;
    /**
  * Specifies the style of the rule between columns
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp
  */
    columnRuleStyle?: PossibleStyle;
    /**
  * Specifies the width of the rule between columns
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp
  */
    columnRuleWidth?: PossibleStyle;
    /**
  * Specifies how many columns an element should span across
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-span.asp
  */
    columnSpan?: PossibleStyle;
    /**
  * Specifies the column width
  *
  @see https://www.w3schools.com/cssref/css3_pr_column-width.asp
  */
    columnWidth?: PossibleStyle;
    /**
  * A shorthand property for column-width and column-count
  *
  @see https://www.w3schools.com/cssref/css3_pr_columns.asp
  */
    columns?: PossibleStyle;
    /**
  * Used with the :before and :after pseudo-elements, to insert generated content
  *
  @see https://www.w3schools.com/cssref/css3_pr_content.asp
  */
    content?: PossibleStyle;
    /**
  * Increases or decreases the value of one or more CSS counters
  *
  @see https://www.w3schools.com/cssref/css3_pr_counter-increment.asp
  */
    counterIncrement?: PossibleStyle;
    /**
  * Creates or resets one or more CSS counters
  *
  @see https://www.w3schools.com/cssref/css3_pr_counter-reset.asp
  */
    counterReset?: PossibleStyle;
    /**
  * Specifies the mouse cursor to be displayed when pointing over an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_cursor.asp
  */
    cursor?: PossibleStyle;
    /**
  * Specifies how a certain HTML element should be displayed
  *
  @see https://www.w3schools.com/cssref/css3_pr_display.asp
  */
    display?: PossibleStyle;
    /**
  * A shorthand property for the flex-grow, flex-shrink, and the
      flex-basis
      properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex.asp
  */
    flex?: PossibleStyle;
    /**
  * Specifies the initial length of a flexible item
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-basis.asp
  */
    flexBasis?: PossibleStyle;
    /**
  * Specifies the direction of the flexible items
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-direction.asp
  */
    flexDirection?: PossibleStyle;
    /**
  * A shorthand property for the flex-direction and the flex-wrap properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-flow.asp
  */
    flexFlow?: PossibleStyle;
    /**
  * Specifies how much the item will grow relative to the rest
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-grow.asp
  */
    flexGrow?: PossibleStyle;
    /**
  * Specifies how the item will shrink relative to the rest
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp
  */
    flexShrink?: PossibleStyle;
    /**
  * Specifies whether the flexible items should wrap or not
  *
  @see https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp
  */
    flexWrap?: PossibleStyle;
    /**
  * Specifies whether or not a box should float
  *
  @see https://www.w3schools.com/cssref/css3_pr_float.asp
  */
    float?: PossibleStyle;
    /**
  * A shorthand property for the font-style, font-variant, font-weight,
      font-size/line-height, and the font-family properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_font.asp
  */
    font?: PossibleStyle;
    /**
  * A rule that allows websites to download and use fonts other than the "web-safe" fonts
  *
  @see https://www.w3schools.com/cssref/css3_pr_@font-face.asp
  */
    fontFace?: PossibleStyle;
    /**
  * Specifies the font family for text
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-family.asp
  */
    fontFamily?: PossibleStyle;
    /**
  * Allows control over advanced typographic features in OpenType fonts
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-feature-settings.asp
  */
    fontFeatureSettings?: PossibleStyle;
    /**
  * Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType
  *
  @see https://www.w3schools.com/cssref/css3_pr_@font-feature-values.asp
  */
    fontFeatureValues?: PossibleStyle;
    /**
  * Controls the usage of the kerning information (how letters are spaced)
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-kerning.asp
  */
    fontKerning?: PossibleStyle;
    /**
  * Controls the usage of language-specific glyphs in a typeface
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-language-override.asp
  */
    fontLanguageOverride?: PossibleStyle;
    /**
  * Specifies the font size of text
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-size.asp
  */
    fontSize?: PossibleStyle;
    /**
  * Preserves the readability of text when font fallback occurs
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-size-adjust.asp
  */
    fontSizeAdjust?: PossibleStyle;
    /**
  * Selects a normal, condensed, or expanded face from a font family
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-stretch.asp
  */
    fontStretch?: PossibleStyle;
    /**
  * Specifies the font style for text
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-style.asp
  */
    fontStyle?: PossibleStyle;
    /**
  * Controls which missing typefaces (bold or italic) may be synthesized by the browser
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-synthesis.asp
  */
    fontSynthesis?: PossibleStyle;
    /**
  * Specifies whether or not a text should be displayed in a small-caps font
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant.asp
  */
    fontVariant?: PossibleStyle;
    /**
  * Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-alternates.asp
  */
    fontVariantAlternates?: PossibleStyle;
    /**
  * Controls the usage of alternate glyphs for capital letters
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-caps.asp
  */
    fontVariantCaps?: PossibleStyle;
    /**
  * Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-east-asian.asp
  */
    fontVariantEastAsian?: PossibleStyle;
    /**
  * Controls which ligatures and contextual forms are used in textual content of the elements it applies to
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-ligatures.asp
  */
    fontVariantLigatures?: PossibleStyle;
    /**
  * Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-numeric.asp
  */
    fontVariantNumeric?: PossibleStyle;
    /**
  * Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-variant-position.asp
  */
    fontVariantPosition?: PossibleStyle;
    /**
  * Specifies the weight of a font
  *
  @see https://www.w3schools.com/cssref/css3_pr_font-weight.asp
  */
    fontWeight?: PossibleStyle;
    /**
  * A shorthand property for the grid-template-rows,
      grid-template-columns, grid-template-areas, grid-auto-rows,
      grid-auto-columns, and the grid-auto-flow properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid.asp
  */
    grid?: PossibleStyle;
    /**
  * Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-area.asp
  */
    gridArea?: PossibleStyle;
    /**
  * Specifies a default column size
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-auto-columns.asp
  */
    gridAutoColumns?: PossibleStyle;
    /**
  * Specifies how auto-placed items are inserted in the grid
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-auto-flow.asp
  */
    gridAutoFlow?: PossibleStyle;
    /**
  * Specifies a default row size
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-auto-rows.asp
  */
    gridAutoRows?: PossibleStyle;
    /**
  * A shorthand property for the grid-column-start and the grid-column-end properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-column.asp
  */
    gridColumn?: PossibleStyle;
    /**
  * Specifies where to end the grid item
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-column-end.asp
  */
    gridColumnEnd?: PossibleStyle;
    /**
  * Specifies the size of the gap between columns
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-column-gap.asp
  */
    gridColumnGap?: PossibleStyle;
    /**
  * Specifies where to start the grid item
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-column-start.asp
  */
    gridColumnStart?: PossibleStyle;
    /**
  * A shorthand property for the grid-row-gap and grid-column-gap properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-gap.asp
  */
    gridGap?: PossibleStyle;
    /**
  * A shorthand property for the grid-row-start and the grid-row-end properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-row.asp
  */
    gridRow?: PossibleStyle;
    /**
  * Specifies where to end the grid item
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-row-end.asp
  */
    gridRowEnd?: PossibleStyle;
    /**
  * Specifies the size of the gap between rows
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-row-gap.asp
  */
    gridRowGap?: PossibleStyle;
    /**
  * Specifies where to start the grid item
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-row-start.asp
  */
    gridRowStart?: PossibleStyle;
    /**
  * A shorthand property for the grid-template-rows, grid-template-columns
      and grid-areas properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-template.asp
  */
    gridTemplate?: PossibleStyle;
    /**
  * Specifies how to display columns and rows, using named grid items
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-template-areas.asp
  */
    gridTemplateAreas?: PossibleStyle;
    /**
  * Specifies the size of the columns, and how many columns in a grid layout
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-template-columns.asp
  */
    gridTemplateColumns?: PossibleStyle;
    /**
  * Specifies the size of the rows in a grid layout
  *
  @see https://www.w3schools.com/cssref/css3_pr_grid-template-rows.asp
  */
    gridTemplateRows?: PossibleStyle;
    /**
  * Sets the height of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_height.asp
  */
    height?: PossibleStyle;
    /**
  * Sets how to split words to improve the layout of paragraphs
  *
  @see https://www.w3schools.com/cssref/css3_pr_hyphens.asp
  */
    hyphens?: PossibleStyle;
    /**
  * Allows you to import a style sheet into another style sheet
  *
  @see https://www.w3schools.com/cssref/css3_pr_@import.asp
  */
    import?: PossibleStyle;
    /**
  * Defines whether an element must create a new stacking content
  *
  @see https://www.w3schools.com/cssref/css3_pr_isolation.asp
  */
    isolation?: PossibleStyle;
    /**
  * Increases or decreases the space between characters in a text
  *
  @see https://www.w3schools.com/cssref/css3_pr_letter-spacing.asp
  */
    letterSpacing?: PossibleStyle;
    /**
  * Specifies how/if to break lines
  *
  @see https://www.w3schools.com/cssref/css3_pr_line-break.asp
  */
    lineBreak?: PossibleStyle;
    /**
  * Sets the line height
  *
  @see https://www.w3schools.com/cssref/css3_pr_line-height.asp
  */
    lineHeight?: PossibleStyle;
    /**
  * Sets all the properties for a list in one declaration
  *
  @see https://www.w3schools.com/cssref/css3_pr_list-style.asp
  */
    listStyle?: PossibleStyle;
    /**
  * Specifies an image as the list-item marker
  *
  @see https://www.w3schools.com/cssref/css3_pr_list-style-image.asp
  */
    listStyleImage?: PossibleStyle;
    /**
  * Specifies the position of the list-item markers (bullet points)
  *
  @see https://www.w3schools.com/cssref/css3_pr_list-style-position.asp
  */
    listStylePosition?: PossibleStyle;
    /**
  * Specifies the type of list-item marker
  *
  @see https://www.w3schools.com/cssref/css3_pr_list-style-type.asp
  */
    listStyleType?: PossibleStyle;
    /**
  * Sets the bottom margin of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_margin-bottom.asp
  */
    marginBottom?: PossibleStyle;
    /**
  * Sets the left margin of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_margin-left.asp
  */
    marginLeft?: PossibleStyle;
    /**
  * Sets the right margin of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_margin-right.asp
  */
    marginRight?: PossibleStyle;
    /**
  * Sets the top margin of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_margin-top.asp
  */
    marginTop?: PossibleStyle;
    /**
  * Hides an element by masking or clipping the image at specific places
  *
  @see https://www.w3schools.com/cssref/css3_pr_mask.asp
  */
    mask?: PossibleStyle;
    /**
  * Specifies whether a mask element is used as a luminance or an alpha mask
  *
  @see https://www.w3schools.com/cssref/css3_pr_mask-type.asp
  */
    maskType?: PossibleStyle;
    /**
  * Sets the maximum height of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_max-height.asp
  */
    maxHeight?: PossibleStyle;
    /**
  * Sets the maximum width of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_max-width.asp
  */
    maxWidth?: PossibleStyle;
    /**
  * Sets the style rules for different media types/devices/sizes
  *
  @see https://www.w3schools.com/cssref/css3_pr_@media.asp
  */
    media?: PossibleStyle;
    /**
  * Sets the minimum height of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_min-height.asp
  */
    minHeight?: PossibleStyle;
    /**
  * Sets the minimum width of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_min-width.asp
  */
    minWidth?: PossibleStyle;
    /**
  * Specifies how an element's content should blend with its direct parent background
  *
  @see https://www.w3schools.com/cssref/css3_pr_mix-blend-mode.asp
  */
    mixBlendMode?: PossibleStyle;
    /**
  * Specifies the alignment of the replaced element inside its box
  *
  @see https://www.w3schools.com/cssref/css3_pr_object-position.asp
  */
    objectPosition?: PossibleStyle;
    /**
  * Sets the opacity level for an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_opacity.asp
  */
    opacity?: PossibleStyle;
    /**
  * Sets the order of the flexible item, relative to the rest
  *
  @see https://www.w3schools.com/cssref/css3_pr_order.asp
  */
    order?: PossibleStyle;
    /**
  * Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_orphans.asp
  */
    orphans?: PossibleStyle;
    /**
  * A shorthand property for the outline-width, outline-style, and
      the outline-color properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_outline.asp
  */
    outline?: PossibleStyle;
    /**
  * Sets the color of an outline
  *
  @see https://www.w3schools.com/cssref/css3_pr_outline-color.asp
  */
    outlineColor?: PossibleStyle;
    /**
  * Offsets an outline, and draws it beyond the border edge
  *
  @see https://www.w3schools.com/cssref/css3_pr_outline-offset.asp
  */
    outlineOffset?: PossibleStyle;
    /**
  * Sets the style of an outline
  *
  @see https://www.w3schools.com/cssref/css3_pr_outline-style.asp
  */
    outlineStyle?: PossibleStyle;
    /**
  * Sets the width of an outline
  *
  @see https://www.w3schools.com/cssref/css3_pr_outline-width.asp
  */
    outlineWidth?: PossibleStyle;
    /**
  * Specifies what happens if content overflows an element's box
  *
  @see https://www.w3schools.com/cssref/css3_pr_overflow.asp
  */
    overflow?: PossibleStyle;
    /**
  * Specifies whether or not the browser may break lines within words in order to prevent overflow (when a string is too long to fit its containing box)
  *
  @see https://www.w3schools.com/cssref/css3_pr_overflow-wrap.asp
  */
    overflowWrap?: PossibleStyle;
    /**
  * Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area
  *
  @see https://www.w3schools.com/cssref/css3_pr_overflow-x.asp
  */
    overflowX?: PossibleStyle;
    /**
  * Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area
  *
  @see https://www.w3schools.com/cssref/css3_pr_overflow-y.asp
  */
    overflowY?: PossibleStyle;
    /**
  * Sets the bottom padding of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_padding-bottom.asp
  */
    paddingBottom?: PossibleStyle;
    /**
  * Sets the left padding of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_padding-left.asp
  */
    paddingLeft?: PossibleStyle;
    /**
  * Sets the right padding of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_padding-right.asp
  */
    paddingRight?: PossibleStyle;
    /**
  * Sets the top padding of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_padding-top.asp
  */
    paddingTop?: PossibleStyle;
    /**
  * Sets the page-break behavior after an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_page-break-after.asp
  */
    pageBreakAfter?: PossibleStyle;
    /**
  * Sets the page-break behavior before an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_page-break-before.asp
  */
    pageBreakBefore?: PossibleStyle;
    /**
  * Sets the page-break behavior inside an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_page-break-inside.asp
  */
    pageBreakInside?: PossibleStyle;
    /**
  * Gives a 3D-positioned element some perspective
  *
  @see https://www.w3schools.com/cssref/css3_pr_perspective.asp
  */
    perspective?: PossibleStyle;
    /**
  * Defines at which position the user is looking at the 3D-positioned element
  *
  @see https://www.w3schools.com/cssref/css3_pr_perspective-origin.asp
  */
    perspectiveOrigin?: PossibleStyle;
    /**
  * Defines whether or not an element reacts to pointer events
  *
  @see https://www.w3schools.com/cssref/css3_pr_pointer-events.asp
  */
    pointerEvents?: PossibleStyle;
    /**
  * Specifies the type of positioning method used for an element (static, relative, absolute or fixed)
  *
  @see https://www.w3schools.com/cssref/css3_pr_position.asp
  */
    position?: PossibleStyle;
    /**
  * Specifies the right position of a positioned element
  *
  @see https://www.w3schools.com/cssref/css3_pr_right.asp
  */
    right?: PossibleStyle;
    /**
  * Specifies the gap between the grid rows
  *
  @see https://www.w3schools.com/cssref/css3_pr_row-gap.asp
  */
    rowGap?: PossibleStyle;
    /**
  * Defines the algorithm used to lay out table cells, rows, and columns
  *
  @see https://www.w3schools.com/cssref/css3_pr_table-layout.asp
  */
    tableLayout?: PossibleStyle;
    /**
  * Specifies the horizontal alignment of text
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-align.asp
  */
    textAlign?: PossibleStyle;
    /**
  * Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-align-last.asp
  */
    textAlignLast?: PossibleStyle;
    /**
  * Specifies the combination of multiple characters into the space of a single character
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-combine-upright.asp
  */
    textCombineUpright?: PossibleStyle;
    /**
  * Specifies the decoration added to text
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-decoration.asp
  */
    textDecoration?: PossibleStyle;
    /**
  * Specifies the color of the text-decoration
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-decoration-color.asp
  */
    textDecorationColor?: PossibleStyle;
    /**
  * Specifies the type of line in a text-decoration
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-decoration-line.asp
  */
    textDecorationLine?: PossibleStyle;
    /**
  * Specifies the style of the line in a text decoration
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-decoration-style.asp
  */
    textDecorationStyle?: PossibleStyle;
    /**
  * Specifies the indentation of the first line in a text-block
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-indent.asp
  */
    textIndent?: PossibleStyle;
    /**
  * Specifies the justification method used when text-align is "justify"
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-justify.asp
  */
    textJustify?: PossibleStyle;
    /**
  * Defines the orientation of the text in a line
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-orientation.asp
  */
    textOrientation?: PossibleStyle;
    /**
  * Specifies what should happen when text overflows the containing element
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-overflow.asp
  */
    textOverflow?: PossibleStyle;
    /**
  * Adds shadow to text
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-shadow.asp
  */
    textShadow?: PossibleStyle;
    /**
  * Controls the capitalization of text
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-transform.asp
  */
    textTransform?: PossibleStyle;
    /**
  * Specifies the position of the underline which is set using the text-decoration property
  *
  @see https://www.w3schools.com/cssref/css3_pr_text-underline-position.asp
  */
    textUnderlinePosition?: PossibleStyle;
    /**
  * Specifies the top position of a positioned element
  *
  @see https://www.w3schools.com/cssref/css3_pr_top.asp
  */
    top?: PossibleStyle;
    /**
  * Applies a 2D or 3D transformation to an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_transform.asp
  */
    transform?: PossibleStyle;
    /**
  * Allows you to change the position on transformed elements
  *
  @see https://www.w3schools.com/cssref/css3_pr_transform-origin.asp
  */
    transformOrigin?: PossibleStyle;
    /**
  * Specifies how nested elements are rendered in 3D space
  *
  @see https://www.w3schools.com/cssref/css3_pr_transform-style.asp
  */
    transformStyle?: PossibleStyle;
    /**
  * A shorthand property for all the transition-* properties
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition.asp
  */
    transition?: PossibleStyle;
    /**
  * Specifies when the transition effect will start
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-delay.asp
  */
    transitionDelay?: PossibleStyle;
    /**
  * Specifies how many seconds or milliseconds a transition effect takes to complete
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-duration.asp
  */
    transitionDuration?: PossibleStyle;
    /**
  * Specifies the name of the CSS property the transition effect is for
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-property.asp
  */
    transitionProperty?: PossibleStyle;
    /**
  * Specifies the speed curve of the transition effect
  *
  @see https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp
  */
    transitionTimingFunction?: PossibleStyle;
    /**
  * Specifies whether the text of an element can be selected
  *
  @see https://www.w3schools.com/cssref/css3_pr_user-select.asp
  */
    userSelect?: PossibleStyle;
    /**
  * Specifies whether or not an element is visible
  *
  @see https://www.w3schools.com/cssref/css3_pr_visibility.asp
  */
    visibility?: PossibleStyle;
    /**
  * Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_widows.asp
  */
    widows?: PossibleStyle;
    /**
  * Sets the width of an element
  *
  @see https://www.w3schools.com/cssref/css3_pr_width.asp
  */
    width?: PossibleStyle;
    /**
  * Specifies how words should break when reaching the end of a line
  *
  @see https://www.w3schools.com/cssref/css3_pr_word-break.asp
  */
    wordBreak?: PossibleStyle;
    /**
  * Increases or decreases the space between words in a text
  *
  @see https://www.w3schools.com/cssref/css3_pr_word-spacing.asp
  */
    wordSpacing?: PossibleStyle;
    /**
  * Allows long, unbreakable words to be broken and wrap to the next line
  *
  @see https://www.w3schools.com/cssref/css3_pr_word-wrap.asp
  */
    wordWrap?: PossibleStyle;
    /**
  * Specifies whether lines of text are laid out horizontally or vertically
  *
  @see https://www.w3schools.com/cssref/css3_pr_writing-mode.asp
  */
    writingMode?: PossibleStyle;
    [key: string]: PossibleStyle | undefined;
}
