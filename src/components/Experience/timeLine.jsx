
// "use client";
import { Button,Timeline } from "keep-react";
import { ArrowRight } from "phosphor-react";

import { useTranslation } from 'react-i18next';

// MEJORARLO A ESTO: https://codesandbox.io/p/sandbox/react-vertical-timeline-goty8?file=%2Fsrc%2FApp.js%3A8%2C30

const TimelineComponent = () => {
  const [t] = useTranslation("global");

  return (
    <Timeline className="content-tl">
    {/* Project 3 */}
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="tlTime">{t("tlTime3")} 2024</Timeline.Time>
          <Timeline.Title className="tlTitle">Backend Developer</Timeline.Title>
          <Timeline.Body className="tlBody">
            {t("tlBody3")}
          </Timeline.Body>
          <a type="primary" size="sm" className="btn discover" href="https://drive.google.com/file/d/1U0IstmI3qFmVzWw8lnjdPF0sjmD_aXl4/view?usp=drive_link" target="_blank">
           {t("tlBodyVideo")}
            <ArrowRight className="ml-2 h-3 w-3"/>
          </a>
          <a href="https://drive.google.com/file/d/1SdMAfx8tckX9epvmmsFpCJGLdt3OEEeN/view?usp=sharing" className='btn btn-primary' data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200" target="_blank">{t("tlBody3Description")}</a>
        </Timeline.Content>
      </Timeline.Item>
    {/* Project 2 */}
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="tlTime">{t("tlTime2")} 2023</Timeline.Time>
          <Timeline.Title className="tlTitle">Backend Developer</Timeline.Title>
          <Timeline.Body className="tlBody">
            {t("tlBody2")}
          </Timeline.Body>
          <a type="primary" size="sm" className="btn discover" href="https://www.youtube.com/watch?v=BBOxw6b5Wrk&ab_channel=Vanesa" target="_blank">
            {t("tlBodyVideo")}
            <ArrowRight className="ml-2 h-3 w-3"/>
          </a>
        </Timeline.Content>
      </Timeline.Item>
    {/* Project 1 */}
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="tlTime">{t("tlTime1")} 2023</Timeline.Time>
          <Timeline.Title className="tlTitle">Frontend Developer</Timeline.Title>
          <Timeline.Body className="tlBody">
            {t("tlBody")}
          </Timeline.Body>
          <a type="primary" size="sm" className="btn discover" href="https://drive.google.com/file/d/16EUxwMcVYIQ0KgbllHkcbDqA7VHfCwf5/view" target="_blank">
            {t("tlBodyVideo")}
            <ArrowRight className="ml-2 h-3 w-3"/>
          </a>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default TimelineComponent;