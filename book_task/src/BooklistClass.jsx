import React, { Component } from 'react';


class BooklistClass extends Component
 {
    render() 
    {
        return (
            <div className='classbook'>
                <div className='bookclass'>
                <img src='https://m.media-amazon.com/images/I/71Hqj4xb0XL._SY425_.jpg' alt=' ' />
                <h1>WHY BHARAT MATTERS</h1>
                </div>

                <div className='bookclass'>
                
                <img src='https://m.media-amazon.com/images/I/51DHNnec0wL._SY445_SX342_.jpg' alt='' />
                <h1>CHATRAPATI SHIVAJI </h1>
                </div>

                <div className='bookclass'>
                <img src='https://m.media-amazon.com/images/I/51TcWGvqLZL._SY445_SX342_.jpg' alt='' />
                <h1>THE HIDDEN HINDU</h1>
                </div>
 
                <div className='bookclass'>
                    
                <img src='https://m.media-amazon.com/images/I/41A2rgrXfDL._SY445_SX342_.jpg' alt='' />
                <h1>SAVARKAR</h1>
                </div>

                <div className='bookclass'>
                
                <img src='https://m.media-amazon.com/images/I/714uSjCMuxL._SY425_.jpg' alt='' />
                <h1>MAHARANA PRATAP</h1>
                </div>
            </div>
        );
    }
}

export default BooklistClass;