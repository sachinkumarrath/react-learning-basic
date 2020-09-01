import React from 'react';

export const ValidationContext = React.createContext({
  isFormValid: function () {
    console.log('default validity check utility')
  },
  validationMessage: 'default validation message'
});

export const ValidationContextProvider = ValidationContext.Provider;
export const ValidationContextConsumer = ValidationContext.Consumer;