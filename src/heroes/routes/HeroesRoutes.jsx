import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { Dc, Marvel, Search, Hero } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />}/>
                    <Route path="dc" element={<Dc />}/>

                    <Route path="search" element={<Search />}/>
                    <Route path="/hero/:id" element={<Hero />}/>

                    <Route path="/" element={<Navigate to='/marvel' />}/>
                </Routes>
            </div>

            
    </>
  )
}