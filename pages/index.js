import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import http from 'http';
import dynamic from 'next/dynamic';

export default function Home() {
  const [result, setResult] = useState({  ip: '106.219.111.111', location: {region: 'Bareilly', city: 'India', postalCode: '243122', timezone: '+05:30', lat: 28.378390, lng: 79.402820  }, isp: 'Reliance Jio' });
  const [load, setLoad] = useState(1);
  const [dropdown, setdropdown] = useState(false);
  const MapWithNoSSR = dynamic(() => import("../component/map"), {
    ssr: false
  });

  useEffect(() => {
    http.get({ 'host': 'api.ipify.org','path': '/' }, function (resp) {
      resp.on('data', function (ip) {
        let api_key = process.env.IPIFY_API_key;
        let api_url = 'https://geo.ipify.org/api/v1?';

        let url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

        http.get(url, function (response) {
          let str = '';
          response.on('data', function (chunk) { str += chunk; });
          response.on('end', function () { setResult(JSON.parse(str)); setLoad(0); });
        }).end();
      });
    });
  }, [])

  function SearchIP(e) {
    e.preventDefault();
    setLoad(2);
    let ip = e.currentTarget.search.value;
    let api_key = process.env.IPIFY_API_key;
    let api_url = 'https://geo.ipify.org/api/v1?';

    let url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

    http.get(url, function (response) {
      let str = '';
      response.on('data', function (chunk) { str += chunk; });
      response.on('end', function () { setResult(JSON.parse(str)); setLoad(0); });
    }).end();

  }
  return (
    <>
      <main>
        <div className="upper-container"></div>
        <div className="middle-container">
          <div id="map">
            <MapWithNoSSR result={result} />
            <div className="attribute">
              <span>Built with ❤️ by <a href="https://github.com/tsaxena4k" target="_blank">Tushar Saxena</a>.</span>
            </div>
          </div>
        </div>
        <div className="lower-container w-100">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12 mb-3">
                <h2 className="font-weight-bolder text-white">IP Address Tracker</h2>
              </div>
              <div className="col-sm-12 mb-4">
                <form onSubmit={SearchIP}>
                  <div className="form-group">
                    <label htmlFor="search"></label>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search for any IP address or domain" required />
                    <button type="submit" className="d-inline">
                      {load === 2 ? <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                      </div> : <><IoIosArrowForward /></>}
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-sm-12" style={{ position: 'relative' }}>
                <div className="card shadow collapse show" id="collapseExample">
                  <div className="card-body row">
                    {load == 1 ?
                      <div style={{width:'100%',display:'flex',justifyContent:'center',zIndex:'9999'}}>
                        <div className="spinner-border text-dark text-center" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                      :
                      <><div className="card-element col-md-3">
                        <h6>IP ADDRESS</h6>
                        <h3 className="content1">{result.ip}</h3>
                      </div>
                        <div className="card-element col-md-3">
                          <h6>LOCATION</h6>
                          <h3 className="content1">{`${result.location.region}, ${result.location.city} ${result.location.postalCode}`}</h3>
                        </div>
                        <div className="card-element col-md-3">
                          <h6>TIME ZONE</h6>
                          <h3 className="content1">{`UTC${result.location.timezone}`}</h3>
                        </div>
                        <div className="card-element col-md-3">
                          <h6>ISP</h6>
                          <h3 className="content1">{result.isp}</h3>
                        </div></>}
                        <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Netflix-Accordion</title>
	<link rel="stylesheet" type="text/css" href="stylesheet1.css">
</head>
<body>
	<div class="introduction">
		<p><h2>Hello guys, this is your guy Kinsley.</h2></p>
	</div>
<div class="wrapper-container">
	<div class="wrapper">
		<input type="checkbox" id="title1">
		<label for="title1">What is Netflix</label>
		<div class="content">
			<p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
		</div>
		<input type="checkbox" id="title2">
		<label for="title2">How much does Netflix cost?</label>
		<div class="content">
			<p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Ksh 700 to Ksh 1,450 a month. No extra costs, no contracts.</p>
		</div>
		<input type="checkbox" id="title3">
		<label for="title3">Where can I watch?</label>
		<div class="content">
			<p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
		</div>
		<input type="checkbox" id="title4">
		<label for="title4">How do I cancel?</label>
		<div class="content">
			<p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
		</div>
		<input type="checkbox" id="title5">
		<label for="title5">What can I watch on Netflix?</label>
		<div class="content">
			<p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
		</div>
		<input type="checkbox" id="title6">
		<label for="title6">Is Netflix good for kids?</label>
		<div class="content">
			<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
		</div>
	</div>
</div>
</body>
</html>
                  </div>
                  <div className="card shadow collapse show" id="collapseExample">
                  <div className="card-body row">
                    {load == 1 ?
                      <div style={{width:'100%',display:'flex',justifyContent:'center',zIndex:'9999'}}>
                        <div className="spinner-border text-dark text-center" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                      :
                      <><div className="card-element col-md-3">
                        <h6>IP ADDRESS</h6>
                        <h3 className="content1">{result.ip}</h3>
                      </div>
                        <div className="card-element col-md-3">
                          <h6>LOCATION</h6>
                          <h3 className="content1">{`${result.location.region}, ${result.location.city} ${result.location.postalCode}`}</h3>
                        </div>
                        <div className="card-element col-md-3">
                          <h6>TIME ZONE</h6>
                          <h3 className="content1">{`UTC${result.location.timezone}`}</h3>
                        </div>
                        <div className="card-element col-md-3">
                          <h6>ISP</h6>
                          <h3 className="content1">{result.isp}</h3>
                        </div></>}
                  </div>
                </div>
                <div className="card minimizer">
                  <div className="ml-2 card-body text-center">
                    {dropdown ?<h6>Show Details</h6> : null}
                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="true" aria-controls="collapseExample" onClick={() => setdropdown(dropdown ? false : true)}>{!dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</a>
                  </div>
                </div>
              </div>
              <div className="attribute" id="down">
              <span>Built with ❤️ by <a href="https://github.com/tsaxena4k" target="_blank">Tushar Saxena</a>.</span>
            </div>
            <a href="!#" >Join</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
