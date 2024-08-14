import React from 'react'
import styled from 'styled-components'


const SectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const LadiesImageContainer = styled.div`

background-image: url('https://plus.unsplash.com/premium_photo-1683133498897-371667b71ac6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxib3V0aXF1ZSUyMHNob3BwaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww');
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;

position: absolute;
  
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white; /* Ensure text stands out */
  padding: 20px;
  background: rgba(0, 0, 0, 0.768); /* Semi-transparent background for better readability */
  border-radius: 10px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: bold;
    color: #ffeb3b; /* Bright yellow for the heading */
  }

  p {
    font-size: 1.1rem;
    margin: 10px 0;
    line-height: 1.5;
    color: #e0e0e0; /* Light grey for text */
  }

  img {
    margin-top: 20px;
    border-radius: 10px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 431px) {
    padding: 10px;
    width: 80%;
    transform: translate(-50%,-10%);

    h1 {
      font-size: 1.5rem; /* Further adjust font size for very small screens */
    }

    p {
      font-size: 0.9rem; /* Further adjust font size for very small screens */
    }

    img {
      width: 100%; /* Ensure the image scales properly */
      height: auto; /* Maintain aspect ratio */
    }
  }
`
const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(70%); /* Reduce brightness */
`;
const SecondaryImage = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  margin-top: 20px;
  display: block;
  border-radius: 10px;
`;




interface BannerProps {

}

export const Banner: React.FC<BannerProps> = () => (
    <SectionContainer>
        <BackgroundImage
            src='https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGRyZXNzJTIwc2hvcHBpbmclMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D'
            alt='Background Image'
        />
        <LadiesImageContainer>
            <div>
                <h1>Free Shipping on orders over 75%</h1>
                <p>Our Ladies Collection</p>
                <p>Indulge in our latest dress collection and enjoy the luxury of free shipping on any order over 70%. Whether you’re updating your wardrobe or finding the perfect outfit, you can save on delivery costs. Shop now and take advantage of this exclusive offer. Elevate your style and let us handle the shipping!</p>
                <img
                    src='https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1680012590879-39a8ec7c7cea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL, replace with actual URL
                    alt='Placeholder'
                />
            </div>
        </LadiesImageContainer>
        <SecondaryImage
            src='https://plus.unsplash.com/premium_photo-1700056213763-3174eb00f970?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Secondary Image'
        />
    </SectionContainer>
);
