import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../domain';
import { Observable } from 'rxjs';
import { ta } from 'date-fns/locale';

@Injectable()
export class TaksService {
  private readonly domain = 'task';
  private headers = new HttpHeaders({
    'Content-Type': 'application/josn'
  });

  constructor(
    private http: HttpClient,
    @Inject('BASE_CONFIG') private config
  ) {}

  // POST
  add(task: Task) {
    task.id = null;
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
    .post(
      uri,
      JSON.stringify(task),
      { headers: this.headers }
    )
    .map(res => res);
  }

  // PUT
  update(task: Task) {
    const uri = `${this.config.uri}/${this.domain}/${task.id}`;
    const toUpdate = {
      desc: task.desc,
      priority: task.priority,
      dueDate: task.dueDate,
      reminder: task.reminder,
      ownerId: task.ownerId,
      participantIds: task.participantIds,
      remark: task.remark
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
  del(task: Task) {

  }

  // GET
  get(taskId: string) {
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
    .get(uri, {params: {'taskId': taskId}})
    .map(res => res as Task[])
  }

  swapOrder(src: Task, target: Task) {
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