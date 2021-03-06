import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const sidebarPath = `/assets/sidebar`;
  const dayDir = `/assets/days`;
  const iconDir = `/assets/icons`;
  const avatarDir = `/assets/avatar`;
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31
  ];
  const avatarsDir = `/assets/avatar`;
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarsDir}/avatars.svg`));
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/day.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/week.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/month.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/project.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/projects.svg`));
  ir.addSvgIcon('collection', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/collection.svg`));
  days.forEach(day => {
    ir.addSvgIcon(`day${day}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`));
  });
  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
  ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
  ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
  ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
}