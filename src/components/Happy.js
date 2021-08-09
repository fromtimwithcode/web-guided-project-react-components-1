// Step1: import React
import React from 'react';

// Step2: function declaration
// (can be either function declaration OR function expression)
function Happy(props) {
    // Step 3: return something...
    return (
        <div>
            { props.happy ? <div>Very happy!</div> : <div>It must be Monday, eh?</div> }
            <button onClick={() => props.setHappy(!props.happy)}>Change happy?</button>
        </div>
    )
}

//Step 4: export!
export default Happy;