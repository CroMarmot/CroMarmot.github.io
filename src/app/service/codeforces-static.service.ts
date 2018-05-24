import {Injectable} from '@angular/core';

const urlOnline = {
  'user.rating': 'http://codeforces.com/api/user.rating?handle=',
  'contest': 'https://codeforces.com/contest',
};

const url = {
  'user.rating': 'assets/staticdata/cf/user.rating.json',
  'contest': 'https://codeforces.com/contest',
};

const COLORS = [
  {score: 1200, color: '#cccccc', name: 'Newbie'},
  {score: 1400, color: '#70eb74', name: 'Pupil'},
  {score: 1600, color: '#76ddbb', name: 'Specialist'},
  {score: 1900, color: '#aaa9fc', name: 'Expert'},
  {score: 2100, color: '#ec84fc', name: 'Candidate Master'},
  {score: 2300, color: '#fecc88', name: 'Master'},
  {score: 2400, color: '#fcbb54', name: 'International Master'},
  {score: 2600, color: '#f47476', name: 'Grandmaster'},
  {score: 3000, color: '#f24533', name: 'International Grandmaster'},
  {score: 4000, color: '#ab2e16', name: 'Legendary grandmaster'},
];

@Injectable({
  providedIn: 'root'
})
export class CodeforcesStaticService {

  constructor() {
  }

  public static getUrl(): any {
    return url;
  }

  public static getColors(): any {
    return COLORS;
  }
}
