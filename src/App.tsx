import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  background-color: blue;
  padding: 5px;
`;

function App(): JSX.Element {
  return (
    <div className="App">
      App working! <PrimaryButton>Primary Button</PrimaryButton>
    </div>
  );
}

export default App;
