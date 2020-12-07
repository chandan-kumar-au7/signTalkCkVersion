import React from 'react'
import Select from 'react-select'
import '../../../style.css'

function Step2({state,setState}) {
    return (
        <div>
            <h5>Select your languages</h5>
            <p className='smallFont'>Enter the language(s) that you interpret in</p>
            <div className='col-9 p-0 ml-auto mr-auto mb-3'>
                <Select
                    isMulti
                    name="colors"
                    options={state.languages}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={state.selectedLanguages}
                    onChange={e=>{
                        setState({...state,selectedLanguages:e})
                    }}
                />
            </div>
        </div>
    )
}

export default Step2
