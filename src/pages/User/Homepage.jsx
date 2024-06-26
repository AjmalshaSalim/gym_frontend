import Services from "../../components/User/Services.jsx"
import Hero from "../../components/User/Hero.jsx"
import Navbar from "../../components/User/Navbar.jsx"
import EquipmentsHome from "../../components/User/EquipmentsHome.jsx"
import SlotHompage from "../../components/User/SlotsHome.jsx"
import Footer from "../../components/User/Footer.jsx"
import GymVideo from "../../components/User/GymVideo.jsx"
import TrainersHome from "../../components/User/TrainersHome.jsx"
import PricingPlans from "../../components/User/PricingPlans.jsx"


function Homepage() {
    return (
        <div className="bg-black overflow-hidden">
            <Navbar />
            <Hero />
            <div className=" pt-10 pb-20">
                <Services />
            </div>
            <EquipmentsHome />
            <SlotHompage />
            <TrainersHome />
            <PricingPlans />
            <GymVideo />
        <Footer />
        </div>
    )
}

export default Homepage
