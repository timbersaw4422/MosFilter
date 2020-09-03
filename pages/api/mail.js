const nodemailer = require('nodemailer');


export default async function handler(req, res) {

  const address = 'timbersaw442211@gmail.com';

  let transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mos.filter.shop@gmail.com',
      pass: 'puppeyMiracleNs'
    }
  });

  const body = req.body.body;
  let result;
  /////////////////////  Дальше идут варианты модалок

  if (body.modal === 1) {
    result = await transporter.sendMail({
      from: 'Mos-filter <mos.filter.shop@gmail.com>',
      to: address,
      subject: 'Заказ звонка',
      text: `${body.name} - заказ звонка.
      Номер телефона: ${body.phone}`
    });
  }

  if (body.modal === 2) {
    result = await transporter.sendMail({
      from: 'Mos-filter <mos.filter.shop@gmail.com>',
      to: address,
      subject: 'Участие в акции',
      text: `${body.name} - Участие в акции.
      ${body.stock}.
      Номер телефона: ${body.phone}`
    });
  }

  if (body.modal === 3) {
    result = await transporter.sendMail({
      from: 'Mos-filter <mos.filter.shop@gmail.com>',
      to: address,
      subject: 'Услуга замены картриджей',
      text: `${body.name} - Замена картриджей.
      Марка фильтра: ${body.data[0]}.
      Модель фильтра: ${body.data[1]}.
      Услуга замены: ${body.data[2]}.
      Местоположение: ${body.data[3]}.
      Номер телефона: ${body.phone}`
    });
  }

  /////////////////

  if (result.rejected.length === 0) res.status(200).json({"message":"Сообщение отправлено", status:1});
  else res.status(400).json({"message":"Что- то пошло не так, попробуйте позже.",status:0});

}
