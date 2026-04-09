
import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlledFIeld from './Components/UnControlledField/UnControlledFIeld'

function App() {
  

  return (
    <>
      <section id="center">       
       
          <h1>Explore React Form </h1>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledField></ControlledField> */}
        {/* <UnControlledFIeld></UnControlledFIeld> */}
        <HookForm></HookForm>
   </section>
    </>
  )
}

export default App
