import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TrackProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<track default>`
* 
* Specifies that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **23.0**  | **31.0**  |   **6.0**   | **10.0** |
* 
Example: `<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
 </video>`
* 
@see https://www.w3schools.com/TAGS/att_track_default.asp
*/
    default?: string;

    /**
* `<track kind>`
* 
* Specifies the kind of text track
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **23.0**  | **31.0**  |   **6.0**   | **10.0** |
* 
Example: `<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
 </video>`
* 
@see https://www.w3schools.com/TAGS/att_track_kind.asp
*/
    kind?: /**
     * The track defines translation of dialogue and sound effects (suitable for deaf users)
     *
     */
    | "captions"

      /**
       * The track defines chapter titles (suitable for navigating the media resource)
       *
       */
      | "chapters"

      /**
       * The track defines a textual description of the video content (suitable for blind users)
       *
       */
      | "descriptions"

      /**
       * The track defines content used by scripts. Not visible for the user
       *
       */
      | "metadata"

      /**
       * The track defines subtitles, used to display subtitles in a video
       *
       */
      | "subtitles";

    /**
* `<track label>`
* 
* Specifies the title of the text track
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **23.0**  | **31.0**  |   **6.0**   | **10.0** |
* 
Example: `<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
 </video>`
* 
@see https://www.w3schools.com/TAGS/att_track_label.asp
*/
    label?: string;

    /**
* `<track src>`
* 
* Required. Specifies the URL of the track file
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **23.0**  | **31.0**  |   **6.0**   | **10.0** |
* 
Example: `<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
 </video>`
* 
@see https://www.w3schools.com/TAGS/att_track_src.asp
*/
    src?: string;

    /**
* `<track srclang>`
* 
* Specifies the language of the track text data (required if kind="subtitles")
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **23.0**  | **31.0**  |   **6.0**   | **10.0** |
* 
Example: `<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
 </video>`
* 
@see https://www.w3schools.com/TAGS/att_track_srclang.asp
*/
    srclang?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<track>`
* 
* Defines text tracks for media elements (`<video>` and <audio>)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **23.0**  | **31.0**  |   **6.0**   | **10.0** |
* 
@see https://www.w3schools.com/TAGS/tag_track.asp
*/
export class Track extends GlobalDom<HTMLElement> {
  constructor(props: TrackProps = {}) {
    super({ node: document.createElement("track"), ...props });
  }
}
