// import { Car } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";
import Nav from "./components/nav";
import PopularCars from "./components/popularcar";
import Cars from "./components/third";

export default function Home() {
  return (
    <div>
      <Header/>
        <Nav/> 
        <Hero/>
      
      <PopularCars/>
      <Cars/>
      
       
    </div>
  );
}
