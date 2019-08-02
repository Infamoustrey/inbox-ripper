import Field from "./Field";

const sleep = async (sec: number) =>
  new Promise(res => setTimeout(res, sec * 1000));

class Form {
  public link: string;
  public fields: Field[];
  public submitSelector: string;

  constructor(link: string, fields: Field[], submitSelector: string) {
    this.link = link;
    this.fields = fields;
    this.submitSelector = submitSelector;
  }

  async fillForm(page: any) {
    try {
      await page.goto(this.link);
      for (let i = 0; i < this.fields.length; i++) {
        const field = this.fields[i];
        try {
          await page.type(field.selector, field.value);
        } catch (e) {
          console.log(e);
        }
      }
      await page.click(this.submitSelector);
      await page.waitForNavigation();
      return Promise.resolve();
    } catch (e) {
      return Promise.reject("Could not fill form");
    }
  }
}

export default Form;
