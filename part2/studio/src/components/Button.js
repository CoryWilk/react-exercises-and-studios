import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";



function Button(props) {
  const saveButton = props.saveButton;
  if(saveButton){
    return <SaveButton />;
  }
   return <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 