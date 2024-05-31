import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { TiFlowSwitch } from "react-icons/ti";
const handleStyle = { left: 10 };
 
function TextUpdaterNode({ data }) {

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    < div className='bg-white  rounded-lg p-7 h-aotu border-solid border-2   border-t-4 border-green-600 hover:border-green-600'> 
      <Handle type="target" position={Position.Top} />
      <div >
            <div className='flex  mb-5 bg-green-100 border-l-4 border-green-600  text-green-700 rounded-lg' >
            <TiFlowSwitch className='mt-1 mr-2' />
             <h3 className='text-center ' >Messages</h3>
             
            </div>
            <div className='block bg-gray-200 p-4 rounded-lg'>
                <label htmlFor="text" className='text-gray-600'>Text</label><br/>
                <input id="text" name="text" onChange={onChange} className='focus:outline-none  border-solid border-2 border-balck-500 rounded-lg'  placeholder='Enter the text' />
            </div>
      </div>
      <Handle type="source" position={Position.top} id="a" />
      
    </ div>
  );
}  export default  TextUpdaterNode