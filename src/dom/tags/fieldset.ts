import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface FieldsetProps extends NodeProps<HTMLFieldSetElement> {
  attributes?: {
    /**
* `<fieldset disabled>`
* 
* Specifies that a group of related form elements should be disabled
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **6.0**   | **Yes** |
* 
Example: <form action="\/action_page.php">  <fieldset disabled>         <legend>Personalia:<\/legend>    <label for="fname">First      name:<\/label>    <input type="text" id="fname" name="fname"><br><br>         <label for="lname">Last name:<\/label>    <input      type="text" id="lname" name="lname"><br><br>    <label      for="email">Email:<\/label>    <input type="email"      id="email" name="email"><br><br>    <label      for="birthday">Birthday:<\/label>    <input type="date"      id="birthday" name="birthday"><br><br>    <input      type="submit" value="Submit">  <\/fieldset><\/form>
* 
@see https://www.w3schools.com/TAGS/att_fieldset_disabled.asp
*/
    disabled?: string;

    /**
* `<fieldset form>`
* 
* Specifies which form the fieldset belongs to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: <form action="\/action_page.php" method="get" id="form1">  <label      for="favcolor">What is your favorite color?<\/label>  <input      type="text" id="favcolor" name="favcolor">  <input type="submit">     <\/form><fieldset form="form1">  <legend>Personalia:<\/legend>       <label for="fname">First name:<\/label>  <input type="text" id="fname"      name="fname" form="form1"><br><br>  <label for="lname">Last name:<\/label>       <input type="text" id="lname" name="lname"      form="form1"><\/fieldset>
* 
@see https://www.w3schools.com/TAGS/att_fieldset_form.asp
*/
    form?: string;

    /**
* `<fieldset name>`
* 
* Specifies a name for the fieldset
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **11.0** |
* 
Example: <form action="\/action_page.php" method="get">  <fieldset name="personalia">         <label for="fname">First name:<\/label>    <input      type="text" id="fname" name="fname">  <\/fieldset>  <br>       <button type="button"  onclick="form.personalia.style.backgroundColor='yellow'">       Change background color of fieldset<\/button>  <input type="submit">     <\/form>
* 
@see https://www.w3schools.com/TAGS/att_fieldset_name.asp
*/
    name?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<fieldset>`
* 
* Groups related elements in a form
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_fieldset.asp
*/
export class Fieldset extends GlobalDom<HTMLFieldSetElement> {
  constructor(props: FieldsetProps = {}) {
    super({ node: document.createElement("fieldset"), ...props });
  }
}
