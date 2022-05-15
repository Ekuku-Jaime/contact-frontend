import { useContext, useEffect, useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContactForm from "./components/ContactForm";
import Home from "./pages/Home";
import { data } from "./data";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
    props: {
      MuiIconButton: {
        disableRipple: true,
      },
    },
  },
});

// function Application() {
//   const [userName, setUserName] = useState('John Smith');
//   const value = useMemo(
//     () => ({ userName, setUserName }),
//     [userName]
//   );
//   return (
//     <UserContext.Provider value={value}>
//       <UserNameInput />
//       <UserInfo />
//     </UserContext.Provider>
//   );

// }

// function UserNameInput() {
//   const { userName, setUserName } = useContext(UserContext);
//   const changeHandler = event => setUserName(event.target.value);
//   return (
//     <input
//       type="text"
//       value={userName}
//       onChange={changeHandler}
//     />
//   );
// }
// function UserInfo() {
//   const { userName } = useContext(UserContext);
//   return <span>{userName}</span>;
// }
function App() {
  const [context, setContext] = useState({ name: "jj", number: 7 });

  return (
    <>
      {/* it comes with recomend styles to our main page */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
