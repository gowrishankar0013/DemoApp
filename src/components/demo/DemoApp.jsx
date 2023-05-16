import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import MyProfile from './MyProfile'
import './DemoApp.css'
import Home from './Home'

export default function DemoApp(){
    return(
        <div className="DemoApp">
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/profile' element={<MyProfile />}></Route>
                </Routes>
            <FooterComponent />
            </BrowserRouter>
        </div>
    )
}