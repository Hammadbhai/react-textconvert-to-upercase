import React,{useState,props} from 'react'

export default function Alert(props) {
    const [alert,setAlert] = useState(null);
    const showAlert = (message, type)=>{
        setAlert({
            msg:message,
            type:type
        })}
    return (
      props.alert && <div>
            <div className="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>{props.alert.type}</strong> : {props.alert.msg}
</div>
        </div>
    )
}


