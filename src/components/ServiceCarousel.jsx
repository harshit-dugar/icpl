import { Carousel } from "@material-tailwind/react";
import service1 from "../assets/Images/WebsiteSolutions.png"
import service2 from "../assets/Images/Corporate.png"
import service3 from "../assets/Images/CalCenter.png"
import service4 from "../assets/Images/SMSSolutions.png"
import service5 from "../assets/Images/CorporateItSolutions.png"
import service6 from "../assets/Images/NetworkingSolutions.png"

function ServiceCarousel() {
    return (
        <div className="mx-4 mb-5">
            <Carousel autoplay autoplayDelay={4000} loop transition={{ duration: 2 }} className="rounded-xl">
                <img
                    src={service1}
                    alt="img"
                    className="h-full w-full object-cover"
                />
                <img
                    src={service2}
                    alt="image2"
                    className="h-full w-full object-cover"
                />
                <img
                    src={service3}
                    alt="image3"
                    className="h-full w-full object-cover"
                />
                <img
                    src={service4}
                    alt="image3"
                    className="h-full w-full object-cover"
                />
                <img
                    src={service5}
                    alt="image3"
                    className="h-full w-full object-cover"
                />
                <img
                    src={service6}
                    alt="image3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    );
}

export default ServiceCarousel