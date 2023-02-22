import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import "./githubStats.css";
import Aos from "aos";
import "aos/dist/aos.css";
//import { ThemeContext } from '../context/ThemeContext';
//import { useContext } from 'react';

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
//   const { Themes, currentTheme } = useContext(ThemeContext)
  return (
    <div id="githubID">
      <h1 className="heading">
        My <span className="heading-highlight">Github</span> Stats
      </h1>
      {/* Contribution status */}
      <div data-aos="zoom-in-up">
        <GitHubCalendar id="react-activity-calendar"
          style={{ margin: "auto" }}
          blockSize={16}
          fontSize={14}
          blockMargin={4}
          blockRadius={6}
          username="Parag2510"
          // transformData={selectLastHalfYear}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      
        <div className="stats_container">
          <img id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=Parag2510&theme=tokyonight"
            alt="Github stats"
            data-aos="flip-left"
          />

          <img id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Parag2510&show_icons=true&theme=tokyonight"
            alt="Github Stats"
            data-aos="flip-right"
          />

           <img id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Parag2510&layout=compact&"
            alt="Github Stats"
            data-aos="flip-right"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;