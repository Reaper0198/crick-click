import React from "react";
import LiveScoreCard from "./LiveScoreCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LiveScore = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Adjust this value for mobile screens
        settings: {
          slidesToShow: 2, // Show 2 slides on mobile
        },
      },
      {
        breakpoint: 1024, // Adjust this value for tablets
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
        },
      },
      {
        breakpoint: 480, // Adjust this value for smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on very small screens
        },
      },
    ],
  };

  const scoreDetails = [
    {
      op1: "IND",
      op2: "AUS",
      score1: "250/5",
      score2: "200/5",
      status: "Completed",
      format: "Test",
      venue: "MCG",
    },
    {
      op1: "ENG",
      op2: "NZ",
      score1: "150/2",
      score2: "100/3",
      status: "Live",
      format: "T20",
      venue: "Lord's",
    },
    {
      op1: "SA",
      op2: "WI",
      score1: "300/6",
      score2: "250/4",
      status: "Live",
      format: "ODI",
      venue: "Cape Town",
    },
    {
      op1: "PAK",
      op2: "SL",
      score1: "200/4",
      score2: "150/5",
      status: "Live",
      format: "T20",
      venue: "Lahore",
    },
    {
      op1: "BAN",
      op2: "AFG",
      score1: "250/3",
      score2: "200/7",
      status: "Live",
      format: "Test",
      venue: "Dhaka",
    },
    {
      op1: "IRE",
      op2: "ZIM",
      score1: "150/3",
      score2: "100/5",
      status: "Live",
      format: "ODI",
      venue: "Dublin",
    },
    // Add more match details as needed
  ];

  return (
    <div className="p-2 mt-10">
      <div className="md:ml-40 title">Recent Matches :</div>
      <div className="md:mx-10 mx-20">
        <Slider {...settings}>
          {scoreDetails.map((match, index) => (
            <div key={index}>
              <button>
                <LiveScoreCard
                  op1={match.op1}
                  op2={match.op2}
                  score1={match.score1}
                  score2={match.score2}
                  status={match.status}
                  format={match.format}
                  venue={match.venue}
                />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LiveScore;
