// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export enum ActivityType {
  education = 'education',
  recreational = 'recreational',
  social = 'social',
  diy = 'diy',
  charity = 'charity',
  cooking = 'cooking',
  relaxation = 'relaxation',
  music = 'music',
  busywork = 'busywork',
}

export interface IActivity {
  name: string;
  type: ActivityType;
  accessibility: number;
  participants: number;
  price: number;
  addDate: Date;
}

export interface ServerResponse {
  activity: string;
  type: ActivityType;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

async function fetchActivity(type:  'any'): Promise<IActivity> {
  //let url = 'https://www.boredapi.com/api/activity?';
  let url = 'https://www.boredapisd.com/api/activity?';
  const params = new URLSearchParams({
    type: type === 'any' ? '' : type,
  }).toString();
  url += params;

  throw new Error("This is my error that won't allow to run this function anymore!");

  const response = await fetch(url);
  const json = await response.json();
  return json as IActivity;
}

async function asyncFunction() {
  console.log('This is the async function!');
  const activity = await fetchActivity('any');
  try {
    const activity = await fetchActivity('any');
    console.log('Activity = ', activity);
  } catch(error) {
    console.log('Error = ', error);
  }
}

asyncFunction();