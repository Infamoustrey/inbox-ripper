const puppeteer = require("puppeteer");
const fs = require("fs");

import { Command, flags } from "@oclif/command";
import Form from "./classes/Form";
import Field from "./classes/Field";

class InboxRipper extends Command {
  static description = "describe the command here";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    email: flags.string({ char: "e", description: "email to execute" }),
    phone: flags.string({ char: "p", description: "phone to blow up" }),
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(InboxRipper);
    const content = JSON.parse(fs.readFileSync("src/forms.json"));

    const email = flags.email || "alecia.keys.totallyreal@gmail.com";
    const phone = flags.phone || "111-111-1111";

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    for (let rawForm of content.forms) {
      let fields = rawForm.fields.map((f: any) => {
        let field = new Field(f.required, f.selector, f.type);
        if (f.type == "Email") {
          field.value = email;
        }
        if (f.type == "Phone") {
          field.value = phone;
        }

        return field;
      });
      let form = new Form(rawForm.link, fields, rawForm.submitSelector);

      await form.fillForm(page);
    }

    await browser.close();

    this.log("Email & Phone executed with extreme prejudice.");
  }
}

export = InboxRipper;
