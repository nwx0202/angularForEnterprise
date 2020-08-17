import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../domain';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  private readonly domain = 'projects';
  private headers = new HttpHeaders({
    'Content-Type': 'application/josn'
  });

  constructor(
    private http: HttpClient,
    @Inject('BASE_CONFIG') private config
  ) {}

  // POST
  add(project: Project) {
    project.id = null;
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
    .post(
      uri,
      JSON.stringify(project),
      { headers: this.headers }
    )
    .map(res => res);
  }

  // PUT
  update(project: Project) {
    const uri = `${this.config.uri}/${this.domain}/${project.id}`;
    const toUpdate = {
      name: project.name,
      desc: project.desc,
      coverImg: project.coverImg
    };
    return this.http
    .patch(
      uri,
      JSON.stringify(toUpdate),
      { headers: this.headers }
    )
    .map(res => res);
  }

  // DELETE
  del(project: Project) {

  }

  // GET
  get(userId: string) {
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
    .get(uri, {params: {'member_like': userId}})
    .map(res => res as Project[])
  }
}