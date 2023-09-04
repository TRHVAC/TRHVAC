import { sendMail } from "@libs/server/mailService";

const handler = async (req, res) => {
  try {
    const { method, body: form } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        console.log(req.body);
        await sendMail(
          `New booking Request from ${form.name}`,
          "sddublow@gmail.com",
          `
        name: ${form.name}\n
        email:${form.email}\n
        phone number: ${form.phone}\n
        address:${form.address}, ${form.city} (${form.postal})\n
        preffered time and date: ${form.date}, ${form.time}\n
        appliance type: ${form.type}\n
        note: ${form.note}\n
        `
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
  console.log("email sent");
};

export default handler;
