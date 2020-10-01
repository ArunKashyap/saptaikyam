import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Manifesto</h2>
            <p>
              Panorama Saptaikyam Manifesto
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
          <div>
            <a href= "https://shriyaak.s3.amazonaws.com/BPOA+Elections+Saptaikyam+Manifesto+.pdf" target="_blank">
              <i class="fa fa-download" aria-hidden="true"></i>
            </a>
          </div>
          <br>
          </br>
          <div className="row">
            <b>Download full Manifesto</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
