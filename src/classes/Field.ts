import FieldType from "./FieldType";

class Field {
  public required: boolean;
  public selector: string;
  public value: any;

  constructor(required: boolean, selector: string, type: string) {
    this.required = required;
    this.selector = selector;
    this.value = FieldType(type);
  }
}

export default Field;
