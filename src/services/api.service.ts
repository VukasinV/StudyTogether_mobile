import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  // Development link
//   URL_API = 'http://localhost:59105/api';

  // Production link
  URL_API = 'https://studytogetherbackend.azurewebsites.net/api';
  
  // Correct way is to read URL depending on environment
  // URL_API = environment.URL_API;

  constructor (private http: HttpClient) { }

  // get list of all users
  getAllUsers () {
    return this.http.get(`${this.URL_API}/User`, 
    { headers: {
      'conformationNeeded': 'false'}
    });
  }

  // Create new user
  createUser(newUser) {
    return this.http.post(`${this.URL_API}/User`, newUser);
  }

  // Check credentials, get token and open application
  login(username: string, password: string) {
  return this.http.post(`${this.URL_API}/Account`, {},
    { headers: {
      'username': username,
      'password': password
    }});
  }

  // Delete later
  test() {
    return this.http.get(`${this.URL_API}/Test`);
  }

  // Get all meetups
  getMeetups() {
    return this.http.get(`${this.URL_API}/Meeting`);
  }

  // Create new meetup
  createMeetup (newMeeting) {
    return this.http.post(`${this.URL_API}/Meeting`, newMeeting);
  }

  // Check if user is on selected meeting (when showing details)
  getParticipant (meetingId: number) {
    return this.http.get(`${this.URL_API}/Participant/${meetingId}`);
  }

  // Add participant to a meeting NOTE: header values must be of type string!
  postParticipant (meetupId: string) {
    return this.http.post(`${this.URL_API}/Participant`, { "MeetingId": meetupId });
  }

  // Remove participant from meeting
  deleteParticipant (meetupId: string) {
    return this.http.delete(`${this.URL_API}/Participant/${meetupId}`);
  }

  // Get list of all profiles (for search purpuses)
  getAllProfiles () {
    return this.http.get(`${this.URL_API}/Profile`);
  }

  getProfilesByName (fullname: string): Observable<string[]> {
    return this.http.get(`${this.URL_API}/Profile?fullname=${fullname}`).map((data: any) => data as string []);
  }

  // Get certain profile
  getProfile (profileId: number) {
    return this.http.get(`${this.URL_API}/Profile/${profileId}`);
    // .map((data: any) => data as IProfile);
  }
}
