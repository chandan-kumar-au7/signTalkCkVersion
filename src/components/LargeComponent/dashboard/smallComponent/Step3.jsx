import React, { useState } from 'react'
import Stepper from 'react-stepper-horizontal'
import Step1 from './step3form/Step1'
import Step2 from './step3form/Step2'
import LastStep from './step3form/Step3'
import StepLast from './step3form/StepLast'
import Axios from 'axios'
import { Languages } from './languageDummy'

function Step3({ closeModal, loader, setLoader }) {
  const [state, setState] = useState({
    step: 1,
    selectedWork: '',
    selectedOption: '',
    selectedLanguages: [],
    region: '',
    options: [
      { value: 'Bangalore', label: 'Bangalore' },
      { value: 'Delhi', label: 'Delhi' },
      { value: 'Mumbai', label: 'Mumbai' },
      { value: 'Chennai', label: 'Chennai' },
      { value: 'Hydrabad', label: 'Hydrabad' },
      { value: 'Others', label: 'Others' },
    ],
    languages: Languages,
    works: [
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Bank', label: 'Bank' },
      { value: 'Software', label: 'Software' },
      { value: 'Technology', label: 'Technology' },
      { value: 'Finance & Accounting', label: 'Finance & Accounting' },
      { value: 'others', label: 'others' },
    ],
  })
  let steps = [
    { title: 'City' },
    { title: 'Languages' },
    { title: 'Background' }
  ]

  async function updateProfile() {
    try {
      setLoader(true)
      const token = localStorage.getItem('token')
      const lang = []
      state.selectedLanguages.forEach(item => lang.push(item.value))
      let { data } = await Axios({
        method: "patch",
        url: "https://whispering-lake-75400.herokuapp.com/Home/profile",
        data: {
          region: state.region,
          Background: state.selectedWork,
          language: lang
        },
        headers: {
          token,
        },
      });
      if (data !== undefined) {
        setLoader(false)
        setState({ ...state, step: state.step + 1 })
      }
    } catch (err) {
      setLoader(false)
      console.log(err.message)
    }
  }
  return (
    <div>

      {
        state.step <= 3 ?
          <Stepper
            steps={steps}
            activeStep={state.step}
            activeColor='#4F4F4F'
            defaultColor='#4F4F4F'
            activeTitleColor='#4F4F4F'
            defaultTitleColor='#4F4F4F'
            completeTitleColor='#54ACF0'
            completeBarColor='white'
            defaultBarColor='white'
            titleFontSize={12}
            lineMarginOffset={20}
            size={30}
            circleFontSize={12}
            circleTop={50}
            titleTop={0}
          /> :
          <StepLast closeModal={closeModal} />
      }

      {
        state.step === 1 ?
          <Step1 state={state} setState={setState} />
          : null
      }
      {
        state.step === 2 ?
          <Step2 state={state} setState={setState} />
          : null
      }
      {
        state.step === 3 ?
          <LastStep state={state} setState={setState} />
          : null
      }

      {
        state.step !== 4 && state.step !==1 ?
          <button className='btn btn-sm mr-1'
            style={{ backgroundColor: "#54ACF0", marginLeft: "1rem" }}
            onClick={() => state.step !== 0 && state.step != 4 ? setState({ ...state, step: state.step - 1 }) : null}>
            Back
              </button> : null
      }
      {
        state.step !== 4 &&
        <button className='btn btn-sm ml-1'
          style={{ backgroundColor: "#54ACF0" }}
          onClick={() => {
            if (state.step === 3 && state.region != '' && state.selectedLanguages.length > 0 && state.selectedWork != '') {
              updateProfile()
            } else {
              setState({ ...state, step: state.step + 1 })
            }
          }}>
          Next
        </button>
      }
    </div>
  )
}

export default Step3
