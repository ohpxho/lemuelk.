import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AboutMe, Skill, Project } from './custom-types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	apiBaseUrl: string = 'http://localhost:3000/api';
	fixedAbtId = '62c53b272536d06f04da07e2';

	constructor(private http: HttpClient) { }

	public getAbout(): Promise<AboutMe> {
		const url = `${this.apiBaseUrl}/about/${this.fixedAbtId}`;
		return this.http
		 .get(url)
		 .toPromise()
		 .then((about) => about as AboutMe)
		 .catch(this.handleError);
	}

	public getSkills(): Promise<Array<Skill>> {
		const url = `${this.apiBaseUrl}/skills`;
		return this.http
		 .get(url)
		 .toPromise()
		 .then((skills) => skills as Array<Skill>)
		 .catch(this.handleError)
		
	}
	
	public getProjects(): Promise<Array<Project>> {
		const url = `${this.apiBaseUrl}/projects`;
		return this.http
		  .get(url)
		  .toPromise()
		  .then((projects) => projects as Array<Project>)
		  .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
     	console.error('Something has gone wrong', error);
    	return Promise.reject(error.name || error);
  	}
}
