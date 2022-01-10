import React, { Component } from 'react'

export default class Teams extends Component {
    render() {
        return (
            <div className="spon-cont">
                <div class="container container-fluid pb-2 mt-5 " >
                    <h3 className="display-4 textbold text-white my-head text-center">OUR TEAM</h3>
                    <br />
                    {/* First Row */}
                    <div className="row row-cols-1 row-cols-md-3 top-row">
                        <div className="col md-6 whole-card">
                            {/* <!-- Card --> */}
                            <div className="card card-zoom">

                                {/* <!--Card image--> */}
                                <div className="view overlay">
                                    <img className="card-img-top imgsize" src="Sidhant.jpg"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                {/* <!--Card content--> */}
                                <div className="card-body">
                                    <h4 className="text-center textbold">Captain</h4>
                                    <h4 className="text-center">Sidhant Jaiswal</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:jsidhant27@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/sidhant-jaiswal-2379ba121"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col md-6  whole-card">
                            <div className="card card-zoom">

                                <div className="view overlay">
                                    <img className="card-img-top imgsize" src="Vidit.png"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">

                                    <h4 className="card-title text-center textbold">Vice Captain</h4>
                                    <h4 className="text-center">Vidit Naik</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:viditnaik@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/vidit-naik-9b5bb81a2"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col md-6 whole-card">
                            <div className="card card-zoom">

                                <div className="view overlay">
                                    <img className="card-img-top imgsize" src="Teja.jpg"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">

                                    <h4 className="card-title text-center textbold">Manager</h4>
                                    <h4 className="text-center">Vegu Himasurya Teja</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:vegu.teja@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/teja-vegu-7611451b5"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}

                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col md-6 whole-card">
                            {/* <!-- Card --> */}
                            <div className="card card-zoom">

                                {/* <!--Card image--> */}
                                <div className="view overlay">
                                    <img className="card-img-top" src="Amal Manoj.jpeg"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                {/* <!--Card content--> */}
                                <div className="card-body">

                                    <h4 className="card-title text-center textbold">Aerodynamics Head</h4>
                                    <h4 className="text-center">Amal Manoj</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:amalmanoj200@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/amal-manoj-877680193"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col md-6 whole-card">
                            <div className="card card-zoom">

                                <div className="view overlay">
                                    <img className="card-img-top" src="Kailash.jpg"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body text-center">

                                    <h4 className="card-title textbold">Avionics Head</h4>
                                    <h4 className="text-center">Kailash Natarajan</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:kailash.natarajan.kn@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/kailash-natarajan-4775b21b2/"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col md-6 whole-card">
                            <div className="card card-zoom " >

                                <div className="view overlay">
                                    <img className="card-img-top " src="Simrat.jpg"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                {/* <!--Card content--> */}
                                <div className="card-body text-center">

                                    <h4 className="card-title textbold">Programming Lead</h4>
                                    <h4 className="text-center">Simrat Singh</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:simratsingh261@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/simrat-singh-35978018b"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>

                    {/* Third Row */}

                    <div className="row container">
                        <div className="col md-6 whole-card">
                            <div className="card card-zoom two-card" id="card-one">

                                <div className="view overlay">
                                    <img className="card-img-top " src="Gaurav.png"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body text-center">

                                    <h4 className="card-title textbold">Electronics Lead & Club President</h4>
                                    <h4 className="text-center">Gaurav Pampana</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:pampanagaurav@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/venkata-gaurav-pampana-7317481b3/"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col md-6 whole-card">
                            <div className="card card-zoom two-card " id="card-two">

                                <div className="view overlay">
                                    <img className="card-img-top" src="Saumya.jpg"
                                        alt="Card image cap" />
                                    <a href="/">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body text-center" id="card-two-height">

                                    <h4 className="card-title textbold">Club Vice President</h4><br/>
                                    <h4 className="text-center">Saumya Bhardwaj</h4>
                                    <div className="text-center iconssize" >
                                        <a className="li-ic" href="mailto:bhardwajsaumya17@gmail.com"
                                            target="_blank">
                                            <i class="fas fa-envelope text-dark mr-4"></i>
                                        </a>
                                        <a className="li-ic" href="https://www.linkedin.com/in/saumyabhardwaj17"
                                            target="_blank">
                                            <i class="fab fa-linkedin text-dark "></i>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}