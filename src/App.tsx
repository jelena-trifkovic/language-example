import { Box } from '@mui/material';
import React from 'react';
import LanguageSelection from "./components/LanguageSelection";
import LanguageProvider from "./components/LanguageProvider";
import {FormattedMessage} from "react-intl";

function App() {
  return (
      <LanguageProvider>
          <Box m={2}>
              <LanguageSelection />
          </Box>
          <FormattedMessage
              id="hello"
              defaultMessage="Hello"
          />
      </LanguageProvider>
  );
}

export default App;
