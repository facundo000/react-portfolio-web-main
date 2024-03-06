
// "use client";
import { Button,Timeline } from "keep-react";
import { ArrowRight } from "phosphor-react";

import { useTranslation } from 'react-i18next';


const TimelineComponent = () => {
  const [t] = useTranslation("global");

  return (
    <Timeline className="content-tl">
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="tlTime">{t("tlTime2")} 2023</Timeline.Time>
          <Timeline.Title className="tlTitle">Backend Developer</Timeline.Title>
          <Timeline.Body className="tlBody">
            {t("tlBody2")}
          </Timeline.Body>
          <a type="primary" size="sm" className="btn discover" href="https://www.youtube.com/watch?v=BBOxw6b5Wrk&ab_channel=Vanesa" target="_blank">
            watch Video Demonstration
            <ArrowRight className="ml-2 h-3 w-3"/>
          </a>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="tlTime">{t("tlTime2")} 2023</Timeline.Time>
          <Timeline.Title className="tlTitle">Frontend Developer</Timeline.Title>
          <Timeline.Body className="tlBody">
            {t("tlBody")}
          </Timeline.Body>
          <a type="primary" size="sm" className="btn discover" href="https://drive.google.com/file/d/16EUxwMcVYIQ0KgbllHkcbDqA7VHfCwf5/view" target="_blank">
            watch Video Demonstration
            <ArrowRight className="ml-2 h-3 w-3"/>
          </a>
        </Timeline.Content>
      </Timeline.Item>
      {/* <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="tlTime">June 2023</Timeline.Time>
          <Timeline.Title className="tlTitle">New Feature Rollout</Timeline.Title>
          <Timeline.Body className="tlBody">
            Rolling out a set of new features, including real-time chat support,
            enhanced search functionality, and personalized content
            recommendations.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item> */}
    </Timeline>
  );
};

export default TimelineComponent;