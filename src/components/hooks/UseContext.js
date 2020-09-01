import React, {useContext} from 'react'
import { ValidationContext, ValidationContextProvider } from '../react-basic/ValidationContext';

export default function UseContext () {
  const useValidation = useContext(ValidationContext);
  return (
    <>
      UseContext placeholder: {useValidation.validationMessage}
      <ValidationContextProvider value={{
        validationMessage: 'provider validation message'
      }}>
        <ExampleWithProvier />
      </ValidationContextProvider>
    </>
  )
}

const ExampleWithProvier = () => {
  const useValidation = useContext(ValidationContext);
  return (
  <p>Validation context with provider : {useValidation.validationMessage}</p>
  )
}