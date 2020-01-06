import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import Activity, { IActivity } from "./components/Activity";

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

function slideRenderer(params: { index: number; key: number }) {
  return (
    <div key={params.key}>
      <Day index={params.index} />
    </div>
  );
}

const dayHours = [
  {
    activity: 1,
    customer: "Alv",
    activityName: "AlvTime",
    activityDesc: "Do Stuff",
    registeredHours: 7.5
  },
  {
    activity: 2,
    customer: "UD",
    activityName: "Visualisering",
    activityDesc: "Do Crap",
    registeredHours: 0
  },
  {
    activity: 3,
    customer: "Alv",
    activityName: "Ferie",
    activityDesc: "Do Awesame",
    registeredHours: 0
  },
  {
    activity: 4,
    customer: "Alv",
    activityName: "Bordtennis",
    activityDesc: "Bli best",
    registeredHours: 1
  },
  {
    activity: 5,
    customer: "Alv",
    activityName: "AlvTime",
    activityDesc: "Do Stuff",
    registeredHours: 7.5
  },
  {
    activity: 6,
    customer: "UD",
    activityName: "Visualisering",
    activityDesc: "Do Crap",
    registeredHours: 0
  },
  {
    activity: 7,
    customer: "Alv",
    activityName: "Ferie",
    activityDesc: "Do Awesame",
    registeredHours: 0
  },
  {
    activity: 8,
    customer: "Alv",
    activityName: "Bordtennis",
    activityDesc: "Bli best",
    registeredHours: 1
  },
  {
    activity: 9,
    customer: "Alv",
    activityName: "AlvTime",
    activityDesc: "Do Stuff",
    registeredHours: 7.5
  },
  {
    activity: 10,
    customer: "UD",
    activityName: "Visualisering",
    activityDesc: "Do Crap",
    registeredHours: 0
  },
  {
    activity: 11,
    customer: "Alv",
    activityName: "Ferie",
    activityDesc: "Do Awesame",
    registeredHours: 0
  },
  {
    activity: 12,
    customer: "Alv",
    activityName: "Bordtennis",
    activityDesc: "Bli best",
    registeredHours: 1
  },
  {
    activity: 13,
    customer: "Alv",
    activityName: "Lommetennis",
    activityDesc: "Bli best",
    registeredHours: 1
  }
];

const Day = (params: { index: number }) => {
  return (
    <>
      {dayHours.map((activity: IActivity) => (
        <Activity key={activity.activity} {...activity} />
      ))}
    </>
  );
};

const App = () => {
  const [topIndex, setTopIndex] = useState(0);

  return (
    <>
      <VirtualizeSwipeableViews
        index={topIndex}
        onChangeIndex={setTopIndex}
        slideRenderer={slideRenderer}
      />
    </>
  );
};

export default App;
