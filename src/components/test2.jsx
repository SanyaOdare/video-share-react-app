// // Define the ThemeContext Context
// const ThemeContext = React.createContext();

// function App() {
//   const [theme, setTheme] = useState('theme-dark');

//   function toggleTheme() {
//     setTheme(prevTheme => prevTheme === 'theme-dark' ? 'theme-light' : 'theme-dark');
//   }

//   return (
//     <ThemeContext.Provider value={theme}>
//       <Content toggleTheme={toggleTheme} />
//     </ThemeContext.Provider>
//   );
// }

// function Content({ toggleTheme }) {
//   const theme = useContext(ThemeContext);

//   return (
//     <section className={theme}>
//       <span>Current theme: {theme === 'theme-dark' ? 'dark' : 'light'}</span>
//       <button onClick={toggleTheme}>Switch Theme</button>
//     </section>
//   );
// }