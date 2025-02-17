import image_1 from '../assets/imgs/Releases/Image1.png'
import image_2 from '../assets/imgs/Releases/Image2.png'
import image_3 from '../assets/imgs/Releases/Image3.png'
import image_4 from '../assets/imgs/Releases/Image4.png'

const StoredPressCardData = localStorage.getItem("PressCardData");

let PressCardData = StoredPressCardData ? JSON.parse(StoredPressCardData) : [
  {
    image: image_1,
    title: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    location: "Location: India",
    date: "Date: 06/11/2024",
    desc: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."
  },
  {
    image: image_2,
    title: "YourBank Expands Branch Network with Opening of New Location in Chennai",
    location: "Location: India",
    date: "Date: 12/11/2024",
    desc: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community."
  },
  {
    image: image_3,
    title: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    location: "Location: India",
    date: "Date: 24/12/2024",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
  },
  {
    image: image_4,
    title: "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
    location: "Location: India",
    date: "Date: 28/12/2024",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
  },
]

if (!StoredPressCardData) {
  localStorage.setItem("PressCardData", JSON.stringify(PressCardData));
}

export const exportedPressCardData = PressCardData;