import '../styles/Conversion.css';
import React, { useState } from 'react';
import axios from 'axios';

const Conversion = () => {

    const [userInput,setUserInput] = useState('');
    const [selectedSource,setSelectedSource] = useState('10');
    const [selectedTarget,setSelectedTarget] = useState('10');
    const [convertedNumber, setConvertedNumber] = useState('');

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSourceChange = (e) => {
        setSelectedSource(e.target.value);
    }

    const handleTargetChange = (e) => {
        setSelectedTarget(e.target.value);
    }

    const handleConvert = async () => {
        console.log("The number you wanted to convert is: ",userInput);
        console.log("The base you want to convert from: ",selectedSource);
        console.log("The base you wanty to convert to: ",selectedTarget);

        try{
            const dataToSend = {
                input_num: userInput,
                source_base: selectedSource,
                target_base: selectedTarget,
            };
            


            const response = await axios.post(`${process.env.REACT_APP_FLASK_API_URL}`,dataToSend);

            setConvertedNumber(response.data.converted_num);
            console.log("In JS converted number is:", convertedNumber);
            console.log('Response from Flask:', response.data);


        } 
        
        catch(error){
            console.error('Error sending data to Flask:', error);

        }



    }
    




    return(

        <>
            <div className='div1'>
                <h2>Conversion Interface</h2>

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

                <button onClick={handleConvert}>Convert</button>

                <div className='result'>
                    <label for="Results">Converted Result:</label>
                    <input type="text" id="result-box" name="textbox2" placeholder=" Your converted number will show up here..." value ={convertedNumber}/>
                    
                </div>

            </div>


            
        
        
        </>
    );
}

export default Conversion;