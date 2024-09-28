import '../styles/Conversion.css';

const Conversion = () => {



    return(

        <>
            <div className='div1'>
                <h2>Conversion</h2>

                <div className='input'>
                    <label for="options">Please enter number to convert:</label>
                    <input type="text" id="input-num" name="textbox" placeholder=" Number to Convert..." />
                    
                </div>


                <div className='source'>
                    <label for="options">Choose a Base to Convert from:</label>
                    <select id="options" name="options">
                        <option value="option1">Decimal</option>
                        <option value="option2">Binary</option>
                        <option value="option3">Hexadecimal</option>
                    </select>
                </div>

                <div className='target'>
                    <label for="options2">Choose a Base to Convert to:</label>
                    <select id="options2" name="options">
                        <option value="option1">Decimal</option>
                        <option value="option2">Binary</option>
                        <option value="option3">Hexadecimal</option>
                    </select>
                </div>

                <p>Result: </p>

                <button>Convert</button>

            </div>


            
        
        
        </>
    );
}

export default Conversion;