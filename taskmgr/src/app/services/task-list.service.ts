import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskList } from '../domain';
import { Observable } from 'rxjs';

@Injectable()
export class TaksListService {
  private readonly domain = 'taskList';
  private headers = new HttpHeaders({
    'Content-Type': 'application/josn'
  });

  constructor(
    private http: HttpClient,
    @Inject('BASE_CONFIG') private config
  ) {}

  // POST
  add(taskList: TaskList) {
    taskList.id = null;
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
    .post(
      uri,
      JSON.stringify(taskList),
      { headers: this.headers }
    )
    .map(res => res);
  }

  // PUT
  update(taskList: TaskList) {
    const uri = `${this.config.uri}/${this.domain}/${taskList.id}`;
    const toUpdate = {
      name: taskList.name
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
  del(taskList: TaskList) {

  }

  // GET
  get(projectId: string) {
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
    .get(uri, {params: {'projectId': projectId}})
    .map(res => res as TaskList[])
  }

  swapOrder(src: TaskList, target: TaskList) {
    const dragUri = `${this.config.uri}/${this.domain}/${src.id}`;
    const dropUri = `${this.config.uri}/${this.domain}/${target.id}`;
    const drag$ = this.http
    .patch(dragUri, JSON.stringify({order: target.order}), {headers: this.headers})
    .map(res => res);
    const drop$ = this.http
    .patch(dropUri, JSON.stringify({order: src.order}), {headers: this.headers})
    .map(res => res);
  }
}