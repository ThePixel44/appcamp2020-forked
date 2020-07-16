import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Lista } from "../../models/lista";

@Component({
  selector: "page-insert",
  templateUrl: "insert.html",
  styleUrls: ["insert.css"]
})
export class InsertPage {
  constructor(public navCtrl: NavController) {}

  lista: Lista = new Lista();

  // contenitore di input ( serve a prelevare e controllare valori)
  form = new FormGroup({
    title: new FormControl("", [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required
    ]),
    description: new FormControl("", [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required
    ]),
    labels: new FormControl("", Validators.required),
    startDate: new FormControl("", Validators.required),
    endDate: new FormControl("", Validators.required)
  });

  saveLista() {
    const listValue: Lista = this.getListValue();
    this.lista = listValue;
  }

  getListValue(): Lista {
    const titleValue = this.form.get("title").value;
    const descriptionValue = this.form.get("description").value;
    const labelsValue = this.form.get("labels").value;
    const startDateValue = this.form.get("startDate").value;
    const endDateValue = this.form.get("endDate").value;
    const lista: Lista = {
      title: titleValue,
      description: descriptionValue,
      labels: labelsValue,
      startDate: startDateValue,
      endDate: endDateValue
    };
    return lista;
  }
}
