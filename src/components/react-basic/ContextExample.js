import React, { useContext, Component } from 'react';
import { ValidationContext, ValidationContextProvider, ValidationContextConsumer } from './ValidationContext';

const validationContext = {
  isFormValid: function () {
    console.log('provider check for validity')
  },
  validationMessage: 'provider validation msg'
}

export default class ContextExample extends Component {
  render() {
    return (
      <>
      <ValidationContextProvider value={validationContext}>
        <ParentComponent />
      </ValidationContextProvider>
      <ContextConsumerNoProvider />
      </>
    )
  }
}

const ConsumerContextHook = () => {
  const useValidation = useContext(ValidationContext)
  return (
    <div>
      In ConsumerContextHook : {useValidation.validationMessage}
      <br />method call : {useValidation.isFormValid()}
    </div>
  )
}

const ContextConsumerNoProvider = () => {
  return <ValidationContextConsumer>
    { prop => {
      console.log('ContextConsumerNoProvider', prop)
      return (
      <div>
        In ContextConsumerNoProvider : {prop.validationMessage}
      </div>
    )}}
    </ValidationContextConsumer>
}

const ConsumerWrapped = () => {
  return <ValidationContextConsumer>
    { prop => {
      console.log('ConsumerWrapped', prop)
      return (
      <div>
        In ConsumerWrapped : {prop.validationMessage}
      </div>
    )}}
    </ValidationContextConsumer>
}

class ContextPropConsumer extends Component {
  render () {
    const validationContext = this.context;
    return (
      <div>
        In ContextPropConsumer : {validationContext.validationMessage}
      </div>
    )
  }
}
ContextPropConsumer.contextType = ValidationContext;

const ParentComponent = () => {
   return (
    <>
      <ConsumerWrapped />
      <ConsumerContextHook />
      <ContextPropConsumer />
    </>
   );
}
