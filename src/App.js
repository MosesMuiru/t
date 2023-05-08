import { BrowserRouter, Route, Routes } from 'react-router-dom';


import List from "./list";
import Home from './home';
import CreateNew from "./createNew.js";
import Details from './detail.js';
import Signpage from './Signpage';
import NewSignIn from "./NewSignIn"
import Newuser from './authentication/Newuser';
import Signup from './authentication/Signup';
import AuthDetails from './authentication/AuthDetails';
// import PageDate from "./paginationa/PageData"
import Search from './search/Search';








function App(){

    return (
        <div className='App'>

            <BrowserRouter>
                <Routes>

                    <Route path="/" element = {<Home/>}/>
                    <Route path="/list" element = {<List/>}/>
                    <Route path="/createNew" element = {<CreateNew/>}/>
                    <Route path="/details" element = {<Details/>}/>
                    <Route path='/Signpage' element = {<Signpage/>}/>
                    <Route path='newsignin' element={<NewSignIn/>}/>
                    <Route path='createaccount' element={<Newuser/>}/>
                    <Route path='login' element={<Signup/>}/>
                    <Route path='searchin' element={<Search/>}/>
                       
                    

                </Routes>
            </BrowserRouter> 

         

         </div>
    )
}
export default App;
    