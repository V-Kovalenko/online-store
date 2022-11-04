import classes from './App.module.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {MainPage} from "./components/pages/MainPage/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Nav} from "./components/Nav/Nav";
import {Basket} from "./components/pages/Basket/Basket";
import {Logs} from "./components/pages/Logs/Logs";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={classes.main}>
                    <Header/>
                    <Nav/>
                    <div className={classes.content}>
                        <Routes>
                            <Route path='mainPAge' element={<MainPage/>}/>
                            <Route path='basket' element={<Basket/>}/>
                            <Route path='logs' element={<Logs/>}/>
                        </Routes>
                    </div>
                </div>

            </BrowserRouter>

        </Provider>

    );
}

export default App;
