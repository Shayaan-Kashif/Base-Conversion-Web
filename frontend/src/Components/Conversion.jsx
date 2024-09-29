import '../styles/Conversion.css';
import React, { useState } from 'react';

const Conversion = () => {



    const [userInput,setUserInput] = useState('');
    const [selectedSource,setSelectedSource] = useState('10');
    const [selectedTarget,setSelectedTarget] = useState('10');

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSourceChange = (e) => {
        setSelectedSource(e.target.value);
    }

    const handleTargetChange = (e) => {
        setSelectedTarget(e.target.value);
    }

    const handleConvert = () => {
        console.log("The number you wanted to convert is: ",userInput);
        console.log("The base you want to convert from: ",selectedSource);
        console.log("The base you wanty to convert to: ",selectedTarget);



    }
    




    return(

        <>
            <div className='div1'>
                <h2>Conversion</h2>

                <div className='input'>
                    <label for="options">Please enter number to convert:</label>
                    <input type="text" id="input-num" name="textbox" placeholder=" Number to Convert..." value ={userInput} onChange={handleInputChange}/>
                    
                </div>


                <div className='source'>
                    <label for="options">Choose a Base to Convert from:</label>
                    <select id="options" name="options" value={selectedSource} onChange={handleSourceChange}>
                        <option value="10">Decimal</option>
                        <option value="2">Binary</option>
                        <option value="16">Hexadecimal</option>
                    </select>
                </div>

                <div className='target'>
                    <label for="options2">Choose a Base to Convert to:</label>
                    <select id="options2" name="options" value={selectedTarget} onChange={handleTargetChange}>
                        <option value="10">Decimal</option>
                        <option value="2">Binary</option>
                        <option value="16">Hexadecimal</option>
                    </select>
                </div>

                <p>Result: </p>

                <button onClick={handleConvert}>Convert</button>

            </div>


            
        
        
        </>
    );
}

export default Conversion;