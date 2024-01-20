import React from "react";
import "./Page.css";
import Allahabad from "./University/Allahabad";
import Anna from "./University/Anna";
import Apj from "./University/Apj";
import Invertis from "./University/Invertis";
import Lucknow from "./University/Lucknow";
import Assam from "./States/Assam";

const Page = ({ selectedState }) => {
  return (
    <>
      {selectedState ? (
        <div>
          <h3>University Information</h3>
          <p>{`Selected State: ${selectedState.name}`}</p>
          {selectedState.name === 'Allahabad' && <Allahabad />}
          {selectedState.name === 'Anna' && <Anna />}
          {selectedState.name === 'Apj' && <Apj />}
          {selectedState.name === 'Invertis' && <Invertis />}
          {selectedState.name === 'Lucknow' && <Lucknow />}
          {selectedState.name === 'Assam' && <Assam />}
          {/* add more states here */}
        </div>
      ) : (
        <div>
          <h2 style={{ color: "red" }}>Indian Universities</h2>
          <h3>
            "Indian Education Portal"
          </h3>
          <h2>EduConnect India: Empowering Minds, Transforming Futures</h2>
          <div>
            {/* Allahabad */}
            <div className="card text-bg-dark">
              <img
                src="https://images.shiksha.com/mediadata/images/articles/1645242997phpnSTIJ0.jpeg"
                className="card-img "
                alt="..."
                style={{ height: 400 }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">University of Allahabad</h5>
              </div>
            </div>
            {/* Anna */}
            <div className="card text-bg-dark">
              <img
                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/8/18/w900X450/UNFILLED_SEATS_WORRY.jpg?w=400&dpr=2.6"
                className="card-img "
                alt="..."
                style={{ height: 400 }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Anna University</h5>
              </div>
            </div>
            {/* Apj */}
            <div className="card text-bg-dark">
              <img
                src="https://storage.googleapis.com/indisi-images-dev/79f18d2362bea53113f29e1bed9688f8314c267d13bf66f55f62865be32b8f03"
                className="card-img "
                alt="..."
                style={{ height: 400 }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">A.P.J Abdul Kalam University</h5>
              </div>
            </div>
            {/* Invertis */}
            <div className="card text-bg-dark">
              <img
                src="https://images.shiksha.com/mediadata/images/1519193232php0GLAY7.jpeg"
                className="card-img "
                alt="..."
                style={{ height: 400 }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Invertis University</h5>
              </div>
            </div>
            {/* Lucknow */}
            <div className="card text-bg-dark">
              <img
                src="https://www.lkouniv.ac.in/site/writereaddata/HomePage/Header/H_202009202141465564.jpg"
                className="card-img "
                alt="..."
                style={{ height: 400 }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">University of Lucknow</h5>
              </div>
            </div>
            <div class="media-section">
              <label>Media Section</label>
              <div class="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/iSoIfrZ99BQ?si=VV6DWEL6RC5sO4Qi"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>

                <iframe width="500" height="315" src="https://www.youtube.com/embed/2qlXw55EvWk?si=mPAV8n1TTxmRsiJm"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/X9Zx6zI9lz8?si=AwXhTHalwaaeQkWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/BUPH1T5Ap8g?si=tJx7Kc4pba4EfBw7" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/tUc1_sAjxVE?si=mixYq_1UfdUpwWum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Page;