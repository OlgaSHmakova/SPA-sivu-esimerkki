import React, { useState} from 'react';

function AddPalaute (props){
const[uusiPalaute, setUusiPalute] = useState(undefined);

const onSubmit =(event)=>{
event.preventDefault();

};

return (
	<form onSubmit={(event)=>onSubmit(event)}>
	<input type="text"
	onChange={(event)=>setUusiPalute(event.target.value)}/>
	<button type="submit">Lisää</button>
	</form>
);
}
export default AddPalaute;