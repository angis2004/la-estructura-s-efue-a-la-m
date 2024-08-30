import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';


@Injectable({
  providedIn: 'root'
})
export class ImpresionService {

  constructor() { }
  imprimir(encabezado: string[], cuerpo: Array<any>, titulo: string, guardar?: boolean) {
    // Landscape export, 2×4 inches
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: 'letter'
    });
    // forma del tamaño internal ya viene x defecto con su Al y an
    doc.text(titulo,doc.internal.pageSize.width /2 ,25 ,{align:'center'})

//El cuerpo
autoTable(doc, {
  head:[[encabezado]],
  body:[cuerpo],
  })
    if (guardar) {
      const hoy = new Date();
      doc.save(hoy.getDate() + hoy.getMonth() + hoy.getFullYear() + hoy.getTime()+'.pdf');
    }else{

    }
  }
}

