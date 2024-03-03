import nodemailer from "nodemailer";

const mailverify = async (email, link) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.gMail,
        pass: process.env.gPassword,
      },
    });
    // email gönder
    let info = await transporter.sendMail({
      from: process.env.gMail,
      to: email,
      subject: "Reklam Senin Kayıt Formu",
      html: `<h1>Reklam Senin Kayıt Formu</h1>
            <p>Üyeliğinizin <b>AKTİF</b> olabilmesi için lütfen aşağıdai linke tıklayınız.</p>
            <a href="${link}">tıklayınız.</a>`,
    });
    console.log("Mesaj başarıyla iletildi...");
  } catch (err) {
    console.log(err, "mail gönderilemedi");
  }
};

export default mailverify;
