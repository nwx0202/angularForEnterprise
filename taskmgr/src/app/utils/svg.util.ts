import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const sidebarPath = `/assets/sidebar`;
  const dayDir = `/assets/days`;
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31
  ];
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/day.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/week.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/month.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/project.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/projects.svg`));
  ir.addSvgIcon('collection', ds.bypassSecurityTrustResourceUrl(`${sidebarPath}/collection.svg`));
  days.forEach(day => {
    ir.addSvgIcon(`day${day}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`));
  });
}