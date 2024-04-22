import React from 'react'
import { All } from './All'
import styled from 'styled-components'

const LadiesImageContainer = styled.div`

background-image: url('https://plus.unsplash.com/premium_photo-1683133498897-371667b71ac6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxib3V0aXF1ZSUyMHNob3BwaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww');
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
`

interface BannerProps {

}

export const Banner: React.FC<BannerProps> = () => {

    return <div>
        <div>
            <img src='https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGRyZXNzJTIwc2hvcHBpbmclMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D' width={'100%'} />
            <LadiesImageContainer>
                <h1>Free Shipping on orders over 75%</h1>
                <p>Our Ladies Collection</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur repellat vero quam similique rem veniam officia debitis aliquam, quos itaque nulla. Recusandae alias consequuntur illum dolorem perferendis laborum ut.</p>
                <div>
                    <img src='' width={'100%'} height={'50%'} />
                </div>
            </LadiesImageContainer>
            <img src='https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxtZW4lMjBib3V0aXF1ZSUyMCUyMHNob3BwaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww' width={'100%'} height={'50%'} />
        </div>

    </div>
}