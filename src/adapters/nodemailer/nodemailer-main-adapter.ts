import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "312422b5afcd69",
    pass: "685ea9b05baa07"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Arthur Marconcini <arthurmarconcini@gmail.com>',
      subject,
      html: body,
    })
  }
}