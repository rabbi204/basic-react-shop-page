import React from 'react'

const Devs = () => {

    const devs =[
        {
            name: 'Chinigura Rice',
            regPrice: '109',
            sellPrice: '99',
            img: 'images/1.jpg'
        },
        {
            name: 'Nazirshail Rice Premium',
            regPrice: '369',
            sellPrice: '339',
            img: 'images/2.jpg'
        },
        {
            name: 'Miniket Rice Premium',
            regPrice: '349',
            sellPrice: '309',
            img: 'images/3.jpg'
        },
        {
            name: 'Miniket Rice Standard',
            regPrice: '289',
            sellPrice: '265',
            img: 'images/4.jpg'
        },
        {
            name: 'Nazirshail Rice standard',
            regPrice: '319',
            sellPrice: '279',
            img: 'images/5.jpg'
        },
        {
            name: 'Pran Chinigura Rice',
            regPrice: '300',
            sellPrice: '250',
            img: 'images/6.jpg'
        },
        {
            name: 'Katarbog Rice',
            regPrice: '320',
            sellPrice: '280',
            img: 'images/7.jpg'
        },
        {
            name: 'Atop Rice',
            regPrice: '69',
            sellPrice: '45',
            img: 'images/8.jpg'
        },
        {
            name: 'Jira Miniket Rice',
            regPrice: '310',
            sellPrice: '289',
            img: 'images/9.jpg'
        },
        {
            name: 'Athash Rice',
            regPrice: '300',
            sellPrice: '309',
            img: 'images/10.jpg'
        },
        {
            name: 'Katari Atop Rice',
            regPrice: '350',
            sellPrice: '339',
            img: 'images/11.jpg'
        },
        {
            name: 'Banglamoti Rice',
            regPrice: '75',
            sellPrice: '69',
            img: 'images/12.jpg'
        },
        {
            name: 'Aarong Miniket Rice',
            regPrice: '450',
            sellPrice: '400',
            img: 'images/13.jpg'
        },
        {
            name: 'Pizam Atop Tice',
            regPrice: '330',
            sellPrice: '326',
            img: 'images/14.jpg'
        },
        {
            name: 'Fortune Rice',
            regPrice: '350',
            sellPrice: '339',
            img: 'images/15.jpg'
        },
        {
            name: 'Fresh Chinigura Rice',
            regPrice: '350',
            sellPrice: '339',
            img: 'images/16.jpg'
        },
    ];

    return (
        <div>
            <div className="team">
                <div className="row">

                    {
                        devs.map( (dev) => 
                            <div className="col-md-3">
                                <div className="card my-5 shadow">
                                    <div className="card-body">
                                        <div className="team-item">
                                            <img src={dev.img} alt="Cann't find images" width="100%" height="200px" />
                                            <h3>{dev.name}</h3>
                                            <h6>Regular Price: <del>{dev.regPrice}</del></h6>
                                            <h5>Sell Price: {dev.sellPrice}</h5>
                                            <a className="btn btn-info mt-2" href="">Add Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    


                </div>
            </div>
        </div>
    )
}

export default Devs
