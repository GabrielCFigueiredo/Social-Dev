import { forwardRef } from "react";
import { useController } from "react-hook-form";
import Textarea from "./textarea.styles";

const ControlledTextArea = ({name, control, defaultValue="", ...props}) => {
    const { field: { value, onChange}} = useController({
        name, control, defaultValue
    })
    return (
        <Textarea {...props} value={value} onChange={onChange} />
    )
}
export default ControlledTextArea